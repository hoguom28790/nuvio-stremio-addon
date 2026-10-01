const axios = require('axios');
const cache = require('../utils/cache');

const BASE_URL = 'https://missav.ai';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

const GENRE_MAP = {
    'Tất Cả': '/new',
    'Phát Hành Mới': '/new',
    'Mới Cập Nhật': '/release',
    'Không Che (Uncensored)': '/uncensored-leak',
    'Vietsub / Phụ Đề': '/chinese-subtitle',
    'Phụ Đề Tiếng Anh': '/english-subtitle',
    'Nghiệp Dư / FC2': '/fc2',
    'Thịnh Hành (Hôm nay)': '/today-hot',
    'Thịnh Hành (Tuần)': '/weekly-hot',
    'Thịnh Hành (Tháng)': '/monthly-hot',
    'VR Thực Tế Ảo': '/genres/VR',
    'Siro (Amateur)': '/siro',
    'Luxu (Amateur)': '/luxu',
    'Gana (Amateur)': '/gana',
    'Maan (Amateur)': '/maan',
    'Nữ Sinh (Schoolgirl)': '/genres/High%20School%20Girl',
    'Ngực Khủng (Big Breasts)': '/genres/Big%20Breasts',
    'Vợ / MILF (Mature Woman)': '/genres/Mature%20Woman',
    'Xuất Tinh Trong (Creampie)': '/genres/Creampie',
    'Gái Xinh (Pretty Girl)': '/genres/Pretty%20Girl',
    'Oral Sex': '/genres/Oral%20Sex',
    'Tập Thể (Orgy)': '/genres/Orgy'
};

// Universal HTTP GET helper for M3U8 playlists (works in Node.js & Cloudflare Worker)
async function fetchM3u8Content(targetUrl, referer = 'https://missav.ai/') {
    const origin = 'https://missav.ai';
    const headers = {
        'User-Agent': USER_AGENT,
        'Referer': referer,
        'Origin': origin,
        'Accept': '*/*'
    };

    // If running in Node.js environment, use https.request to ensure HTTP/1.1 clean TLS handshake
    if (typeof process !== 'undefined' && process.versions && process.versions.node) {
        try {
            const reqFn = typeof require !== 'undefined' ? require : null;
            if (reqFn) {
                const https = reqFn('https');
                return await new Promise((resolve, reject) => {
                const u = new URL(targetUrl);
                const req = https.request({
                    protocol: u.protocol,
                    hostname: u.hostname,
                    port: u.port || 443,
                    path: u.pathname + u.search,
                    method: 'GET',
                    headers: {
                        'Host': u.hostname,
                        ...headers
                    },
                    timeout: 10000
                }, res => {
                    let data = '';
                    res.on('data', chunk => data += chunk);
                    res.on('end', () => {
                        if (res.statusCode >= 200 && res.statusCode < 400) {
                            resolve(data);
                        } else {
                            reject(new Error(`Upstream returned ${res.statusCode}`));
                        }
                    });
                });
                req.on('error', reject);
                req.on('timeout', () => {
                    req.destroy();
                    reject(new Error('Request timeout'));
                });
                req.end();
            });
            }
        } catch (nodeErr) {
            console.warn('[MissAV] Node https.request error, falling back to fetch:', nodeErr.message);
        }
    }

    // Cloudflare Worker / standard fetch environment
    const res = await fetch(targetUrl, {
        headers,
        signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined
    });
    if (!res.ok) {
        throw new Error(`Fetch failed with status ${res.status}`);
    }
    return await res.text();
}

/**
 * Fetch HTML page with fallback mechanisms
 */
