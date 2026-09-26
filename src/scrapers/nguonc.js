const axios = require('axios');
const cache = require('../utils/cache');
const { parseFilter } = require('../utils/filterHelper');
const { findEpisode } = require('../utils/episodeHelper');
const kkphim = require('./kkphim');


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
        const totalEpNum = parseInt(movie.total_episodes, 10);
        const isSeries = type === 'series' || (totalEpNum && totalEpNum > 1);

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
            videos: videos.length > 0 ? videos : undefined
        };

        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.error('[NguonC Meta Error]:', err.message);
        return null;
    }

}

async function getStream(id, type, host = 'hophimaddon.hophim-4g6qbubt.workers.dev') {
    try {
        const parts = id.replace('nguonc:', '').split(':');
        const slug = parts[0];
        const targetEp = parts[2] || (type === 'series' ? parts[1] : null);

        const res = await axios.get(`${BASE_URL}/film/${slug}`, { timeout: 10000 });
        const movie = res.data?.movie;
        if (!movie || !movie.episodes) return [];

        const streams = [];

        // 1. Cross-resolve direct HLS CDN stream from KKPhim or VSMOV
        try {
            const searchQueries = [movie.original_name, movie.name].filter(Boolean);
            let match = null;
            let matchSource = null;

            // Check KKPhim first
            for (const q of searchQueries) {
                const results = await kkphim.getCatalog(type, { search: q });
                if (results && results.length > 0) {
                    match = results[0];
                    matchSource = 'kkphim';
                    break;
                }
            }

            if (match && matchSource === 'kkphim') {
                const kkSlug = match.id.replace('kkphim:', '').split(':')[0];
                const kkId = targetEp ? `kkphim:${kkSlug}:1:${targetEp}` : `kkphim:${kkSlug}`;
                const directStreams = await kkphim.getStream(kkId, type);
                directStreams.forEach(s => {
                    streams.push({
                        name: s.name.replace('KKPhim', 'NguonC (CDN HLS)'),
                        title: s.title,
                        url: s.url,
                        behaviorHints: {
                            notWebReady: false
                        }
                    });
                });
            }
        } catch (e) {
            console.error('[NguonC Cross-source Error]:', e.message);
        }

        return streams;
    } catch (err) {
        console.error('[NguonC Stream Error]:', err.message);
        return [];
    }
}

module.exports = { getCatalog, getMeta, getStream };
