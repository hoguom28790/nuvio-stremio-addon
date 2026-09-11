const axios = require('axios');
const cache = require('../utils/cache');

const BASE_URL = 'https://vsmov.com/api';

async function getCatalog(type, extra = {}) {
    try {
        const page = extra.skip ? Math.floor(extra.skip / 24) + 1 : 1;
        let url = '';

        if (extra.search) {
            url = `${BASE_URL}/tim-kiem?keyword=${encodeURIComponent(extra.search)}&limit=24`;
        } else {
            url = `${BASE_URL}/danh-sach/phim-moi-cap-nhat?page=${page}`;
        }

        const cacheKey = `vsmov:catalog:${type}:${JSON.stringify(extra)}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const res = await axios.get(url, {
            timeout: 10000,
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const items = res.data?.items || [];

        const metas = items.map(item => {
            return {
                id: `vsmov:${item.slug}`,
                type: type === 'series' ? 'series' : 'movie',
                name: item.name || 'Không tên',
                poster: item.poster_url || item.thumb_url || '',
                posterShape: 'poster',
                description: `${item.origin_name || ''} (${item.year || ''})\nNguồn: VSMOV 4K/HD • IMDb: ${item.imdb?.id || 'N/A'}`
            };
        });

        cache.set(cacheKey, metas, 600);
        return metas;
    } catch (err) {
        console.error('[VSMOV Catalog Error]:', err.message);
        return [];
    }
}

async function getMeta(type, id) {
    try {
        const slug = id.replace('vsmov:', '').split(':')[0];
        const cacheKey = `vsmov:meta:${slug}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const res = await axios.get(`${BASE_URL}/phim/${slug}`, {
            timeout: 10000,
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const movie = res.data?.movie;
        if (!movie) return null;

        const episodes = res.data?.episodes || [];
        const isSeries = type === 'series' || episodes.length > 1 || (episodes[0]?.server_data?.length > 1);

        const videos = [];
        if (isSeries && episodes.length > 0) {
            const serverData = episodes[0]?.server_data || [];
            serverData.forEach((ep, idx) => {
                videos.push({
                    id: `vsmov:${slug}:1:${ep.slug || idx + 1}`,
                    title: `Tập ${ep.name}`,
                    season: 1,
                    episode: idx + 1,
                    released: new Date().toISOString()
                });
            });
        }

        const meta = {
            id: `vsmov:${slug}`,
            type: isSeries ? 'series' : 'movie',
            name: movie.name,
            poster: movie.poster_url || movie.thumb_url || '',
            background: movie.thumb_url || movie.poster_url || '',
            description: (movie.content || movie.description || '').replace(/<[^>]*>?/gm, ''),
            releaseInfo: String(movie.year || ''),
            genres: (movie.category || []).map(c => c.name || c),
            cast: movie.actor || [],
            director: movie.director ? [movie.director] : [],
            videos: videos.length > 0 ? videos : undefined
        };

        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.error('[VSMOV Meta Error]:', err.message);
        return null;
    }
}

async function getStream(id, type) {
    try {
        const parts = id.replace('vsmov:', '').split(':');
        const slug = parts[0];
        const targetEpSlug = parts[2];

        const res = await axios.get(`${BASE_URL}/phim/${slug}`, {
            timeout: 10000,
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const episodes = res.data?.episodes || [];
        if (episodes.length === 0) return [];

        const streams = [];

        episodes.forEach(server => {
            const serverName = server.server_name || 'VSMOV VIP';
            const serverData = server.server_data || [];

            let targetItem = null;
            if (targetEpSlug) {
                targetItem = serverData.find(it => it.slug === targetEpSlug || it.name === targetEpSlug);
            }
            if (!targetItem) {
                targetItem = serverData[0];
            }

            if (targetItem) {
                const streamUrl = targetItem.link_m3u8 || targetItem.link_embed;
                if (streamUrl) {
                    streams.push({
                        name: `VSMOV • ${serverName}`,
                        title: `${res.data?.movie?.name || ''} - Tập ${targetItem.name}\nChất lượng: 4K/Full HD`,
                        url: streamUrl
                    });
                }
            }
        });

        return streams;
    } catch (err) {
        console.error('[VSMOV Stream Error]:', err.message);
        return [];
    }
}

module.exports = { getCatalog, getMeta, getStream };