async function fetchPage(targetUrl) {
    const cacheKey = `missav:html:${targetUrl}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    // 1. Direct fetch with browser headers
    try {
        const res = await axios.get(targetUrl, {
            headers: {
                'User-Agent': USER_AGENT,
                'Referer': `${BASE_URL}/`,
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9,vi;q=0.8'
            },
            timeout: 7000
        });
        const html = typeof res.data === 'string' ? res.data : '';
        if (html && !html.includes('Attention Required') && !html.includes('Cloudflare</title>') && (html.includes('thumbnail') || html.includes('eval(function') || html.includes('plyr'))) {
            cache.set(cacheKey, html, 900); // 15 min cache
            return html;
        }
    } catch (e) {
        // Continue to Jina reader
    }

    // 2. High-speed Jina AI Reader proxy (bypasses Cloudflare bot challenges & ISP blocks)
    try {
        const jinaUrl = `https://r.jina.ai/${targetUrl}`;
        const res = await axios.get(jinaUrl, {
            headers: { 'X-Return-Format': 'html' },
            timeout: 12000
        });
        const html = typeof res.data === 'string' ? res.data : '';
        if (html && (html.includes('thumbnail') || html.includes('eval(function') || html.includes('plyr') || html.includes('<h1'))) {
            cache.set(cacheKey, html, 900);
            return html;
        }
    } catch (jinaErr) {
        console.warn(`[MissAV] Jina fetch failed for ${targetUrl}:`, jinaErr.message);
    }

    return '';
}

/**
 * Unpack Dean Edwards packed JavaScript code
 */
