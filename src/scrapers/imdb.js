const axios = require('axios');
const kkphim = require('./kkphim');
const nguonc = require('./nguonc');
const vsmov = require('./vsmov');
const cache = require('../utils/cache');

async function getCinemetaInfo(type, imdbId) {
    try {
        const cacheKey = `cinemeta:${type}:${imdbId}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const res = await axios.get(`https://v3-cinemeta.strem.io/meta/${type}/${imdbId}.json`, { timeout: 4000 });
        const meta = res.data?.meta;
        if (meta) {
            const info = { name: meta.name, year: meta.year };
            cache.set(cacheKey, info, 86400); // 1 day
            return info;
        }
    } catch (e) {
        // Cinemeta failed or timeout
    }
    return null;
}

async function getStream(id, type) {
    try {
        // id format: tt1234567 or tt1234567:season:episode
        const parts = id.split(':');
        const imdbId = parts[0];
        const season = parts[1];
        const episode = parts[2];

        const movieInfo = await getCinemetaInfo(type, imdbId);
        if (!movieInfo || !movieInfo.name) return [];

        const title = movieInfo.name;
        console.log(`[IMDb Resolver] Searching streams for: "${title}" (${imdbId})`);

        const allStreams = [];

        // 1. Search KKPhim
        try {
            const kkRes = await axios.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(title)}&limit=5`, { timeout: 5000 });
            const items = kkRes.data?.data?.items || [];
            if (items.length > 0) {
                const bestMatch = items[0];
                const kkId = (type === 'series' && episode) 
                    ? `kkphim:${bestMatch.slug}:${season || 1}:${episode}`
                    : `kkphim:${bestMatch.slug}`;
                const kkStreams = await kkphim.getStream(kkId, type);
                allStreams.push(...kkStreams);
            }
        } catch (e) {
            // ignore
        }

        // 2. Search NguonC
        try {
            const ncRes = await axios.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(title)}&page=1`, { timeout: 5000 });
            const items = ncRes.data?.items || [];
            if (items.length > 0) {
                const bestMatch = items[0];
                const ncId = (type === 'series' && episode)
                    ? `nguonc:${bestMatch.slug}:${season || 1}:${episode}`
                    : `nguonc:${bestMatch.slug}`;
                const ncStreams = await nguonc.getStream(ncId, type);
                allStreams.push(...ncStreams);
            }
        } catch (e) {
            // ignore
        }

        return allStreams;
    } catch (err) {
        console.error('[IMDb Resolver Error]:', err.message);
        return [];
    }
}

module.exports = { getStream };
