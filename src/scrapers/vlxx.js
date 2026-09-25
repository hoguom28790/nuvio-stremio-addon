const axios = require('axios');
const cache = require('../utils/cache');

const BASE_URL = 'https://vlxx.phd';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const client = axios.create({
    baseURL: BASE_URL,
    timeout: 12000,
    headers: {
        'User-Agent': USER_AGENT,
        'Referer': `${BASE_URL}/`
    }
});

// Category path mapping
const CATEGORY_MAP = {
    'vlxx-latest': '/',
    'vlxx-vietsub': '/vietsub/',
    'vlxx-uncensored': '/khong-che/',
    'vlxx-popular': '/phim-sex-hay/',
    'vlxx-jav': '/jav/',
    'vlxx-hocsinh': '/hoc-sinh/',
    'vlxx-vungtrom': '/vung-trom/',
    'vlxx-cap3': '/cap-3/',
    'vlxx-aumy': '/chau-au/'
};

// Genre path mapping
const GENRE_MAP = {
    'vietsub': '/vietsub/',
    'khong che': '/khong-che/',
    'khong che (uncensored)': '/khong-che/',
    'uncensored': '/khong-che/',
    'phim hay': '/phim-sex-hay/',
    'jav': '/jav/',
    'sex hoc sinh': '/hoc-sinh/',
    'hoc sinh': '/hoc-sinh/',
    'vung trom': '/vung-trom/',
    'vung trom - ngoai tinh': '/vung-trom/',
    'ngoai tinh': '/vung-trom/',
    'phim cap 3': '/cap-3/',
    'cap 3': '/cap-3/',
    'sex my - chau au': '/chau-au/',
    'chau au': '/chau-au/',
    'my': '/chau-au/',
    'xvideos': '/xvideos/',
    'xnxx': '/xnxx/',
    'xxx': '/xxx/'
};

// Slugify helper for search and URL matching
function slugify(str) {
    if (!str) return '';
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Strip HTML tags helper
function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

// Parse video cards from HTML listing
function parseVideoList(html) {
    const items = [];
    const itemRegex = /<div id="video-(\d+)" class="video-item">[\s\S]*?<a title="([^"]*)" href="([^"]*)">[\s\S]*?data-original="([^"]*)"[\s\S]*?(?:<div class="ribbon">([^<]*)<\/div>[\s\S]*?)?<\/a>[\s\S]*?<div class="video-name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g;

    let match;
    while ((match = itemRegex.exec(html)) !== null) {
        const vid = match[1];
        const title = match[2] || stripHtml(match[6]);
        const href = match[3];
        const poster = match[4].startsWith('http') ? match[4] : `${BASE_URL}${match[4]}`;
        const ribbon = match[5] ? match[5].trim() : '';

        // Extract slug from href: /video/:slug/:id/
        const slugMatch = href.match(/\/video\/([^\/]+)\/\d+\//);
        const slug = slugMatch ? slugMatch[1] : `video-${vid}`;

        items.push({
            id: vid,
            slug,
            title,
            url: href,
            poster,
            ribbon
        });
    }
    return items;
}

/**
 * 1. GET CATALOG
 */
