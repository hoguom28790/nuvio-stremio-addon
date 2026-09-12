const fs = require('fs');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');
const cache = require('../utils/cache');

const BASE_URL = 'https://hentaiz2.com';
const STORAGE_URL = 'https://storage.haiten.org';
const MIMIX_URL = 'https://x.mimix.cc';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const client = axios.create({
    timeout: 12000,
    headers: {
        'User-Agent': USER_AGENT
    }
});

// Load static catalog with cache in memory
let cachedCatalog = null;
let slugMap = null;

function getStaticCatalog() {
    if (cachedCatalog) return cachedCatalog;
    try {
        const filePath = path.join(__dirname, '..', 'data', 'hentaiz_catalog.json');
        if (fs.existsSync(filePath)) {
            const raw = fs.readFileSync(filePath, 'utf8');
            cachedCatalog = JSON.parse(raw);
            slugMap = new Map();
            for (const ep of cachedCatalog) {
                if (ep.slug) slugMap.set(ep.slug, ep);
                if (ep.id) {
                    slugMap.set(ep.id, ep);
                    const cleanId = ep.id.replace('hentaiz:', '');
                    slugMap.set(cleanId, ep);
                }
            }
            return cachedCatalog;
        }
    } catch (e) {
        console.error('[HentaiZ] Failed to load static catalog:', e.message);
    }
    return [];
}

function getSlugMap() {
    if (!slugMap) getStaticCatalog();
    return slugMap || new Map();
}

// Load cached streams with lazy-loading
let cachedStreams = null;
function getCachedStreams() {
    if (cachedStreams) return cachedStreams;
    try {
        const filePath = path.join(__dirname, '..', 'data', 'hentaiz_streams.json');
        if (fs.existsSync(filePath)) {
            const raw = fs.readFileSync(filePath, 'utf8');
            cachedStreams = JSON.parse(raw);
            return cachedStreams;
        }
    } catch (e) {
        console.error('[HentaiZ] Failed to load cached streams:', e.message);
    }
    return {};
}

// SvelteKit devalue unflatten helper
function unflatten(parsed) {
    if (!Array.isArray(parsed) || parsed.length === 0) return parsed;
    function hydrate(index, seen = new Map()) {
        if (typeof index !== 'number') return index;
        if (index < 0) return undefined;
        if (seen.has(index)) return seen.get(index);
        const val = parsed[index];
        if (val === null || typeof val !== 'object') return val;
        if (Array.isArray(val)) {
            const arr = [];
            seen.set(index, arr);
            for (const item of val) arr.push(hydrate(item, seen));
            return arr;
        }
        const obj = {};
        seen.set(index, obj);
        for (const [k, v] of Object.entries(val)) {
            obj[k] = hydrate(v, seen);
        }
        return obj;
    }
    return hydrate(0);
}

// Base64URL string encoder
function toBase64Url(str) {
    return Buffer.from(str, 'utf-8').toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

// Convert Vietnamese text / genre to URL slug
function slugifyGenre(str) {
    if (!str) return '';
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Strip HTML tags for meta descriptions
function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<br\s*[\/]?>/gi, '\n')
        .replace(/<\/p>/gi, '\n\n')
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .trim();
}

/**
 * 1. GET CATALOG
 */
async function getCatalog(type, extra = {}) {
    const catalog = getStaticCatalog();
    const mediaType = type === 'movie' ? 'movie' : 'series';

    let results = catalog;

    if (extra.search) {
        const q = extra.search.toLowerCase().trim();
        results = results.filter(ep => {
            return (ep.title && ep.title.toLowerCase().includes(q)) ||
                   (ep.slug && ep.slug.toLowerCase().includes(q));
        });
    } else if (extra.genre) {
        const rawGenre = typeof extra.genre === 'string' ? extra.genre.trim() : '';
        const cleanGenre = rawGenre.replace(/^Thể loại:\s*/i, '').replace(/^Danh mục:\s*/i, '').trim();
        const lower = cleanGenre.toLowerCase();

        // If it is a default label or placeholder, do not apply genre filtering
        if (lower && !['genre', 'tất cả', 'all', 'default', 'hentaiz-movie', 'hentaiz-anime', 'hentaiz-series'].includes(lower)) {
            if (cleanGenre.includes('Không Che') || lower.includes('uncensored')) {
                results = results.filter(ep => ep.contentRating === 'UNCENSORED');
            } else {
                const targetSlug = slugifyGenre(cleanGenre);
                results = results.filter(ep => {
                    if (!ep.genres || !Array.isArray(ep.genres)) return false;
                    return ep.genres.some(g => {
                        const gLower = g.toLowerCase();
                        return gLower === lower || slugifyGenre(g) === targetSlug;
                    });
                });
            }
        }
    }

    const skip = extra.skip ? parseInt(extra.skip, 10) || 0 : 0;
    const paged = results.slice(skip, skip + 24);

    return paged.map(ep => ({
        id: ep.id && ep.id.startsWith('hentaiz:') ? ep.id : `hentaiz:${ep.slug}`,
        name: ep.title,
        type: mediaType,
        poster: ep.poster || (ep.posterImage?.filePath ? `${STORAGE_URL}${ep.posterImage.filePath}` : undefined),
        background: ep.background || (ep.backdropImage?.filePath ? `${STORAGE_URL}${ep.backdropImage.filePath}` : undefined),
        description: ep.description || `Tập ${ep.episodeNumber || 1}${ep.studios ? ' • ' + ep.studios : ''}`,
        releaseInfo: ep.releaseYear ? String(ep.releaseYear) : undefined,
        genres: ep.genres || []
    }));
}

