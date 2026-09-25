const axios = require('axios');
const cache = require('../utils/cache');

const BASE_URL = 'https://javhdz.bz';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const client = axios.create({
    timeout: 12000,
    headers: {
        'User-Agent': USER_AGENT,
        'Referer': `${BASE_URL}/`
    }
});

// Load static catalog with cache in memory
let cachedCatalog = null;
let slugMap = null;

const REMOTE_CATALOG_URL = 'https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/javhd_catalog.json';

let lastCatalogFetchTime = 0;
const CATALOG_TTL = 3600 * 1000; // 1 hour TTL

function initSlugMap() {
    if (cachedCatalog && Array.isArray(cachedCatalog)) {
        slugMap = new Map();
        for (const item of cachedCatalog) {
            if (item.slug) slugMap.set(item.slug, item);
            if (item.id) {
                slugMap.set(item.id, item);
                const cleanId = item.id.replace('javhd:', '');
                slugMap.set(cleanId, item);
            }
        }
    }
}

async function ensureStaticCatalog() {
    const isExpired = (Date.now() - lastCatalogFetchTime) > CATALOG_TTL;
    if (cachedCatalog && Array.isArray(cachedCatalog) && cachedCatalog.length > 0 && !isExpired) {
        return cachedCatalog;
    }

    // Check local filesystem in Node.js
    if (typeof process !== 'undefined' && process.versions && process.versions.node) {
        try {
            const fs = await import('node:fs');
            const path = await import('node:path');
            const possible = [
                path.join(process.cwd(), 'src', 'data', 'javhd_catalog.json'),
                path.join(process.cwd(), 'data', 'javhd_catalog.json')
            ];
            for (const p of possible) {
                if (fs.existsSync(p)) {
                    const raw = fs.readFileSync(p, 'utf8');
                    const text = raw && raw.charCodeAt(0) === 0xFEFF ? raw.slice(1) : raw;
                    cachedCatalog = JSON.parse(text);
                    initSlugMap();
                    break;
                }
            }
        } catch (e) {}
    }

    // Fetch from GitHub CDN in Cloudflare Worker or if local not found
    if (!cachedCatalog || !Array.isArray(cachedCatalog) || cachedCatalog.length === 0) {
        try {
            const res = await axios.get(REMOTE_CATALOG_URL, { timeout: 15000 });
            let data = res.data;
            if (typeof data === 'string') {
                const text = data.charCodeAt(0) === 0xFEFF ? data.slice(1) : data;
                data = JSON.parse(text);
            }
            if (Array.isArray(data) && data.length > 0) {
                cachedCatalog = data;
                initSlugMap();
            }
        } catch (e) {
            console.warn('[JavHD] Failed to load remote catalog:', e.message);
        }
    }

    return cachedCatalog || [];
}

// Genre to URL mapping on javhdz.bz
const GENRE_MAP = {
    'Tất Cả': '/video/',
    'Vietsub': '/tag/vietsub/',
    'Có Che (Censored)': '/category/censored-2/',
    'Không Che (Uncensored)': '/category/uncensored-3/',
    'Người Đẹp (Beauty)': '/category/beauty-4/',
    'Tokyo Hot': '/tag/Tokyo+Hot/',
    'S-Cute': '/tag/S-Cute/',
    'Loạn Luân': '/tag/loạn+luân/',
    'Gái Xinh': '/tag/gái+xinh/',
    'Vụng Trộm': '/tag/vụng+trộm/',
    'Gái Dâm': '/tag/gái+dâm/',
    'Tập Thể': '/tag/tập+thể/',
    'Học Đường': '/tag/sex+học+đường/',
    'Văn Phòng': '/tag/sex+văn+phòng/',
    'Bố Chồng Nàng Dâu': '/tag/bố+chồng+nàng+dâu/',
    'Hiếp Dâm': '/tag/hiếp+dâm/',
    'Sex Teen': '/tag/sex+teen/'
};

