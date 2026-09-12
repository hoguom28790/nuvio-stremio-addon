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
    const page = extra.skip ? Math.floor(extra.skip / 24) + 1 : 1;
    const cacheKey = `hentaiz:catalog:${type}:${JSON.stringify(extra)}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    let url = `${BASE_URL}/browse/__data.json?page=${page}`;

    if (extra.search) {
        url += `&q=${encodeURIComponent(extra.search)}`;
    } else if (extra.genre) {
        const genreName = extra.genre.trim();
        if (genreName.includes('Không Che') || genreName.toLowerCase().includes('uncensored')) {
            url += `&contentRating=UNCENSORED`;
        } else if (genreName !== 'Tất Cả') {
            const gSlug = slugifyGenre(genreName);
            if (gSlug) {
                url += `&genres=${encodeURIComponent(gSlug)}`;
            }
        }
    }

    try {
        const res = await client.get(url);
        const nodeData = res.data?.nodes?.[2]?.data;
        if (!nodeData) return [];

        const unflat = unflatten(nodeData);
        const episodes = unflat?.episodes || [];

        const metas = episodes.map(ep => {
            const poster = ep.posterImage?.filePath ? `${STORAGE_URL}${ep.posterImage.filePath}` : undefined;
            const backdrop = ep.backdropImage?.filePath ? `${STORAGE_URL}${ep.backdropImage.filePath}` : undefined;
            const studioName = ep.studios?.map(s => s.studio?.name).filter(Boolean).join(', ');

            return {
                id: `hentaiz:${ep.slug}`,
                name: ep.title,
                type: type === 'movie' ? 'movie' : 'series',
                poster: poster,
                background: backdrop,
                description: `Tập ${ep.episodeNumber || 1}${studioName ? ' • ' + studioName : ''}`
            };
        });

        cache.set(cacheKey, metas, 1800);
        return metas;
    } catch (e) {
        console.error('[HentaiZ Catalog Error]:', e.message);
        return [];
    }
}

/**
 * 2. GET META
 */
async function getMeta(type, id) {
    const slug = id.replace('hentaiz:', '');
    const cacheKey = `hentaiz:meta:${slug}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const res = await client.get(`${BASE_URL}/watch/${slug}/__data.json`);
        const nodeData = res.data?.nodes?.[2]?.data;
        if (!nodeData) return null;

        const unflat = unflatten(nodeData);
        const ep = unflat?.episode;
        if (!ep) return null;

        const poster = ep.posterImage?.filePath ? `${STORAGE_URL}${ep.posterImage.filePath}` : undefined;
        const backdrop = ep.backdropImage?.filePath ? `${STORAGE_URL}${ep.backdropImage.filePath}` : undefined;
        const genres = ep.genres?.map(g => g.genre?.name).filter(Boolean) || [];
        const description = stripHtml(ep.description);

        const meta = {
            id: `hentaiz:${slug}`,
            name: ep.title,
            type: type === 'movie' ? 'movie' : 'series',
            poster: poster,
            background: backdrop,
            description: description,
            releaseInfo: ep.releaseYear ? String(ep.releaseYear) : undefined,
            genres: genres,
            videos: [
                {
                    id: `hentaiz:${slug}`,
                    title: `Tập ${ep.episodeNumber || 1} - ${ep.title}`,
                    season: 1,
                    episode: ep.episodeNumber || 1,
                    released: ep.publishedAt
                }
            ],
            behaviorHints: {
                defaultVideoId: `hentaiz:${slug}`
            }
        };

        if (ep.id) {
            cache.set(`hentaiz:epId:${slug}`, ep.id, 86400);
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
    const slug = id.replace('hentaiz:', '');
    const cacheKey = `hentaiz:streams:${slug}:${host}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        let epId = cache.get(`hentaiz:epId:${slug}`);
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

        if (!epId) {
            console.error(`[HentaiZ] Could not resolve epId for ${slug}`);
            return [];
        }

        const payload = toBase64Url(`[{"episodeId":1},"${epId}"]`);
        const rEmbed = await client.get(`${BASE_URL}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${payload}`, {
            headers: {
                'Referer': `${BASE_URL}/watch/${slug}`
            }
        });

        const videoIdMatch = (rEmbed.data?.data || '').match(/[?&]v=([a-f0-9-]+)/i);
        const videoId = videoIdMatch ? videoIdMatch[1] : null;
        if (!videoId) {
            console.error(`[HentaiZ] Could not extract videoId for ${slug}`);
            return [];
        }

        const streamData = await fetchAndDecryptStreamData(videoId);
        if (!streamData || !streamData.defaultM3u8) {
            return [];
        }

        const cleanTitle = (streamData.title || slug).replace(/\.mp4$/i, '');
        const hostBase = host.includes('://') ? host : `https://${host}`;

        const streams = [];

        // 1080p
        if (streamData.defaultM3u8.playlists?.['2']) {
            streams.push({
                name: '🔞 HentaiZ',
                title: `[Full HD 1080p] ${cleanTitle}\n⚡ Tốc độ cao CDN`,
                url: `${hostBase}/hentaiz/stream/${videoId}/2.m3u8`,
                behaviorHints: {
                    notWebReady: false
                }
            });
        }

        // 720p
        if (streamData.defaultM3u8.playlists?.['1']) {
            streams.push({
                name: '🔞 HentaiZ',
                title: `[HD 720p] ${cleanTitle}\n⚡ Tốc độ cao CDN`,
                url: `${hostBase}/hentaiz/stream/${videoId}/1.m3u8`,
                behaviorHints: {
                    notWebReady: false
                }
            });
        }

        // 480p
        if (streamData.defaultM3u8.playlists?.['0']) {
            streams.push({
                name: '🔞 HentaiZ',
                title: `[SD 480p] ${cleanTitle}\n⚡ Tốc độ cao CDN`,
                url: `${hostBase}/hentaiz/stream/${videoId}/0.m3u8`,
                behaviorHints: {
                    notWebReady: false
                }
            });
        }

        // Master Auto
        if (streamData.defaultM3u8.master) {
            streams.push({
                name: '🔞 HentaiZ',
                title: `[Tự Động Auto] ${cleanTitle}\n⚡ Đa độ phân giải HLS`,
                url: `${hostBase}/hentaiz/stream/${videoId}/master.m3u8`,
                behaviorHints: {
                    notWebReady: false
                }
            });
        }

        cache.set(cacheKey, streams, 1800);
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
    const streamData = await fetchAndDecryptStreamData(videoId);
    if (!streamData || !streamData.defaultM3u8) {
        throw new Error('Stream data not found or invalid');
    }

    const { defaultM3u8, segmentDomains = ['https://c2.animez.top'] } = streamData;

    if (quality === 'master') {
        let master = defaultM3u8.master;
        const variantMatches = [...master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(m => m[1]);
        variantMatches.forEach((match, idx) => {
            master = master.replace(match, `${idx}.m3u8`);
        });
        return master;
    }

    const rawPlaylist = defaultM3u8.playlists?.[quality];
    if (!rawPlaylist) {
        throw new Error(`Quality playlist ${quality} not found`);
    }

    const variantMatches = [...defaultM3u8.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(m => m[1]);
    const variantPath = variantMatches[parseInt(quality)] || variantMatches[0] || '';
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
    slugifyGenre
};