/**
 * 2. GET META
 */
async function getMeta(type, id) {
    const cleanId = id.replace(/^hentaiz:/, '');
    const slug = cleanId.split(':')[0];
    const smap = getSlugMap();
    const ep = smap.get(slug);

    if (ep) {
        const meta = {
            id: `hentaiz:${slug}`,
            name: ep.title,
            type: type === 'movie' ? 'movie' : 'series',
            poster: ep.poster || (ep.posterImage?.filePath ? `${STORAGE_URL}${ep.posterImage.filePath}` : undefined),
            background: ep.background || (ep.backdropImage?.filePath ? `${STORAGE_URL}${ep.backdropImage.filePath}` : undefined),
            description: ep.description || `Tập ${ep.episodeNumber || 1}${ep.studios ? ' • ' + ep.studios : ''}`,
            releaseInfo: ep.releaseYear ? String(ep.releaseYear) : undefined,
            genres: ep.genres || []
        };

        if (type === 'series') {
            meta.videos = [
                {
                    id: `hentaiz:${slug}:1:${ep.episodeNumber || 1}`,
                    title: `Tập ${ep.episodeNumber || 1} - ${ep.title}`,
                    season: 1,
                    episode: ep.episodeNumber || 1,
                    released: ep.publishedAt || undefined
                }
            ];
            meta.behaviorHints = {
                defaultVideoId: `hentaiz:${slug}:1:${ep.episodeNumber || 1}`
            };
        } else {
            meta.behaviorHints = {
                defaultVideoId: `hentaiz:${slug}`
            };
        }

        return meta;
    }

    // Fallback to network
    const cacheKey = `hentaiz:meta:${slug}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const res = await client.get(`${BASE_URL}/watch/${slug}/__data.json`);
        const nodeData = res.data?.nodes?.[2]?.data;
        if (!nodeData) return null;

        const unflat = unflatten(nodeData);
        const epNet = unflat?.episode;
        if (!epNet) return null;

        const poster = epNet.posterImage?.filePath ? `${STORAGE_URL}${epNet.posterImage.filePath}` : undefined;
        const backdrop = epNet.backdropImage?.filePath ? `${STORAGE_URL}${epNet.backdropImage.filePath}` : undefined;
        const genres = epNet.genres?.map(g => g.genre?.name).filter(Boolean) || [];
        const description = stripHtml(epNet.description);

        const meta = {
            id: `hentaiz:${slug}`,
            name: epNet.title,
            type: type === 'movie' ? 'movie' : 'series',
            poster: poster,
            background: backdrop,
            description: description,
            releaseInfo: epNet.releaseYear ? String(epNet.releaseYear) : undefined,
            genres: genres
        };

        if (type === 'series') {
            meta.videos = [
                {
                    id: `hentaiz:${slug}:1:${epNet.episodeNumber || 1}`,
                    title: `Tập ${epNet.episodeNumber || 1} - ${epNet.title}`,
                    season: 1,
                    episode: epNet.episodeNumber || 1,
                    released: epNet.publishedAt
                }
            ];
            meta.behaviorHints = {
                defaultVideoId: `hentaiz:${slug}:1:${epNet.episodeNumber || 1}`
            };
        } else {
            meta.behaviorHints = {
                defaultVideoId: `hentaiz:${slug}`
            };
        }

        if (epNet.id) {
            cache.set(`hentaiz:epId:${slug}`, epNet.id, 86400);
        }

        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (e) {
        console.error(`[HentaiZ Meta Error] ${slug}:`, e.message);
        return null;
    }
}

/**
 * Helper to fetch and decrypt streamData for videoId
 */
async function fetchAndDecryptStreamData(videoId) {
    const cacheKey = `hentaiz:streamData:${videoId}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const res = await client.get(`${MIMIX_URL}/watch/${videoId}`, {
        headers: {
            'Referer': 'https://x.haiten.org/'
        }
    });

    const key = crypto.createHash('sha256').update(videoId).digest();
    const [ivHex, cipherHex] = res.data.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const ciphertext = Buffer.from(cipherHex, 'hex');

    const decipher = crypto.createDecipheriv('aes-256-ctr', key, iv);
    const decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString('utf-8');
    const streamData = JSON.parse(decrypted);

    cache.set(cacheKey, streamData, 3600);
    return streamData;
}

