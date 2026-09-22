const fs = require('fs');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');
const cache = require('../utils/cache');

const BASE_URL = 'https://hentaiz2.com';
const STORAGE_URL = 'https://storage.haiten.org';
const MIMIX_URL = 'https://x.mimix.cc';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const client = axios.create({
    timeout: 12000,
    headers: {
        'User-Agent': USER_AGENT
    }
});

// Load static catalog with cache in memory
let cachedCatalog = null;
let slugMap = null;

const REMOTE_CATALOG_URL = 'https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/src/data/hentaiz_catalog.json';

function initSlugMap() {
    if (cachedCatalog && Array.isArray(cachedCatalog)) {
        slugMap = new Map();
        for (const ep of cachedCatalog) {
            if (ep.slug) slugMap.set(ep.slug, ep);
            if (ep.id) {
                slugMap.set(ep.id, ep);
                const cleanId = ep.id.replace('hentaiz:', '');
                slugMap.set(cleanId, ep);
            }
        }
    }
}

async function ensureStaticCatalog() {
    if (cachedCatalog && Array.isArray(cachedCatalog) && cachedCatalog.length > 0) return cachedCatalog;
    try {
        cachedCatalog = require('../data/hentaiz_catalog.json');
    } catch (e1) {
        try {
            const possiblePaths = [
                path.join(__dirname, '..', 'data', 'hentaiz_catalog.json'),
                path.join(process.cwd(), 'src', 'data', 'hentaiz_catalog.json'),
                path.join(process.cwd(), 'data', 'hentaiz_catalog.json')
            ];
            for (const p of possiblePaths) {
                if (fs.existsSync && fs.existsSync(p)) {
                    cachedCatalog = JSON.parse(fs.readFileSync(p, 'utf8'));
                    break;
                }
            }
        } catch (e2) {}
    }

    if (!cachedCatalog || !Array.isArray(cachedCatalog) || cachedCatalog.length === 0) {
        try {
            const res = await axios.get(REMOTE_CATALOG_URL, { timeout: 15000 });
            if (Array.isArray(res.data)) {
                cachedCatalog = res.data;
            }
        } catch (e3) {
            console.error('[HentaiZ] Failed to fetch remote catalog:', e3.message);
        }
    }

    initSlugMap();
    return cachedCatalog || [];
}

function getStaticCatalog() {
    if (cachedCatalog && Array.isArray(cachedCatalog)) return cachedCatalog;
    try {
        cachedCatalog = require('../data/hentaiz_catalog.json');
        initSlugMap();
        return cachedCatalog;
    } catch (e) {
        return cachedCatalog || [];
    }
}

function getSlugMap() {
    if (!slugMap) {
        getStaticCatalog();
    }
    return slugMap || new Map();
}