// Parse HTML page containing movie cards
function parseMovieCards(html) {
    const metas = [];
    const seenSlugs = new Set();

    const cardRegex = /<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi;
    let match;

    while ((match = cardRegex.exec(html)) !== null) {
        const fullCard = match[0];
        
        const slugMatch = fullCard.match(/href="(?:\/)?([^"\/]+)\.html"/i);
        if (!slugMatch || !slugMatch[1]) continue;
        const slug = slugMatch[1].trim();

        if (seenSlugs.has(slug)) continue;
        seenSlugs.add(slug);

        const titleMatch = fullCard.match(/title="([^"]*)"/i);
        let title = (titleMatch && titleMatch[1]) ? titleMatch[1].trim() : slug;

        let poster = '';
        const imgMatch = fullCard.match(/(?:data-src|src)="([^"]+)"/i);
        if (imgMatch && imgMatch[1]) {
            poster = imgMatch[1].trim();
            if (poster.startsWith('//')) {
                poster = 'https:' + poster;
            } else if (poster.startsWith('/')) {
                poster = BASE_URL + poster;
            } else if (!poster.startsWith('http')) {
                poster = `${BASE_URL}/${poster}`;
            }
        }

        let subBadge = '';
        const subMatch = fullCard.match(/<span class="meta-sub">([^<]*)<\/span>/i);
        if (subMatch && subMatch[1]) {
            subBadge = subMatch[1].trim();
        }

        title = title.replace(/&amp;/g, '&')
                     .replace(/&quot;/g, '"')
                     .replace(/&#039;/g, "'")
                     .replace(/&lt;/g, '<')
                     .replace(/&gt;/g, '>');

        metas.push({
            id: `javhd:${slug}`,
            type: 'movie',
            name: title,
            poster: poster,
            posterShape: 'poster',
            description: `JavHD • ${subBadge ? '[' + subBadge + '] ' : ''}${title}\n⚡ Định tuyến: TikTok CDN Tốc Độ Cao (1080p Full HD)\nNhật Bản Vietsub 18+`
        });
    }

    return metas;
}

// Fallback direct / proxy fetch page
async function fetchPage(targetUrl) {
    const userAgents = [
        'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
        'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
        'curl/7.88.1',
        'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
        USER_AGENT
    ];

    for (const ua of userAgents) {
        try {
            const res = await client.get(targetUrl, {
                headers: {
                    'User-Agent': ua,
                    'Referer': `${BASE_URL}/`,
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                    'Accept-Language': 'vi,en-US;q=0.9,en;q=0.8'
                },
                timeout: 8000
            });
            const html = typeof res.data === 'string' ? res.data : '';
            if (html && !html.includes('Attention Required') && !html.includes('Cloudflare</title>') && html.includes('movie-item')) {
                return html;
            }
        } catch (e) {
            // continue next attempt
        }
    }

    try {
        const proxyUrl = `https://r.jina.ai/${targetUrl}`;
        const resProxy = await axios.get(proxyUrl, {
            headers: { 'X-Return-Format': 'html' },
            timeout: 15000
        });
        const html = typeof resProxy.data === 'string' ? resProxy.data : '';
        if (html && html.includes('movie-item')) {
            return html;
        }
    } catch (errProxy) {}

    return '';
}

/**
 * Get catalog movies for JavHD
 */