async function getCatalog(catalogId, type, extra = {}) {
    const skip = extra.skip ? parseInt(extra.skip, 10) || 0 : 0;
    const page = Math.floor(skip / 30) + 1;

    let targetPath = CATEGORY_MAP[catalogId] || '/';

    if (extra.search) {
        const querySlug = slugify(extra.search);
        targetPath = page === 1 ? `/search/${querySlug}/` : `/search/${querySlug}/${page}/`;
    } else if (extra.genre) {
        const cleanGenre = extra.genre.replace(/^Thể loại:\s*/i, '').trim().toLowerCase();
        const genreSlug = slugify(cleanGenre);
        if (GENRE_MAP[genreSlug]) {
            const basePath = GENRE_MAP[genreSlug];
            targetPath = page === 1 ? basePath : `${basePath}${page}/`;
        } else if (page > 1) {
            targetPath = targetPath === '/' ? `/new/${page}/` : `${targetPath}${page}/`;
        }
    } else if (page > 1) {
        targetPath = targetPath === '/' ? `/new/${page}/` : `${targetPath}${page}/`;
    }

    const cacheKey = `vlxx:catalog:${catalogId}:${targetPath}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const res = await client.get(targetPath);
        const items = parseVideoList(res.data);

        const metas = items.map(item => {
            const genres = ['18+'];
            if (item.ribbon) genres.push(item.ribbon);

            return {
                id: `vlxx:${item.slug}:${item.id}`,
                name: item.title,
                type: 'movie',
                poster: item.poster,
                background: item.poster,
                description: `${item.ribbon ? '[' + item.ribbon + '] ' : ''}${item.title}`,
                releaseInfo: item.ribbon || undefined,
                genres: genres
            };
        });

        if (metas.length > 0) {
            cache.set(cacheKey, metas, 900); // 15 mins cache
        }
        return metas;
    } catch (err) {
        console.error(`[VLXX Catalog Error] ${targetPath}:`, err.message);
        return [];
    }
}

/**
 * 2. GET META
 */
async function getMeta(type, id) {
    const cleanId = id.replace(/^vlxx:/, '').replace(/\.json$/, '');
    const parts = cleanId.split(':');
    const vid = parts.length > 1 ? parts[parts.length - 1] : parts[0];
    const slug = parts.length > 1 ? parts[0] : '';

    const cacheKey = `vlxx:meta:${vid}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        let pageUrl = slug ? `/video/${slug}/${vid}/` : null;
        let html = '';

        if (pageUrl) {
            try {
                const res = await client.get(pageUrl);
                html = res.data;
            } catch (e) {
                // If specific slug URL fails, try search fallback
                pageUrl = null;
            }
        }

        if (!pageUrl) {
            const resSearch = await client.get(`/search/${vid}/`);
            const items = parseVideoList(resSearch.data);
            const found = items.find(i => i.id === vid) || items[0];
            if (found && found.url) {
                const res = await client.get(found.url);
                html = res.data;
            }
        }

        const titleMatch = html.match(/<h1 class="page-title breadcrumb"[^>]*>([\s\S]*?)<\/h1>/i);
        const title = titleMatch ? stripHtml(titleMatch[1]) : `VLXX Video #${vid}`;

        const descMatch = html.match(/<div class="video-description">([\s\S]*?)<\/div>/i);
        const description = descMatch ? stripHtml(descMatch[1]) : title;

        const codeMatch = html.match(/<span class="video-code">([^<]+)<\/span>/i);
        const code = codeMatch ? codeMatch[1].trim() : '';

        const actressMatch = html.match(/<div class="actress-tag"><a[^>]*>([^<]+)<\/a><\/div>/i);
        const actress = actressMatch ? actressMatch[1].trim() : '';

        const tags = [];
        const tagRegex = /<div class="category-tag">([\s\S]*?)<\/div>/i;
        const tagBlock = html.match(tagRegex);
        if (tagBlock) {
            const innerTags = [...tagBlock[1].matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map(m => m[1].trim());
            tags.push(...innerTags);
        }

        const poster = `https://vlxx.phd/img/${vid}.jpg`;
        const genres = Array.from(new Set(['18+', ...tags])).filter(Boolean);

        const meta = {
            id: `vlxx:${slug || 'video'}:${vid}`,
            name: title,
            type: 'movie',
            poster: poster,
            background: poster,
            description: `${code ? '[' + code + '] ' : ''}${actress ? 'Diễn viên: ' + actress + '\n\n' : ''}${description}`,
            releaseInfo: code || undefined,
            genres: genres,
            behaviorHints: {
                defaultVideoId: `vlxx:${slug || 'video'}:${vid}`
            }
        };

        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.error(`[VLXX Meta Error] ID: ${id}:`, err.message);
        return null;
    }
}

/**
 * Helper to resolve .vl manifest URL from ajax.php and embed page
 */