// Franchise definitions for multi-season/multi-part anime
const FRANCHISES = [
    {
        id: 'bible-black',
        name: 'Bible Black',
        match: (ep) => /bible\s*black/i.test(ep.title) || /bible-black/i.test(ep.slug),
        description: 'Tượng đài anime kinh điển huyền thoại với cốt truyện học đường thần bí đầy ma mị và cuốn hút.',
        seasons: [
            { name: 'Night of the Walpulgiss', match: (ep) => /night of the walpulgiss/i.test(ep.title) || /walpulgiss/i.test(ep.slug) },
            { name: 'Gaiden', match: (ep) => /gaiden/i.test(ep.title) || /gaiden/i.test(ep.slug) },
            { name: 'New Testament', match: (ep) => /new testament/i.test(ep.title) || /new-testament/i.test(ep.slug) },
            { name: 'Only Version', match: (ep) => /only version/i.test(ep.title) || /only-version/i.test(ep.slug) }
        ]
    },
    {
        id: 'discipline',
        name: 'Discipline',
        match: (ep) => /discipline/i.test(ep.title) || /discipline/i.test(ep.slug),
        description: 'Tác phẩm anime kinh điển nổi tiếng xoay quanh ngôi trường bí ẩn Discipline.',
        seasons: [
            { name: 'Hentai Academy', match: (ep) => /hentai academy/i.test(ep.title) || /hentai-academy/i.test(ep.slug) },
            { name: 'Zero', match: (ep) => /zero/i.test(ep.title) || /zero/i.test(ep.slug) },
            { name: 'Back Alley', match: (ep) => /back alley/i.test(ep.title) || /back-alley/i.test(ep.slug) }
        ]
    },
    {
        id: 'kuroinu',
        name: 'Kuroinu',
        match: (ep) => /kuroinu/i.test(ep.title) || /kuroinu/i.test(ep.slug),
        description: 'Bi kịch hắc ám huyền thoại của thánh nữ và binh đoàn lính đánh thuê.',
        seasons: [
            { name: 'Kedakaki Seijo wa Hakudaku ni Somaru', match: (ep) => /kedakaki/i.test(ep.title) || /kedakaki/i.test(ep.slug) },
            { name: 'II The Animation', match: (ep) => /ii the animation/i.test(ep.title) || /kuroinu-ii/i.test(ep.slug) },
            { name: 'The Beginning', match: (ep) => /beginning/i.test(ep.title) || /beginning/i.test(ep.slug) }
        ]
    },
    {
        id: 'oni-chichi',
        name: 'Oni Chichi',
        match: (ep) => /oni\s*chichi/i.test(ep.title) || /oni-chichi/i.test(ep.slug),
        description: 'Series kinh điển nhiều mùa nổi tiếng nhất qua nhiều năm phát sóng.',
        seasons: [
            { name: 'Phần 1: Khởi đầu (2009)', match: (ep) => /oni chichi$/i.test(ep.title.trim()) || (ep.releaseYear === 2009) },
            { name: 'Phần 2: Oni Chichi 2 (2010)', match: (ep) => /oni chichi 2 ep/i.test(ep.title) || (ep.releaseYear === 2010) },
            { name: 'Phần 3: Re-birth & Re-born (2011)', match: (ep) => /re-birth|re-born/i.test(ep.title) || (ep.releaseYear === 2011) },
            { name: 'Phần 4: Revenge & Rebuild (2013)', match: (ep) => /revenge|rebuild/i.test(ep.title) || (ep.releaseYear === 2013) },
            { name: 'Phần 5: Harvest, Refresh & Vacation (2015-2016)', match: (ep) => /harvest|refresh|vacation/i.test(ep.title) || [2015, 2016].includes(ep.releaseYear) },
            { name: 'Phần 6: Oni Chichi Harem (2024-2025)', match: (ep) => /harem/i.test(ep.title) || [2024, 2025].includes(ep.releaseYear) }
        ]
    },
    {
        id: 'taimanin',
        name: 'Taimanin (Ninja Asagi)',
        match: (ep) => /taimanin/i.test(ep.title) || /taimanin/i.test(ep.slug),
        description: 'Cuộc chiến chống thế lực tà ác của các nữ ninja Taimanin.',
        seasons: [
            { name: 'Taimanin Asagi', match: (ep) => /anti-demon ninja asagi/i.test(ep.title) || /toraware no niku/i.test(ep.title) || /taimanin-asagi-\d/i.test(ep.slug) },
            { name: 'Taimanin Asagi 2', match: (ep) => /asagi 2/i.test(ep.title) || /asagi-2/i.test(ep.slug) },
            { name: 'Taimanin Asagi 3', match: (ep) => /asagi 3/i.test(ep.title) || /asagi-3/i.test(ep.slug) },
            { name: 'Taimanin Yukikaze', match: (ep) => /yukikaze/i.test(ep.title) || /yukikaze/i.test(ep.slug) },
            { name: 'Taimanin Shiranui & Oboro', match: (ep) => /shiranui|oboro/i.test(ep.title) || /shiranui|oboro/i.test(ep.slug) }
        ]
    },
    {
        id: 'words-worth',
        name: 'Words Worth',
        match: (ep) => /words\s*worth/i.test(ep.title) || /words-worth/i.test(ep.slug),
        description: 'Tác phẩm phiêu lưu giả tưởng huyền thoại kinh điển.',
        seasons: [
            { name: 'Words Worth', match: (ep) => !/gaiden/i.test(ep.title) && !/gaiden/i.test(ep.slug) },
            { name: 'Words Worth Gaiden', match: (ep) => /gaiden/i.test(ep.title) || /gaiden/i.test(ep.slug) }
        ]
    }
];

function cleanSeriesTitle(raw) {
    if (!raw) return '';
    let t = raw.trim();
    t = t.replace(/\s*[-–—:]?\s*(?:Ep|Episode|Tập|Part)\.?\s*\d+\s*$/i, '');
    t = t.replace(/\s*[\(\[](?:Ep|Episode|Tập|Part)\.?\s*\d+[\)\]]\s*$/i, '');
    return t.trim();
}

