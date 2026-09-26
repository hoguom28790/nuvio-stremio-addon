const axios = require('axios');
const cache = require('../utils/cache');

const BASE_URL = 'https://javhd.mov';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const avdb = require('./avdb');

function getSafePoster(title, originalPoster) {
    if (title) {
        const match = title.match(/([A-Z0-9]{2,8}[-_]?\d{2,6})/i);
        if (match) {
            const code = match[1].toUpperCase().replace('_', '-');
            return `https://upload18.cc/v/${code}/poster.jpg`;
        }
    }
    return originalPoster || '';
}

const client = axios.create({
    baseURL: BASE_URL,
    timeout: 12000,
    headers: {
        'User-Agent': USER_AGENT,
        'Referer': `${BASE_URL}/`,
        'Accept': 'application/json'
    }
});

const CATEGORY_MAP = {
    'tất cả': '/vn/videos',
    'có che (censored)': '/vn/censored',
    'censored': '/vn/censored',
    'không che (uncensored)': '/vn/uncensored',
    'uncensored': '/vn/uncensored',
    'giảm mosaic (reducing mosaic)': '/vn/reducing-mosaic',
    'reducing mosaic': '/vn/reducing-mosaic',
    'mosaic': '/vn/reducing-mosaic',
    'dành cho bạn (for you)': '/vn/foryou',
    'for you': '/vn/foryou',
    'ngực khủng (big tits)': '/vn/category/big-tits',
    'big tits': '/vn/category/big-tits',
    'gái xinh (beautiful girl)': '/vn/category/beautiful-girl',
    'beautiful girl': '/vn/category/beautiful-girl',
    'nghiệp dư (amateur)': '/vn/category/amateur',
    'amateur': '/vn/category/amateur',
    'phụ nữ có chồng (married woman)': '/vn/category/married-woman',
    'married woman': '/vn/category/married-woman',
    'phụ nữ trưởng thành (mature woman)': '/vn/category/mature-woman',
    'mature woman': '/vn/category/mature-woman',
    'nữ sinh (school girls)': '/vn/category/school-girls',
    'school girls': '/vn/category/school-girls',
    'chính kịch (drama)': '/vn/category/drama',
    'drama': '/vn/category/drama',
    'ngoại tình (affair)': '/vn/category/affair',
    'affair': '/vn/category/affair',
    'nữ văn phòng (office lady)': '/vn/category/office-lady',
    'office lady': '/vn/category/office-lady',
    'nữ sinh viên (female student)': '/vn/category/female-student',
    'female student': '/vn/category/female-student',
    'cosplay': '/vn/category/cosplay',
    'cô giáo (female teacher)': '/vn/category/female-teacher',
    'female teacher': '/vn/category/female-teacher',
    'av trung quốc (chinese av)': '/vn/category/chinese-av',
    'chinese av': '/vn/category/chinese-av',
    'bbw': '/vn/category/bbw',
    'y tá (nurse)': '/vn/category/nurse',
    'nurse': '/vn/category/nurse',
    'milf': '/vn/category/milf',
    'sếp nữ (female boss)': '/vn/category/female-boss',
    'female boss': '/vn/category/female-boss',
    'chị dâu - em dâu (sister-in-law)': '/vn/category/sister-in-law',
    'sister-in-law': '/vn/category/sister-in-law',
    'nữ điều tra (female investigator)': '/vn/category/female-investigator',
    'female investigator': '/vn/category/female-investigator',
    'thôi miên (hypnosis)': '/vn/category/hypnosis',
    'hypnosis': '/vn/category/hypnosis',
    'người giúp việc (housekeeper)': '/vn/category/housekeeper',
    'housekeeper': '/vn/category/housekeeper'
};

let localCatalog = [];
try {
    localCatalog = require('../data/javhdmov_catalog.json');
} catch (e) {
    localCatalog = [];
}

