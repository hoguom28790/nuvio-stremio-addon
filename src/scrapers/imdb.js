const axios = require('axios');
const kkphim = require('./kkphim');
const nguonc = require('./nguonc');
const vsmov = require('./vsmov');
const cache = require('../utils/cache');
const { findBestSeasonMatch } = require('../utils/episodeHelper');

async function getCinemetaInfo(type, imdbId) {
    try {
        const cacheKey = `cinemeta:${type}:${imdbId}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const res = await axios.get(`https://v3-cinemeta.strem.io/meta/${type}/${imdbId}.json`, { timeout: 5000 });
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

async function searchWithSeason(searchFn, title, season) {
    const sNum = parseInt(season, 10) || 1;
    let queries = [];
    if (sNum > 1) {
        queries = [
            `${title} phần ${sNum}`,
            `${title} season ${sNum}`,
            `${title} ${sNum}`,
            title
        ];
    } else {
        queries = [
            `${title} phần 1`,
            `${title} season 1`,
            title
        ];
    }

    for (const q of queries) {
        try {
            const items = await searchFn(q);
            if (items && items.length > 0) {
                const match = findBestSeasonMatch(items, sNum);
                if (match) return match;
            }
        } catch (e) {
            // ignore
        }
    }
    return null;
}

async function getStream(id, type, config = {}) {
    try {
        const parts = id.split(':');
        const imdbId = parts[0];
        const season = parts[1] || '1';
        const episode = parts[2] || null;

        const movieInfo = await getCinemetaInfo(type, imdbId);
        if (!movieInfo || !movieInfo.name) return [];

        const title = movieInfo.name;
        console.log(`[IMDb Resolver] Searching streams for: "${title}" (${imdbId}) Season: ${season}, Episode: ${episode}`);

        // Check enabled sources from config
        const enabledSources = config.sources || ['kkphim', 'vsmov', 'nguonc'];
        const prefCdn = config.prefCdn !== false;
        const prefProxy = config.prefProxy !== false;

        const cdnStreams = [];
        const proxyStreams = [];

        // 1. Search KKPhim (if enabled)
        if (enabledSources.includes('kkphim') && prefCdn) {
            try {
                let bestMatch = null;
                if (type === 'series' && season) {
                    bestMatch = await searchWithSeason(async (q) => {
                        const r = await axios.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(q)}&limit=5`, { timeout: 5000 });
                        return r.data?.data?.items || [];
                    }, title, season);
                } else {
                    const kkRes = await axios.get(`https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(title)}&limit=5`, { timeout: 5000 });
                    const items = kkRes.data?.data?.items || [];
                    if (items.length > 0) bestMatch = items[0];
                }

                if (bestMatch) {
                    const kkId = (type === 'series' && episode) 
                        ? `kkphim:${bestMatch.slug}:${season}:${episode}`
                        : `kkphim:${bestMatch.slug}`;
                    const kkStreams = await kkphim.getStream(kkId, type);
                    cdnStreams.push(...kkStreams);
                }
            } catch (e) {
                // ignore
            }
        }

        // 2. Search VSMOV (if enabled)
        if (enabledSources.includes('vsmov')) {
            try {
                let bestMatch = null;
                if (type === 'series' && season) {
                    bestMatch = await searchWithSeason(async (q) => {
                        const r = await axios.get(`https://vsmov.com/api/tim-kiem?keyword=${encodeURIComponent(q)}&limit=5`, { timeout: 5000 });
                        return r.data?.items || [];
                    }, title, season);
                } else {
                    const vsRes = await axios.get(`https://vsmov.com/api/tim-kiem?keyword=${encodeURIComponent(title)}&limit=5`, { timeout: 5000 });
                    const items = vsRes.data?.items || [];
                    if (items.length > 0) bestMatch = items[0];
                }

                if (bestMatch) {
                    const vsId = (type === 'series' && episode)
                        ? `vsmov:${bestMatch.slug}:${season}:${episode}`
                        : `vsmov:${bestMatch.slug}`;
                    const vsStreams = await vsmov.getStream(vsId, type);
                    vsStreams.forEach(s => {
                        if (s.name.includes('[CDN]') && prefCdn) {
                            cdnStreams.push(s);
                        } else if (!s.name.includes('[CDN]') && prefProxy) {
                            proxyStreams.push(s);
                        }
                    });
                }
            } catch (e) {
                // ignore
            }
        }

        // 3. Search NguonC (if enabled and proxy allowed)
        if (enabledSources.includes('nguonc') && prefProxy) {
            try {
                let bestMatch = null;
                if (type === 'series' && season) {
                    bestMatch = await searchWithSeason(async (q) => {
                        const r = await axios.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(q)}&page=1`, { timeout: 5000 });
                        return r.data?.items || [];
                    }, title, season);
                } else {
                    const ncRes = await axios.get(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(title)}&page=1`, { timeout: 5000 });
                    const items = ncRes.data?.items || [];
                    if (items.length > 0) bestMatch = items[0];
                }

                if (bestMatch) {
                    const ncId = (type === 'series' && episode)
                        ? `nguonc:${bestMatch.slug}:${season}:${episode}`
                        : `nguonc:${bestMatch.slug}`;
                    const ncStreams = await nguonc.getStream(ncId, type);
                    proxyStreams.push(...ncStreams);
                }
            } catch (e) {
                // ignore
            }
        }

        return [...cdnStreams, ...proxyStreams];
    } catch (err) {
        console.error('[IMDb Resolver Error]:', err.message);
        return [];
    }
}

module.exports = { getStream };