function getEffectiveEpNum(ep) {
    if (ep.title) {
        const m = ep.title.match(/(?:Ep|Episode|Tập|Part)\.?\s*(\d+)/i);
        if (m) return parseInt(m[1], 10);
    }
    if (typeof ep.episodeNumber === 'number' && ep.episodeNumber > 0) {
        return ep.episodeNumber;
    }
    if (ep.slug) {
        const m = ep.slug.match(/-(\d+)$/);
        if (m) return parseInt(m[1], 10);
    }
    return 1;
}

let cachedSeriesList = null;
let cachedSeriesMap = null;

function getSeriesCatalog() {
    if (cachedSeriesList && cachedSeriesMap) {
        return { seriesList: cachedSeriesList, seriesMap: cachedSeriesMap };
    }

    const rawCatalog = getStaticCatalog();
    const claimedEps = new Set();
    const seriesList = [];
    const seriesMap = new Map();

    // Step 1: Claim franchise episodes
    for (const fr of FRANCHISES) {
        const matched = rawCatalog.filter(ep => fr.match(ep));
        if (matched.length === 0) continue;
        matched.forEach(ep => claimedEps.add(ep.slug));

        const seasonMap = new Map();
        fr.seasons.forEach((sDef, idx) => {
            seasonMap.set(idx + 1, { name: sDef.name, episodes: [] });
        });
        const fallbackSeason = fr.seasons.length + 1;

        for (const ep of matched) {
            let placed = false;
            for (let i = 0; i < fr.seasons.length; i++) {
                if (fr.seasons[i].match(ep)) {
                    seasonMap.get(i + 1).episodes.push(ep);
                    placed = true;
                    break;
                }
            }
            if (!placed) {
                if (!seasonMap.has(fallbackSeason)) {
                    seasonMap.set(fallbackSeason, { name: 'Phần mở rộng', episodes: [] });
                }
                seasonMap.get(fallbackSeason).episodes.push(ep);
            }
        }

        const videos = [];
        const allGenres = new Set();
        let isUncensored = false;
        let repEp = matched[0];
        let minYear = 9999;
        let maxYear = 0;

        for (const [seasonNum, sObj] of seasonMap.entries()) {
            if (sObj.episodes.length === 0) continue;
            sObj.episodes.sort((a, b) => {
                const numA = getEffectiveEpNum(a);
                const numB = getEffectiveEpNum(b);
                if (numA !== numB) return numA - numB;
                return (a.releaseYear || 0) - (b.releaseYear || 0);
            });

            sObj.episodes.forEach((ep, epIdx) => {
                if (ep.contentRating === 'UNCENSORED') isUncensored = true;
                if (ep.genres && Array.isArray(ep.genres)) ep.genres.forEach(g => allGenres.add(g));
                if (ep.releaseYear) {
                    if (ep.releaseYear < minYear) minYear = ep.releaseYear;
                    if (ep.releaseYear > maxYear) maxYear = ep.releaseYear;
                }

                const epNumberInSeason = epIdx + 1;
                const videoId = `hentaiz:${ep.slug}:${seasonNum}:${epNumberInSeason}`;
                videos.push({
                    id: videoId,
                    title: `P.${seasonNum} Tập ${epNumberInSeason} - ${sObj.name || ep.title}`,
                    season: seasonNum,
                    episode: epNumberInSeason,
                    released: ep.publishedAt || (ep.releaseYear ? `${ep.releaseYear}-01-01` : undefined),
                    thumbnail: ep.poster || (ep.posterImage?.filePath ? `${STORAGE_URL}${ep.posterImage.filePath}` : undefined)
                });
            });
        }

        const yearStr = minYear <= maxYear && minYear !== 9999 ? (minYear === maxYear ? `${minYear}` : `${minYear}-${maxYear}`) : undefined;
        const seriesObj = {
            id: `hentaiz:series:${fr.id}`,
            canonicalSlug: fr.id,
            name: fr.name,
            type: 'series',
            poster: repEp.poster || (repEp.posterImage?.filePath ? `${STORAGE_URL}${repEp.posterImage.filePath}` : undefined),
            background: repEp.background || (repEp.backdropImage?.filePath ? `${STORAGE_URL}${repEp.backdropImage.filePath}` : undefined),
            description: `[Trọn bộ ${videos.length} tập • ${seasonMap.size} phần] ${fr.description || repEp.description || ''}`.trim(),
            releaseInfo: yearStr,
            genres: Array.from(allGenres),
            isUncensored: isUncensored,
            videos: videos
        };

        seriesList.push(seriesObj);
        seriesMap.set(fr.id, seriesObj);
        seriesMap.set(`series:${fr.id}`, seriesObj);
        seriesMap.set(`hentaiz:series:${fr.id}`, seriesObj);
        seriesMap.set(`hentaiz:${fr.id}`, seriesObj);

        for (const ep of matched) {
            seriesMap.set(ep.slug, seriesObj);
            seriesMap.set(`hentaiz:${ep.slug}`, seriesObj);
        }
    }

    // Step 2: Group regular titles
    const regularGroups = new Map();
    for (const ep of rawCatalog) {
        if (claimedEps.has(ep.slug)) continue;
        const cleanTitle = cleanSeriesTitle(ep.title);
        if (!regularGroups.has(cleanTitle)) {
            regularGroups.set(cleanTitle, []);
        }
        regularGroups.get(cleanTitle).push(ep);
    }

    for (const [cleanTitle, episodes] of regularGroups.entries()) {
        episodes.sort((a, b) => {
            const numA = getEffectiveEpNum(a);
            const numB = getEffectiveEpNum(b);
            if (numA !== numB) return numA - numB;
            return (a.releaseYear || 0) - (b.releaseYear || 0);
        });

        const firstEp = episodes[0];
        let baseSlug = firstEp.slug.replace(/-\d+$/, '').replace(/-ep\.\d+$/i, '');
        if (!baseSlug) baseSlug = firstEp.slug;

        const allGenres = new Set();
        let isUncensored = false;
        let minYear = 9999;
        let maxYear = 0;

        const videos = episodes.map((ep, idx) => {
            if (ep.contentRating === 'UNCENSORED') isUncensored = true;
            if (ep.genres && Array.isArray(ep.genres)) ep.genres.forEach(g => allGenres.add(g));
            if (ep.releaseYear) {
                if (ep.releaseYear < minYear) minYear = ep.releaseYear;
                if (ep.releaseYear > maxYear) maxYear = ep.releaseYear;
            }
            const epNum = idx + 1;
            const videoId = `hentaiz:${ep.slug}:1:${epNum}`;
            return {
                id: videoId,
                title: episodes.length > 1 ? `Tập ${epNum} - ${ep.title}` : ep.title,
                season: 1,
                episode: epNum,
                released: ep.publishedAt || (ep.releaseYear ? `${ep.releaseYear}-01-01` : undefined),
                thumbnail: ep.poster || (ep.posterImage?.filePath ? `${STORAGE_URL}${ep.posterImage.filePath}` : undefined)
            };
        });

        const yearStr = minYear <= maxYear && minYear !== 9999 ? (minYear === maxYear ? `${minYear}` : `${minYear}-${maxYear}`) : undefined;
        const epCountLabel = episodes.length > 1 ? `[Trọn bộ ${episodes.length} tập]` : `[1 tập]`;
        const seriesObj = {
            id: `hentaiz:series:${baseSlug}`,
            canonicalSlug: baseSlug,
            name: cleanTitle || firstEp.title,
            type: 'series',
            poster: firstEp.poster || (firstEp.posterImage?.filePath ? `${STORAGE_URL}${firstEp.posterImage.filePath}` : undefined),
            background: firstEp.background || (firstEp.backdropImage?.filePath ? `${STORAGE_URL}${firstEp.backdropImage.filePath}` : undefined),
            description: `${epCountLabel} ${firstEp.description || (firstEp.studios ? '• ' + firstEp.studios : '')}`.trim(),
            releaseInfo: yearStr,
            genres: Array.from(allGenres),
            isUncensored: isUncensored,
            videos: videos
        };

        seriesList.push(seriesObj);
        seriesMap.set(baseSlug, seriesObj);
        seriesMap.set(`series:${baseSlug}`, seriesObj);
        seriesMap.set(`hentaiz:series:${baseSlug}`, seriesObj);
        seriesMap.set(`hentaiz:${baseSlug}`, seriesObj);

        for (const ep of episodes) {
            seriesMap.set(ep.slug, seriesObj);
            seriesMap.set(`hentaiz:${ep.slug}`, seriesObj);
        }
    }

    cachedSeriesList = seriesList;
    cachedSeriesMap = seriesMap;
    return { seriesList, seriesMap };
}

