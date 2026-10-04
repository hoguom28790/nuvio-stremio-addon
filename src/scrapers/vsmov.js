const axios = require('axios');
const cache = require('../utils/cache');
const { findEpisode } = require('../utils/episodeHelper');

const API = 'https://vsmov.com/api';
const HTTP_OPTS = { timeout: 10000, headers: { Accept: 'application/json', 'User-Agent': 'Mozilla/5.0' } };

// /api/danh-sach/{slug} -> [slug, items per page]. Page sizes differ per list, so skip -> page needs them.
const LISTS = {
    'Phim Mới Cập Nhật': ['phim-moi-cap-nhat', 24],
    'Phim Lẻ': ['phim-le', 20],
    'Phim Bộ': ['phim-bo', 20],
    'Phim Chiếu Rạp': ['phim-chieu-rap', 18]
};
const GENRES = {
    'Hành Động': 'hanh-dong', 'Hài': 'hai', 'Cổ Trang': 'co-trang', 'Chính Kịch': 'chinh-kich', 'Hình Sự': 'hinh-su',
    'Chiến Tranh': 'chien-tranh', 'Bí Ẩn': 'bi-an', 'Gia Đình': 'gia-dinh', 'Giả Tưởng': 'gia-tuong',
    'Hoạt Hình': 'hoat-hinh', 'Khoa Học Viễn Tưởng': 'khoa-hoc-vien-tuong', 'Kinh Dị': 'kinh-di', 'Lãng Mạn': 'lang-man',
    'Phiêu Lưu': 'phieu-luu', 'Tội Phạm': 'toi-pham', 'Võ Thuật': 'vo-thuat', 'Học Đường': 'hoc-duong',
    'Viễn Tưởng': 'vien-tuong', 'Giật Gân': 'giat-gan', 'Thiếu Nhi': 'thieu-nhi', 'Tiên Hiệp': 'tien-hiep',
    'Kiếm Hiệp': 'kiem-hiep', 'Võ Hiệp': 'vo-hiep', 'Phim Nhạc': 'phim-nhac', 'Xã Hội Đen': 'xa-hoi-den',
    'Thanh Xuân': 'thanh-xuan', 'Drama': 'drama', 'LGBT': 'lgbt'
};
const COUNTRIES = {
    'Âu Mỹ': 'au-my', 'Hàn Quốc': 'han-quoc', 'Trung Quốc': 'trung-quoc', 'Nhật Bản': 'nhat-ban', 'Thái Lan': 'thai-lan',
    'Việt Nam': 'viet-nam', 'Hồng Kông': 'hong-kong', 'Đài Loan': 'dai-loan', 'Ấn Độ': 'an-do', 'Anh': 'anh', 'Pháp': 'phap',
    'Đức': 'duc', 'Nga': 'nga', 'Tây Ban Nha': 'tay-ban-nha', 'Úc': 'uc', 'Canada': 'canada', 'Indonesia': 'indonesia',
    'Philippines': 'philippines', 'Mỹ': 'my'
};
const GENRE_PAGE_SIZE = 24;

// Option labels for the Stremio manifest (kept next to the maps so they cannot drift apart)
const CATALOG_OPTIONS = [
    ...Object.keys(LISTS).map(n => `Danh mục: ${n}`),
    ...Object.keys(GENRES).map(n => `Thể loại: ${n}`),
    ...Object.keys(COUNTRIES).map(n => `Quốc gia: ${n}`)
];

function norm(s) { return String(s || '').replace(/\s+/g, ' ').trim(); }

function resolveRequest(type, extra) {
    const skip = parseInt(extra.skip, 10) || 0;
    const q = extra.search && extra.search.trim();
    if (q) {
        const size = 24;
        return { url: `${API}/tim-kiem?keyword=${encodeURIComponent(q)}&limit=${size}&page=${Math.floor(skip / size) + 1}` };
    }
    const g = typeof extra.genre === 'string' ? extra.genre.trim() : '';
    let m;
    if ((m = g.match(/^Danh mục:\s*(.+)$/)) && LISTS[m[1].trim()]) {
        const [slug, size] = LISTS[m[1].trim()];
        return { url: `${API}/danh-sach/${slug}?page=${Math.floor(skip / size) + 1}` };
    }
    if ((m = g.match(/^Thể loại:\s*(.+)$/)) && GENRES[m[1].trim()]) {
        return { url: `${API}/the-loai/${GENRES[m[1].trim()]}?page=${Math.floor(skip / GENRE_PAGE_SIZE) + 1}` };
    }
    if ((m = g.match(/^Quốc gia:\s*(.+)$/)) && COUNTRIES[m[1].trim()]) {
        return { url: `${API}/quoc-gia/${COUNTRIES[m[1].trim()]}?page=${Math.floor(skip / GENRE_PAGE_SIZE) + 1}` };
    }
    const [slug, size] = type === 'series' ? LISTS['Phim Bộ'] : LISTS['Phim Lẻ'];
    return { url: `${API}/danh-sach/${slug}?page=${Math.floor(skip / size) + 1}` };
}

