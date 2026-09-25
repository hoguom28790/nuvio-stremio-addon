const axios = require('axios');
const cache = require('../utils/cache');

const BASE_URL = 'https://avdbapi.com/api.php/provide/vod';
const EMBED_BASE = 'https://upload18.org/play/index';

const TYPE_MAPPING = {
    'avdb-censored': 1,
    'avdb-uncensored': 2,
    'avdb-leaked': 3,
    'avdb-amateur': 4,
    'avdb-chinese': 5,
    'avdb-hentai': 6,
    'avdb-engsub': 7
};

async function getCatalog(catalogId, type, extra = {}) {
    const cacheKey = `avdb:cat:${catalogId}:${JSON.stringify(extra)}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const typeId = TYPE_MAPPING[catalogId] || 1;
        const page = extra.skip ? Math.floor(extra.skip / 24) + 1 : 1;

        let url = `${BASE_URL}?ac=detail`;
        if (extra.search) {
            url += `&wd=${encodeURIComponent(extra.search)}`;
        } else {
            url += `&t=${typeId}&pg=${page}`;
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

async function getStream(id, type, host = 'hophimaddon.hophim-4g6qbubt.workers.dev') {
    const rawId = id.replace('avdb:', '');
    const hostBase = host.includes('://') ? host : `https://${host}`;

    try {
        const res = await axios.get(`${BASE_URL}?ac=detail&ids=${encodeURIComponent(rawId)}`, {
            timeout: 10000,
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });

        const item = res.data?.list?.[0];
        if (!item) return [];

        const slug = item.slug || String(item.id);
        const typeName = item.type_name || '1080p';

        const streams = [];

        // Primary stream: Unwrapped / proxied via worker (with CORS headers & Referer)
        streams.push({
            name: `⚡ [Full HD] AVDB • ${typeName}`,
            title: `${item.name || item.movie_code}\n⚡ Định tuyến: AVDB Tốc Độ Cao (1080p)\n🎞️ Phát mượt mà • Không giật lag`,
            url: `${hostBase}/avdb/stream/${encodeURIComponent(slug)}.m3u8`,
            behaviorHints: {
                notWebReady: false,
                bingeGroup: `avdb-${slug}`
            }
        });

        return streams;
    } catch (err) {
        console.error(`[AVDB Stream Error] ${id}:`, err.message);
        return [];
    }
}

async function getM3u8(slug, host = 'hophimaddon.hophim-4g6qbubt.workers.dev') {
    const hostBase = host.includes('://') ? host : `https://${host}`;
    const cacheKey = `avdb:m3u8:${slug}:${host}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const embedUrl = `${EMBED_BASE}/${slug}`;
    const res = await axios.get(embedUrl, {
        timeout: 10000,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://avdbapi.com/'
        }
    });

    const match = res.data.match(/"m3u8":\s*"([^"]+)"/);
    if (!match) {
        throw new Error('m3u8 link not found in embed player HTML');
    }

    const m3u8Url = JSON.parse(`"${match[1]}"`);
    const mRes = await axios.get(m3u8Url, {
        timeout: 10000,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://upload18.org/'
        }
    });

    let content = mRes.data;
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
        content = rewritten.join('\n');
    }

    if (content) {
        cache.set(cacheKey, content, 900); // 15 min cache
    }
    return content;
}

module.exports = {
    getCatalog,
    getMeta,
    getStream,
    getM3u8,
    TYPE_MAPPING
};
