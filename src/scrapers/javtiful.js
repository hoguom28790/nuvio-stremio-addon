const axios = require('axios');
const cache = require('../utils/cache');
const { pagedList } = require('../utils/pagedList');

const BASE_URL = 'https://javtiful.com';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const DEFAULT_PAGE_SIZE = 24;

const client = axios.create({
    baseURL: BASE_URL,
    timeout: 12000,
    headers: { 'User-Agent': USER_AGENT, 'Referer': `${BASE_URL}/` }
});

// Sort options of /vn/videos?sort=<value>
const GENRE_MAP = {
    'Mới Nhất': '',
    'Hot Hôm Nay': 'popular_today',
    'Hot Tuần Này': 'popular_week',
    'Hot Tháng Này': 'popular_month',
    'Xem Nhiều Nhất': 'most_viewed',
    'Nhiều Like Nhất': 'most_liked',
    'Mới Thêm Hôm Nay': 'added_today',
    'Mới Thêm Tuần Này': 'added_week',
    'Mới Thêm Tháng Này': 'added_month'
};

function decode(str) {
    return String(str || '')
        .replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'")
        .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        .replace(/\s+/g, ' ').trim();
}

function absUrl(src) {
    if (!src) return '';
    if (/^https?:\/\//i.test(src)) return src;
    return `${BASE_URL}${src.startsWith('/') ? '' : '/'}${src}`;
}

/**
 * Route site thumbnails through the edge poster proxy (/javtiful/poster/...): sends the Referer and caches at the edge.
 */
function proxyPoster(src, host) {
    const abs = absUrl(src);
    const m = abs.match(/^https?:\/\/(?:www\.)?javtiful\.com\/uploads\/uploads\/(.+)$/);
    if (!m || !host) return abs;
    const edgeHost = !host.includes('onrender.com') ? host : ((typeof process !== 'undefined' && process.env && process.env.CF_HOST) || 'hophimaddon.hophim-4g6qbubt.workers.dev');
    const edgeBase = edgeHost.includes('://') ? edgeHost : `https://${edgeHost}`;
    return `${edgeBase}/javtiful/poster/${m[1]}`;
}

function parseId(id) {
    const m = String(id).replace(/\.json$/, '').match(/^javtiful:(\d+):(.+)$/);
    return m ? { vid: m[1], slug: m[2] } : null;
}

/**
 * Parse a list page: every `<article class="video-card">` linking to /vn/video/<id>/<slug>. Partner (ad) cards are skipped.
 */
function parseList(html) {
    const items = [];
    const seen = new Set();
    const blocks = String(html || '').split('<article class="video-card');
    for (const block of blocks.slice(1)) {
        if (block.slice(0, 40).includes('video-card--partner')) continue;
        const link = block.match(/href="\/(?:vn|en)\/video\/(\d+)\/([^"?#]+)"/);
        if (!link) continue;
        const key = link[1];
        if (seen.has(key)) continue;
        seen.add(key);
        const title = block.match(/class="video-card__title"[^>]*title="([^"]*)"/) || block.match(/class="video-card__title"[^>]*>([\s\S]*?)<\/a>/);
        const img = block.match(/data-front-lazy-src="([^"]+)"/) || block.match(/<img[^>]+src="(\/uploads\/[^"]+)"/);
        const det = block.match(/<span class="video-card__details">([\s\S]*?)<\/span>/);
        const quality = det ? (det[1].match(/<strong>([^<]+)<\/strong>/) || [])[1] : '';
        const duration = det ? decode(det[1].replace(/<strong>[^<]*<\/strong>/, '')) : '';
        items.push({
            vid: link[1],
            slug: link[2],
            title: decode(title ? title[1] : link[2]),
            poster: absUrl(img ? img[1] : ''),
            quality: quality || '',
            duration
        });
    }
    return items;
}

async function fetchHtml(path) {
    const res = await client.get(path, { responseType: 'text', transformResponse: [d => d] });
    return typeof res.data === 'string' ? res.data : '';
}

function toMeta(item, host) {
    const poster = proxyPoster(item.poster, host);
    const info = [item.quality, item.duration].filter(Boolean).join(' • ');
    return {
        id: `javtiful:${item.vid}:${item.slug}`,
        type: 'movie',
        name: item.title,
        poster,
        background: poster,
        posterShape: 'landscape',
        description: `${item.title}${info ? `\n${info}` : ''}`,
        genres: ['18+']
    };
}

async function getCatalog(catalogId, type, extra = {}, host) {
    const search = extra.search ? String(extra.search).trim() : '';
    const skip = parseInt(extra.skip, 10) || 0;

    let path;
    const params = new URLSearchParams();
    if (search) {
        path = '/vn/search';
        params.set('q', search);
    } else {
        path = '/vn/videos';
        const sort = GENRE_MAP[extra.genre];
        if (sort) params.set('sort', sort);
    }

    const fetchPage = async (page) => {
        const p = new URLSearchParams(params);
        if (page > 1) p.set('page', String(page));
        const qs = p.toString();
        return parseList(await fetchHtml(qs ? `${path}?${qs}` : path)).map(item => toMeta(item, host));
    };

    try {
        return await pagedList({ key: `javtiful:${path}?${params.toString()}`, skip, want: DEFAULT_PAGE_SIZE, fetchPage });
    } catch (err) {
        console.error(`[Javtiful Catalog Error] ${path}:`, err.message);
        return [];
    }
}

async function getMeta(type, id, host) {
    const p = parseId(id);
    if (!p) return null;
    const cacheKey = `javtiful:meta:${p.vid}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const html = await fetchHtml(`/vn/video/${p.vid}/${encodeURIComponent(p.slug)}`);
        const og = (prop) => {
            const m = html.match(new RegExp(`<meta[^>]+property="og:${prop}"[^>]+content="([^"]*)"`, 'i'))
                || html.match(new RegExp(`<meta[^>]+content="([^"]*)"[^>]+property="og:${prop}"`, 'i'));
            return m ? decode(m[1]) : '';
        };
        const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1];
        const name = decode(h1) || og('title') || p.slug.toUpperCase();
        const poster = proxyPoster(og('image') || (html.match(/<video[^>]*id="front-player"[^>]*poster="([^"]+)"/) || [])[1] || '', host);
        const meta = {
            id: `javtiful:${p.vid}:${p.slug}`,
            type: 'movie',
            name,
            poster,
            background: poster,
            posterShape: 'landscape',
            description: og('description') || name,
            genres: ['18+']
        };
        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.error(`[Javtiful Meta Error] ${id}:`, err.message);
        return null;
    }
}

