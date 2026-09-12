const axios = require('axios');
const cache = require('../utils/cache');
const { parseFilter } = require('../utils/filterHelper');
const { findEpisode } = require('../utils/episodeHelper');

const BASE_URL = 'https://phim.nguonc.com/api';

async function getCatalog(type, extra = {}) {
    try {
        const page = extra.skip ? Math.floor(extra.skip / 10) + 1 : 1;
        let url = '';

        if (extra.search) {
            url = `${BASE_URL}/films/search?keyword=${encodeURIComponent(extra.search)}&page=1`;
        } else if (extra.genre) {
            const filter = parseFilter(extra.genre);
            if (filter) {
                if (filter.filterType === 'genre') {
                    url = `${BASE_URL}/films/the-loai/${filter.slug}?page=${page}`;
                } else if (filter.filterType === 'country') {
                    url = `${BASE_URL}/films/quoc-gia/${filter.slug}?page=${page}`;
                } else if (filter.filterType === 'category') {
                    if (filter.slug === 'phim-moi-cap-nhat') {
                        url = `${BASE_URL}/films/phim-moi-cap-nhat?page=${page}`;
                    } else {
                        url = `${BASE_URL}/films/danh-sach/${filter.slug}?page=${page}`;
                    }
                } else if (filter.filterType === 'year' || filter.filterType === 'search') {
                    url = `${BASE_URL}/films/search?keyword=${encodeURIComponent(filter.value)}&page=1`;
                }
            }
        }

        if (!url) {
            if (type === 'series') {
                url = `${BASE_URL}/films/danh-sach/phim-bo?page=${page}`;
            } else {
                url = `${BASE_URL}/films/danh-sach/phim-le?page=${page}`;
            }
        }

        const cacheKey = `nguonc:catalog:${type}:${JSON.stringify(extra)}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const res = await axios.get(url, { timeout: 10000 });
        const items = res.data?.items || [];

        const metas = items.map(item => {
            return {
                id: `nguonc:${item.slug}`,
                type: type === 'series' ? 'series' : 'movie',
                name: item.name || 'Không tên',
                poster: item.poster_url || item.thumb_url || '',
                posterShape: 'poster',
                description: `${item.original_name || ''} (${item.year || ''})\n🛡️ Server: Máy chủ trung gian (Proxy / StreamC)\n🎞️ Chất lượng: ${item.quality || 'HD'}`
            };
        });

        cache.set(cacheKey, metas, 600);
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

        const res = await axios.get(`${BASE_URL}/film/${slug}`, { timeout: 10000 });
        const movie = res.data?.movie;
        if (!movie) return null;

        const episodes = movie.episodes || [];
        const isSeries = type === 'series' || (movie.total_episodes && movie.total_episodes !== '1');

        const videos = [];
        if (isSeries && episodes.length > 0) {
            const firstServerItems = episodes[0]?.items || [];
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

        const meta = {
            id: `nguonc:${slug}`,
            type: isSeries ? 'series' : 'movie',
            name: movie.name,
            poster: movie.poster_url || movie.thumb_url || '',
            background: movie.thumb_url || movie.poster_url || '',
            description: (movie.description || '').replace(/<[^>]*>?/gm, ''),
            releaseInfo: String(movie.year || ''),
            genres: (movie.category ? Object.values(movie.category) : []).map(c => c.name || c),
            director: movie.director ? [movie.director] : [],
            cast: movie.casts ? [movie.casts] : [],
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

        const res = await axios.get(`${BASE_URL}/film/${slug}`, { timeout: 10000 });
        const movie = res.data?.movie;
        if (!movie || !movie.episodes) return [];

        const streams = [];

        movie.episodes.forEach(server => {
            const serverName = server.server_name || 'NguonC';
            const items = server.items || [];

            const targetItem = findEpisode(items, targetEp);

            if (targetItem && targetItem.embed) {
                streams.push({
                    name: `🛡️ [Proxy] NguonC • ${serverName}`,
                    title: `${movie.name} - Tập ${targetItem.name}\n🛡️ Định tuyến: Máy chủ trung gian (Proxy / StreamC)\n📌 Khuyên dùng: Dùng khi các nguồn CDN bị nghẽn`,
                    url: targetItem.embed,
                    behaviorHints: {
                        notWebReady: true,
                        proxyHeaders: {
                            request: {
                                "Referer": "https://phim.nguonc.com/",
                                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
                            }
                        }
                    }
                });
            }
        });

        return streams;
    } catch (err) {
        console.error('[NguonC Stream Error]:', err.message);
        return [];
    }
}

module.exports = { getCatalog, getMeta, getStream };
