// Shared client for the phimapi.com family (KKPhim, CLB Phim Xưa, HH3D/YAN/STP). Every consumer calls this module
// directly, so none of them depends on the KKPhim scraper (or on KKPhim being enabled).
const axios = require('axios');
const cache = require('../utils/cache');
const { parseFilter } = require('../utils/filterHelper');
const { findEpisode } = require('../utils/episodeHelper');

const BASE_URL = 'https://phimapi.com';
const CDN_URL = 'https://phimimg.com';
const LIMIT = 24;
const DECADE_LIMIT = 6; // per year; ten years fetched in parallel

function formatPoster(path, cdnDomain = CDN_URL) {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    const clean = path.replace(/^\/+/, '');
    const domain = (cdnDomain || CDN_URL).replace(/\/+$/, '');
    if (clean.startsWith('upload/') || clean.startsWith('uploads/')) return `${domain}/${clean}`;
    return `${domain}/uploads/movies/${clean}`;
}

/**
 * Build the list request(s) for a catalog call. `opts.fallbackPath` is the default browse path,
 * `opts.category(slug)` may remap a "Danh mục" slug to another path.
 */
function buildRequests(extra, skip, opts) {
    const filter = !extra.search && extra.genre ? parseFilter(extra.genre) : null;
    const isDecade = filter && filter.filterType === 'decade';
    const size = isDecade ? DECADE_LIMIT * 10 : LIMIT;
    const page = Math.floor(skip / size) + 1;
    const q = (path, limit = LIMIT) => `${BASE_URL}${path}${path.includes('?') ? '&' : '?'}page=${page}&limit=${limit}`;

    if (extra.search) return [q(`/v1/api/tim-kiem?keyword=${encodeURIComponent(extra.search.trim())}`)];
    if (filter) {
        switch (filter.filterType) {
            case 'genre': return [q(`/v1/api/the-loai/${filter.slug}`)];
            case 'country': return [q(`/v1/api/quoc-gia/${filter.slug}`)];
            case 'year': return [q(`/v1/api/nam/${filter.slug}`)];
            case 'decade': {
                const start = parseInt(filter.slug, 10);
                return Array.from({ length: 10 }, (_, i) => q(`/v1/api/nam/${start + i}`, DECADE_LIMIT));
            }
            case 'category': return [q(opts.category ? opts.category(filter.slug) : `/v1/api/danh-sach/${filter.slug}`)];
            case 'search': return [q(`/v1/api/tim-kiem?keyword=${encodeURIComponent(filter.value)}`)];
        }
    }
    return [q(opts.fallbackPath)];
}