async function getCatalog(catalogId, type, extra = {}) {
    const page = extra.skip ? Math.floor(parseInt(extra.skip, 10) / 23) + 1 : 1;
    let path = '';

    if (extra.search && extra.search.trim()) {
        const query = extra.search.trim();
        path = page > 1 
            ? `/vn/search/page/${page}/q/${encodeURIComponent(query)}`
            : `/vn/search/q/${encodeURIComponent(query)}`;
    } else if (extra.genre && typeof extra.genre === 'string') {
        const key = extra.genre.trim().toLowerCase().replace(/^thể loại:\s*/i, '').replace(/^danh mục:\s*/i, '');
        const target = CATEGORY_MAP[key] || '/vn/videos';
        path = page > 1 ? `${target}/page/${page}` : target;
    } else {
        switch (catalogId) {
            case 'javhdmov-foryou':
                path = page > 1 ? `/vn/foryou/page/${page}` : '/vn/foryou';
                break;
            case 'javhdmov-uncensored':
                path = page > 1 ? `/vn/uncensored/page/${page}` : '/vn/uncensored';
                break;
            case 'javhdmov-censored':
                path = page > 1 ? `/vn/censored/page/${page}` : '/vn/censored';
                break;
            case 'javhdmov-mosaic':
                path = page > 1 ? `/vn/reducing-mosaic/page/${page}` : '/vn/reducing-mosaic';
                break;
            case 'javhdmov-latest':
            case 'javhdmov-movie':
            default:
                path = page > 1 ? `/vn/videos/page/${page}` : '/vn/videos';
                break;
        }
    }

    const cacheKey = `javhdmov:catalog:${catalogId}:${path}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const res = await client.get(`/api/page?path=${encodeURIComponent(path)}`);
        const list = res.data?.videos || res.data?.items || [];
        if (list.length > 0) {
            const metas = list.map(item => ({
                id: `javhdmov:${item.id}`,
                type: 'movie',
                name: item.title,
                poster: getSafePoster(item.title, item.image_url),
                posterShape: 'poster',
                description: `JavHD MOV • [${item.quality_text || 'HD'}] ${item.title}\n⚡ Định tuyến: Fast Stream CDN (Direct MP4)\nThời lượng: ${item.duration || 'N/A'} • Lượt xem: ${item.views_text || '0'}`
            }));

            cache.set(cacheKey, metas, 600);
            return metas;
        }
    } catch (err) {
        console.warn(`[JavHD MOV Catalog API Error] ${path}:`, err.message);
    }

    // Fallback to static catalog when API is temporarily down / rate limited (e.g. Cloudflare Worker error 1027)
    let filtered = localCatalog;
    if (extra.search && extra.search.trim()) {
        const q = extra.search.toLowerCase().trim();
        filtered = localCatalog.filter(m => m.title.toLowerCase().includes(q) || m.id.includes(q));
    } else if (catalogId === 'javhdmov-censored') {
        filtered = localCatalog.filter(m => m.type === 'censored');
    } else if (catalogId === 'javhdmov-mosaic') {
        filtered = localCatalog.filter(m => m.type === 'reducing mosaic');
    } else if (extra.genre) {
        const gKey = extra.genre.toLowerCase();
        filtered = localCatalog.filter(m => Array.isArray(m.genres) && m.genres.some(g => g.toLowerCase().includes(gKey)));
    }

    return filtered.map(item => ({
        id: `javhdmov:${item.id}`,
        type: 'movie',
        name: item.title,
        poster: getSafePoster(item.title, item.poster),
        posterShape: 'poster',
        description: `JavHD MOV • [${item.quality_text || 'HD'}] ${item.title}\n⚡ Định tuyến: Fast Stream CDN (Direct MP4)\nThời lượng: ${item.duration || 'N/A'} • Lượt xem: ${item.views_text || '0'}`
    }));
}

async function getMeta(type, id) {
    const cleanId = id.replace(/^javhdmov:/, '').replace(/\.json$/, '').split(':')[0];
    const cacheKey = `javhdmov:meta:${cleanId}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const res = await client.get(`/api/watch?path=/vn/video/${cleanId}`);
        const d = res.data;
        if (!d || !d.title) return null;

        const genres = new Set(['JavHD MOV', '18+']);
        if (d.type) genres.add(d.type);
        if (Array.isArray(d.categories)) {
            d.categories.forEach(c => c.name && genres.add(c.name));
        }
        if (Array.isArray(d.tags)) {
            d.tags.forEach(t => t.name && genres.add(t.name));
        }

        const cast = Array.isArray(d.actresses) ? d.actresses.map(a => a.name).filter(Boolean) : [];
        let year = '2026';
        if (d.added_text) {
            const m = d.added_text.match(/\d{4}/);
            if (m) year = m[0];
        }

        const actressesStr = cast.length > 0 ? `\nDiễn viên: ${cast.join(', ')}` : '';
        const channelStr = d.channel?.name ? `\nStudio / Hãng: ${d.channel.name}` : '';
        const desc = `${d.seo?.description || d.title}\n${actressesStr}${channelStr}\n⚡ Định tuyến: Fast Stream CDN (Direct MP4)`.trim();

        const meta = {
            id: `javhdmov:${cleanId}`,
            type: 'movie',
            name: d.title,
            poster: getSafePoster(d.title, d.poster_url),
            background: getSafePoster(d.title, d.poster_url),
            posterShape: 'poster',
            description: desc,
            genres: Array.from(genres),
            cast,
            releaseInfo: year,
            behaviorHints: {
                defaultVideoId: `javhdmov:${cleanId}`
            }
        };

        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.warn(`[JavHD MOV Meta API Error] ${cleanId}:`, err.message);
    }

    const foundMeta = localCatalog.find(m => m.id === cleanId);
    if (foundMeta) {
        return {
            id: `javhdmov:${cleanId}`,
            type: 'movie',
            name: foundMeta.title,
            poster: getSafePoster(foundMeta.title, foundMeta.poster),
            background: getSafePoster(foundMeta.title, foundMeta.poster),
            posterShape: 'poster',
            description: `JavHD MOV • ${foundMeta.title}\n⚡ Định tuyến: Fast Stream CDN (Direct MP4)`,
            genres: foundMeta.genres || ['JavHD MOV', '18+'],
            cast: foundMeta.cast || [],
            releaseInfo: '2026',
            behaviorHints: {
                defaultVideoId: `javhdmov:${cleanId}`
            }
        };
    }
    return null;
}

