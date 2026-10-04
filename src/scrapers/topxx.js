const axios = require('axios');

const API = 'https://topxx.vip/api/v1';
const HTTP_OPTS = { timeout: 10000, headers: { Accept: 'application/json', 'User-Agent': 'Mozilla/5.0' } };
const PAGE_HEADERS = { 'User-Agent': 'Mozilla/5.0', Referer: 'https://topxx.vip/' };
const M3U8_RE = /https?:(?:\\?\/){2}(?:[^"'\s<>\\]|\\\/)+?\.m3u8(?:[^"'\s<>\\]|\\\/)*/gi;

function header(res, name) {
    const h = res && res.headers;
    if (!h) return null;
    return (typeof h.get === 'function' ? h.get(name) : h[name]) || null;
}

async function probe(url, opts = {}) {
    try {
        return await axios.get(url, Object.assign({ timeout: 10000, validateStatus: () => true }, opts));
    } catch (err) {
        return { status: 0, error: err.message, data: '' };
    }
}

// Workers only: raw-socket fetch through the Vietnam proxy pool (set from workerEntry)
let vnFetchText = null;
function setVnFetchText(fn) { vnFetchText = typeof fn === 'function' ? fn : null; }

/** Fetch a page directly, then through the VN proxy; every attempt is reported (status, ms, error). */
async function fetchPage(url, headers) {
    const attempts = [];
    let t0 = Date.now();
    const direct = await probe(url, { responseType: 'text', headers, timeout: 6000 });
    const dHtml = typeof direct.data === 'string' ? direct.data : '';
    attempts.push({ via: 'direct', status: direct.status, ms: Date.now() - t0, error: direct.error, html: dHtml });
    if (direct.status === 200 && dHtml) return attempts;
    if (vnFetchText) {
        t0 = Date.now();
        try {
            const html = await vnFetchText(url, { headers, tls: true, timeoutMs: 8000, validate: t => !!t });
            attempts.push({ via: 'vn-proxy', status: 200, ms: Date.now() - t0, html });
        } catch (err) {
            attempts.push({ via: 'vn-proxy', status: 0, ms: Date.now() - t0, error: err.message, html: '' });
        }
    }
    return attempts;
}

function analyze(html) {
    const text = typeof html === 'string' ? html : '';
    const kw = {};
    for (const k of ['turnstile', 'captcha', 'nonce', 'guard', 'bootstrap', 'encrypt', 'aesgcm', 'jwplayer', 'hls', 'signature', 'expires', 'token', 'atob(', 'eval(', 'fetch(', 'XMLHttpRequest', 'devtool', 'debugger']) {
        kw[k] = text.split(k).length - 1;
    }
    const m3u8 = [...new Set((text.match(M3U8_RE) || []).map(u => u.replace(/\\\//g, '/')))].slice(0, 5);
    const idx = text.search(/m3u8|sources?\s*[:=]|"file"/i);
    return {
        length: text.length,
        title: (text.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || null,
        m3u8,
        scripts: (text.match(/<script[^>]+src=["'][^"']+/gi) || []).map(x => x.replace(/^.*src=["']/i, '')).slice(0, 10),
        iframes: (text.match(/<iframe[^>]+src=["'][^"']+/gi) || []).map(x => x.replace(/^.*src=["']/i, '')).slice(0, 5),
        keywords: kw,
        snippet: idx < 0 ? text.slice(0, 600) : text.slice(Math.max(0, idx - 200), idx + 500)
    };
}

/** Diagnostics for /topxx/debug: API item -> embed page -> playlist -> first segment, as the Worker sees them. */
async function debugStream(code) {
    const report = { code };
    const detail = await axios.get(`${API}/movies/${encodeURIComponent(code)}`, HTTP_OPTS);
    const movie = (detail.data && (detail.data.data || detail.data)) || {};
    const source = ((detail.data && detail.data.sources) || movie.sources || [])[0];
    report.item = { code: movie.code, duration: movie.duration, quality: movie.quality, source: source && { type: source.type, link: source.link } };
    if (!source || !source.link) return report;

    const attempts = await fetchPage(source.link, PAGE_HEADERS);
    const pageAttempt = attempts.find(a => a.html) || attempts[attempts.length - 1];
    report.attempts = attempts.map(a => ({ via: a.via, status: a.status, ms: a.ms, error: a.error, length: (a.html || '').length }));
    report.embed = analyze(pageAttempt.html);
    let playlistUrl = report.embed.m3u8[0] || null;

    if (!playlistUrl && report.embed.iframes.length) {
        const inner = new URL(report.embed.iframes[0], source.link).toString();
        const ia = await fetchPage(inner, Object.assign({}, PAGE_HEADERS, { Referer: source.link }));
        const innerAttempt = ia.find(a => a.html) || ia[ia.length - 1];
        report.iframe = Object.assign({ url: inner, via: innerAttempt.via, status: innerAttempt.status, error: innerAttempt.error }, analyze(innerAttempt.html));
        playlistUrl = report.iframe.m3u8[0] || null;
    }
    if (!playlistUrl) return report;

    const pl = await probe(playlistUrl, { responseType: 'text', headers: { 'User-Agent': 'Mozilla/5.0', Origin: 'https://web.stremio.com', Referer: source.link } });
    const text = typeof pl.data === 'string' ? pl.data : '';
    const lines = text.split(/\r?\n/).map(l => l.trim());
    const segs = lines.filter(l => l && !l.startsWith('#'));
    report.playlist = {
        url: playlistUrl, status: pl.status, contentType: header(pl, 'content-type'), cors: header(pl, 'access-control-allow-origin'),
        isMaster: text.includes('#EXT-X-STREAM-INF'), segments: segs.length, head: lines.slice(0, 12), error: pl.error
    };
    if (!segs.length) return report;

    const segUrl = new URL(segs[0], playlistUrl).toString();
    const s = await probe(segUrl, { responseType: 'arraybuffer', headers: { 'User-Agent': 'Mozilla/5.0', Origin: 'https://web.stremio.com', Referer: source.link, Range: 'bytes=0-16383' } });
    const bytes = s.data instanceof ArrayBuffer ? new Uint8Array(s.data) : Uint8Array.from(s.data || []);
    report.segment = {
        url: segUrl, status: s.status, contentType: header(s, 'content-type'), cors: header(s, 'access-control-allow-origin'),
        bytes: bytes.length,
        firstBytesHex: Array.from(bytes.slice(0, 16)).map(b => b.toString(16).padStart(2, '0')).join(''),
        looksLikePng: bytes.length > 4 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47,
        looksLikeTs: bytes.length > 0 && bytes[0] === 0x47, error: s.error
    };
    return report;
}

module.exports = { debugStream, setVnFetchText };