/** Catalog for any phimapi-based source. `describe(item)` builds the description line(s). */
async function getCatalog(prefix, type, extra = {}, opts = {}) {
    try {
        const skip = parseInt(extra.skip, 10) || 0;
        const cacheKey = `${prefix}:catalog:${type}:${JSON.stringify(extra)}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const urls = buildRequests(extra, skip, opts);
        const responses = await Promise.all(urls.map(u =>
            axios.get(u, { timeout: 10000 }).then(r => r.data).catch(() => null)));

        const seen = new Set();
        const metas = [];
        for (const data of responses) {
            if (!data) continue;
            const items = data.data?.items || data.items || [];
            const cdn = data.data?.APP_DOMAIN_CDN_IMAGE || CDN_URL;
            for (const item of items) {
                if (!item || !item.slug || seen.has(item.slug)) continue;
                seen.add(item.slug);
                metas.push({
                    id: `${prefix}:${item.slug}`,
                    type: type === 'series' ? 'series' : 'movie',
                    name: item.name || 'Không tên',
                    poster: formatPoster(item.poster_url || item.thumb_url || '', cdn),
                    posterShape: 'poster',
                    description: opts.describe ? opts.describe(item) : (item.origin_name || '')
                });
            }
        }
        if (metas.length) cache.set(cacheKey, metas, 600);
        return metas;
    } catch (err) {
        console.error(`[${prefix} Catalog Error]:`, err.message);
        return [];
    }
}

// The server (language/version) with the most episodes drives the episode list
function mainServer(episodes) {
    return (episodes || []).reduce((best, s) =>
        ((s.server_data || []).length > ((best && best.server_data) || []).length ? s : best), null);
}

async function getMeta(prefix, type, id) {
    try {
        const slug = id.slice(id.indexOf(':') + 1).split(':')[0];
        const cacheKey = `${prefix}:meta:${slug}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const res = await axios.get(`${BASE_URL}/phim/${slug}`, { timeout: 10000 });
        const movie = res.data?.movie;
        if (!movie) return null;

        const episodes = res.data?.episodes || [];
        const serverData = (mainServer(episodes) || {}).server_data || [];
        const isSeries = type === 'series' || movie.type === 'series' || movie.type === 'tvshows' ||
            (movie.type !== 'single' && serverData.length > 1);

        const videos = isSeries ? serverData.map((ep, index) => ({
            id: `${prefix}:${slug}:1:${ep.slug || index + 1}`,
            title: `Tập ${ep.name}`,
            season: 1,
            episode: index + 1,
            released: new Date(Date.UTC(2000, 0, 1) + index * 86400000).toISOString()
        })) : [];

        const meta = {
            id: `${prefix}:${slug}`,
            type: isSeries ? 'series' : 'movie',
            name: movie.name,
            poster: formatPoster(movie.poster_url),
            background: formatPoster(movie.thumb_url),
            description: (movie.content || '').replace(/<[^>]*>?/gm, ''),
            releaseInfo: String(movie.year || ''),
            genres: (movie.category || []).map(c => c.name),
            cast: movie.actor || [],
            director: movie.director ? [movie.director] : [],
            videos: videos.length > 0 ? videos : undefined
        };

        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.error(`[${prefix} Meta Error]:`, err.message);
        return null;
    }
}

/** Direct CDN HLS streams, one per server that has the requested episode. */
// Base URL of this addon for the ad-filter endpoint (config.host has no protocol on the Worker)
function hostBase(host) {
    if (!host) return '';
    if (host.includes('://')) return host;
    return `${/^(localhost|127\.|\[::1\])/.test(host) ? 'http' : 'https'}://${host}`;
}

// `opts.cleanHost`: when set (KKPhim), every server also gets a "[Lọc QC]" stream that cuts the SSAI ad blocks
// (3:00 / 15:00) out of the playlist; the unfiltered CDN link stays as a fallback.
async function getStream(prefix, brand, id, type, opts = {}) {
    try {
        const parts = id.slice(id.indexOf(':') + 1).split(':');
        const slug = parts[0];
        const targetEp = parts[2] || (type === 'series' ? parts[1] : null);

        const res = await axios.get(`${BASE_URL}/phim/${slug}`, { timeout: 10000 });
        const episodes = res.data?.episodes || [];
        const movieName = res.data?.movie?.name || '';
        const streams = [];

        for (const server of episodes) {
            const item = findEpisode(server.server_data || [], targetEp);
            if (!item || !item.link_m3u8) continue;
            const base = hostBase(opts.cleanHost);
            if (base) {
                streams.push({
                    name: `🛡️ [CDN] ${brand} • ${server.server_name || 'VIP'} [Lọc QC]`,
                    title: `${movieName}${targetEp && item.name ? ` - Tập ${item.name}` : ''}\n🛡️ Đã cắt quảng cáo 3:00 & 15:00`,
                    url: `${base}/kkphim/clean.m3u8?url=${encodeURIComponent(item.link_m3u8)}`,
                    behaviorHints: { notWebReady: false }
                });
            }
            streams.push({
                name: `⚡ [CDN] ${brand} • ${server.server_name || 'VIP'}`,
                title: `${movieName}${targetEp && item.name ? ` - Tập ${item.name}` : ''}\n⚡ CDN HLS trực tiếp`,
                url: item.link_m3u8,
                behaviorHints: { notWebReady: false }
            });
        }
        return streams;
    } catch (err) {
        console.error(`[${prefix} Stream Error]:`, err.message);
        return [];
    }
}

module.exports = { BASE_URL, CDN_URL, formatPoster, buildRequests, getCatalog, getMeta, getStream };
