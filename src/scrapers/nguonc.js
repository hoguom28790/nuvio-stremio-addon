const axios = require('axios');
const cache = require('../utils/cache');
const { parseFilter } = require('../utils/filterHelper');
const { findEpisode } = require('../utils/episodeHelper');


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

async function getStream(id, type) {
    try {
        const parts = id.replace('nguonc:', '').split(':');
        const slug = parts[0];
        const targetEp = parts[2] || (type === 'series' ? parts[1] : null);

        const res = await axios.get(`${BASE_URL}/film/${slug}`, HTTP_OPTS);
        const movie = res.data?.movie;
        if (!movie || !Array.isArray(movie.episodes)) return [];

        const streams = [];
        for (const server of movie.episodes) {
            const item = findEpisode(server.items || [], targetEp);
            // NguonC's own HLS link; `embed` pages are not playable in Stremio/Nuvio
            const m3u8 = item && (item.m3u8 || (/\.m3u8(\?|$)/i.test(item.embed || '') ? item.embed : ''));
            if (!m3u8) continue;
            streams.push({
                name: `⚡ [CDN] NguonC • ${server.server_name || 'VIP'}`,
                title: `${movie.name || ''}${targetEp && item.name ? ` - Tập ${item.name}` : ''}\n⚡ NguonC HLS trực tiếp`,
                url: m3u8,
                behaviorHints: { notWebReady: false }
            });
        }
        return streams;
    } catch (err) {
        console.error('[NguonC Stream Error]:', err.message);
        return [];
    }
}

module.exports = { getCatalog, getMeta, getStream, matchImdb };
