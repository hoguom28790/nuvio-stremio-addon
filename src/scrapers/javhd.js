const axios = require('axios');
const cache = require('../utils/cache');

const BASE_URL = 'https://javhdz.ac';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const client = axios.create({
    timeout: 12000,
    headers: {
        'User-Agent': USER_AGENT
    }
});

// Genre to URL mapping on javhdz.ac
const GENRE_MAP = {
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

    // Match each movie card <li><a class="movie-item...</li>
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

        // Extract thumbnail image
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

        // Extract subtitle badge (e.g. Vietsub)
        let subBadge = '';
        const subMatch = fullCard.match(/<span class="meta-sub">([^<]*)<\/span>/i);
        if (subMatch && subMatch[1]) {
            subBadge = subMatch[1].trim();
        }

        // Clean HTML entities from title
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

/**
 * Get catalog movies for JavHD
 */
async function getCatalog(catalogId, type, extra = {}) {
    try {
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

        const res = await client.get(targetUrl);
        const metas = parseMovieCards(res.data);

        if (metas.length > 0) {
            cache.set(cacheKey, metas, 600); // 10 minutes cache
        }
        return metas;
    } catch (err) {
        console.error('[JavHD Catalog Error]:', err.message);
        return [];
    }
}

/**
 * Get movie metadata from single page
 */
async function getMeta(type, id) {
    try {
        const slug = id.replace('javhd:', '').split(':')[0];
        const cacheKey = `javhd:meta:${slug}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const targetUrl = `${BASE_URL}/${slug}.html`;
        const res = await client.get(targetUrl);
        const html = res.data;

        // Title
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

        // Poster & Background
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

        // Description
        let description = '';
        const descMatch = html.match(/name="description"\s+content="([^"]+)"/i);
        if (descMatch && descMatch[1]) {
            description = descMatch[1].trim();
        }

        // Tags / Genres
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

        cache.set(cacheKey, meta, 3600); // 1 hour cache
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
        const slug = id.replace('javhd:', '').split(':')[0];
        const cacheKey = `javhd:streams:${slug}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const targetUrl = `${BASE_URL}/${slug}.html`;
        const res = await client.get(targetUrl);
        const html = res.data;

        // Extract window.atob base64 string
        const atobMatch = html.match(/window\.atob\(["']([^"']+)["']\)/i);
        if (!atobMatch || !atobMatch[1]) {
            console.warn(`[JavHD] No atob stream found for ${slug}`);
            return [];
        }

        const b64 = atobMatch[1].trim();
        const masterUrl = Buffer.from(b64, 'base64').toString('utf8').trim();
        if (!masterUrl.startsWith('http')) {
            console.warn(`[JavHD] Invalid decoded master URL for ${slug}: ${masterUrl}`);
            return [];
        }

        // Derive quality variants
        let url1080 = masterUrl;
        let url720 = masterUrl;

        if (masterUrl.includes('-playlist.m3u8')) {
            url1080 = masterUrl.replace('-playlist.m3u8', '-1080.m3u8');
            url720 = masterUrl.replace('-playlist.m3u8', '-720.m3u8');
        } else if (masterUrl.includes('.m3u8')) {
            url1080 = masterUrl.replace(/\.m3u8$/, '-1080.m3u8');
            url720 = masterUrl.replace(/\.m3u8$/, '-720.m3u8');
        }

        // Extract title
        let title = '';
        const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        if (titleMatch && titleMatch[1]) {
            title = titleMatch[1].replace(/<[^>]+>/g, '').trim();
        }
        title = (title || slug).replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"');

        const hostBase = host.includes('://') ? host : `https://${host}`;

        const proxyHeaders = {
            request: {
                'User-Agent': USER_AGENT,
                'Referer': `${BASE_URL}/`
            }
        };

        const streams = [];

        // 1. Full HD 1080p (Ưu tiên số 1 - Sắc nét nhất, mượt mà nhất)
        streams.push({
            name: '🔞 JavHD',
            title: `[Full HD 1080p] ${title}\n⚡ Siêu Nét 1080p • Phát Mượt Mà • Tua Tức Thì`,
            url: `${hostBase}/javhd/stream/${slug}/1080.m3u8`,
            behaviorHints: {
                notWebReady: true,
                bingeGroup: 'javhd-1080p',
                proxyHeaders: proxyHeaders
            }
        });

        // 2. HD 720p (Tốc độ cao)
        streams.push({
            name: '🔞 JavHD',
            title: `[HD 720p] ${title}\n⚡ Tốc Độ Cao • Tua Nhanh Mượt Mà`,
            url: `${hostBase}/javhd/stream/${slug}/720.m3u8`,
            behaviorHints: {
                notWebReady: true,
                bingeGroup: 'javhd-720p',
                proxyHeaders: proxyHeaders
            }
        });

        // 3. Tự Động Auto (Adaptive Bitrate)
        streams.push({
            name: '🔞 JavHD',
            title: `[Tự Động Auto] ${title}\n⚡ Đa Độ Phân Giải Thích Ứng (1080p/720p/480p)`,
            url: `${hostBase}/javhd/stream/${slug}/master.m3u8`,
            behaviorHints: {
                notWebReady: true,
                bingeGroup: 'javhd-auto',
                proxyHeaders: proxyHeaders
            }
        });

        // 4. Direct CDN (Dự phòng trực tiếp CDN)
        streams.push({
            name: '🔞 JavHD [Direct]',
            title: `[Direct CDN] ${title}\n⚡ Luồng Trực Tiếp CDN`,
            url: url1080,
            behaviorHints: {
                notWebReady: true,
                bingeGroup: 'javhd-direct',
                proxyHeaders: proxyHeaders
            }
        });

        if (streams.length > 0) {
            cache.set(cacheKey, streams, 1800); // 30 minutes cache
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
async function getM3u8(slug, quality = '1080', host = 'hophimaddon.vercel.app') {
    const hostBase = host.includes('://') ? host : `https://${host}`;
    const cacheKey = `javhd:m3u8:${slug}:${quality}:${host}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const targetUrl = `${BASE_URL}/${slug}.html`;
    const res = await client.get(targetUrl);
    const html = res.data;

    const atobMatch = html.match(/window\.atob\(["']([^"']+)["']\)/i);
    if (!atobMatch || !atobMatch[1]) {
        throw new Error('Video stream not found');
    }

    const b64 = atobMatch[1].trim();
    const masterUrl = Buffer.from(b64, 'base64').toString('utf8').trim();

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
        // Default to 1080
        targetM3u8Url = masterUrl.replace('-playlist.m3u8', '-1080.m3u8');
    }

    // Fetch the M3U8 content with proper Referer header
    const m3u8Res = await client.get(targetM3u8Url, {
        headers: {
            'Referer': `${BASE_URL}/`,
            'User-Agent': USER_AGENT
        }
    });

    let content = m3u8Res.data;
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
        cache.set(cacheKey, content, 900); // 15 minutes cache
    }
    return content;
}

module.exports = {
    getCatalog,
    getMeta,
    getStream,
    getM3u8,
    GENRE_MAP
};
