// Cloudflare Worker-only: fetch small TEXT resources (M3U8 playlists) through Vietnam HTTP proxies using raw
// TCP sockets. Needed because the KKPhim-family CDNs geo-block every non-VN IP (Cloudflare and Render get 404)
// and tiktokcdn.top / surrit.com refuse Cloudflare IPs. NEVER use this for video segments.
import { connect } from 'cloudflare:sockets';

const VN_PROXIES = [
    { hostname: '210.211.113.37', port: 80 },
    { hostname: '210.211.113.34', port: 80 },
    { hostname: '210.211.113.35', port: 80 }
];

const MAX_BYTES = 2 * 1024 * 1024;
const encoder = new TextEncoder();

function concat(chunks, total) {
    const out = new Uint8Array(total);
    let off = 0;
    for (const c of chunks) { out.set(c, off); off += c.length; }
    return out;
}

function indexOfHeaderEnd(buf) {
    for (let i = 0; i + 3 < buf.length; i++) {
        if (buf[i] === 13 && buf[i + 1] === 10 && buf[i + 2] === 13 && buf[i + 3] === 10) return i;
    }
    return -1;
}

function dechunk(body) {
    const parts = [];
    let total = 0;
    let pos = 0;
    while (pos < body.length) {
        let lineEnd = pos;
        while (lineEnd + 1 < body.length && !(body[lineEnd] === 13 && body[lineEnd + 1] === 10)) lineEnd++;
        const size = parseInt(new TextDecoder().decode(body.subarray(pos, lineEnd)).split(';')[0].trim(), 16);
        if (!size) break;
        const start = lineEnd + 2;
        parts.push(body.subarray(start, start + size));
        total += size;
        pos = start + size + 2;
    }
    return concat(parts, total);
}

function parseResponse(raw) {
    const headerEnd = indexOfHeaderEnd(raw);
    if (headerEnd < 0) throw new Error('Malformed HTTP response');
    const head = new TextDecoder().decode(raw.subarray(0, headerEnd));
    const [statusLine, ...headerLines] = head.split('\r\n');
    const status = parseInt(statusLine.split(' ')[1], 10);
    const headers = {};
    for (const l of headerLines) {
        const i = l.indexOf(':');
        if (i > 0) headers[l.slice(0, i).trim().toLowerCase()] = l.slice(i + 1).trim();
    }
    let body = raw.subarray(headerEnd + 4);
    if ((headers['transfer-encoding'] || '').toLowerCase().includes('chunked')) body = dechunk(body);
    return { status, headers, text: new TextDecoder().decode(body) };
}

async function readAll(readable) {
    const reader = readable.getReader();
    const chunks = [];
    let total = 0;
    while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        chunks.push(value);
        total += value.length;
        if (total > MAX_BYTES) throw new Error('Response too large');
    }
    return concat(chunks, total);
}

async function fetchViaProxy(proxy, url, headers, sockets) {
    const u = new URL(url);
    const useTls = u.protocol === 'https:';
    const socket = connect(proxy, { secureTransport: useTls ? 'starttls' : 'off' });
    sockets.push(socket);
    let stream = socket;

    if (useTls) {
        // HTTP CONNECT tunnel, then upgrade the same socket to TLS with the real origin
        const w = socket.writable.getWriter();
        await w.write(encoder.encode(`CONNECT ${u.hostname}:443 HTTP/1.1\r\nHost: ${u.hostname}:443\r\n\r\n`));
        w.releaseLock();
        const r = socket.readable.getReader();
        const chunks = [];
        let total = 0;
        while (true) {
            const { value, done } = await r.read();
            if (done) throw new Error('Proxy closed during CONNECT');
            chunks.push(value);
            total += value.length;
            if (indexOfHeaderEnd(concat(chunks, total)) >= 0) break;
        }
        r.releaseLock();
        const reply = new TextDecoder().decode(concat(chunks, total));
        if (!/^HTTP\/1\.[01] 200/.test(reply)) throw new Error('CONNECT refused: ' + reply.split('\r\n')[0]);
        stream = socket.startTls({ expectedServerHostname: u.hostname });
        sockets.push(stream);
    }

    const requestTarget = useTls ? u.pathname + u.search : u.href;
    const lines = [`GET ${requestTarget} HTTP/1.1`, `Host: ${u.host}`];
    for (const [k, v] of Object.entries(headers || {})) lines.push(`${k}: ${v}`);
    lines.push('Accept-Encoding: identity', 'Connection: close', '', '');
    const writer = stream.writable.getWriter();
    await writer.write(encoder.encode(lines.join('\r\n')));
    writer.releaseLock();

    return parseResponse(await readAll(stream.readable));
}

/**
 * Race the VN proxy pool for a text resource. Resolves with the body of the first 200 response accepted by
 * `validate`, rejects when every proxy failed or `timeoutMs` elapsed.
 * Plain-HTTP origins are requested as http:// (one round trip, no TLS); pass `tls: true` for HTTPS-only hosts.
 */
export async function vnFetchText(url, { headers = {}, timeoutMs = 6000, tls = false, validate = t => t.includes('#EXTM3U') } = {}) {
    const target = tls ? url.replace(/^http:/, 'https:') : url.replace(/^https:/, 'http:');
    const sockets = [];
    let timer;
    const attempts = VN_PROXIES.map(async proxy => {
        const res = await fetchViaProxy(proxy, target, headers, sockets);
        if (res.status !== 200 || !validate(res.text)) throw new Error(`VN proxy ${proxy.hostname} -> ${res.status}`);
        return res.text;
    });
    const timeout = new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('VN proxy timeout')), timeoutMs); });
    try {
        return await Promise.race([Promise.any(attempts), timeout]);
    } finally {
        clearTimeout(timer);
        for (const s of sockets) { try { s.close(); } catch (e) {} }
    }
}