function getSeriesMap() {
    return getSeriesCatalog().seriesMap;
}

// Unused cached streams helper
function getCachedStreams() {
    return {};
}

// SvelteKit devalue unflatten helper
function unflatten(parsed) {
    if (!Array.isArray(parsed) || parsed.length === 0) return parsed;
    function hydrate(index, seen = new Map()) {
        if (typeof index !== 'number') return index;
        if (index < 0) return undefined;
        if (seen.has(index)) return seen.get(index);
        const val = parsed[index];
        if (val === null || typeof val !== 'object') return val;
        if (Array.isArray(val)) {
            const arr = [];
            seen.set(index, arr);
            for (const item of val) arr.push(hydrate(item, seen));
            return arr;
        }
        const obj = {};
        seen.set(index, obj);
        for (const [k, v] of Object.entries(val)) {
            obj[k] = hydrate(v, seen);
        }
        return obj;
    }
    return hydrate(0);
}

// Base64URL string encoder
function toBase64Url(str) {
    return Buffer.from(str, 'utf-8').toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

// Convert Vietnamese text / genre to URL slug
function slugifyGenre(str) {
    if (!str) return '';
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Strip HTML tags for meta descriptions
function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<br\s*[\/]?>/gi, '\n')
        .replace(/<\/p>/gi, '\n\n')
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .trim();
}