function unpackDeanEdwards(html) {
    const packerRegex = /eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\('([\s\S]*?)',(\d+),(\d+),'([\s\S]*?)'\.split\('\|'\)/;
    const match = html.match(packerRegex);
    if (!match) return null;

    const p = match[1];
    const a = parseInt(match[2], 10);
    const c = parseInt(match[3], 10);
    const k = match[4].split('|');

    const e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
    };
    const dict = {};
    for (let i = 0; i < c; i++) {
        dict[e(i)] = k[i] || e(i);
    }
    const unpacked = p.replace(/\b\w+\b/g, function(val) {
        return dict[val] || val;
    });

    const clean = unpacked.replace(/\\['"]/g, "'").replace(/\\\\/g, '');
    const sources = {};
    const mMaster = clean.match(/source\s*=\s*'([^']+)'/);
    if (mMaster) sources.master = mMaster[1];
    const m1080 = clean.match(/source1280\s*=\s*'([^']+)'/);
    if (m1080) sources['1080'] = m1080[1];
    const m720 = clean.match(/source842\s*=\s*'([^']+)'/);
    if (m720) sources['720'] = m720[1];

    if (!sources.master && !sources['1080']) {
        const anyM3u8 = clean.match(/https?:\/\/[^\s'"`<>]+\.m3u8[^\s'"`<>]*/i);
        if (anyM3u8) sources.master = anyM3u8[0];
    }
    return sources;
}

/**
 * Parse movie cards from HTML page
 */
function parseMovieCards(html) {
    const metas = [];
    const seenSlugs = new Set();

    // Pattern 1: Match thumbnail cards
    const blockRegex = /<div[^>]*class="[^"]*thumbnail[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi;
    let blockMatch;

    while ((blockMatch = blockRegex.exec(html)) !== null) {
        const block = blockMatch[0];

        const linkMatch = block.match(/href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?([a-zA-Z0-9_-]+)"/i);
        if (!linkMatch || !linkMatch[1]) continue;
        const slug = linkMatch[1].trim();

        if (['new', 'release', 'genres', 'actresses', 'makers', 'vip', 'search', 'dm'].some(x => slug.startsWith(x))) {
            continue;
        }
        if (seenSlugs.has(slug)) continue;
        seenSlugs.add(slug);

        let poster = '';
        const imgMatch = block.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i) || block.match(/(?:data-src|src)="([^"]+)"/i);
        if (imgMatch && imgMatch[1] && !imgMatch[1].startsWith('data:image')) {
            poster = imgMatch[1].trim();
            if (poster.startsWith('//')) poster = 'https:' + poster;
            else if (poster.startsWith('/')) poster = BASE_URL + poster;
            poster = `https://wsrv.nl/?url=${encodeURIComponent(poster)}`;
        }

        let title = '';
        const titleMatch = block.match(/<a[^>]*class="text-secondary[^"]*"[^>]*>([\s\S]*?)<\/a>/i) ||
                           block.match(/alt="([^"]+)"/i);
        if (titleMatch && titleMatch[1]) {
            title = titleMatch[1].replace(/<[^>]+>/g, '').trim();
        }
        title = (title || slug).replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"');

        let duration = '';
        const durMatch = block.match(/<span[^>]*class="[^"]*rounded[^"]*"[^>]*>\s*([0-9:]+)\s*<\/span>/i);
        if (durMatch && durMatch[1]) {
            duration = durMatch[1].trim();
        }

        metas.push({
            id: `missav:${slug}`,
            type: 'movie',
            name: title,
            poster: poster,
            posterShape: 'poster',
            description: `MissAV • ${title}${duration ? ' [' + duration + ']' : ''}\n⚡ Luồng Full HD 1080p Tuyến Cloudflare Edge`
        });
    }

    // Pattern 2 Fallback: Match links directly if blocks not detected
    if (metas.length === 0) {
        const linkRegex = /href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?([a-zA-Z0-9_-]+)"[^>]*alt="([^"]+)"/gi;
        let lm;
        while ((lm = linkRegex.exec(html)) !== null) {
            const slug = lm[1].trim();
            const alt = lm[2].trim();
            if (['new', 'release', 'genres', 'actresses', 'makers', 'vip', 'search', 'dm'].some(x => slug.startsWith(x))) continue;
            if (seenSlugs.has(slug)) continue;
            seenSlugs.add(slug);

            metas.push({
                id: `missav:${slug}`,
                type: 'movie',
                name: alt || slug,
                poster: `https://wsrv.nl/?url=${encodeURIComponent(`https://fourhoi.com/${slug}/cover-t.jpg`)}`,
                posterShape: 'poster',
                description: `MissAV • ${alt || slug}\n⚡ Luồng Full HD 1080p Tuyến Cloudflare Edge`
            });
        }
    }

    return metas;
}

/**
 * Get catalog movies for MissAV with live search and pagination
 */
async function getCatalog(catalogId, type, extra = {}) {
    try {
        const skip = parseInt(extra.skip, 10) || 0;
        const page = Math.floor(skip / 12) + 1;

        // 1. Search query
        if (extra.search) {
            const query = extra.search.trim();
            const cacheKey = `missav:search:${encodeURIComponent(query)}:${page}`;
            const cached = cache.get(cacheKey);
            if (cached) return cached;

            const searchUrl = `${BASE_URL}/en/search/${encodeURIComponent(query)}?page=${page}`;
            const html = await fetchPage(searchUrl);
            if (html) {
                const items = parseMovieCards(html);
                if (items && items.length > 0) {
                    cache.set(cacheKey, items, 600);
                    return items;
                }
            }
            return [];
        }

        // 2. Genre or Catalog Browsing
        let targetPath = '/new';
        if (extra.genre && GENRE_MAP[extra.genre]) {
            targetPath = GENRE_MAP[extra.genre];
        }

        const targetUrl = page > 1 
            ? `${BASE_URL}/en${targetPath}?page=${page}`
            : `${BASE_URL}/en${targetPath}`;

        const cacheKey = `missav:catalog:${targetUrl}`;
        const cached = cache.get(cacheKey);
        if (cached && cached.length > 0) return cached;

        const html = await fetchPage(targetUrl);
        if (html) {
            const items = parseMovieCards(html);
            if (items && items.length > 0) {
                cache.set(cacheKey, items, 600);
                return items;
            }
        }

        return [];
    } catch (err) {
        console.error('[MissAV Catalog Error]:', err.message);
        return [];
    }
}

/**
 * Get movie metadata for MissAV
 */
async function getMeta(type, id) {
    try {
        const cleanId = id.replace(/^missav:/, '').replace(/\.json$/, '');
        const slug = cleanId.split(':')[0];

        const cacheKey = `missav:meta:${slug}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const targetUrl = `${BASE_URL}/en/${slug}`;
        const html = await fetchPage(targetUrl);
        if (!html) return null;

        // 1. Title
        let title = '';
        const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        if (h1Match) {
            title = h1Match[1].replace(/<[^>]+>/g, '').trim();
        }
        if (!title) {
            const ogTitle = html.match(/property="og:title"\s+content="([^"]+)"/i);
            if (ogTitle) title = ogTitle[1].trim();
        }
        title = (title || slug).replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"');

        // 2. Poster
        let poster = '';
        const ogImg = html.match(/property="og:image"\s+content="([^"]+)"/i);
        if (ogImg) {
            poster = ogImg[1].trim();
        } else {
            const coverMatch = html.match(/(?:data-src|src)="([^"]*cover[^"]*)"/i);
            if (coverMatch) poster = coverMatch[1].trim();
        }
        if (poster && !poster.includes('wsrv.nl')) {
            poster = `https://wsrv.nl/?url=${encodeURIComponent(poster)}`;
        }

        // 3. Genres
        const genres = [];
        const genreRegex = /href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?genres\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
        let gm;
        const seenGenres = new Set();
        while ((gm = genreRegex.exec(html)) !== null) {
            const gName = gm[2].replace(/<[^>]+>/g, '').trim();
            if (gName && !seenGenres.has(gName.toLowerCase())) {
                seenGenres.add(gName.toLowerCase());
                genres.push(gName);
            }
        }

        // 4. Actresses
        const cast = [];
        const actRegex = /href="https:\/\/missav\.ai\/(?:[a-z]{2}\/)?actresses\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
        let am;
        const seenAct = new Set();
        while ((am = actRegex.exec(html)) !== null) {
            const actName = am[2].replace(/<[^>]+>/g, '').trim();
            if (actName && !seenAct.has(actName.toLowerCase())) {
                seenAct.add(actName.toLowerCase());
                cast.push(actName);
            }
        }

        // 5. Release Date
        let releaseInfo = '2026';
        const dateMatch = html.match(/(\d{4}-\d{2}-\d{2})/);
        if (dateMatch) releaseInfo = dateMatch[1];

        const meta = {
            id: `missav:${slug}`,
            type: 'movie',
            name: title,
            poster: poster,
            background: poster,
            posterShape: 'poster',
            description: `MissAV • ${title}\n⭐ Diễn viên: ${cast.join(', ') || 'N/A'}\n🏷️ Thể loại: ${genres.join(', ') || 'JAV'}\n📅 Phát hành: ${releaseInfo}`,
            genres: genres.length > 0 ? genres : ['MissAV', 'JAV', '18+'],
            cast: cast,
            releaseInfo: releaseInfo,
            behaviorHints: {
                defaultVideoId: `missav:${slug}`
            }
        };

        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.error('[MissAV Meta Error]:', err.message);
        return null;
    }
}

