const axios = require('axios');
const cache = require('../utils/cache');

const BASE_URL = 'https://avdbapi.com/api.php/provide/vod';
const EMBED_BASE = 'https://upload18.org/play/index';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

const TYPE_MAPPING = {
    'avdb-censored': 1,
    'avdb-uncensored': 2,
    'avdb-leaked': 3,
    'avdb-amateur': 4,
    'avdb-chinese': 5,
    'avdb-hentai': 6,
    'avdb-engsub': 7
};

const GENRE_MAP = {
    'tat ca': 0,
    'co che (censored)': 1,
    'censored': 1,
    'khong che (uncensored)': 2,
    'uncensored': 2,
    'ro ri (uncensored leaked)': 3,
    'uncensored leaked': 3,
    'nghiep du (amateur)': 4,
    'amateur': 4,
    'trung quoc (chinese av)': 5,
    'chinese av': 5,
    'hentai': 6,
    'phu de tieng anh (english sub)': 7,
    'english subtitle': 7,
    'english sub': 7
};

function slugify(str) {
    if (!str) return '';
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
}

async function getCatalog(catalogId, type, extra = {}) {
    const cacheKey = `avdb:cat:${catalogId}:${JSON.stringify(extra)}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        let typeId = TYPE_MAPPING[catalogId] || 0;
        if (extra.genre) {
            const cleanGenre = slugify(extra.genre);
            if (GENRE_MAP[cleanGenre] !== undefined) {
                typeId = GENRE_MAP[cleanGenre];
            }
        }

        const page = extra.skip ? Math.floor(extra.skip / 24) + 1 : 1;

        let url = `${BASE_URL}?ac=detail`;
        if (extra.search) {
            url += `&wd=${encodeURIComponent(extra.search)}`;
        } else if (typeId > 0) {
            url += `&t=${typeId}&pg=${page}`;
        } else {
            url += `&pg=${page}`;
        }

        const res = await axios.get(url, {
            timeout: 10000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });

        const list = res.data?.list || [];
        const metas = list.map(item => ({
            id: `avdb:${item.id}`,
            type: 'movie',
            name: item.name || item.movie_code || 'AVDB Video',
            poster: item.poster_url || item.thumb_url || '',
            posterShape: 'poster',
            description: `Mã phim: ${item.movie_code || 'N/A'}\nThể loại: ${item.type_name || ''}\nThời lượng: ${item.time || ''}\nDiễn viên: ${Array.isArray(item.actor) ? item.actor.join(', ') : (item.actor || 'N/A')}`
        }));

        cache.set(cacheKey, metas, 600);
        return metas;
    } catch (err) {
        console.error(`[AVDB Catalog Error] ${catalogId}:`, err.message);
        return [];
    }
}

async function getMeta(type, id) {
    const rawId = id.replace('avdb:', '');
    const cacheKey = `avdb:meta:${rawId}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const res = await axios.get(`${BASE_URL}?ac=detail&ids=${encodeURIComponent(rawId)}`, {
            timeout: 10000,
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });

        const item = res.data?.list?.[0];
        if (!item) return null;

        const meta = {
            id: `avdb:${item.id}`,
            type: 'movie',
            name: item.name || item.movie_code || 'AVDB Video',
            poster: item.poster_url || item.thumb_url || '',
            background: item.thumb_url || item.poster_url || '',
            description: item.description || `Mã phim: ${item.movie_code || ''}\nThể loại: ${item.type_name || ''}\nThời lượng: ${item.time || ''}\nDiễn viên: ${Array.isArray(item.actor) ? item.actor.join(', ') : (item.actor || 'N/A')}`,
            releaseInfo: item.year || item.created_at?.slice(0, 4) || '',
            genres: [item.type_name, ...(Array.isArray(item.category) ? item.category : [])].filter(Boolean),
            cast: Array.isArray(item.actor) ? item.actor : [],
            director: Array.isArray(item.director) ? item.director : []
        };

        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.error(`[AVDB Meta Error] ${id}:`, err.message);
        return null;
    }
}

async function fetchText(url, referer) {
    if (typeof fetch !== 'undefined') {
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        };
        if (referer) {
            headers['Referer'] = referer;
        }
        const fetchOpts = {
            headers,
            referrer: referer || undefined,
            referrerPolicy: referer ? 'unsafe-url' : 'no-referrer'
        };
        const res = await fetch(url, fetchOpts);
        if (!res.ok) {
            throw new Error(`Fetch failed status ${res.status} for ${url}`);
        }
        return await res.text();
    } else {
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        };
        if (referer) {
            headers['Referer'] = referer;
        }
        const res = await axios.get(url, { headers, timeout: 15000 });
        return typeof res.data === 'string' ? res.data : JSON.stringify(res.data);
    }
}