/**
 * 1. GET CATALOG
 */
async function getCatalog(type, extra = {}) {
    await ensureStaticCatalog();
    const { seriesList } = getSeriesCatalog();
    const isMovie = type === 'movie';

    let results = seriesList;

    // For movie catalog: filter to standalone single-episode movies/OVAs
    if (isMovie) {
        results = results.filter(s => s.videos && s.videos.length === 1);
    }

    if (extra.search) {
        const q = extra.search.toLowerCase().trim();
        results = results.filter(s => {
            return (s.name && s.name.toLowerCase().includes(q)) ||
                   (s.canonicalSlug && s.canonicalSlug.toLowerCase().includes(q)) ||
                   (s.id && s.id.toLowerCase().includes(q)) ||
                   (s.videos && s.videos.some(v => (v.title && v.title.toLowerCase().includes(q)) || (v.id && v.id.toLowerCase().includes(q))));
        });
    } else if (extra.genre) {
        const rawGenre = typeof extra.genre === 'string' ? extra.genre.trim() : '';
        const cleanGenre = rawGenre.replace(/^Thể loại:\s*/i, '').replace(/^Danh mục:\s*/i, '').trim();
        const lower = cleanGenre.toLowerCase();

        // If it is a default label or placeholder, do not apply genre filtering
        if (lower && !['genre', 'tất cả', 'all', 'default', 'hentaiz-movie', 'hentaiz-anime', 'hentaiz-series'].includes(lower)) {
            if (cleanGenre.includes('Không Che') || lower.includes('uncensored')) {
                results = results.filter(s => s.isUncensored);
            } else {
                const targetSlug = slugifyGenre(cleanGenre);
                results = results.filter(s => {
                    if (!s.genres || !Array.isArray(s.genres)) return false;
                    return s.genres.some(g => {
                        const gLower = g.toLowerCase();
                        return gLower === lower || slugifyGenre(g) === targetSlug;
                    });
                });
            }
        }
    }

    const skip = extra.skip ? parseInt(extra.skip, 10) || 0 : 0;
    const paged = results.slice(skip, skip + 24);

    return paged.map(s => ({
        id: s.id,
        name: s.name,
        type: isMovie ? 'movie' : 'series',
        poster: s.poster,
        background: s.background,
        description: s.description,
        releaseInfo: s.releaseInfo,
        genres: s.genres || []
    }));
}

/**
 * 2. GET META
 */
