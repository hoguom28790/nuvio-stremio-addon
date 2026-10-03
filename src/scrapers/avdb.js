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
    'co che censored': 1,
    'censored': 1,
    'khong che uncensored': 2,
    'uncensored': 2,
    'ro ri uncensored leaked': 3,
    'uncensored leaked': 3,
    'nghiep du amateur': 4,
    'amateur': 4,
    'trung quoc chinese av': 5,
    'chinese av': 5,
    'hentai': 6,
    'phu de tieng anh english sub': 7,
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

async function fetchText(url, referer, env = {}) {
    const headers = {
        'User-Agent': USER_AGENT,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    };
    if (referer) {
        headers['Referer'] = referer;
        headers['Origin'] = referer.endsWith('/') ? referer.slice(0, -1) : referer;
    }

    // 1. Direct fetch first (fastest and cleanest)
    if (typeof fetch !== 'undefined') {
        try {
            const res = await fetch(url, {
                headers,
                referrer: referer || undefined,
                referrerPolicy: referer ? 'unsafe-url' : 'no-referrer',
                signal: AbortSignal.timeout ? AbortSignal.timeout(5000) : undefined
            });
            if (res.ok) return await res.text();
        } catch (e) {}
    }

    try {
        const res = await axios.get(url, { headers, timeout: 5000 });
        if (res && res.data) {
            return typeof res.data === 'string' ? res.data : JSON.stringify(res.data);
        }
    } catch (e) {}

    // 2. GAS Proxy fallback (only if valid GAS URL configured)
    let gasUrl = (env && env.GAS_PROXY_URL) || (env && env.KKPHIM_GAS_PROXY_URL) || (typeof process !== 'undefined' && process.env && process.env.GAS_PROXY_URL) || (typeof globalThis !== 'undefined' && globalThis.GAS_PROXY_URL) || (typeof globalThis !== 'undefined' && globalThis.KKPHIM_GAS_PROXY_URL);
    if (gasUrl && !gasUrl.includes('ax3vcn3ha') && !gasUrl.includes('vercel-m3u8-proxy')) {
        try {
            const proxyTarget = `${gasUrl}?url=${encodeURIComponent(url)}&referer=${encodeURIComponent(referer || 'https://upload18.org/')}`;
            const gasRes = await fetch(proxyTarget, {
                signal: AbortSignal.timeout ? AbortSignal.timeout(4000) : undefined
            });
            if (gasRes.ok) return await gasRes.text();
        } catch (e) {}
    }

    throw new Error(`Failed to fetch text from ${url}`);
}

async function getStream(id, type, host = 'hophimaddon.hophim-4g6qbubt.workers.dev') {
    const rawId = id.replace('avdb:', '');
    const edgeHost = host && !host.includes('onrender.com') ? host : ((typeof process !== 'undefined' && process.env && process.env.CF_HOST) || 'hophimaddon.hophim-4g6qbubt.workers.dev');
    const hostBase = edgeHost.includes('://') ? edgeHost : `https://${edgeHost}`;

    try {
        const isNumeric = /^\d+$/.test(rawId);
        const queryParam = isNumeric ? `ids=${encodeURIComponent(rawId)}` : `wd=${encodeURIComponent(rawId)}`;
        const res = await axios.get(`${BASE_URL}?ac=detail&${queryParam}`, {
            timeout: 15000,
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });

        const item = res.data?.list?.[0];
        if (!item) return [];

        let slug = null;
        if (item.episodes?.server_data) {
            const firstEp = Object.values(item.episodes.server_data)[0];
            if (firstEp?.link_embed) {
                const parts = firstEp.link_embed.split('/');
                slug = parts[parts.length - 1];
            } else if (firstEp?.slug) {
                slug = firstEp.slug;
            }
        }
        if (!slug) slug = item.slug;
        if (!slug) slug = String(item.id);

        const typeName = item.type_name || '1080p';
        const streams = [];

        // Stream 1: Cloudflare Edge Proxy (Hỗ trợ 100% Stremio Web và mọi trình duyệt)
        streams.push({
            name: `🛡️ [Proxy Edge] AVDB • ${typeName}`,
            title: `${item.name || item.movie_code}\n🛡️ Luồng Qua Cloudflare Edge (Hỗ trợ 100% Stremio Web & Mọi Thiết Bị)`,
            url: `${hostBase}/avdb/stream/${encodeURIComponent(slug)}.m3u8`,
            behaviorHints: {
                notWebReady: false,
                bingeGroup: `avdb-proxy-${slug}`
            }
        });

        // Stream 2: Luồng VIP CDN Trực Tiếp từ 18plusok (Hỗ trợ proxyHeaders cho Stremio App, Android TV)
        try {
            const extUrl = `https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(item.id || rawId)}.json`;
            const extRes = await axios.get(extUrl, { timeout: 3500 });
            if (extRes.data?.streams?.[0]?.url) {
                const s0 = extRes.data.streams[0];
                streams.push({
                    name: `⚡ [VIP Direct CDN] AVDB • ${typeName}`,
                    title: `${item.name || item.movie_code}\n⚡ Luồng Trực Tiếp VIP CDN (Direct Helvid) • Nhanh & Mượt`,
                    url: s0.url,
                    behaviorHints: {
                        notWebReady: false,
                        bingeGroup: `avdb-vip-${slug}`,
                        proxyHeaders: s0.behaviorHints?.proxyHeaders || {
                            request: {
                                'Referer': 'https://upload18.org/',
                                'User-Agent': USER_AGENT
                            }
                        }
                    }
                });
            }
        } catch (eExt) {}

        return streams;
    } catch (err) {
        console.error(`[AVDB Stream Error] ${id}:`, err.message);
        return [];
    }
}