async function getCatalog(catalogId, type, extra = {}) {
    try {
        await ensureStaticCatalog();
        const catalog = cachedCatalog || [];

        if (catalog.length > 0) {
            let results = [...catalog];

            if (extra.search) {
                const q = extra.search.toLowerCase();
                results = results.filter(m => 
                    (m.name && m.name.toLowerCase().includes(q)) || 
                    (m.slug && m.slug.toLowerCase().includes(q)) ||
                    (m.genres && m.genres.some(g => g.toLowerCase().includes(q)))
                );
            } else if (extra.genre) {
                const g = extra.genre.toLowerCase();
                if (g !== 'tất cả') {
                    results = results.filter(m => 
                        m.genres && m.genres.some(genre => genre.toLowerCase().includes(g) || g.includes(genre.toLowerCase()))
                    );
                }
            } else if (catalogId === 'javhd-uncensored') {
                results = results.filter(m => 
                    m.genres && m.genres.some(g => g.toLowerCase().includes('không che') || g.toLowerCase().includes('uncensored') || g.toLowerCase().includes('tokyo hot'))
                );
            } else if (catalogId === 'javhd-beauty') {
                results = results.filter(m => 
                    m.genres && m.genres.some(g => g.toLowerCase().includes('beauty') || g.toLowerCase().includes('gái xinh') || g.toLowerCase().includes('s-cute'))
                );
            } else if (catalogId === 'javhd-censored') {
                results = results.filter(m => 
                    m.genres && m.genres.some(g => g.toLowerCase().includes('có che') || g.toLowerCase().includes('censored'))
                );
            }

            const skip = parseInt(extra.skip, 10) || 0;
            const pageItems = results.slice(skip, skip + 18);
            if (pageItems.length > 0) {
                return pageItems.map(m => ({
                    id: m.id,
                    type: 'movie',
                    name: m.name,
                    poster: m.poster,
                    posterShape: 'poster',
                    description: m.description
                }));
            }
            return [];
        }

        // Live fallback
        const page = extra.skip ? Math.floor(extra.skip / 18) + 1 : 1;
        let urlPath = '';

        if (extra.search) {
            urlPath = `/search/${encodeURIComponent(extra.search)}/page/${page}/`;
        } else if (extra.genre && GENRE_MAP[extra.genre]) {
            const mappedPath = GENRE_MAP[extra.genre];
            urlPath = `${mappedPath.replace(/\/$/, '')}/page/${page}/`;
        } else {
            switch (catalogId) {
                case 'javhd-trending':
                    urlPath = `/trending/page/${page}/`;
                    break;
                case 'javhd-censored':
                    urlPath = `/category/censored-2/page/${page}/`;
                    break;
                case 'javhd-uncensored':
                    urlPath = `/category/uncensored-3/page/${page}/`;
                    break;
                case 'javhd-beauty':
                    urlPath = `/category/beauty-4/page/${page}/`;
                    break;
                case 'javhd-latest':
                default:
                    urlPath = `/video/page/${page}/`;
                    break;
            }
        }

        const targetUrl = `${BASE_URL}${urlPath}`;
        const cacheKey = `javhd:catalog:${catalogId}:${targetUrl}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const html = await fetchPage(targetUrl);
        const metas = parseMovieCards(html);

        if (metas.length > 0) {
            cache.set(cacheKey, metas, 600);
        }
        return metas;
    } catch (err) {
        console.error('[JavHD Catalog Error]:', err.message);
        return [];
    }
}

/**
 * Get movie metadata from single page or static catalog
 */
async function getMeta(type, id) {
    try {
        await ensureStaticCatalog();
        const cleanId = id.replace(/^javhd:/, '').replace(/\.json$/, '');
        const slug = cleanId.split(':')[0];

        if (slugMap && slugMap.has(slug)) {
            const item = slugMap.get(slug);
            return {
                id: `javhd:${slug}`,
                type: 'movie',
                name: item.name,
                poster: item.poster,
                background: item.background || item.poster,
                posterShape: 'poster',
                description: item.description || `Xem phim ${item.name} Vietsub Full HD tại JavHD.`,
                genres: item.genres && item.genres.length > 0 ? item.genres : ['JavHD', 'Vietsub', '18+'],
                releaseInfo: '2026',
                behaviorHints: {
                    defaultVideoId: `javhd:${slug}`
                }
            };
        }

        const cacheKey = `javhd:meta:${slug}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const targetUrl = `${BASE_URL}/${slug}.html`;
        const html = await fetchPage(targetUrl);

        let title = '';
        const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        if (titleMatch && titleMatch[1]) {
            title = titleMatch[1].replace(/<[^>]+>/g, '').trim();
        }
        if (!title) {
            const ogTitle = html.match(/property="og:title"\s+content="([^"]+)"/i);
            if (ogTitle) title = ogTitle[1].trim();
        }
        title = (title || slug).replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"');

        let poster = '';
        const ogImage = html.match(/property="og:image"\s+content="([^"]+)"/i);
        if (ogImage && ogImage[1]) {
            poster = ogImage[1].trim();
            if (poster.startsWith('//')) {
                poster = 'https:' + poster;
            } else if (poster.startsWith('/')) {
                poster = BASE_URL + poster;
            } else if (!poster.startsWith('http')) {
                poster = `${BASE_URL}/${poster}`;
            }
        }

        let description = '';
        const descMatch = html.match(/name="description"\s+content="([^"]+)"/i);
        if (descMatch && descMatch[1]) {
            description = descMatch[1].trim();
        }

        const genres = [];
        const tagRegex = /<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi;
        let tagMatch;
        const seenTags = new Set();
        while ((tagMatch = tagRegex.exec(html)) !== null) {
            const tag = tagMatch[1].trim();
            if (tag && !seenTags.has(tag.toLowerCase())) {
                seenTags.add(tag.toLowerCase());
                genres.push(tag);
                if (genres.length >= 10) break;
            }
        }

        const meta = {
            id: `javhd:${slug}`,
            type: 'movie',
            name: title,
            poster: poster,
            background: poster,
            posterShape: 'poster',
            description: description || `Xem phim ${title} Vietsub Full HD tại JavHD.`,
            genres: genres.length > 0 ? genres : ['JavHD', 'Vietsub', '18+'],
            releaseInfo: '2026',
            behaviorHints: {
                defaultVideoId: `javhd:${slug}`
            }
        };

        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.error('[JavHD Meta Error]:', err.message);
        return null;
    }
}