async function getMeta(type, id) {
    await ensureStaticCatalog();
    const cleanId = id.replace(/^hentaiz:/, '').replace(/\.json$/, '');
    const slug = cleanId.split(':')[0];

    // Check in unified seriesMap first (matches series ID, canonical slug, franchise, or ANY episode slug)
    const smapSeries = getSeriesMap();
    const seriesObj = smapSeries.get(cleanId) || smapSeries.get(slug);

    if (seriesObj) {
        // Find if request is focused on a specific episode
        const targetVideo = seriesObj.videos.find(v => v.id.includes(cleanId) || v.id.includes(slug));
        const defaultVid = targetVideo ? targetVideo.id : (seriesObj.videos[0]?.id || `hentaiz:${seriesObj.canonicalSlug}`);

        const meta = {
            id: seriesObj.id,
            name: seriesObj.name,
            type: type === 'movie' && seriesObj.videos.length === 1 ? 'movie' : 'series',
            poster: seriesObj.poster,
            background: seriesObj.background,
            description: seriesObj.description,
            releaseInfo: seriesObj.releaseInfo,
            genres: seriesObj.genres || [],
            videos: seriesObj.videos,
            behaviorHints: {
                defaultVideoId: defaultVid
            }
        };
        return meta;
    }

    // Fallback to single episode from static catalog
    const smap = getSlugMap();
    const ep = smap.get(slug);

    if (ep) {
        const meta = {
            id: `hentaiz:${slug}`,
            name: ep.title,
            type: type === 'movie' ? 'movie' : 'series',
            poster: ep.poster || (ep.posterImage?.filePath ? `${STORAGE_URL}${ep.posterImage.filePath}` : undefined),
            background: ep.background || (ep.backdropImage?.filePath ? `${STORAGE_URL}${ep.backdropImage.filePath}` : undefined),
            description: ep.description || `Tập ${ep.episodeNumber || 1}${ep.studios ? ' • ' + ep.studios : ''}`,
            releaseInfo: ep.releaseYear ? String(ep.releaseYear) : undefined,
            genres: ep.genres || []
        };

        if (type === 'series') {
            meta.videos = [
                {
                    id: `hentaiz:${slug}:1:${ep.episodeNumber || 1}`,
                    title: `Tập ${ep.episodeNumber || 1} - ${ep.title}`,
                    season: 1,
                    episode: ep.episodeNumber || 1,
                    released: ep.publishedAt || undefined
                }
            ];
            meta.behaviorHints = {
                defaultVideoId: `hentaiz:${slug}:1:${ep.episodeNumber || 1}`
            };
        } else {
            meta.behaviorHints = {
                defaultVideoId: `hentaiz:${slug}`
            };
        }

        return meta;
    }

    // Fallback to network
    const cacheKey = `hentaiz:meta:${slug}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const res = await client.get(`${BASE_URL}/watch/${slug}/__data.json`);
        const nodeData = res.data?.nodes?.[2]?.data;
        if (!nodeData) return null;

        const unflat = unflatten(nodeData);
        const epNet = unflat?.episode;
        if (!epNet) return null;

        const poster = epNet.posterImage?.filePath ? `${STORAGE_URL}${epNet.posterImage.filePath}` : undefined;
        const backdrop = epNet.backdropImage?.filePath ? `${STORAGE_URL}${epNet.backdropImage.filePath}` : undefined;
        const genres = epNet.genres?.map(g => g.genre?.name).filter(Boolean) || [];
        const description = stripHtml(epNet.description);

        const meta = {
            id: `hentaiz:${slug}`,
            name: epNet.title,
            type: type === 'movie' ? 'movie' : 'series',
            poster: poster,
            background: backdrop,
            description: description,
            releaseInfo: epNet.releaseYear ? String(epNet.releaseYear) : undefined,
            genres: genres
        };

        if (type === 'series') {
            meta.videos = [
                {
                    id: `hentaiz:${slug}:1:${epNet.episodeNumber || 1}`,
                    title: `Tập ${epNet.episodeNumber || 1} - ${epNet.title}`,
                    season: 1,
                    episode: epNet.episodeNumber || 1,
                    released: epNet.publishedAt
                }
            ];
            meta.behaviorHints = {
                defaultVideoId: `hentaiz:${slug}:1:${epNet.episodeNumber || 1}`
            };
        } else {
            meta.behaviorHints = {
                defaultVideoId: `hentaiz:${slug}`
            };
        }

        if (epNet.id) {
            cache.set(`hentaiz:epId:${slug}`, epNet.id, 86400);
        }

        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (e) {
        console.error(`[HentaiZ Meta Error] ${slug}:`, e.message);
        return null;
    }
}

/**
 * Helper to fetch and decrypt streamData for videoId
 */
async function fetchAndDecryptStreamData(videoId) {
    const cacheKey = `hentaiz:streamData:${videoId}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const res = await client.get(`${MIMIX_URL}/watch/${videoId}`, {
        headers: {
            'Referer': 'https://x.haiten.org/'
        }
    });

    const key = crypto.createHash('sha256').update(videoId).digest();
    const [ivHex, cipherHex] = res.data.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const ciphertext = Buffer.from(cipherHex, 'hex');

    const decipher = crypto.createDecipheriv('aes-256-ctr', key, iv);
    const decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString('utf-8');
    const streamData = JSON.parse(decrypted);

    cache.set(cacheKey, streamData, 3600);
    return streamData;
}

/**
 * 3. GET STREAM
 */