/**
 * 3. GET STREAM
 */
async function getStream(id, type, host = 'hophimaddon.vercel.app') {
    const cleanId = id.replace(/^hentaiz:/, '');
    const slug = cleanId.split(':')[0];
    const cacheKey = `hentaiz:streams:${slug}:${host}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const smap = getSlugMap();
        const ep = smap.get(slug);

        let videoId = ep?.videoId;

        if (!videoId) {
            let epId = ep?.epId || cache.get(`hentaiz:epId:${slug}`);
            if (!epId) {
                const resWatch = await client.get(`${BASE_URL}/watch/${slug}/__data.json`);
                const raw = JSON.stringify(resWatch.data);
                const match = raw.match(/"id":"([a-zA-Z0-9_-]+)","title"/);
                if (match) {
                    epId = match[1];
                } else {
                    const unflat = unflatten(resWatch.data?.nodes?.[2]?.data);
                    epId = unflat?.episode?.id;
                }
                if (epId) cache.set(`hentaiz:epId:${slug}`, epId, 86400);
            }

            if (epId) {
                const payload = toBase64Url(`[{"episodeId":1},"${epId}"]`);
                const rEmbed = await client.get(`${BASE_URL}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${payload}`, {
                    headers: {
                        'Referer': `${BASE_URL}/watch/${slug}`
                    }
                });

                const videoIdMatch = (rEmbed.data?.data || '').match(/[?&]v=([a-f0-9-]+)/i);
                videoId = videoIdMatch ? videoIdMatch[1] : null;
            }
        }

        if (!videoId) {
            console.error(`[HentaiZ] Could not extract videoId for ${slug}`);
            return [];
        }

        const streamMap = getCachedStreams();
        const streamData = streamMap[videoId];

        const cdnDomain = (streamData?.segmentDomains && streamData.segmentDomains[0]) || 'https://c1.animez.top';
        const cleanTitle = (streamData?.title || ep?.title || slug).replace(/\.mp4$/i, '');
        const hostBase = host.includes('://') ? host : `https://${host}`;

        // Standard proxyHeaders for Stremio / Nuvio native libmpv engine
        const proxyHeaders = {
            request: {
                'User-Agent': USER_AGENT,
                'Referer': 'https://x.haiten.org/'
            }
        };

        // Extract variant codes from master playlist
        const masterStr = streamData?.defaultM3u8?.master || '';
        const variantMatches = [...masterStr.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map(m => m[1]);
        
        let variant1080 = '';
        let variant720 = '';
        const lines = masterStr.split('\n');
        let currentStreamInf = '';
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith('#EXT-X-STREAM-INF')) {
                currentStreamInf = trimmed;
            } else if (trimmed.endsWith('playlist.m3u8')) {
                const code = trimmed.replace('/playlist.m3u8', '').trim();
                if (currentStreamInf.includes('1920x1080') || currentStreamInf.includes('1080')) {
                    variant1080 = code;
                } else if (currentStreamInf.includes('1280x720') || currentStreamInf.includes('720')) {
                    variant720 = code;
                }
            }
        }
        if (!variant1080 && variantMatches.length > 0) {
            variant1080 = variantMatches[variantMatches.length - 1];
        }
        if (!variant720 && variantMatches.length > 1) {
            variant720 = variantMatches[1];
        }

        const streams = [];

        // 1. Direct CDN Master (Auto resolution - recommended for Stremio & Nuvio)
        streams.push({
            name: '🔞 HentaiZ',
            title: `[Tự Động Auto] ${cleanTitle}\n⚡ CDN Tốc độ cao • Đa độ phân giải HLS (1080p/720p)`,
            url: `${cdnDomain}/${videoId}/master.m3u8`,
            behaviorHints: {
                notWebReady: true,
                proxyHeaders: proxyHeaders
            }
        });

        // 2. Direct CDN 1080p Full HD
        if (variant1080) {
            streams.push({
                name: '🔞 HentaiZ',
                title: `[Full HD 1080p] ${cleanTitle}\n⚡ CDN Tốc độ cao • 1080p Siêu nét`,
                url: `${cdnDomain}/${videoId}/${variant1080}/playlist.m3u8`,
                behaviorHints: {
                    notWebReady: true,
                    proxyHeaders: proxyHeaders
                }
            });
        }

        // 3. Direct CDN 720p HD
        if (variant720) {
            streams.push({
                name: '🔞 HentaiZ',
                title: `[HD 720p] ${cleanTitle}\n⚡ CDN Tốc độ cao • 720p Mượt mà`,
                url: `${cdnDomain}/${videoId}/${variant720}/playlist.m3u8`,
                behaviorHints: {
                    notWebReady: true,
                    proxyHeaders: proxyHeaders
                }
            });
        }

        // 4. Server Reconstructed Stream (Backup route)
        streams.push({
            name: '🔞 HentaiZ [Dự phòng]',
            title: `[Server Proxy] ${cleanTitle}\n⚡ Tuyến dự phòng định tuyến máy chủ`,
            url: `${hostBase}/hentaiz/stream/${videoId}/master.m3u8`,
            behaviorHints: {
                notWebReady: true,
                proxyHeaders: proxyHeaders
            }
        });

        if (streams.length > 0) {
            cache.set(cacheKey, streams, 1800);
        }
        return streams;
    } catch (e) {
        console.error(`[HentaiZ Stream Error] ${slug}:`, e.message);
        return [];
    }
}

