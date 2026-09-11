const axios = require('axios');
const cache = require('../utils/cache');

const BASE_URL = 'https://phim.nguonc.com/api';

async function getCatalog(type, extra = {}) {
    try {
        const page = extra.skip ? Math.floor(extra.skip / 10) + 1 : 1;
        let url = '';

        if (extra.search) {
            url = `${BASE_URL}/films/search?keyword=${encodeURIComponent(extra.search)}&page=1`;
        } else if (type === 'series') {
            url = `${BASE_URL}/films/danh-sach/phim-bo?page=${page}`;
        } else {
            url = `${BASE_URL}/films/danh-sach/phim-le?page=${page}`;
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
                description: `${item.original_name || ''} (${item.year || ''})\nNguồn: NguonC • Chất lượng: ${item.quality || 'HD'}`
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
        const targetEpSlug = parts[2];

        const res = await axios.get(`${BASE_URL}/film/${slug}`, { timeout: 10000 });
        const movie = res.data?.movie;
        if (!movie || !movie.episodes) return [];

        const streams = [];

        movie.episodes.forEach(server => {
            const serverName = server.server_name || 'NguonC';
            const items = server.items || [];

            let targetItem = null;
            if (targetEpSlug) {
                targetItem = items.find(it => it.slug === targetEpSlug || it.name === targetEpSlug);
            }
            if (!targetItem) {
                targetItem = items[0];
            }

            if (targetItem && targetItem.embed) {
                streams.push({
                    name: `NguonC • ${serverName}`,
                    title: `${movie.name} - Tập ${targetItem.name}\nNguồn phát: StreamC`,
                    url: targetItem.embed
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
