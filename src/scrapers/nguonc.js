const axios = require('axios');
const cache = require('../utils/cache');
const { parseFilter } = require('../utils/filterHelper');
const { findEpisode } = require('../utils/episodeHelper');
const kkphim = require('./kkphim');
const phimapi = require('./phimapi');


const BASE_URL = 'https://phim.nguonc.com/api';
const HTTP_OPTS = { timeout: 10000, headers: { Accept: 'application/json' } };

// /films/ngon-ngu/{slug}: vietsub | thuyet-minh | long-tieng
const LANGUAGES = { 'vietsub': 'vietsub', 'thuyết minh': 'thuyet-minh', 'lồng tiếng': 'long-tieng' };
// NguonC uses its own list slugs (shared filterHelper follows KKPhim naming)
const LIST_SLUGS = { 'phim-dang-chieu': 'dang-chieu' };

function parseLanguage(genre) {
    const m = typeof genre === 'string' && genre.trim().match(/^Ngôn ngữ:\s*(.+)$/i);
    const slug = m && LANGUAGES[m[1].trim().toLowerCase()];
    return slug ? { filterType: 'language', slug } : null;
}

/** Find films by IMDb id inside a NguonC list/search `items` array. */
function matchImdb(items, imdbId) {
    return (items || []).filter(it => it && it.imdb && it.imdb.id === imdbId);
}