/**
 * 4. GET RECONSTRUCTED M3U8 CONTENT
 */
async function getM3u8(videoId, quality) {
    const streamMap = getCachedStreams();
    let streamData = streamMap[videoId];

    if (!streamData || !streamData.defaultM3u8) {
        streamData = await fetchAndDecryptStreamData(videoId);
    }

    if (!streamData || !streamData.defaultM3u8) {
        throw new Error('Stream data not found or invalid');
    }

    const { defaultM3u8, segmentDomains = ['https://c1.animez.top'] } = streamData;
    const cdnDomain = segmentDomains[0] || 'https://c1.animez.top';

    if (quality === 'master') {
        let master = defaultM3u8.master;
        // Rewrite variant paths to absolute CDN URLs so EVERY variant works!
        const variantMatches = [...master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(m => m[1]);
        variantMatches.forEach(match => {
            master = master.replace(match, `${cdnDomain}/${videoId}/${match}`);
        });
        return master;
    }

    const rawPlaylist = defaultM3u8.playlists?.[quality] ||
                        defaultM3u8.playlists?.['2'] ||
                        defaultM3u8.playlists?.['1'];

    if (!rawPlaylist) {
        throw new Error(`Quality playlist ${quality} not found`);
    }

    const variantMatches = [...defaultM3u8.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(m => m[1]);
    let variantPath = '';
    if (quality === '2') {
        variantPath = variantMatches[variantMatches.length - 1] || '';
    } else if (quality === '1') {
        variantPath = variantMatches[1] || variantMatches[0] || '';
    } else {
        variantPath = variantMatches[parseInt(quality)] || variantMatches[0] || '';
    }
    const variantCode = variantPath.replace('playlist.m3u8', '').replace(/\/+$/, '');

    const lines = rawPlaylist.split('\n');
    let segIdx = 0;

    const rewrittenLines = lines.map(line => {
        const trimmed = line.trim();
        if (trimmed.endsWith('.png')) {
            const domain = segmentDomains[segIdx % segmentDomains.length];
            segIdx++;
            const segBase = trimmed.replace('.png', '');
            return `${domain}/${videoId}/${variantCode}/${segBase}.png`;
        }
        return line;
    });

    return rewrittenLines.join('\n');
}

module.exports = {
    getCatalog,
    getMeta,
    getStream,
    getM3u8,
    slugifyGenre,
    fetchAndDecryptStreamData
};