async function getCatalog(type, extra = {}) {
    try {
        const { url } = resolveRequest(type, extra);
        const cacheKey = `vsmov:catalog:${type}:${url}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const res = await axios.get(url, HTTP_OPTS);
        const data = res.data || {};
        const items = data.items || (data.data && data.data.items) || [];
        const seen = new Set();
        const metas = [];
        for (const item of items) {
            if (!item || !item.slug || seen.has(item.slug)) continue;
            seen.add(item.slug);
            metas.push({
                id: `vsmov:${item.slug}`,
                type: type === 'series' ? 'series' : 'movie',
                name: item.name || 'Không tên',
                poster: item.poster_url || item.thumb_url || '',
                posterShape: 'poster',
                description: `${item.origin_name || ''} (${item.year || ''})\n⚡ VSMOV`
            });
        }
        if (metas.length) cache.set(cacheKey, metas, 600);
        return metas;
    } catch (err) {
        console.error('[VSMOV Catalog Error]:', err.message);
        return [];
    }
}

function mainServer(episodes) {
    return (episodes || []).reduce((best, s) =>
        ((s.server_data || []).length > ((best && best.server_data) || []).length ? s : best), null);
}

async function getMeta(type, id) {
    try {
        const slug = id.replace('vsmov:', '').split(':')[0];
        const cacheKey = `vsmov:meta:${slug}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const res = await axios.get(`${API}/phim/${encodeURIComponent(slug)}`, HTTP_OPTS);
        const movie = res.data && res.data.movie;
        if (!movie) return null;

        const serverData = (mainServer(res.data.episodes) || {}).server_data || [];
        const isSeries = type === 'series' || movie.type === 'series' || movie.type === 'tvshows' ||
            (movie.type !== 'single' && serverData.length > 1);
        const videos = isSeries ? serverData.map((ep, i) => ({
            id: `vsmov:${slug}:1:${ep.slug || i + 1}`,
            title: `Tập ${ep.name}`,
            season: 1,
            episode: i + 1,
            released: new Date(Date.UTC(2000, 0, 1) + i * 86400000).toISOString()
        })) : [];

        const names = list => (Array.isArray(list) ? list : []).map(x => (typeof x === 'string' ? x : x && x.name)).filter(Boolean);
        const meta = {
            id: `vsmov:${slug}`,
            type: isSeries ? 'series' : 'movie',
            name: movie.name,
            poster: movie.poster_url || movie.thumb_url || '',
            background: movie.thumb_url || movie.poster_url || '',
            description: (movie.content || '').replace(/<[^>]*>?/gm, ''),
            releaseInfo: String(movie.year || ''),
            genres: names(movie.category).length ? names(movie.category) : ['Phim'],
            director: names(movie.director),
            cast: names(movie.actor),
            imdb_id: movie.imdb && movie.imdb.id ? movie.imdb.id : undefined,
            videos: videos.length ? videos : undefined
        };
        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.error('[VSMOV Meta Error]:', err.message);
        return null;
    }
}

function hostBase(host) {
    if (!host) return '';
    if (host.includes('://')) return host;
    return `${/^(localhost|127\.|\[::1\])/.test(host) ? 'http' : 'https'}://${host}`;
}

/**
 * VSMOV only returns `link_embed` (v*.streamvsmov.com/video/<uuid>). The playable HLS is resolved at play time by the
 * addon host (`/vsmov/playlist.m3u8`): the signed master is short-lived, so it must not be baked into a stored stream.
 */