async function resolveManifestUrl(vid, serverId = 1) {
    const cacheKey = `vlxx:manifestUrl:${vid}:${serverId}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const params = new URLSearchParams();
    params.append('vlxx_server', '1');
    params.append('id', String(vid));
    params.append('server', String(serverId));

    const resAjax = await client.post('/ajax.php', params.toString(), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',
            'Referer': `${BASE_URL}/`
        }
    });

    const m = (resAjax.data?.player || '').match(/src=["']([^"']+)["']/i);
    if (!m) {
        throw new Error(`Could not extract embed URL for video ${vid} server ${serverId}`);
    }

    const embedUrl = m[1];
    const resEmbed = await axios.get(embedUrl, {
        headers: {
            'User-Agent': USER_AGENT,
            'Referer': `${BASE_URL}/`
        },
        timeout: 10000
    });

    const srcMatch = resEmbed.data.match(/window\.__SRC\s*=\s*(\[.*?\]);/s);
    if (!srcMatch) {
        throw new Error(`Could not find window.__SRC in embed ${embedUrl}`);
    }

    const srcArr = JSON.parse(srcMatch[1]);
    const fileUrl = srcArr[0]?.file;
    if (!fileUrl) {
        throw new Error(`No file URL in window.__SRC for video ${vid}`);
    }

    cache.set(cacheKey, fileUrl, 3600);
    return fileUrl;
}

/**
 * 3. GET STREAM
 */
async function getStream(id, type, host = 'hophimaddon.hophim-4g6qbubt.workers.dev') {
    const cleanId = id.replace(/^vlxx:/, '').replace(/\.json$/, '');
    const parts = cleanId.split(':');
    const vid = parts.length > 1 ? parts[parts.length - 1] : parts[0];

    const hostBase = host.includes('://') ? host : `https://${host}`;
    const streams = [];

    // Proxy headers required for smooth playback & seeking
    const proxyHeaders = {
        request: {
            'User-Agent': USER_AGENT,
            'Referer': `${BASE_URL}/`
        }
    };

    // Server 1 (Chính - Full HD)
    streams.push({
        name: '🔞 VLXX',
        title: `[Máy chủ #1 Full HD]\n⚡ Tốc độ cao • Tua mượt mà`,
        url: `${hostBase}/vlxx/stream/${vid}/1.m3u8`,
        behaviorHints: {
            notWebReady: false,
            bingeGroup: 'vlxx-s1',
            proxyHeaders: proxyHeaders
        }
    });

    // Server 2 (Dự phòng)
    streams.push({
        name: '🔞 VLXX [Dự phòng]',
        title: `[Máy chủ #2 Dự phòng]\n⚡ Tuyến dự phòng Server #2`,
        url: `${hostBase}/vlxx/stream/${vid}/2.m3u8`,
        behaviorHints: {
            notWebReady: false,
            bingeGroup: 'vlxx-s2',
            proxyHeaders: proxyHeaders
        }
    });

    return streams;
}

/**
 * 4. GET REWRITTEN M3U8 PLAYLIST
 */
async function getM3u8(vid, serverId = 1, host = 'hophimaddon.hophim-4g6qbubt.workers.dev') {
    const manifestUrl = await resolveManifestUrl(vid, serverId);
    const hostBase = host.includes('://') ? host : `https://${host}`;

    const res = await axios.get(manifestUrl, {
        headers: {
            'User-Agent': USER_AGENT,
            'Referer': 'https://play.vlstream.net/'
        },
        timeout: 12000
    });

    const rawProxy = process.env.SEGMENT_PROXY_URL;
    const segmentBase = rawProxy ? rawProxy.replace(/\/+$/, '') : `${hostBase}/vlxx/segment.ts`;
    const separator = segmentBase.includes('?') ? '&' : '?';

    const lines = res.data.split('\n');
    const rewritten = lines.map(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
            return `${segmentBase}${separator}url=${encodeURIComponent(trimmed)}`;
        }
        return line;
    }).join('\n');

    return rewritten;
}

module.exports = {
    getCatalog,
    getMeta,
    getStream,
    getM3u8,
    resolveManifestUrl,
    slugify
};
