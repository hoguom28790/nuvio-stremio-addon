const axios = require('axios');
const cache = require('../utils/cache');

const BASE_URL = 'https://javhdz.wtf';
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
            const req = Function('return require')();
            const fs = req('fs');
            const path = req('path');
            const dir = typeof __dirname !== 'undefined' ? __dirname : process.cwd();
            const possible = [
                path.resolve(dir, '../data/javhd_catalog.json'),
                path.resolve(dir, '../../src/data/javhd_catalog.json'),
                path.join(process.cwd(), 'src', 'data', 'javhd_catalog.json'),
                path.join(process.cwd(), 'data', 'javhd_catalog.json'),
                '/opt/render/project/src/src/data/javhd_catalog.json',
                '/opt/render/project/src/data/javhd_catalog.json'
            ];
            for (const p of possible) {
                if (fs.existsSync(p)) {
                    const raw = fs.readFileSync(p, 'utf8');
                    const text = raw && raw.charCodeAt(0) === 0xFEFF ? raw.slice(1) : raw;
                    cachedCatalog = JSON.parse(text);
                    lastCatalogFetchTime = Date.now();
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
                lastCatalogFetchTime = Date.now();
                initSlugMap();
            }
        } catch (e) {
            console.warn('[JavHD] Failed to load remote catalog:', e.message);
        }
    }

    return cachedCatalog || [];
}

/**
 * Format poster URL cleanly (replaces dead javhdz.bz, strips wsrv.nl, supports Edge CDN route)
 */
function formatPoster(poster, host) {
    if (!poster) return '';
    let clean = String(poster).replace(/https?:\/\/wsrv\.nl\/\?url=/g, '').replace(/javhdz\.bz/g, 'javhdz.wtf');
    try { clean = decodeURIComponent(clean); } catch (e) {}
    if (clean.startsWith('//')) clean = 'https:' + clean;
    else if (clean.startsWith('/')) clean = `${BASE_URL}${clean}`;
    else if (!clean.startsWith('http')) clean = `${BASE_URL}/${clean}`;

    // If host provided and it contains /data/, route through edge poster proxy for 100% reliability
    if (host && clean.includes('javhdz.wtf/data/')) {
        const edgeHost = host && !host.includes('onrender.com') ? host : ((typeof process !== 'undefined' && process.env && process.env.CF_HOST) || 'hophimaddon.hophim-4g6qbubt.workers.dev');
        const edgeBase = edgeHost.includes('://') ? edgeHost : `https://${edgeHost}`;
        const parts = clean.split('/data/');
        if (parts[1]) {
            return `${edgeBase}/javhd/poster/${parts[1]}`;
        }
    }
    return clean;
}

// Genre to URL mapping on javhdz.wtf
const GENRE_MAP = {
    'Tất Cả': '/video/',
    'Mới Cập Nhật': '/video/',
    'Thịnh Hành': '/trending/',
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
function parseMovieCards(html, host = '') {
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
            poster = formatPoster(imgMatch[1].trim(), host);
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
                timeout: 1500
            });
            const html = typeof res.data === 'string' ? res.data : '';
            if (html && !html.includes('Attention Required') && !html.includes('Cloudflare</title>') && (html.includes('movie-item') || html.includes('window.atob') || html.includes('<h1'))) {
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
            timeout: 5000
        });
        const html = typeof resProxy.data === 'string' ? resProxy.data : '';
        if (html && (html.includes('movie-item') || html.includes('window.atob') || html.includes('<h1'))) {
            return html;
        }
    } catch (errProxy) {}

    return '';
}

/**
 * Get catalog movies for JavHD
 */
/**
 * Get catalog movies for JavHD with live search and infinite pagination
 */
