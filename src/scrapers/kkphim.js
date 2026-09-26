const axios = require('axios');
const cache = require('../utils/cache');
const { parseFilter } = require('../utils/filterHelper');
const { findEpisode } = require('../utils/episodeHelper');

const BASE_URL = 'https://phimapi.com';
const CDN_URL = 'https://phimimg.com';

function formatPoster(path, cdnDomain = CDN_URL) {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    const clean = path.replace(/^\/+/, '');
    const domain = (cdnDomain || CDN_URL).replace(/\/+$/, '');
    if (clean.startsWith('upload/') || clean.startsWith('uploads/')) {
        return `${domain}/${clean}`;
    }
    return `${domain}/uploads/movies/${clean}`;
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
            const rawPoster = item.poster_url || item.thumb_url || '';
            const poster = formatPoster(rawPoster, cdnDomain);
            
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

function cleanM3u8(content, baseUrl) {
    const lines = content.split('\n');
    const cleaned = [];
    let skippingAd = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        if (trimmed.startsWith('#EXT-X-DISCONTINUITY')) {
            // Lookahead to see if ad segments follow (/v8/ or segment_ or convertv8/)
            let isAdAhead = false;
            for (let j = i + 1; j < Math.min(lines.length, i + 25); j++) {
                const next = lines[j].trim();
                if (next.includes('/v8/') || next.includes('segment_00') || next.includes('convertv8/')) {
                    isAdAhead = true;
                    break;
                }
                if (next.startsWith('#EXTINF:') && !lines[j + 1]?.includes('/v8/') && !lines[j + 1]?.includes('convertv8/')) {
                    break;
                }
            }

            if (isAdAhead) {
                skippingAd = true;
                continue;
            } else if (skippingAd) {
                // Check if ad is STILL ahead
                let stillAdAhead = false;
                for (let j = i + 1; j < Math.min(lines.length, i + 15); j++) {
                    const next = lines[j].trim();
                    if (next.includes('/v8/') || next.includes('segment_00') || next.includes('convertv8/')) {
                        stillAdAhead = true;
                        break;
                    }
                }
                if (!stillAdAhead) {
                    skippingAd = false;
                    continue;
                } else {
                    continue;
                }
            }
        }

        if (skippingAd) {
            continue;
        }

        // Safety check: if line itself has ad pattern
        if (trimmed.includes('/v8/') || trimmed.includes('convertv8/')) {
            if (cleaned.length > 0 && cleaned[cleaned.length - 1].startsWith('#EXTINF:')) {
                cleaned.pop();
            }
            continue;
        }

        // Convert relative segment paths to absolute URLs so client fetches directly from CDN
        if (trimmed && !trimmed.startsWith('#')) {
            if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
                const fullUrl = new URL(trimmed, baseUrl).toString();
                cleaned.push(fullUrl);
                continue;
            }
        }

        cleaned.push(line);
    }

    return cleaned.join('\n');
}

async function getCleanM3u8(targetUrl, host = 'localhost') {
    const hostBase = host ? (host.includes('://') ? host : `https://${host}`) : '';
    const cacheKey = `kkphim:clean:${targetUrl}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const res = await axios.get(targetUrl, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://phimapi.com/'
        },
        timeout: 10000
    });

    const content = res.data;
    if (typeof content !== 'string') throw new Error('Invalid M3U8 content');

    // 1. If this is a Master Playlist (#EXT-X-STREAM-INF), rewrite sub-playlist URLs to also be cleaned
    if (content.includes('#EXT-X-STREAM-INF')) {
        const lines = content.split('\n');
        const rewritten = lines.map(line => {
            const trimmed = line.trim();
            if (trimmed && !trimmed.startsWith('#')) {
                const absoluteSubUrl = new URL(trimmed, targetUrl).toString();
                return `${hostBase}/kkphim/clean.m3u8?url=${encodeURIComponent(absoluteSubUrl)}`;
            }
            return line;
        });
        const result = rewritten.join('\n');
        cache.set(cacheKey, result, 3600);
        return result;
    }

    // 2. If this is a Media Playlist (#EXTINF:), clean ad segments and make .ts URLs absolute
    const cleaned = cleanM3u8(content, targetUrl);
    cache.set(cacheKey, cleaned, 3600);
    return cleaned;
}

async function getStream(id, type, host = '') {
    try {
        // id format: kkphim:slug or kkphim:slug:season:episode
        const parts = id.replace('kkphim:', '').split(':');
        const slug = parts[0];
        const targetEp = parts[2] || (type === 'series' ? parts[1] : null);

        const res = await axios.get(`${BASE_URL}/phim/${slug}`, { timeout: 10000 });
        const episodes = res.data?.episodes || [];
        if (episodes.length === 0) return [];

        const streams = [];
        const hostBase = host ? (host.includes('://') ? host : `https://${host}`) : '';

        episodes.forEach(server => {
            const serverName = server.server_name || 'VIP';
            const serverData = server.server_data || [];

            const targetItem = findEpisode(serverData, targetEp);

            if (targetItem && targetItem.link_m3u8) {
                // Stream 1 (Mặc định): Đã lọc sạch quảng cáo ở phút 15:00 và phút 3:00
                if (hostBase) {
                    streams.push({
                        name: `⚡ [CDN] KKPhim • ${serverName} [Lọc QC]`,
                        title: `${res.data?.movie?.name || ''} - Tập ${targetItem.name}\n⚡ Định tuyến: CDN Tốc Độ Cao (Đã Lọc Sạch QC 15:00)\n🎞️ Độ phân giải: 1080p Full HD • Vietsub`,
                        url: `${hostBase}/kkphim/clean.m3u8?url=${encodeURIComponent(targetItem.link_m3u8)}`,
                        behaviorHints: {
                            notWebReady: false
                        }
                    });
                }

                // Stream 2 (Dự phòng): Luồng trực tiếp gốc từ CDN KKPhim
                streams.push({
                    name: `⚡ [CDN] KKPhim • ${serverName} [Gốc]`,
                    title: `${res.data?.movie?.name || ''} - Tập ${targetItem.name}\n⚡ Định tuyến: CDN Tốc Độ Cao (Direct HLS Gốc)\n🎞️ Độ phân giải: 1080p Full HD • Vietsub`,
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

module.exports = { getCatalog, getMeta, getStream, getCleanM3u8, formatPoster };