/**
 * Extract streaming URLs for JavHD
 */
async function getStream(id, type, host = 'hophimaddon.vercel.app') {
    try {
        await ensureStaticCatalog();
        const cleanId = id.replace(/^javhd:/, '').replace(/\.json$/, '');
        const slug = cleanId.split(':')[0];
        const cacheKey = `javhd:streams:${slug}:${host}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        let masterUrl = null;
        let title = slug;

        if (slugMap && slugMap.has(slug)) {
            const item = slugMap.get(slug);
            masterUrl = item.streamUrl;
            title = item.name;
        }

        if (!masterUrl) {
            const targetUrl = `${BASE_URL}/${slug}.html`;
            const html = await fetchPage(targetUrl);

            const atobMatch = html.match(/window\.atob\(["']([^"']+)["']\)/i);
            if (atobMatch && atobMatch[1]) {
                const b64 = atobMatch[1].trim();
                masterUrl = (typeof Buffer !== 'undefined' ? Buffer.from(b64, 'base64').toString('utf8') : atob(b64)).trim();
            }

            const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
            if (titleMatch && titleMatch[1]) {
                title = titleMatch[1].replace(/<[^>]+>/g, '').trim();
            }
            title = (title || slug).replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"');
        }

        if (!masterUrl || !masterUrl.startsWith('http')) {
            console.warn(`[JavHD] No stream URL found for ${slug}`);
            return [];
        }

        const hostBase = host.includes('://') ? host : `https://${host}`;
        const proxyHeaders = {
            request: {
                'User-Agent': USER_AGENT,
                'Referer': `${BASE_URL}/`
            }
        };

        let direct1080 = masterUrl;
        if (masterUrl.includes('-playlist.m3u8')) {
            direct1080 = masterUrl.replace('-playlist.m3u8', '-1080.m3u8');
        } else if (masterUrl.includes('.m3u8')) {
            direct1080 = masterUrl.replace(/\.m3u8$/, '-1080.m3u8');
        }

        const streams = [];

        // Fallback: Web player direct link (Required for Cloudflare Worker deployment)
        streams.push({
            name: `🌐 [Xem Trực Tiếp] JavHD Web`,
            title: `${title}\n⚡ Bắt buộc dùng trên Cloudflare Worker`,
            externalUrl: `https://javhdz.bz/phim/${slug}.html`
        });

        if (streams.length > 0) {
            cache.set(cacheKey, streams, 1800);
        }
        return streams;
    } catch (err) {
        console.error('[JavHD Stream Error]:', err.message);
        return [];
    }
}