async function getCatalog(type, extra = {}) {
    try {
        const skip = parseInt(extra.skip, 10) || 0;
        const filter = !extra.search && extra.genre ? (parseLanguage(extra.genre) || parseFilter(extra.genre)) : null;
        const isDecade = filter && filter.filterType === 'decade';
        const size = isDecade ? 100 : 10; // NguonC pages hold 10 titles
        const page = Math.floor(skip / size) + 1;
        let urls = [];

        if (extra.search) {
            urls = [`${BASE_URL}/films/search?keyword=${encodeURIComponent(extra.search.trim())}&page=${page}`];
        } else if (filter) {
            if (filter.filterType === 'language') {
                urls = [`${BASE_URL}/films/ngon-ngu/${filter.slug}?page=${page}`];
            } else if (filter.filterType === 'genre') {
                urls = [`${BASE_URL}/films/the-loai/${filter.slug}?page=${page}`];
            } else if (filter.filterType === 'country') {
                urls = [`${BASE_URL}/films/quoc-gia/${filter.slug}?page=${page}`];
            } else if (filter.filterType === 'category') {
                urls = [filter.slug === 'phim-moi-cap-nhat'
                    ? `${BASE_URL}/films/phim-moi-cap-nhat?page=${page}`
                    : `${BASE_URL}/films/danh-sach/${LIST_SLUGS[filter.slug] || filter.slug}?page=${page}`];
            } else if (filter.filterType === 'year') {
                urls = [`${BASE_URL}/films/nam-phat-hanh/${filter.slug}?page=${page}`];
            } else if (isDecade) {
                const start = parseInt(filter.slug, 10);
                urls = Array.from({ length: 10 }, (_, i) => `${BASE_URL}/films/nam-phat-hanh/${start + i}?page=${page}`);
            } else {
                urls = [`${BASE_URL}/films/search?keyword=${encodeURIComponent(filter.value)}&page=${page}`];
            }
        }

        if (urls.length === 0) {
            urls = [type === 'series'
                ? `${BASE_URL}/films/danh-sach/phim-bo?page=${page}`
                : `${BASE_URL}/films/danh-sach/phim-le?page=${page}`];
        }

        const cacheKey = `nguonc:catalog:${type}:${JSON.stringify(extra)}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const responses = await Promise.all(urls.map(u =>
            axios.get(u, HTTP_OPTS).then(r => r.data).catch(() => null)));

        const seen = new Set();
        const metas = [];
        for (const data of responses) {
            for (const item of (data && data.items) || []) {
                if (!item || !item.slug || seen.has(item.slug)) continue;
                seen.add(item.slug);
                metas.push({
                    id: `nguonc:${item.slug}`,
                    type: type === 'series' ? 'series' : 'movie',
                    name: item.name || 'Không tên',
                    poster: item.poster_url || item.thumb_url || '',
                    posterShape: 'poster',
                    description: `${item.original_name || ''} (${item.year || ''})\n🛡️ Server: NguonC\n🎞️ Chất lượng: ${item.quality || 'HD'}`
                });
            }
        }

        if (metas.length) cache.set(cacheKey, metas, 600);
        return metas;
    } catch (err) {
        console.error('[NguonC Catalog Error]:', err.message);
        return [];
    }
}

async function getMeta(type, id) {
    try {
        const slug = id.replace('nguonc:', '').split(':')[0];
        const cacheKey = `nguonc:meta:${slug}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const res = await axios.get(`${BASE_URL}/film/${slug}`, HTTP_OPTS);
        const movie = res.data?.movie;
        if (!movie) return null;

        const episodes = movie.episodes || [];
        const totalEpNum = parseInt(movie.total_episodes, 10);
        const maxItems = episodes.reduce((n, sv) => Math.max(n, (sv.items || []).length), 0);
        const isSeries = type === 'series' || (totalEpNum && totalEpNum > 1) || maxItems > 1;

        const videos = [];
        if (isSeries && episodes.length > 0) {
            const firstServerItems = episodes.reduce((b, sv) => ((sv.items || []).length > b.length ? sv.items : b), []);
            firstServerItems.forEach((ep, idx) => {
                videos.push({
                    id: `nguonc:${slug}:1:${ep.slug || idx + 1}`,
                    title: `Tập ${ep.name}`,
                    season: 1,
                    episode: idx + 1,
                    released: new Date().toISOString()
                });
            });
        }

        // Extract year & genres properly from movie.category
        const genres = [];
        let extractedYear = movie.year ? String(movie.year) : '';
        if (movie.category && typeof movie.category === 'object') {
            Object.values(movie.category).forEach(cat => {
                if (cat && Array.isArray(cat.list)) {
                    cat.list.forEach(item => {
                        if (item && item.name) {
                            if (cat.group?.name === 'Năm' && !extractedYear) {
                                extractedYear = String(item.name);
                            } else if (cat.group?.name !== 'Năm' && cat.group?.name !== 'Định dạng') {
                                genres.push(item.name);
                            }
                        }
                    });
                }
            });
        }

        const meta = {
            id: `nguonc:${slug}`,
            type: isSeries ? 'series' : 'movie',
            name: movie.name,
            poster: movie.poster_url || movie.thumb_url || '',
            background: movie.thumb_url || movie.poster_url || '',
            description: (movie.description || '').replace(/<[^>]*>?/gm, ''),
            releaseInfo: extractedYear,
            genres: genres.length > 0 ? genres : ['Phim'],
            director: movie.director ? [movie.director] : [],
            cast: movie.casts ? [movie.casts] : [],
            imdb_id: movie.imdb && movie.imdb.id ? movie.imdb.id : undefined,
            videos: videos.length > 0 ? videos : undefined
        };

        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.error('[NguonC Meta Error]:', err.message);
        return null;
    }

}