async function getStream(id, type, host = 'hophimaddon.vercel.app') {
    await ensureStaticCatalog();
    const cleanId = id.replace(/^hentaiz:/, '').replace(/\.json$/, '');
    let slug = cleanId.split(':')[0];

    // Handle compound series/franchise video ID: e.g. series:bible-black:1:1
    if (cleanId.startsWith('series:') || cleanId.startsWith('franchise:')) {
        const parts = cleanId.split(':');
        const seriesSlug = parts[1];
        const sNum = parseInt(parts[2], 10) || 1;
        const epNum = parseInt(parts[3], 10) || 1;
        const sMap = getSeriesMap();
        const seriesObj = sMap.get(seriesSlug);
        const video = seriesObj?.videos?.find(v => v.season === sNum && v.episode === epNum);
        if (video) {
            const vClean = video.id.replace(/^hentaiz:/, '');
            slug = vClean.split(':')[0];
        }
    }

    const cacheKey = `hentaiz:streams:${slug}:${host}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const smap = getSlugMap();
        const ep = smap.get(slug);

        let videoId = ep?.videoId;

        if (!videoId) {
            let epId = ep?.epId || cache.get(`hentaiz:epId:${slug}`);
            if (!epId) {
                const resWatch = await client.get(`${BASE_URL}/watch/${slug}/__data.json`);
                const raw = JSON.stringify(resWatch.data);
                const match = raw.match(/"id":"([a-zA-Z0-9_-]+)","title"/);
                if (match) {
                    epId = match[1];
                } else {
                    const unflat = unflatten(resWatch.data?.nodes?.[2]?.data);
                    epId = unflat?.episode?.id;
                }
                if (epId) cache.set(`hentaiz:epId:${slug}`, epId, 86400);
            }

            if (epId) {
                const payload = toBase64Url(`[{"episodeId":1},"${epId}"]`);
                const rEmbed = await client.get(`${BASE_URL}/_app/remote/1edhnia/getEpisodeEmbedUrl?payload=${payload}`, {
                    headers: {
                        'Referer': `${BASE_URL}/watch/${slug}`
                    }
                });

                const videoIdMatch = (rEmbed.data?.data || '').match(/[?&]v=([a-f0-9-]+)/i);
                videoId = videoIdMatch ? videoIdMatch[1] : null;
            }
        }

        if (!videoId) {
            console.error(`[HentaiZ] Could not extract videoId for ${slug}`);
            return [];
        }

        const streamMap = getCachedStreams();
        const streamData = streamMap[videoId];

        const cdnDomain = (streamData?.segmentDomains && streamData.segmentDomains[0]) || 'https://c1.animez.top';
        const cleanTitle = (streamData?.title || ep?.title || slug).replace(/\.mp4$/i, '');
        const hostBase = host.includes('://') ? host : `https://${host}`;

        // Standard proxyHeaders matching haiten.org web player for smooth seeking & caching
        const proxyHeaders = {
            request: {
                'User-Agent': USER_AGENT,
                'Referer': 'https://x.haiten.org/',
                'Origin': 'https://x.haiten.org',
                'X-Cache-Status': 'HIT',
                'Cache-Control': 'max-age=3155695200'
            }
        };

        // Extract variant codes from master playlist
        const masterStr = streamData?.defaultM3u8?.master || '';
        const variantMatches = [...masterStr.matchAll(/([^\s\n/]+)\/playlist\.m3u8/g)].map(m => m[1]);
        
        let variant1080 = '';
        let variant720 = '';
        const lines = masterStr.split('\n');
        let currentStreamInf = '';
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith('#EXT-X-STREAM-INF')) {
                currentStreamInf = trimmed;
            } else if (trimmed.endsWith('playlist.m3u8')) {
                const code = trimmed.replace('/playlist.m3u8', '').trim();
                if (currentStreamInf.includes('1920x1080') || currentStreamInf.includes('1080')) {
                    variant1080 = code;
                } else if (currentStreamInf.includes('1280x720') || currentStreamInf.includes('720')) {
                    variant720 = code;
                }
            }
        }
        if (!variant1080 && variantMatches.length > 0) {
            variant1080 = variantMatches[variantMatches.length - 1];
        }
        if (!variant720 && variantMatches.length > 1) {
            variant720 = variantMatches[variantMatches.length - 2];
        }

        const streams = [];

        // 1. Direct CDN 1080p Full HD (Ưu tiên số 1 - Hình ảnh siêu nét)
        if (variant1080) {
            streams.push({
                name: '🔞 HentaiZ',
                title: `[Full HD 1080p] ${cleanTitle}\n⚡ CDN Trực tiếp • Hình ảnh siêu nét Full HD`,
                url: `${cdnDomain}/${videoId}/${variant1080}/playlist.m3u8`,
                behaviorHints: {
                    notWebReady: true,
                    bingeGroup: 'hentaiz-1080p',
                    proxyHeaders: proxyHeaders
                }
            });
        }

        // 2. Direct CDN 720p HD (Tốc độ cao)
        if (variant720) {
            streams.push({
                name: '🔞 HentaiZ',
                title: `[HD 720p] ${cleanTitle}\n⚡ Tốc độ cao • Tua mượt mà`,
                url: `${cdnDomain}/${videoId}/${variant720}/playlist.m3u8`,
                behaviorHints: {
                    notWebReady: true,
                    bingeGroup: 'hentaiz-720p',
                    proxyHeaders: proxyHeaders
                }
            });
        }

        // 3. Direct CDN Master (Tự Động Đa Độ Phân Giải HLS)
        streams.push({
            name: '🔞 HentaiZ',
            title: `[Tự Động Auto] ${cleanTitle}\n⚡ Đa độ phân giải thích ứng (1080p/720p/480p)`,
            url: `${cdnDomain}/${videoId}/master.m3u8`,
            behaviorHints: {
                notWebReady: true,
                bingeGroup: 'hentaiz-auto',
                proxyHeaders: proxyHeaders
            }
        });

        // 4. Server Reconstructed Stream (Backup route)
        streams.push({
            name: '🔞 HentaiZ [Dự phòng]',
            title: `[Server Proxy] ${cleanTitle}\n⚡ Tuyến dự phòng định tuyến máy chủ`,
            url: `${hostBase}/hentaiz/stream/${videoId}/master.m3u8`,
            behaviorHints: {
                notWebReady: true,
                bingeGroup: 'hentaiz-proxy',
                proxyHeaders: proxyHeaders
            }
        });

        if (streams.length > 0) {
            cache.set(cacheKey, streams, 1800);
        }
        return streams;
    } catch (e) {
        console.error(`[HentaiZ Stream Error] ${slug}:`, e.message);
        return [];
    }
}