/**
 * Proxy M3U8 content and unwrap segments
 */
async function getM3u8(slug, quality = '1080', host = 'hophimaddon.hophim-4g6qbubt.workers.dev') {
    await ensureStaticCatalog();
    const hostBase = host.includes('://') ? host : `https://${host}`;
    const cacheKey = `javhd:m3u8:${slug}:${quality}:${host}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    let masterUrl = null;
    if (slugMap && slugMap.has(slug)) {
        masterUrl = slugMap.get(slug).streamUrl;
    }

    if (!masterUrl) {
        const targetUrl = `${BASE_URL}/${slug}.html`;
        const html = await fetchPage(targetUrl);
        const atobMatch = html.match(/window\.atob\(["']([^"']+)["']\)/i);
        if (atobMatch && atobMatch[1]) {
            const b64 = atobMatch[1].trim();
            masterUrl = (typeof Buffer !== 'undefined' ? Buffer.from(b64, 'base64').toString('utf8') : atob(b64)).trim();
        }
    }

    if (!masterUrl) {
        throw new Error('Video stream not found');
    }

    const qStr = String(quality).toLowerCase();
    let targetM3u8Url = masterUrl;
    let isMaster = false;

    if (qStr.includes('720')) {
        targetM3u8Url = masterUrl.replace('-playlist.m3u8', '-720.m3u8');
    } else if (qStr.includes('480')) {
        targetM3u8Url = masterUrl.replace('-playlist.m3u8', '-480.m3u8');
    } else if (qStr.includes('master') || qStr.includes('auto') || qStr.includes('playlist')) {
        targetM3u8Url = masterUrl;
        isMaster = true;
    } else {
        targetM3u8Url = masterUrl.replace('-playlist.m3u8', '-1080.m3u8');
    }

    let content = '';
    if (typeof fetch !== 'undefined') {
        const res = await fetch(targetM3u8Url, {
            headers: {
                'Referer': `${BASE_URL}/`,
                'User-Agent': USER_AGENT
            },
            referrer: `${BASE_URL}/`,
            referrerPolicy: 'unsafe-url'
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch m3u8 playlist: ${res.status}`);
        }
        content = await res.text();
    } else {
        const m3u8Res = await client.get(targetM3u8Url, {
            headers: {
                'Referer': `${BASE_URL}/`,
                'User-Agent': USER_AGENT
            }
        });
        content = m3u8Res.data;
    }

    if (typeof content === 'string') {
        if (isMaster) {
            content = content.replace(/javhd-\d+-(\d+)\.m3u8/g, (match, p1) => {
                return `${hostBase}/javhd/stream/${slug}/${p1}.m3u8`;
            });
        } else {
            const rawProxy = process.env.SEGMENT_PROXY_URL;
            const segmentBase = rawProxy ? rawProxy.replace(/\/+$/, '') : `${hostBase}/javhd/segment.ts`;
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
    }

    if (content) {
        cache.set(cacheKey, content, 900);
    }
    return content;
}

module.exports = {
    getCatalog,
    getMeta,
    getStream,
    getM3u8,
    GENRE_MAP,
    parseMovieCards,
    ensureStaticCatalog
};