async function getCatalog(catalogId, type, extra = {}, host = '') {
    try {
        await ensureStaticCatalog();
        const skip = parseInt(extra.skip, 10) || 0;
        const page = Math.floor(skip / 18) + 1;

        // 1. LIVE SEARCH: Searches entire JavHD library + static catalog
        if (extra.search) {
            const query = extra.search.trim();
            const cacheKey = `javhd:search:${encodeURIComponent(query)}:${page}:${host}`;
            const cached = cache.get(cacheKey);
            if (cached) return cached;

            const searchMetas = [];
            const seenSlugs = new Set();

            // Live search on javhdz.wtf
            try {
                const searchUrl = page > 1 
                    ? `${BASE_URL}/search/${encodeURIComponent(query)}/page/${page}/`
                    : `${BASE_URL}/search/${encodeURIComponent(query)}/`;
                const html = await fetchPage(searchUrl);
                if (html) {
                    const liveItems = parseMovieCards(html, host);
                    for (const item of liveItems) {
                        if (!seenSlugs.has(item.id)) {
                            seenSlugs.add(item.id);
                            searchMetas.push(item);
                        }
                    }
                }
            } catch (errSearch) {
                console.warn('[JavHD] Live search error:', errSearch.message);
            }

            // Also search cached catalog on page 1 to ensure no misses
            if (page === 1 && cachedCatalog && Array.isArray(cachedCatalog)) {
                const qLower = query.toLowerCase();
                const matchedStatic = cachedCatalog.filter(m =>
                    (m.name && m.name.toLowerCase().includes(qLower)) ||
                    (m.slug && m.slug.toLowerCase().includes(qLower)) ||
                    (m.genres && m.genres.some(g => g.toLowerCase().includes(qLower)))
                );
                for (const m of matchedStatic) {
                    if (!seenSlugs.has(m.id)) {
                        seenSlugs.add(m.id);
                        searchMetas.push({
                            id: m.id,
                            type: 'movie',
                            name: m.name,
                            poster: formatPoster(m.poster, host),
                            posterShape: 'poster',
                            description: m.description
                        });
                    }
                }
            }

            if (searchMetas.length > 0) {
                cache.set(cacheKey, searchMetas, 600);
                return searchMetas;
            }
            return [];
        }

        // 2. CATEGORY / GENRE BROWSING
        let targetUrl = '';
        if (extra.genre && GENRE_MAP[extra.genre]) {
            const mappedPath = GENRE_MAP[extra.genre].replace(/\/$/, '');
            targetUrl = page > 1 ? `${BASE_URL}${mappedPath}/page/${page}/` : `${BASE_URL}${mappedPath}/`;
        } else {
            switch (catalogId) {
                case 'javhd-trending':
                    targetUrl = page > 1 ? `${BASE_URL}/trending/page/${page}/` : `${BASE_URL}/trending/`;
                    break;
                case 'javhd-censored':
                    targetUrl = page > 1 ? `${BASE_URL}/category/censored-2/page/${page}/` : `${BASE_URL}/category/censored-2/`;
                    break;
                case 'javhd-uncensored':
                    targetUrl = page > 1 ? `${BASE_URL}/category/uncensored-3/page/${page}/` : `${BASE_URL}/category/uncensored-3/`;
                    break;
                case 'javhd-beauty':
                    targetUrl = page > 1 ? `${BASE_URL}/category/beauty-4/page/${page}/` : `${BASE_URL}/category/beauty-4/`;
                    break;
                case 'javhd-latest':
                default:
                    targetUrl = page > 1 ? `${BASE_URL}/video/page/${page}/` : `${BASE_URL}/video/`;
                    break;
            }
        }

        const cacheKey = `javhd:catalog:${targetUrl}:${host}`;
        const cached = cache.get(cacheKey);
        if (cached && cached.length > 0) return cached;

        // Try live fetch from javhdz.wtf
        try {
            const html = await fetchPage(targetUrl);
            if (html) {
                const liveItems = parseMovieCards(html, host);
                if (liveItems && liveItems.length > 0) {
                    cache.set(cacheKey, liveItems, 600);
                    return liveItems;
                }
            }
        } catch (e) {
            console.warn(`[JavHD] Live fetch failed for ${targetUrl}:`, e.message);
        }

        // Fallback to static catalog if live fetch failed (e.g. offline)
        if (cachedCatalog && Array.isArray(cachedCatalog) && cachedCatalog.length > 0) {
            let results = [...cachedCatalog];
            if (extra.genre) {
                const stripAccents = (s) => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
                const gNorm = stripAccents(extra.genre);
                if (gNorm !== 'tat ca' && gNorm !== 'moi cap nhat' && gNorm !== 'thinh hanh') {
                    if (gNorm.includes('khong che') || gNorm.includes('uncensored')) {
                        results = results.filter(m => (m.genres || []).some(genre => {
                            const n = stripAccents(genre);
                            return n.includes('khong che') || n.includes('uncensored');
                        }));
                    } else if (gNorm.includes('co che') || gNorm.includes('censored')) {
                        results = results.filter(m => (m.genres || []).some(genre => {
                            const n = stripAccents(genre);
                            return n.includes('censored') || n.includes('co che') || !n.includes('khong che');
                        }));
                    } else {
                        const keywords = gNorm.replace(/\([^)]*\)/g, '').trim().split(/\s+/).filter(Boolean);
                        results = results.filter(m => (m.genres || []).some(genre => {
                            const n = stripAccents(genre);
                            return keywords.every(kw => n.includes(kw));
                        }));
                    }
                }
            }
            const pageItems = results.slice(skip, skip + 18);
            if (pageItems.length > 0) {
                return pageItems.map(m => ({
                    id: m.id,
                    type: 'movie',
                    name: m.name,
                    poster: formatPoster(m.poster, host),
                    posterShape: 'poster',
                    description: m.description
                }));
            }
        }

        return [];
    } catch (err) {
        console.error('[JavHD Catalog Error]:', err.message);
        return [];
    }
}