/**
 * Extract streaming URLs for MissAV
 */
async function getStream(id, type, host = 'hophimaddon.hophim-4g6qbubt.workers.dev') {
    try {
        const cleanId = id.replace(/^missav:/, '').replace(/\.json$/, '');
        const slug = cleanId.split(':')[0];

        const cacheKey = `missav:streams:${slug}:${host}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const targetUrl = `${BASE_URL}/en/${slug}`;
        const html = await fetchPage(targetUrl);
        if (!html) return [];

        const sources = unpackDeanEdwards(html);
        if (!sources || (!sources.master && !sources['1080'] && !sources['720'])) {
            console.warn(`[MissAV] No stream sources found in page for ${slug}`);
            return [];
        }

        let title = slug;
        const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        if (h1Match) title = h1Match[1].replace(/<[^>]+>/g, '').trim();

        const currentHost = host.includes('://') ? host : `https://${host}`;
        const streams = [];

        // Stream 1: Cloudflare Edge Proxy 1080p (Unlimited bandwidth, zero Render cost, smooth playback on all platforms)
        streams.push({
            name: '🛡️ [Edge Proxy] MissAV',
            title: `[Full HD 1080p] ${title}\n🛡️ Tuyến Cloudflare Edge Siêu Tốc • MPEG-TS (Stremio Web, TV, Nuvio)`,
            url: `${currentHost}/missav/stream/${slug}/1080.m3u8`,
            behaviorHints: {
                notWebReady: false,
                bingeGroup: `missav-edge-${slug}`
            }
        });

        // Stream 2: Cloudflare Edge Proxy 720p (Tiết kiệm băng thông di động)
        if (sources['720']) {
            streams.push({
                name: '🛡️ [Edge Proxy] MissAV 720p',
                title: `[HD 720p] ${title}\n🛡️ Tuyến Cloudflare Edge Tiết Kiệm Băng Thông`,
                url: `${currentHost}/missav/stream/${slug}/720.m3u8`,
                behaviorHints: {
                    notWebReady: false,
                    bingeGroup: `missav-edge-720-${slug}`
                }
            });
        }

        // Stream 3: VIP Direct CDN (Cho Stremio Desktop / Android TV có hỗ trợ proxyHeaders)
        const directM3u8 = sources['1080'] || sources.master;
        if (directM3u8) {
            streams.push({
                name: '⚡ [VIP Direct CDN] MissAV',
                title: `[Gốc VIP CDN] ${title}\n⚡ Luồng Trực Tiếp CDN surrit.com • proxyHeaders`,
                url: directM3u8,
                behaviorHints: {
                    notWebReady: false,
                    bingeGroup: `missav-vip-${slug}`,
                    proxyHeaders: {
                        request: {
                            'User-Agent': USER_AGENT,
                            'Referer': `${BASE_URL}/`,
                            'Origin': BASE_URL
                        }
                    }
                }
            });
        }

        if (streams.length > 0) {
            cache.set(cacheKey, streams, 1800);
        }
        return streams;
    } catch (err) {
        console.error('[MissAV Stream Error]:', err.message);
        return [];
    }
}