/**
 * 4. GET RECONSTRUCTED M3U8 CONTENT
 */
async function getM3u8(videoId, quality) {
    const streamMap = getCachedStreams();
    let streamData = streamMap[videoId];

    if (!streamData || !streamData.defaultM3u8) {
        streamData = await fetchAndDecryptStreamData(videoId);
    }

    if (!streamData || !streamData.defaultM3u8) {
        throw new Error('Stream data not found or invalid');
    }

    const { defaultM3u8, segmentDomains = ['https://c1.animez.top'] } = streamData;
    const cdnDomain = segmentDomains[0] || 'https://c1.animez.top';

    if (quality === 'master') {
        let master = defaultM3u8.master;
        // Rewrite variant paths to absolute CDN URLs so EVERY variant works!
        const variantMatches = [...master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(m => m[1]);
        variantMatches.forEach(match => {
            master = master.replace(match, `${cdnDomain}/${videoId}/${match}`);
        });
        return master;
    }

    const rawPlaylist = defaultM3u8.playlists?.[quality] ||
                        defaultM3u8.playlists?.['2'] ||
                        defaultM3u8.playlists?.['1'];

    if (!rawPlaylist) {
        throw new Error(`Quality playlist ${quality} not found`);
    }

    const variantMatches = [...defaultM3u8.master.matchAll(/([^\s\n]+\/playlist\.m3u8)/g)].map(m => m[1]);
    let variantPath = '';
    if (quality === '2') {
        variantPath = variantMatches[variantMatches.length - 1] || '';
    } else if (quality === '1') {
        variantPath = variantMatches[1] || variantMatches[0] || '';
    } else {
        variantPath = variantMatches[parseInt(quality)] || variantMatches[0] || '';
    }
    const variantCode = variantPath.replace('playlist.m3u8', '').replace(/\/+$/, '');

    const lines = rawPlaylist.split('\n');
    let segIdx = 0;

    const rewrittenLines = lines.map(line => {
        const trimmed = line.trim();
        if (trimmed.endsWith('.png')) {
            const domain = segmentDomains[0] || cdnDomain;
            const segBase = trimmed.replace('.png', '');
            return `${domain}/${videoId}/${variantCode}/${segBase}.png`;
        }
        return line;
    });

    return rewrittenLines.join('\n');
}

module.exports = {
    getCatalog,
    getMeta,
    getStream,
    getM3u8,
    slugifyGenre,
    fetchAndDecryptStreamData
};
