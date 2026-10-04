const axios = require('axios');

const API = 'https://vsmov.com/api';
const HTTP_OPTS = { timeout: 10000, headers: { Accept: 'application/json', 'User-Agent': 'Mozilla/5.0' } };

// The embed page (v*.streamvsmov.com/video/<uuid>) lists its HLS master in a plain `signedMasterUrl` option:
// a time-limited signed URL (expires=...&signature=...), the same value any visitor's player receives.
function extractMaster(html) {
    if (typeof html !== 'string') return null;
    const signed = html.match(/signedMasterUrl\s*:\s*["']([^"']+)["']/);
    if (signed && /^https?:\/\//.test(signed[1])) return signed[1];
    const base = html.match(/const\s+baseUrl\s*=\s*["']([^"']+)["']/);
    const hash = html.match(/const\s+videoHash\s*=\s*["']([^"']+)["']/);
    return base && hash ? `${base[1]}/stream/${hash[1]}/master.m3u8` : null;
}

function header(res, name) {
    const h = res && res.headers;
    if (!h) return null;
    return (typeof h.get === 'function' ? h.get(name) : h[name]) || null;
}

function hex(buf, n) {
    const u = buf instanceof ArrayBuffer ? new Uint8Array(buf) : Uint8Array.from(buf || []);
    return Array.from(u.slice(0, n)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function probe(url, opts = {}) {
    try {
        const res = await axios.get(url, Object.assign({ timeout: 10000, validateStatus: () => true }, opts));
        return res;
    } catch (err) {
        return { status: 0, error: err.message, data: '' };
    }
}

/** Diagnostics for /vsmov/debug: embed -> signed master -> variant -> first segment, as the Worker sees them. */
async function debugStream(slug) {
    const report = { slug, steps: [] };
    const detail = await axios.get(`${API}/phim/${encodeURIComponent(slug)}`, HTTP_OPTS);
    const movie = detail.data && detail.data.movie;
    const server = ((detail.data && detail.data.episodes) || [])[0];
    const item = server && (server.server_data || [])[0];
    report.movie = movie && { name: movie.name, imdb: movie.imdb && movie.imdb.id, tmdb: movie.tmdb && movie.tmdb.id };
    report.item = item && { name: item.name, link_embed: item.link_embed || null, link_m3u8: item.link_m3u8 || null };
    if (!item || !item.link_embed) return report;

    const origin = 'https://web.stremio.com';
    const page = await probe(item.link_embed, { responseType: 'text', headers: { 'User-Agent': 'Mozilla/5.0', Referer: 'https://vsmov.com/' } });
    const html = typeof page.data === 'string' ? page.data : '';
    const master = extractMaster(html);
    report.embed = { status: page.status, length: html.length, master, error: page.error };
    if (!master) return report;

    const m = await probe(master, { responseType: 'text', headers: { 'User-Agent': 'Mozilla/5.0', Origin: origin } });
    const mText = typeof m.data === 'string' ? m.data : '';
    report.master = {
        status: m.status, contentType: header(m, 'content-type'), cors: header(m, 'access-control-allow-origin'),
        head: mText.split(/\r?\n/).slice(0, 12), error: m.error
    };
    const lines = mText.split(/\r?\n/).map(l => l.trim());
    const variantRel = lines.find(l => l && !l.startsWith('#'));
    if (!variantRel) return report;
    const variantUrl = new URL(variantRel, master).toString();

    const v = await probe(variantUrl, { responseType: 'text', headers: { 'User-Agent': 'Mozilla/5.0', Origin: origin } });
    const vText = typeof v.data === 'string' ? v.data : '';
    const vLines = vText.split(/\r?\n/).map(l => l.trim());
    const segs = vLines.filter(l => l && !l.startsWith('#'));
    const tagKinds = {};
    vLines.forEach(l => { if (l.startsWith('#')) { const k = l.split(/[:,]/)[0]; tagKinds[k] = (tagKinds[k] || 0) + 1; } });
    report.variant = {
        url: variantUrl, status: v.status, contentType: header(v, 'content-type'), cors: header(v, 'access-control-allow-origin'),
        segments: segs.length, tagKinds, head: vLines.slice(0, 16), firstSegments: segs.slice(0, 3), error: v.error
    };
    if (!segs.length) return report;

    const segUrl = new URL(segs[0], variantUrl).toString();
    const s = await probe(segUrl, { responseType: 'arraybuffer', headers: { 'User-Agent': 'Mozilla/5.0', Origin: origin, Range: 'bytes=0-255' } });
    const body = s.data;
    const bytes = body instanceof ArrayBuffer ? new Uint8Array(body) : Uint8Array.from(body || []);
    report.segment = {
        url: segUrl, status: s.status, contentType: header(s, 'content-type'), cors: header(s, 'access-control-allow-origin'),
        bytes: bytes.length, firstBytesHex: hex(bytes, 24),
        looksLikePng: bytes.length > 4 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47,
        looksLikeTs: bytes.length > 0 && bytes[0] === 0x47, error: s.error
    };
    return report;
}

module.exports = { extractMaster, debugStream };