const M3U8_RE = /https?:(?:\\?\/){2}(?:[^"'\s<>\\]|\\\/)+?\.m3u8(?:[^"'\s<>\\]|\\\/)*/i;
const NGUONC_REFERER = 'https://phim.nguonc.com/';

// Workers only: raw-socket fetch through the Vietnam proxy pool (set from workerEntry). StreamC may geo-block cloud IPs.
let vnFetchText = null;
function setVnFetchText(fn) { vnFetchText = typeof fn === 'function' ? fn : null; }

const EMBED_HEADERS = { Referer: NGUONC_REFERER, 'User-Agent': 'Mozilla/5.0', Accept: 'text/html,*/*' };

function extractM3u8(html) {
    const m = typeof html === 'string' && html.match(M3U8_RE);
    return m ? m[0].replace(/\\\//g, '/').replace(/&amp;/g, '&') : null;
}

/** Fetch an embed page directly, then through the VN proxy; returns every attempt for diagnostics. */
async function fetchEmbedPage(embedUrl) {
    const attempts = [];
    try {
        const res = await axios.get(embedUrl, { timeout: 8000, responseType: 'text', headers: EMBED_HEADERS });
        const html = typeof res.data === 'string' ? res.data : JSON.stringify(res.data || '');
        attempts.push({ via: 'direct', status: res.status, html });
        if (extractM3u8(html)) return attempts;
    } catch (err) {
        attempts.push({ via: 'direct', status: err.response ? err.response.status : 0, error: err.message, html: '' });
    }
    if (vnFetchText) {
        try {
            const html = await vnFetchText(embedUrl, { headers: EMBED_HEADERS, tls: true, timeoutMs: 8000, validate: t => !!t });
            attempts.push({ via: 'vn-proxy', status: 200, html });
        } catch (err) {
            attempts.push({ via: 'vn-proxy', status: 0, error: err.message, html: '' });
        }
    }
    return attempts;
}

/**
 * The detail API only returns an `embed` page (streamc.xyz/embed.php?hash=...), no `m3u8`.
 * Read that page and pull the HLS playlist URL out of it.
 */
async function resolveEmbed(embedUrl) {
    if (!/^https?:\/\//i.test(embedUrl || '')) return null;
    const cacheKey = `nguonc:embed:${embedUrl}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;
    for (const a of await fetchEmbedPage(embedUrl)) {
        const url = extractM3u8(a.html);
        if (url) {
            cache.set(cacheKey, url, 1800);
            return url;
        }
    }
    return null;
}

/** Diagnostics for /nguonc/debug: what the server actually receives from each embed page. */
async function debugEmbeds(slug) {
    const res = await axios.get(`${BASE_URL}/film/${slug}`, HTTP_OPTS);
    const movie = res.data && res.data.movie;
    const report = { slug, hasVnProxy: !!vnFetchText, servers: [] };
    for (const server of (movie && movie.episodes) || []) {
        for (const item of (server.items || []).slice(0, 1)) {
            const entry = { server: server.server_name, ep: item.name, embed: item.embed || null, m3u8Field: item.m3u8 || null, attempts: [] };
            if (item.embed) {
                for (const a of await fetchEmbedPage(item.embed)) {
                    const html = a.html || '';
                    const idx = html.search(/m3u8|\.mp4|"file"|sources?\s*[:=]/i);
                    entry.attempts.push({
                        via: a.via, status: a.status, error: a.error, length: html.length,
                        m3u8: extractM3u8(html),
                        scripts: (html.match(/<script[^>]+src=["'][^"']+/gi) || []).map(x => x.replace(/^.*src=["']/i, '')).slice(0, 10),
                        urls: [...new Set((html.match(/https?:(?:\\?\/){2}[^"'\s<>\\)]+/g) || []).map(u => u.replace(/\\\//g, '/')))].slice(0, 25),
                        snippet: html.slice(Math.max(0, idx < 0 ? 0 : idx - 300), (idx < 0 ? 0 : idx) + 700)
                    });
                }
            }
            report.servers.push(entry);
        }
    }
    return report;
}

/** Find the KKPhim slug of the same film; null when no candidate is a confident match. */
async function findKkphimSlug(movie) {
    const wantImdb = movie.imdb && movie.imdb.id;
    const wantTmdb = movie.tmdb && movie.tmdb.id;
    const wantYear = parseInt(movie.year, 10) || 0;
    for (const q of [movie.original_name, movie.name].filter(Boolean)) {
        const results = await kkphim.getCatalog('movie', { search: q });
        const details = await Promise.all((results || []).slice(0, 5).map(r => {
            const slug = r.id.replace('kkphim:', '').split(':')[0];
            return axios.get(`${phimapi.BASE_URL}/phim/${slug}`, HTTP_OPTS)
                .then(res => ({ slug, movie: res.data && res.data.movie })).catch(() => null);
        }));
        const cands = details.filter(d => d && d.movie);
        const hit = cands.find(d => wantImdb && d.movie.imdb && d.movie.imdb.id === wantImdb)
            || cands.find(d => wantTmdb && d.movie.tmdb && String(d.movie.tmdb.id) === String(wantTmdb)
                && (!movie.tmdb.type || !d.movie.tmdb.type || d.movie.tmdb.type === movie.tmdb.type)
                && (!movie.tmdb.season || !d.movie.tmdb.season || d.movie.tmdb.season === movie.tmdb.season))
            || cands.find(d => wantYear && parseInt(d.movie.year, 10) === wantYear);
        if (hit) return hit.slug;
    }
    return null;
}

async function getStream(id, type) {
    try {
        const parts = id.replace('nguonc:', '').split(':');
        const slug = parts[0];
        const targetEp = parts[2] || (type === 'series' ? parts[1] : null);

        const res = await axios.get(`${BASE_URL}/film/${slug}`, HTTP_OPTS);
        const movie = res.data?.movie;
        if (!movie || !Array.isArray(movie.episodes)) return [];

        const streams = [];
        const embeds = [];
        for (const server of movie.episodes) {
            const item = findEpisode(server.items || [], targetEp);
            if (!item) continue;
            const label = server.server_name || 'VIP';
            const epTitle = `${movie.name || ''}${targetEp && item.name ? ` - Tập ${item.name}` : ''}`;

            let m3u8 = item.m3u8 || (/\.m3u8(\?|$)/i.test(item.embed || '') ? item.embed : '');
            let fromEmbed = false;
            if (!m3u8 && item.embed) {
                m3u8 = await resolveEmbed(item.embed);
                fromEmbed = !!m3u8;
                if (!m3u8) embeds.push({ label, epTitle, url: item.embed });
            }
            if (!m3u8) continue;

            const stream = {
                name: `⚡ [CDN] NguonC • ${label}`,
                title: `${epTitle}\n⚡ NguonC HLS trực tiếp`,
                url: m3u8,
                behaviorHints: { notWebReady: false }
            };
            if (fromEmbed) {
                const origin = new URL(item.embed).origin;
                stream.behaviorHints.notWebReady = true;
                stream.behaviorHints.proxyHeaders = { request: { Referer: `${origin}/`, Origin: origin } };
            }
            streams.push(stream);
        }

        // Fallback: the same film on KKPhim (matched by IMDb/TMDB/year, never "first result")
        if (streams.length === 0) {
            try {
                const kkSlug = await findKkphimSlug(movie);
                if (kkSlug) {
                    const kkId = targetEp ? `kkphim:${kkSlug}:1:${targetEp}` : `kkphim:${kkSlug}`;
                    const direct = await kkphim.getStream(kkId, type);
                    direct.forEach(s => streams.push(Object.assign({}, s, { name: s.name.replace('KKPhim', 'NguonC (CDN HLS)') })));
                }
            } catch (e) {
                console.error('[NguonC KKPhim Fallback Error]:', e.message);
            }
        }

        // Last resort: let the user open NguonC's own player in a browser
        if (streams.length === 0) {
            embeds.forEach(e => streams.push({
                name: `🌐 NguonC • ${e.label}`,
                title: `${e.epTitle}\nMở trình phát NguonC trên trình duyệt`,
                externalUrl: e.url
            }));
        }
        return streams;
    } catch (err) {
        console.error('[NguonC Stream Error]:', err.message);
        return [];
    }
}

module.exports = { getCatalog, getMeta, getStream, matchImdb, setVnFetchText, debugEmbeds };