/**
 * Fetch M3U8 and rewrite segment URLs to Cloudflare Worker edge proxy
 */
async function getM3u8(slug, quality = '1080', host = 'hophimaddon.hophim-4g6qbubt.workers.dev', env = {}) {
    const hostBase = host.includes('://') ? host : `https://${host}`;
    const cacheKey = `missav:m3u8:${slug}:${quality}:${host}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const targetUrl = `${BASE_URL}/en/${slug}`;
    const html = await fetchPage(targetUrl);
    if (!html) {
        throw new Error('Failed to fetch MissAV page');
    }

    const sources = unpackDeanEdwards(html);
    if (!sources) {
        throw new Error('No stream sources unpacked');
    }

    let targetM3u8 = null;
    if (quality === '720' && sources['720']) {
        targetM3u8 = sources['720'];
    } else if (quality === '1080' && sources['1080']) {
        targetM3u8 = sources['1080'];
    } else {
        targetM3u8 = sources['1080'] || sources.master || sources['720'];
    }

    if (!targetM3u8) {
        throw new Error('M3U8 target URL not resolved');
    }

    // Fetch the M3U8 playlist
    let m3u8Content = await fetchM3u8Content(targetM3u8, `${BASE_URL}/`);

    // If master playlist with variants, select the desired variant
    if (m3u8Content.includes('#EXT-X-STREAM-INF')) {
        const lines = m3u8Content.split('\n');
        let chosenSubUrl = null;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith('#EXT-X-STREAM-INF')) {
                const nextLine = lines[i + 1] ? lines[i + 1].trim() : '';
                if (nextLine && !nextLine.startsWith('#')) {
                    if (quality === '720' && (line.includes('1280x720') || nextLine.includes('720p'))) {
                        chosenSubUrl = new URL(nextLine, targetM3u8).href;
                        break;
                    } else if (quality === '1080' && (line.includes('1920x1080') || nextLine.includes('1080p'))) {
                        chosenSubUrl = new URL(nextLine, targetM3u8).href;
                        break;
                    } else if (!chosenSubUrl) {
                        chosenSubUrl = new URL(nextLine, targetM3u8).href;
                    }
                }
            }
        }
        if (chosenSubUrl) {
            targetM3u8 = chosenSubUrl;
            m3u8Content = await fetchM3u8Content(chosenSubUrl, `${BASE_URL}/`);
        }
    }

    // Rewrite segments to Cloudflare Worker edge proxy
    const lines = m3u8Content.split('\n');
    const rewritten = [];
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) {
            rewritten.push(line);
        } else {
            const absSegUrl = new URL(trimmed, targetM3u8).href;
            rewritten.push(`${hostBase}/missav/segment.ts?url=${encodeURIComponent(absSegUrl)}`);
        }
    }

    const result = rewritten.join('\n');
    cache.set(cacheKey, result, 600); // 10 min cache
    return result;
}

module.exports = {
    GENRE_MAP,
    fetchPage,
    parseMovieCards,
    getCatalog,
    getMeta,
    getStream,
    getM3u8
};