async function getStream(id, type, host) {
    try {
        const parts = id.replace('vsmov:', '').split(':');
        const slug = parts[0];
        const targetEp = parts[2] || (type === 'series' ? parts[1] : null);

        const res = await axios.get(`${API}/phim/${encodeURIComponent(slug)}`, HTTP_OPTS);
        const movieName = (res.data && res.data.movie && res.data.movie.name) || '';
        const base = hostBase(host);
        const streams = [];
        for (const server of (res.data && res.data.episodes) || []) {
            const item = findEpisode(server.server_data || [], targetEp);
            if (!item) continue;
            const label = norm(server.server_name) || 'VIP';
            const title = `${movieName}${targetEp && item.name ? ` - Tập ${item.name}` : ''}`;
            if (item.link_m3u8) {
                streams.push({ name: `⚡ VSMOV • ${label}`, title: `${title}\n⚡ HLS trực tiếp`, url: item.link_m3u8, behaviorHints: { notWebReady: false } });
            } else if (item.link_embed && base) {
                streams.push({
                    name: `⚡ VSMOV • ${label}`,
                    title: `${title}\n⚡ HLS qua máy chủ addon`,
                    url: `${base}/vsmov/playlist.m3u8?e=${encodeURIComponent(item.link_embed)}`,
                    behaviorHints: { notWebReady: false }
                });
            }
        }
        return streams;
    } catch (err) {
        console.error('[VSMOV Stream Error]:', err.message);
        return [];
    }
}

/** Items of a VSMOV list/search whose IMDb id equals `imdbId`. */
function matchImdb(items, imdbId) {
    return (items || []).filter(it => it && it.imdb && it.imdb.id === imdbId);
}

async function search(keyword, limit = 10) {
    const res = await axios.get(`${API}/tim-kiem?keyword=${encodeURIComponent(keyword)}&limit=${limit}`, HTTP_OPTS);
    const data = res.data || {};
    return data.items || (data.data && data.data.items) || [];
}

// ---- Embed page -> signed master playlist -> rewritten playlist -------------------------------------------------

const EMBED_HEADERS = { 'User-Agent': 'Mozilla/5.0', Referer: 'https://vsmov.com/' };

function isVsmovHost(hostname) {
    return hostname === 'streamvsmov.com' || hostname.endsWith('.streamvsmov.com');
}

// The embed page lists its HLS master in a plain `signedMasterUrl` option: a time-limited signed URL
// (expires=...&signature=...), the same value any visitor's player receives.
function extractMaster(html) {
    if (typeof html !== 'string') return null;
    const signed = html.match(/signedMasterUrl\s*:\s*["']([^"']+)["']/);
    if (signed && /^https?:\/\//.test(signed[1])) return signed[1];
    const base = html.match(/const\s+baseUrl\s*=\s*["']([^"']+)["']/);
    const hash = html.match(/const\s+videoHash\s*=\s*["']([^"']+)["']/);
    return base && hash ? `${base[1]}/stream/${hash[1]}/master.m3u8` : null;
}

function absolutizeTagUris(line, baseUrl) {
    if (!line.includes('URI="')) return line;
    return line.replace(/URI="([^"]*)"/g, (m, uri) => {
        if (!uri || /^(?:[a-z][a-z0-9+.-]*:)/i.test(uri)) return m;
        try { return `URI="${new URL(uri, baseUrl).toString()}"`; } catch (e) { return m; }
    });
}

async function getText(url, headers) {
    const res = await axios.get(url, { timeout: 10000, responseType: 'text', headers });
    return typeof res.data === 'string' ? res.data : '';
}

/**
 * Playlist the player will load: the VSMOV media playlist with every segment URL sent through `<base>/vsmov/seg.ts`
 * (segments are PNG-wrapped TS, so a player cannot decode them directly).
 */
async function buildPlaylist(embedUrl, base) {
    const embed = new URL(embedUrl);
    if (embed.protocol !== 'https:' || !isVsmovHost(embed.hostname)) throw new Error('embed host not allowed');

    const master = extractMaster(await getText(embedUrl, EMBED_HEADERS));
    if (!master) throw new Error('no master playlist in embed page');
    const mHeaders = { 'User-Agent': 'Mozilla/5.0', Referer: `${embed.origin}/` };

    let text = await getText(master, mHeaders);
    let baseUrl = master;
    if (!text.includes('#EXTM3U')) throw new Error('master is not a playlist');
    if (text.includes('#EXT-X-STREAM-INF')) {
        const lines = text.split(/\r?\n/).map(l => l.trim());
        const i = lines.findIndex(l => l.startsWith('#EXT-X-STREAM-INF'));
        const rel = lines.slice(i + 1).find(l => l && !l.startsWith('#'));
        if (!rel) throw new Error('no variant in master');
        baseUrl = new URL(rel, master).toString();
        text = await getText(baseUrl, mHeaders);
        if (!text.includes('#EXTM3U')) throw new Error('variant is not a playlist');
    }

    const out = text.split(/\r?\n/).map(raw => {
        const line = raw.trim();
        if (!line) return null;
        if (line.startsWith('#')) return absolutizeTagUris(line, baseUrl);
        return `${base}/vsmov/seg.ts?u=${encodeURIComponent(new URL(line, baseUrl).toString())}`;
    }).filter(l => l !== null);
    return out.join('\n') + '\n';
}

