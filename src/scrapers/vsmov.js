const axios = require('axios');
const cache = require('../utils/cache');
const { parseFilter } = require('../utils/filterHelper');
const { findEpisode } = require('../utils/episodeHelper');

const BASE_URL = 'https://vsmov.com/api';

async function getCatalog(type, extra = {}) {
    try {
        const page = extra.skip ? Math.floor(extra.skip / 24) + 1 : 1;
        let url = '';

        if (extra.search) {
            url = `${BASE_URL}/tim-kiem?keyword=${encodeURIComponent(extra.search)}&limit=24`;
        } else if (extra.genre) {
            const filter = parseFilter(extra.genre);
            if (filter) {
                if (filter.filterType === 'genre') {
                    url = `${BASE_URL}/the-loai/${filter.slug}?page=${page}`;
                } else if (filter.filterType === 'category') {
                    if (filter.slug === 'phim-le') {
                        url = `${BASE_URL}/danh-sach/phim-le?page=${page}`;
                    } else if (filter.slug === 'phim-bo') {
                        url = `${BASE_URL}/danh-sach/phim-bo?page=${page}`;
                    } else if (filter.slug === 'phim-4k') {
                        url = `${BASE_URL}/tim-kiem?keyword=4k&limit=24`;
                    } else {
                        url = `${BASE_URL}/danh-sach/phim-moi-cap-nhat?page=${page}`;
                    }
                } else if (filter.filterType === 'country' || filter.filterType === 'year' || filter.filterType === 'search') {
                    url = `${BASE_URL}/tim-kiem?keyword=${encodeURIComponent(filter.value)}&limit=24`;
                }
            }
        }

        if (!url) {
            if (type === 'series') {
                url = `${BASE_URL}/danh-sach/phim-bo?page=${page}`;
            } else if (type === 'movie') {
                url = `${BASE_URL}/danh-sach/phim-le?page=${page}`;
            } else {
                url = `${BASE_URL}/danh-sach/phim-moi-cap-nhat?page=${page}`;
            }
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
                description: `${item.origin_name || ''} (${item.year || ''})\n⚡ Nguồn: VSMOV 4K/HD • IMDb: ${item.imdb?.id || 'N/A'}`
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

async function getStream(id, type, host = 'hophimaddon.vercel.app') {
    try {
        const parts = id.replace('vsmov:', '').split(':');
        const slug = parts[0];
        const targetEp = parts[2] || (type === 'series' ? parts[1] : null);

        const res = await axios.get(`${BASE_URL}/phim/${slug}`, {
            timeout: 10000,
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const episodes = res.data?.episodes || [];
        if (episodes.length === 0) return [];

        const movieName = res.data?.movie?.name || 'Phim';
        const hostBase = host.includes('://') ? host : `https://${host}`;

        const streams = [];

        episodes.forEach(server => {
            const serverName = (server.server_name || 'VSMOV VIP').replace(/[\r\n\t]+/g, ' ').trim();
            const serverData = server.server_data || [];

            const targetItem = findEpisode(serverData, targetEp);

            if (targetItem) {
                const epTitle = targetItem.name || 'Full';

                // 1. Direct m3u8 if available
                if (targetItem.link_m3u8) {
                    streams.push({
                        name: `⚡ [CDN] VSMOV • ${serverName}`,
                        title: `${movieName} - Tập ${epTitle}\n⚡ Định tuyến: CDN Tốc Độ Cao (Direct HLS 4K)\n🎞️ Chất lượng: 4K / Full HD`,
                        url: targetItem.link_m3u8,
                        behaviorHints: { notWebReady: false }
                    });
                }

                // 2. Parse link_embed (format: https://{host}/video/{hash})
                if (targetItem.link_embed) {
                    const embedMatch = targetItem.link_embed.match(/https?:\/\/([^\/]+)\/video\/([a-f0-9-]+)/i);
                    if (embedMatch) {
                        const originHost = embedMatch[1];
                        const videoHash = embedMatch[2];
                        const masterM3u8Url = `https://${originHost}/stream/${videoHash}/master.m3u8`;

                        // Primary stream: Unwrapped through Worker (Stremio Web & Desktop 100% compatible)
                        streams.push({
                            name: `⚡ [Full HD 1080p] VSMOV • ${serverName}`,
                            title: `${movieName} - Tập ${epTitle}\n⚡ Định tuyến: VSMOV CDN Tốc Độ Cao (1080p/4K)\n🎞️ Phát mượt mà • Không quảng cáo`,
                            url: `${hostBase}/vsmov/stream/${videoHash}/master.m3u8?origin=${encodeURIComponent(originHost)}`,
                            behaviorHints: {
                                notWebReady: false,
                                bingeGroup: `vsmov-${videoHash}`,
                                proxyHeaders: {
                                    request: {
                                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                                        'Referer': 'https://vsmov.com/'
                                    }
                                }
                            }
                        });

                        // Secondary stream: Direct CDN stream
                        streams.push({
                            name: `⚡ [Direct CDN] VSMOV • ${serverName}`,
                            title: `${movieName} - Tập ${epTitle}\n⚡ Luồng trực tiếp CDN gốc`,
                            url: masterM3u8Url,
                            behaviorHints: {
                                notWebReady: false,
                                bingeGroup: `vsmov-direct-${videoHash}`,
                                proxyHeaders: {
                                    request: {
                                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                                        'Referer': 'https://vsmov.com/'
                                    }
                                }
                            }
                        });
                    }
                }
            }
        });

        return streams;
    } catch (err) {
        console.error('[VSMOV Stream Error]:', err.message);
        return [];
    }
}

/**
 * Proxy M3U8 playlist and unwrap PNG-wrapped segments for VSMOV
 */
async function getM3u8(originHost, videoHash, host = 'hophimaddon.vercel.app') {
    const hostBase = host.includes('://') ? host : `https://${host}`;
    const cacheKey = `vsmov:m3u8:${videoHash}:${host}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const masterUrl = `https://${originHost}/stream/${videoHash}/master.m3u8`;
    const res = await axios.get(masterUrl, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Referer': 'https://vsmov.com/'
        },
        timeout: 10000
    });

    let content = res.data;
    if (typeof content === 'string') {
        const rawProxy = process.env.SEGMENT_PROXY_URL;
        const segmentBase = rawProxy ? rawProxy.replace(/\/+$/, '') : `${hostBase}/vsmov/segment.ts`;
        const separator = segmentBase.includes('?') ? '&' : '?';
        const lines = content.split('\n');
        const rewritten = lines.map(line => {
            const trimmed = line.trim();
            if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
                return `${segmentBase}${separator}url=${encodeURIComponent(trimmed)}`;
            }
            return line;
        });
        content = rewritten.join('\n');
    }

    if (content) {
        cache.set(cacheKey, content, 900); // 15 mins cache
    }
    return content;
}

module.exports = { getCatalog, getMeta, getStream, getM3u8 };