async function getStream(id, type, host) {
    const cleanId = id.replace(/^javhdmov:/, '').replace(/\.json$/, '').split(':')[0];
    const cacheKey = `javhdmov:stream:${cleanId}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const res = await client.get(`/api/watch?path=/vn/video/${cleanId}`);
        const d = res.data;
        const playerSources = d?.player_sources || [];
        if (playerSources.length > 0) {
            const sortedSources = [...playerSources].sort((a, b) => (b.size || 0) - (a.size || 0));
            const best = sortedSources[0];
            const qualityLabel = best.size ? `${best.size}p` : 'HD';

            const streams = [{
                name: '🔞 [Direct CDN] JavHD MOV',
                title: `[${qualityLabel}] ${d.title}\n⚡ Định tuyến: Fast Stream CDN (Direct MP4)\n${d.type ? `Phân loại: ${d.type}` : ''}`.trim(),
                url: best.src,
                behaviorHints: {
                    notWebReady: false,
                    bingeGroup: `javhdmov-${cleanId}`,
                    proxyHeaders: {
                        request: {
                            'User-Agent': USER_AGENT,
                            'Referer': `${BASE_URL}/`
                        }
                    }
                }
            }];

            cache.set(cacheKey, streams, 1800);
            return streams;
        }
    } catch (err) {
        console.warn(`[JavHD MOV Stream API Error] ${cleanId}:`, err.message);
    }

    const foundItem = localCatalog.find(m => m.id === cleanId);
    if (foundItem && foundItem.stream_url) {
        return [{
            name: '🔞 [Direct CDN] JavHD MOV',
            title: `[FHD] ${foundItem.title}\n⚡ Định tuyến: Fast Stream CDN (Direct MP4)`,
            url: foundItem.stream_url,
            behaviorHints: {
                notWebReady: false,
                bingeGroup: `javhdmov-${cleanId}`
            }
        }];
    }

    // Cross-source fallback via JAV code
    let titleToSearch = foundItem?.title || '';
    const codeMatch = (titleToSearch || cleanId).match(/([A-Z0-9]{2,8}[-_]?\d{2,6})/i);
    if (codeMatch) {
        const code = codeMatch[1].toUpperCase().replace('_', '-');
        try {
            const avdbItems = await avdb.getCatalog('avdb-movie', 'movie', { search: code });
            if (avdbItems && avdbItems.length > 0) {
                const avdbStreams = await avdb.getStream(avdbItems[0].id, 'movie', host);
                if (avdbStreams && avdbStreams.length > 0) {
                    const mapped = avdbStreams.map(s => ({
                        ...s,
                        name: '🔞 [Direct CDN] JavHD MOV',
                        title: s.title.replace(/AVDB/g, 'JavHD MOV')
                    }));
                    cache.set(cacheKey, mapped, 1800);
                    return mapped;
                }
            }
        } catch (e) {
            console.warn('[JavHD MOV Cross-source Error]:', e.message);
        }
    }
    return [];
}

module.exports = {
    getCatalog,
    getMeta,
    getStream,
    CATEGORY_MAP
};