/**
 * Read the `playerSources` JSON array embedded in the page (falls back to the <source> tags of #front-player).
 */
function parseSources(html) {
    const i = html.indexOf('"playerSources"');
    if (i >= 0) {
        const a = html.indexOf('[', i);
        let depth = 0;
        for (let k = a; a >= 0 && k < html.length && k < a + 20000; k++) {
            if (html[k] === '[') depth++;
            else if (html[k] === ']' && --depth === 0) {
                try {
                    const arr = JSON.parse(html.slice(a, k + 1));
                    if (Array.isArray(arr) && arr.length) return arr.filter(s => s && s.src);
                } catch (e) { /* fall through */ }
                break;
            }
        }
    }
    const video = (html.match(/<video[^>]*id="front-player"[\s\S]*?<\/video>/) || [])[0] || '';
    return [...video.matchAll(/<source[^>]*>/g)].map(m => ({
        src: (m[0].match(/src="([^"]+)"/) || [])[1],
        size: Number((m[0].match(/size="(\d+)"/) || [])[1]) || 0
    })).filter(s => s.src);
}

/**
 * The page embeds a direct MP4 on its own CDN (fast-stream.jav.si): Range works from the Worker and no Referer is needed.
 * The player fetches it straight from the CDN, so there's no Worker bandwidth. The link carries a signed path -> short cache.
 */
async function getStream(id) {
    const p = parseId(id);
    if (!p) return [];
    const cacheKey = `javtiful:stream:${p.vid}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const html = await fetchHtml(`/vn/video/${p.vid}/${encodeURIComponent(p.slug)}`);
        const sources = parseSources(html).sort((a, b) => (Number(b.size) || 0) - (Number(a.size) || 0));
        if (!sources.length) return [];
        const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1];
        const title = decode(h1) || p.slug.toUpperCase();
        const streams = sources.map((s) => ({
            name: `🔞 Javtiful [${s.size ? `${s.size}p ` : ''}MP4]`,
            title: `${title}\n⚡ Phát trực tiếp từ CDN • Không qua máy chủ`,
            url: s.src,
            behaviorHints: {
                notWebReady: false,
                bingeGroup: `javtiful-${s.size || 'mp4'}`
            }
        }));
        cache.set(cacheKey, streams, 600);
        return streams;
    } catch (err) {
        console.error(`[Javtiful Stream Error] ${id}:`, err.message);
        return [];
    }
}

module.exports = { getCatalog, getMeta, getStream, parseList, parseSources, GENRE_MAP };