/**
 * Get movie metadata from single page or static catalog
 */
async function getMeta(type, id, host = '') {
    try {
        await ensureStaticCatalog();
        const cleanId = id.replace(/^javhd:/, '').replace(/\.json$/, '');
        const slug = cleanId.split(':')[0];

        if (slugMap && slugMap.has(slug)) {
            const item = slugMap.get(slug);
            const proxyPoster = formatPoster(item.poster, host);
            const proxyBg = formatPoster(item.background || item.poster, host);
            return {
                id: `javhd:${slug}`,
                type: 'movie',
                name: item.name,
                poster: proxyPoster,
                background: proxyBg,
                posterShape: 'poster',
                description: item.description || `Xem phim ${item.name} Vietsub Full HD tại JavHD.`,
                genres: item.genres && item.genres.length > 0 ? item.genres : ['JavHD', 'Vietsub', '18+'],
                releaseInfo: '2026',
                behaviorHints: {
                    defaultVideoId: `javhd:${slug}`
                }
            };
        }

        const cacheKey = `javhd:meta:${slug}:${host}`;
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
            poster = formatPoster(ogImage[1].trim(), host);
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

        const currentHost = host.includes('://') ? host : `https://${host}`;

        const proxyHeaders = {
            request: {
                'User-Agent': USER_AGENT,
                'Referer': `${BASE_URL}/`
            }
        };

        const streams = [];

        // Stream 1: Luồng Clean qua Cloudflare Edge (Khử header PNG rác 95-byte, chuẩn MPEG-TS tương thích 100% mọi nền tảng kể cả Stremio Web)
        streams.push({
            name: '🛡️ JavHD [Lọc Rác PNG]',
            title: `[Full HD 1080p] ${title}\n🛡️ Đã Khử Header PNG Rác • Chuẩn MPEG-TS (Stremio Web, TV, Nuvio)`,
            url: `${currentHost}/javhd/stream/${slug}/1080.m3u8`,
            behaviorHints: {
                notWebReady: false,
                bingeGroup: 'javhd-clean'
            }
        });

        // Stream 2: Luồng 720p HD Clean qua Cloudflare Edge (Dự phòng & mượt mà trên kết nối yếu)
        streams.push({
            name: '⚡ JavHD [720p HD]',
            title: `[HD 720p] ${title}\n⚡ Độ Phân Giải 720p • Tối Ưu Băng Thông & Tua Nhanh`,
            url: `${currentHost}/javhd/stream/${slug}/720.m3u8`,
            behaviorHints: {
                notWebReady: false,
                bingeGroup: 'javhd-720'
            }
        });

        // Stream 3: VIP CDN trực tiếp (Tốc độ tối đa, tương thích trình phát hỗ trợ proxyHeaders)
        streams.push({
            name: '🔞 JavHD [VIP Direct CDN]',
            title: `[Full HD 1080p] ${title}\n⚡ Luồng Trực Tiếp CDN Gốc • Nhanh & Mượt`,
            url: masterUrl,
            behaviorHints: {
                notWebReady: false,
                bingeGroup: 'javhd-vip',
                proxyHeaders: proxyHeaders
            }
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
 * Proxy M3U8 content and unwrap segments (100% flat media playlist matching VLXX)
 */
async function getM3u8(slug, quality = '1080', host = 'hophimaddon.hophim-4g6qbubt.workers.dev', env = {}) {
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
    const candidateUrls = [];

    if (qStr.includes('720')) {
        candidateUrls.push(masterUrl.replace('-playlist.m3u8', '-720.m3u8'));
        candidateUrls.push(masterUrl.replace('-playlist.m3u8', '-1080.m3u8'));
        candidateUrls.push(masterUrl);
    } else if (qStr.includes('480')) {
        candidateUrls.push(masterUrl.replace('-playlist.m3u8', '-480.m3u8'));
        candidateUrls.push(masterUrl.replace('-playlist.m3u8', '-720.m3u8'));
        candidateUrls.push(masterUrl);
    } else {
        candidateUrls.push(masterUrl.replace('-playlist.m3u8', '-1080.m3u8'));
        candidateUrls.push(masterUrl.replace('-playlist.m3u8', '-720.m3u8'));
        candidateUrls.push(masterUrl.replace('-playlist.m3u8', '-480.m3u8'));
        candidateUrls.push(masterUrl);
    }

    let content = '';
    const fetchHeaders = {
        'Referer': `${BASE_URL}/`,
        'User-Agent': USER_AGENT
    };

    async function fetchSingleM3u8(targetUrl, headers, timeoutMs = 2500) {
        if (typeof process !== 'undefined' && process.versions && process.versions.node) {
            try {
                const res = await client.get(targetUrl, { headers, timeout: timeoutMs });
                if (res && res.data && String(res.data).includes('#EXTM3U')) {
                    return { url: targetUrl, content: String(res.data) };
                }
            } catch (e) {}
        }
        if (typeof fetch !== 'undefined') {
            try {
                const res = await fetch(targetUrl, {
                    headers,
                    referrer: `${BASE_URL}/`,
                    referrerPolicy: 'unsafe-url',
                    signal: AbortSignal.timeout ? AbortSignal.timeout(timeoutMs) : undefined
                });
                if (res.ok) {
                    const text = await res.text();
                    if (text && text.includes('#EXTM3U')) {
                        return { url: targetUrl, content: text };
                    }
                }
            } catch (e) {}
        }
        throw new Error('Failed to fetch M3U8 from ' + targetUrl);
    }

    // 1. Concurrent race across candidate qualities. Generous per-request timeout: datacenter IPs (Render)
    //    can take several seconds to reach tiktokcdn.top; the fastest response still wins immediately.
    try {
        const winning = await Promise.any(candidateUrls.map(u => fetchSingleM3u8(u, fetchHeaders, 12000)));
        content = winning.content;
    } catch (raceErr) {
        content = '';
    }

    // 2. Nếu fetch trực tiếp không thành công -> Dùng GAS / Proxy Resolver
    if (!content || !content.includes('#EXTM3U')) {
        const gasUrl = (env && env.GAS_PROXY_URL) || (env && env.KKPHIM_GAS_PROXY_URL) || (typeof process !== 'undefined' && process.env && process.env.GAS_PROXY_URL) || (typeof globalThis !== 'undefined' && globalThis.GAS_PROXY_URL) || (typeof globalThis !== 'undefined' && globalThis.KKPHIM_GAS_PROXY_URL);
        if (gasUrl) {
            for (const targetM3u8Url of candidateUrls) {
                try {
                    const proxyTarget = `${gasUrl}?url=${encodeURIComponent(targetM3u8Url)}&referer=${encodeURIComponent(BASE_URL + '/')}`;
                    const gasRes = await fetch(proxyTarget, {
                        signal: AbortSignal.timeout ? AbortSignal.timeout(3500) : undefined
                    });
                    if (gasRes.ok) {
                        const text = await gasRes.text();
                        if (text && text.includes('#EXTM3U')) {
                            content = text;
                            break;
                        }
                    }
                } catch (err) {}
            }
        }
    }

    // 3. Nếu content nhận được là Master Playlist (#EXT-X-STREAM-INF), lấy sub-variant thích hợp và fetch media playlist
    if (content && content.includes('#EXT-X-STREAM-INF')) {
        const lines = content.split('\n');
        let selectedSub = '';
        for (let i = 0; i < lines.length; i++) {
            const l = lines[i].trim();
            if (l.startsWith('#EXT-X-STREAM-INF')) {
                const nextLine = (lines[i + 1] || '').trim();
                if (nextLine && !nextLine.startsWith('#')) {
                    if (qStr.includes('720') && nextLine.includes('720')) {
                        selectedSub = nextLine;
                        break;
                    } else if (qStr.includes('480') && nextLine.includes('480')) {
                        selectedSub = nextLine;
                        break;
                    } else if (nextLine.includes('1080')) {
                        selectedSub = nextLine;
                        break;
                    } else if (!selectedSub) {
                        selectedSub = nextLine;
                    }
                }
            }
        }

        if (selectedSub) {
            let subTargetUrl = selectedSub;
            if (!subTargetUrl.startsWith('http')) {
                const baseDir = masterUrl.substring(0, masterUrl.lastIndexOf('/') + 1);
                subTargetUrl = baseDir + selectedSub;
            }
            try {
                const item = await fetchSingleM3u8(subTargetUrl, fetchHeaders, 10000);
                if (item && item.content && item.content.includes('#EXTM3U')) {
                    content = item.content;
                }
            } catch (errSub) {}
        }
    }

    if (!content || !content.includes('#EXTM3U')) {
        throw new Error('Could not retrieve JavHD stream playlist');
    }

    // 4. Chuẩn hóa media playlist giống hệt VLXX: Rewrite TẤT CẢ các segment URL sang Cloudflare Edge unwrapper
    const edgeHost = host && !host.includes('onrender.com') ? host : ((typeof process !== 'undefined' && process.env && process.env.CF_HOST) || 'hophimaddon.hophim-4g6qbubt.workers.dev');
    const edgeBase = edgeHost.includes('://') ? edgeHost : `https://${edgeHost}`;
    const segmentBase = `${edgeBase}/javhd/segment.ts`;
    const separator = segmentBase.includes('?') ? '&' : '?';

    const lines = content.split('\n');
    const rewritten = lines.map(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
            return `${segmentBase}${separator}url=${encodeURIComponent(trimmed)}`;
        }
        return line;
    }).join('\n');

    if (rewritten) {
        cache.set(cacheKey, rewritten, 1800);
    }
    return rewritten;
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