/**
 * Build a rewritten AVDB media playlist.
 *
 * IMPORTANT: helvid.com tokens are bound to the IP (`i=` param, /64 for IPv6, /24 for IPv4) and UA family
 * of whoever loaded the upload18 embed page. Segments therefore MUST be fetched by the same machine that
 * minted the playlist, otherwise helvid answers 404.
 *  - segmentMode 'edge'   : minted by the Cloudflare Worker -> segments proxied directly by the Worker (0 Render bandwidth)
 *  - segmentMode 'render' : minted by Render -> segments go Worker -> Render (?stream=1) so the IP matches
 */
async function getM3u8(slug, host = 'hophimaddon.hophim-4g6qbubt.workers.dev', directUrl = null, env = {}, segmentMode = 'edge') {
    const cacheKey = `avdb:m3u8:${slug}:${host}:${segmentMode}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    let content = null;

    // 1. If directUrl was provided
    if (directUrl) {
        try {
            content = await fetchText(directUrl, 'https://upload18.org/', env);
        } catch (e) {
            console.warn('[AVDB] Direct fetch failed:', e.message);
        }
    }

    // 2. Embed HTML scraping (directly from upload18.com / upload18.org) - mints a token for THIS machine's IP
    if (!content || !content.includes('#EXTM3U')) {
        content = null;
        const embedUrls = [
            `https://upload18.com/play/index/${slug}`,
            `https://upload18.org/play/index/${slug}`
        ];
        for (const url of embedUrls) {
            try {
                const html = await fetchText(url, null, env);
                if (html && html.includes('"m3u8"')) {
                    const match = html.match(/"m3u8":\s*"([^"]+)"/);
                    if (match) {
                        const m3u8Url = JSON.parse(`"${match[1]}"`);
                        const ref = url.includes('upload18.com') ? 'https://upload18.com/' : 'https://upload18.org/';
                        const text = await fetchText(m3u8Url, ref, env);
                        if (text && text.includes('#EXTM3U')) {
                            content = text;
                            break;
                        }
                    }
                }
            } catch (e) {}
        }
    }

    // 3. Slug is a movie code / numeric id instead of an embed hash -> resolve embed hash via API and retry
    if (!content) {
        try {
            const cleanSlug = slug.replace(/^avdb:/, '');
            const isNum = /^\d+$/.test(cleanSlug);
            const queryParam = isNum ? `ids=${encodeURIComponent(cleanSlug)}` : `wd=${encodeURIComponent(cleanSlug)}`;
            const apiRes = await axios.get(`${BASE_URL}?ac=detail&${queryParam}`, {
                timeout: 5000,
                headers: { 'User-Agent': 'Mozilla/5.0' }
            });
            const apiItem = apiRes.data?.list?.[0];
            if (apiItem?.episodes?.server_data) {
                const firstEp = Object.values(apiItem.episodes.server_data)[0];
                if (firstEp?.link_embed) {
                    const embedHash = firstEp.link_embed.split('/').pop();
                    if (embedHash && embedHash !== slug) {
                        return await getM3u8(embedHash, host, directUrl, env, segmentMode);
                    }
                }
            }
        } catch (e) {}
    }

    if (!content) {
        throw new Error(`Could not mint AVDB playlist for ${slug}`);
    }

    const edgeHost = host && !host.includes('onrender.com') ? host : ((typeof process !== 'undefined' && process.env && process.env.CF_HOST) || 'hophimaddon.hophim-4g6qbubt.workers.dev');
    const edgeBase = edgeHost.includes('://') ? edgeHost : `https://${edgeHost}`;
    const segmentBase = segmentMode === 'render'
        ? `${edgeBase}/avdb/segment.ts?via=render&url=`
        : `${edgeBase}/avdb/segment.ts?url=`;

    const rewritten = [];
    for (const line of content.split('\n')) {
        const trimmed = line.trim();
        // Filter out canary line
        if (trimmed.startsWith('#U18-CANARY:')) continue;
        if (trimmed.startsWith('/s/')) {
            rewritten.push(segmentBase + encodeURIComponent(`https://helvid.com${trimmed}`));
        } else if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
            rewritten.push(segmentBase + encodeURIComponent(trimmed));
        } else {
            rewritten.push(line);
        }
    }
    const rewrittenContent = rewritten.join('\n');

    // helvid tokens expire after ~1h -> keep cache well below that
    cache.set(cacheKey, rewrittenContent, 900);
    return rewrittenContent;
}

module.exports = {
    getCatalog,
    getMeta,
    getStream,
    getM3u8,
    TYPE_MAPPING
};