async function getStream(id, type, host = 'hophimaddon.hophim-4g6qbubt.workers.dev') {
    const rawId = id.replace('avdb:', '');
    const hostBase = host.includes('://') ? host : `https://${host}`;

    try {
        const res = await axios.get(`${BASE_URL}?ac=detail&ids=${encodeURIComponent(rawId)}`, {
            timeout: 15000,
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });

        const item = res.data?.list?.[0];
        if (!item) return [];

        let slug = item.slug;
        if (!slug && item.episodes?.server_data) {
            const firstEp = Object.values(item.episodes.server_data)[0];
            if (firstEp?.link_embed) {
                const parts = firstEp.link_embed.split('/');
                slug = parts[parts.length - 1];
            } else if (firstEp?.slug) {
                slug = firstEp.slug;
            }
        }
        if (!slug) slug = String(item.id);

        const typeName = item.type_name || '1080p';
        const RENDER_BASE = 'https://nuvio-stremio-addon-1.onrender.com';
        const streams = [];

        // AVDB streams MUST be proxied through Render.com because helvid.com cryptographically binds
        // the streaming token to the requester's IP address. Direct client requests always result in HTTP 404.
        streams.push({
            name: `⚡ [Direct CDN] AVDB • ${typeName}`,
            title: `${item.name || item.movie_code}\n⚡ Luồng Trực Tiếp CDN • Nhanh & Mượt`,
            url: `${RENDER_BASE}/avdb/stream/${encodeURIComponent(slug)}.m3u8`,
            behaviorHints: {
                notWebReady: false,
                bingeGroup: `avdb-direct-${slug}`
            }
        });

        return streams;
    } catch (err) {
        console.error(`[AVDB Stream Error] ${id}:`, err.message);
        return [];
    }
}

async function getM3u8(slug, host = 'hophimaddon.hophim-4g6qbubt.workers.dev', directUrl = null) {
    const hostBase = host.includes('://') ? host : `https://${host}`;
    const cacheKey = `avdb:m3u8:${slug}:${host}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    let content = null;

    // 1. If directUrl was provided
    if (directUrl) {
        try {
            content = await fetchText(directUrl, 'https://upload18.org/');
        } catch (e) {
            console.warn('[AVDB] Direct fetch failed:', e.message);
        }
    }

    // 2. Fallback: extract from 18plusok
    if (!content) {
        try {
            const extRes = await axios.get(`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(slug)}.json`, { timeout: 10000 });
            if (extRes.data?.streams?.[0]?.url) {
                content = await fetchText(extRes.data.streams[0].url, 'https://upload18.org/');
            }
        } catch (e) {}
    }

    // 3. Fallback: embed HTML scraping
    if (!content) {
        const embedUrls = [
            `https://upload18.com/play/index/${slug}`,
            `https://upload18.org/play/index/${slug}`
        ];
        for (const url of embedUrls) {
            try {
                const html = await fetchText(url);
                if (html && html.includes('"m3u8"')) {
                    const match = html.match(/"m3u8":\s*"([^"]+)"/);
                    if (match) {
                        const m3u8Url = JSON.parse(`"${match[1]}"`);
                        content = await fetchText(m3u8Url, 'https://upload18.org/');
                        if (content) break;
                    }
                }
            } catch (e) {}
        }
    }

    if (!content) {
        throw new Error('m3u8 link not found in embed player HTML');
    }

    let rewrittenContent = content;
    if (typeof content === 'string') {
        const rawProxy = process.env.SEGMENT_PROXY_URL;
        const segmentBase = rawProxy ? rawProxy.replace(/\/+$/, '') : `${hostBase}/avdb/segment.ts`;
        const separator = segmentBase.includes('?') ? '&' : '?';

        const lines = content.split('\n');
        const rewritten = [];
        for (const line of lines) {
            const trimmed = line.trim();
            // Filter out canary line
            if (trimmed.startsWith('#U18-CANARY:')) {
                continue;
            }
            if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
                rewritten.push(`${segmentBase}${separator}url=${encodeURIComponent(trimmed)}`);
            } else {
                rewritten.push(line);
            }
        }
        rewrittenContent = rewritten.join('\n');
    }

    if (rewrittenContent) {
        cache.set(cacheKey, rewrittenContent, 900); // 15 min cache
    }
    return rewrittenContent;
}

module.exports = {
    getCatalog,
    getMeta,
    getStream,
    getM3u8,
    TYPE_MAPPING
};
