const axios = require('axios');
const cache = require('../utils/cache');
const { parseFilter } = require('../utils/filterHelper');
const { findEpisode } = require('../utils/episodeHelper');

const BASE_URL = 'https://phimapi.com';
const CDN_URL = 'https://phimimg.com';

function formatPoster(path) {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const cleanPath = path.replace(/^\/?uploads\/movies\//, '');
    return `${CDN_URL}/uploads/movies/${cleanPath}`;
}

async function getCatalog(type, extra = {}) {
    try {
        const page = extra.skip ? Math.floor(extra.skip / 24) + 1 : 1;
        let url = '';

        if (extra.search) {
            url = `${BASE_URL}/v1/api/tim-kiem?keyword=${encodeURIComponent(extra.search)}&limit=24`;
        } else if (extra.genre) {
            const filter = parseFilter(extra.genre);
            if (filter) {
                if (filter.filterType === 'genre') {
                    url = `${BASE_URL}/v1/api/the-loai/${filter.slug}?page=${page}`;
                } else if (filter.filterType === 'country') {
                    url = `${BASE_URL}/v1/api/quoc-gia/${filter.slug}?page=${page}`;
                } else if (filter.filterType === 'year') {
                    url = `${BASE_URL}/v1/api/nam/${filter.slug}?page=${page}`;
                } else if (filter.filterType === 'category') {
                    url = `${BASE_URL}/v1/api/danh-sach/${filter.slug}?page=${page}`;
                } else if (filter.filterType === 'decade') {
                    url = `${BASE_URL}/v1/api/nam/${filter.slug}?page=${page}`;
                } else if (filter.filterType === 'search') {
                    url = `${BASE_URL}/v1/api/tim-kiem?keyword=${encodeURIComponent(filter.value)}&limit=24`;
                }
            }
        }

        if (!url) {
            if (type === 'series') {
                url = `${BASE_URL}/v1/api/danh-sach/phim-bo?page=${page}`;
            } else {
                url = `${BASE_URL}/v1/api/danh-sach/phim-le?page=${page}`;
            }
        }

        const cacheKey = `kkphim:catalog:${type}:${JSON.stringify(extra)}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const res = await axios.get(url, { timeout: 10000 });
        const items = res.data?.data?.items || res.data?.items || [];
        const cdnDomain = res.data?.data?.APP_DOMAIN_CDN_IMAGE || CDN_URL;

        const metas = items.map(item => {
            const poster = item.poster_url?.startsWith('http') 
                ? item.poster_url 
                : `${cdnDomain}/uploads/movies/${(item.poster_url || '').replace(/^\/?uploads\/movies\//, '')}`;
            
            return {
                id: `kkphim:${item.slug}`,
                type: type === 'series' ? 'series' : 'movie',
                name: item.name || 'Không tên',
                poster: poster,
                posterShape: 'poster',
                description: `${item.origin_name || ''} (${item.year || ''})\n⚡ Server: CDN Tốc Độ Cao\n🎞️ Chất lượng: ${item.quality || 'HD'} • ${item.lang || 'Vietsub'}`
            };
        });

        cache.set(cacheKey, metas, 600);
        return metas;
    } catch (err) {
        console.error('[KKPhim Catalog Error]:', err.message);
        return [];
    }
}

async function getMeta(type, id) {
    try {
        const slug = id.replace('kkphim:', '').split(':')[0];
        const cacheKey = `kkphim:meta:${slug}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const res = await axios.get(`${BASE_URL}/phim/${slug}`, { timeout: 10000 });
        const movie = res.data?.movie;
        if (!movie) return null;

        const episodes = res.data?.episodes || [];
        const isSeries = type === 'series' || movie.type === 'series' || movie.type === 'hoathinh';

        const videos = [];
        if (isSeries && episodes.length > 0) {
            const serverData = episodes[0]?.server_data || [];
            serverData.forEach((ep, index) => {
                videos.push({
                    id: `kkphim:${slug}:1:${ep.slug || index + 1}`,
                    title: `Tập ${ep.name}`,
                    season: 1,
                    episode: index + 1,
                    released: new Date().toISOString()
                });
            });
        }

        const meta = {
            id: `kkphim:${slug}`,
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
        console.error('[KKPhim Meta Error]:', err.message);
        return null;
    }
}

async function getStream(id, type) {
    try {
        // id format: kkphim:slug or kkphim:slug:season:episode
        const parts = id.replace('kkphim:', '').split(':');
        const slug = parts[0];
        const targetEp = parts[2] || (type === 'series' ? parts[1] : null);

        const res = await axios.get(`${BASE_URL}/phim/${slug}`, { timeout: 10000 });
        const episodes = res.data?.episodes || [];
        if (episodes.length === 0) return [];

        const streams = [];

        episodes.forEach(server => {
            const serverName = server.server_name || 'VIP';
            const serverData = server.server_data || [];

            const targetItem = findEpisode(serverData, targetEp);

            if (targetItem && targetItem.link_m3u8) {
                streams.push({
                    name: `⚡ [CDN] KKPhim • ${serverName}`,
                    title: `${res.data?.movie?.name || ''} - Tập ${targetItem.name}\n⚡ Định tuyến: CDN Tốc Độ Cao (Direct HLS)\n🎞️ Độ phân giải: 1080p Full HD • Vietsub`,
                    url: targetItem.link_m3u8,
                    behaviorHints: {
                        notWebReady: false
                    }
                });
            }
        });

        return streams;
    } catch (err) {
        console.error('[KKPhim Stream Error]:', err.message);
        return [];
    }
}

module.exports = { getCatalog, getMeta, getStream };