// Where the MPEG-TS payload starts inside a PNG-wrapped segment: after the PNG's IEND chunk (and any padding up to
// the first run of 0x47 sync bytes). Returns -1 when more bytes are needed; `final` = no more bytes will come.
function payloadOffset(buf, final) {
    if (buf.length >= 1 && buf[0] === 0x47) return 0; // already plain TS
    if (buf.length < 8) return final ? 0 : -1;
    const isPng = buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47;
    if (!isPng) return 0;

    let pos = 8;
    let iend = -1;
    while (true) {
        if (pos + 8 > buf.length) return final ? 0 : -1;
        const len = ((buf[pos] << 24) | (buf[pos + 1] << 16) | (buf[pos + 2] << 8) | buf[pos + 3]) >>> 0;
        const end = pos + 12 + len;
        if (end > buf.length) return final ? 0 : -1;
        if (buf[pos + 4] === 0x49 && buf[pos + 5] === 0x45 && buf[pos + 6] === 0x4e && buf[pos + 7] === 0x44) { iend = end; break; }
        pos = end;
    }
    const scanTo = iend + 4096;
    if (!final && buf.length < Math.min(scanTo, iend + 1024)) return -1;
    for (let i = iend; i <= Math.min(buf.length - 376 - 1, scanTo); i++) {
        if (buf[i] === 0x47 && buf[i + 188] === 0x47 && buf[i + 376] === 0x47) return i;
    }
    if (!final && buf.length < scanTo + 377) return -1;
    return iend;
}

// ---- Diagnostics (/vsmov/debug) --------------------------------------------------------------------------------

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

/** Embed page -> signed master -> first segment, as the Worker sees them. */
async function debugStream(slug) {
    const report = { slug };
    const detail = await axios.get(`${API}/phim/${encodeURIComponent(slug)}`, HTTP_OPTS);
    const movie = detail.data && detail.data.movie;
    const item = (((detail.data && detail.data.episodes) || [])[0] || {}).server_data;
    const first = item && item[0];
    report.movie = movie && { name: movie.name, imdb: movie.imdb && movie.imdb.id, tmdb: movie.tmdb && movie.tmdb.id };
    report.item = first && { name: first.name, link_embed: first.link_embed || null, link_m3u8: first.link_m3u8 || null };
    if (!first || !first.link_embed) return report;

    const page = await probe(first.link_embed, { responseType: 'text', headers: EMBED_HEADERS });
    const html = typeof page.data === 'string' ? page.data : '';
    const master = extractMaster(html);
    report.embed = { status: page.status, length: html.length, master, error: page.error };
    if (!master) return report;

    const m = await probe(master, { responseType: 'text', headers: { 'User-Agent': 'Mozilla/5.0', Origin: 'https://web.stremio.com' } });
    const text = typeof m.data === 'string' ? m.data : '';
    const lines = text.split(/\r?\n/).map(l => l.trim());
    const segs = lines.filter(l => l && !l.startsWith('#'));
    report.playlist = {
        status: m.status, contentType: header(m, 'content-type'), cors: header(m, 'access-control-allow-origin'),
        isMaster: text.includes('#EXT-X-STREAM-INF'), segments: segs.length, head: lines.slice(0, 10), error: m.error
    };
    if (!segs.length || report.playlist.isMaster) return report;

    const segUrl = new URL(segs[0], master).toString();
    const s = await probe(segUrl, { responseType: 'arraybuffer', headers: { 'User-Agent': 'Mozilla/5.0', Origin: 'https://web.stremio.com', Range: 'bytes=0-16383' } });
    const bytes = s.data instanceof ArrayBuffer ? new Uint8Array(s.data) : Uint8Array.from(s.data || []);
    const off = payloadOffset(bytes, true);
    report.segment = {
        url: segUrl, status: s.status, contentType: header(s, 'content-type'), cors: header(s, 'access-control-allow-origin'),
        bytes: bytes.length, payloadOffset: off, startsWithTs: bytes.length > off && bytes[off] === 0x47,
        tsSyncRun: bytes.length > off + 376 && bytes[off] === 0x47 && bytes[off + 188] === 0x47 && bytes[off + 376] === 0x47,
        error: s.error
    };
    return report;
}

module.exports = {
    CATALOG_OPTIONS, getCatalog, getMeta, getStream, matchImdb, search,
    extractMaster, buildPlaylist, payloadOffset, isVsmovHost, debugStream
};
