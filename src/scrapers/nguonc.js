const axios = require('axios');
const cache = require('../utils/cache');
const { findEpisode } = require('../utils/episodeHelper');
const { searchRanked, normalize } = require('../utils/searchRank');

const SITE = 'https://phim.nguonc.com';
const API = `${SITE}/api`;
const HTTP_OPTS = { timeout: 10000, headers: { Accept: 'application/json', 'User-Agent': 'Mozilla/5.0', Referer: `${SITE}/` } };
const DEFAULT_PAGE_SIZE = 10;

// /films/<path>: browse lists, genres, countries and release years (labels are what the Stremio filter shows)
const LISTS = {
    'Phim Mới Cập Nhật': 'phim-moi-cap-nhat',
    'Phim Lẻ': 'danh-sach/phim-le',
    'Phim Bộ': 'danh-sach/phim-bo',
    'Phim Đang Chiếu': 'danh-sach/phim-dang-chieu',
    'TV Shows': 'danh-sach/tv-shows'
};
const GENRES = {
    'Hành Động': 'hanh-dong', 'Tình Cảm': 'tinh-cam', 'Hài Hước': 'hai-huoc', 'Cổ Trang': 'co-trang', 'Tâm Lý': 'tam-ly',
    'Hình Sự': 'hinh-su', 'Chiến Tranh': 'chien-tranh', 'Thể Thao': 'the-thao', 'Võ Thuật': 'vo-thuat',
    'Viễn Tưởng': 'vien-tuong', 'Phiêu Lưu': 'phieu-luu', 'Khoa Học': 'khoa-hoc', 'Kinh Dị': 'kinh-di',
    'Âm Nhạc': 'am-nhac', 'Thần Thoại': 'than-thoai', 'Tài Liệu': 'tai-lieu', 'Gia Đình': 'gia-dinh',
    'Chính Kịch': 'chinh-kich', 'Bí Ẩn': 'bi-an', 'Học Đường': 'hoc-duong', 'Kinh Điển': 'kinh-dien'
};
const COUNTRIES = {
    'Âu Mỹ': 'au-my', 'Hàn Quốc': 'han-quoc', 'Trung Quốc': 'trung-quoc', 'Nhật Bản': 'nhat-ban', 'Thái Lan': 'thai-lan',
    'Việt Nam': 'viet-nam', 'Hồng Kông': 'hong-kong', 'Đài Loan': 'dai-loan', 'Ấn Độ': 'an-do', 'Anh': 'anh',
    'Pháp': 'phap', 'Đức': 'duc', 'Nga': 'nga', 'Tây Ban Nha': 'tay-ban-nha', 'Úc': 'uc', 'Canada': 'canada'
};
const YEARS = Array.from({ length: 9 }, (_, i) => String(new Date().getUTCFullYear() - i));

// Option labels for the Stremio manifest (kept next to the maps so they cannot drift apart)
const CATALOG_OPTIONS = [
    ...Object.keys(LISTS).map(n => `Danh mục: ${n}`),
    ...Object.keys(GENRES).map(n => `Thể loại: ${n}`),
    ...Object.keys(COUNTRIES).map(n => `Quốc gia: ${n}`),
    ...YEARS.map(y => `Năm: ${y}`)
];

function norm(s) { return String(s || '').replace(/\s+/g, ' ').trim(); }

function absUrl(u) {
    if (!u) return '';
    if (/^https?:\/\//i.test(u)) return u;
    if (u.startsWith('//')) return `https:${u}`;
    return `${SITE}${u.startsWith('/') ? '' : '/'}${u}`;
}

/** The API answers JSON; some adapters hand it over as a string. */
function asJson(data) {
    if (typeof data === 'string') { try { return JSON.parse(data); } catch (e) { return null; } }
    return data && typeof data === 'object' ? data : null;
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

// The API sits behind nginx rate limiting: one polite retry on 429
async function getJson(url) {
    for (let attempt = 0; ; attempt++) {
        try {
            const res = await axios.get(url, HTTP_OPTS);
            return asJson(res.data) || {};
        } catch (err) {
            const status = err && err.response && err.response.status;
            if (status === 429 && attempt === 0) { await sleep(800); continue; }
            throw err;
        }
    }
}

/** List items live in `items` (documented shape); `data.items` is accepted too. */
function listItems(data) {
    const items = (data && (data.items || (data.data && data.data.items))) || [];
    return Array.isArray(items) ? items : [];
}

function pageInfo(data) {
    const p = (data && (data.paginate || data.pagination || (data.data && data.data.params && data.data.params.pagination))) || {};
    return { perPage: parseInt(p.items_per_page || p.totalItemsPerPage, 10) || 0 };
}

function resolveBase(type, extra) {
    const g = typeof extra.genre === 'string' ? extra.genre.trim() : '';
    let m;
    if ((m = g.match(/^Danh mục:\s*(.+)$/)) && LISTS[m[1].trim()]) return `/films/${LISTS[m[1].trim()]}`;
    if ((m = g.match(/^Thể loại:\s*(.+)$/)) && GENRES[m[1].trim()]) return `/films/the-loai/${GENRES[m[1].trim()]}`;
    if ((m = g.match(/^Quốc gia:\s*(.+)$/)) && COUNTRIES[m[1].trim()]) return `/films/quoc-gia/${COUNTRIES[m[1].trim()]}`;
    if ((m = g.match(/^Năm:\s*(\d{4})$/))) return `/films/nam-phat-hanh/${m[1]}`;
    return type === 'series' ? `/films/${LISTS['Phim Bộ']}` : `/films/${LISTS['Phim Lẻ']}`;
}

function toMeta(type, item) {
    const eps = [item.current_episode, item.total_episodes].filter(Boolean).join('/');
    const info = [item.quality, item.language, eps ? `Tập ${eps}` : '', item.time].filter(Boolean).join(' • ');
    return {
        id: `nguonc:${item.slug}`,
        type: type === 'series' ? 'series' : 'movie',
        name: item.name || 'Không tên',
        poster: absUrl(item.thumb_url_webp || item.thumb_url || item.poster_url_webp || item.poster_url),
        background: absUrl(item.poster_url_webp || item.poster_url || item.thumb_url_webp || item.thumb_url),
        posterShape: 'poster',
        description: `${item.original_name || item.origin_name || ''}${item.year ? ` (${item.year})` : ''}${info ? `\n${info}` : ''}\n⚡ NguonC`
    };
}

/** Site search (`/films/search?keyword=`), items normalised for ranking (`origin_name` is the original title). */
async function searchItems(keyword, page = 1) {
    const data = await getJson(`${API}/films/search?keyword=${encodeURIComponent(keyword)}&page=${page}`);
    return listItems(data).filter(it => it && it.slug).map(it => ({ ...it, origin_name: it.original_name || it.origin_name }));
}

async function search(keyword, limit = 10) {
    return (await searchItems(keyword)).slice(0, limit);
}

/** Items whose name / original title equals `title` (for the IMDb -> stream resolver, where a loose match would play the wrong film). */
function matchTitle(items, title) {
    const nt = normalize(title);
    if (!nt) return [];
    return (items || []).filter(it => [it.name, it.original_name, it.origin_name].some(n => normalize(n) === nt));
}

async function getCatalog(type, extra = {}) {
    try {
        const skip = parseInt(extra.skip, 10) || 0;
        const term = extra.search && String(extra.search).trim();
        if (term) {
            const cacheKey = `nguonc:search:${type}:${term}:${skip}`;
            const cached = cache.get(cacheKey);
            if (cached) return cached;
            const ranked = await searchRanked(term, type === 'series' ? 'series' : 'movie', searchItems, { prefix: 'nguonc', pages: 1, extraQueries: 1 });
            const metas = ranked.slice(skip, skip + 24).map(it => toMeta(type, it));
            if (metas.length) cache.set(cacheKey, metas, 600);
            return metas;
        }

        const base = resolveBase(type, extra);
        const sizeKey = `nguonc:psize:${base}`;
        const pageSize = cache.get(sizeKey) || DEFAULT_PAGE_SIZE;
        const page = Math.floor(skip / pageSize) + 1;
        const url = `${API}${base}?page=${page}`;
        const cacheKey = `nguonc:catalog:${type}:${url}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const data = await getJson(url);
        const items = listItems(data);
        const seen = new Set();
        const metas = [];
        for (const item of items) {
            if (!item || !item.slug || seen.has(item.slug)) continue;
            seen.add(item.slug);
            metas.push(toMeta(type, item));
        }
        const perPage = pageInfo(data).perPage || (page === 1 ? items.length : 0);
        if (perPage) cache.set(sizeKey, perPage, 86400);
        if (metas.length) cache.set(cacheKey, metas, 600);
        return metas;
    } catch (err) {
        console.error('[NguonC Catalog Error]:', err.message);
        return [];
    }
}

/** `movie.category` is keyed by group ("Thể loại", "Năm", "Quốc gia", "Định dạng"); each group has a `list`. */
function categoryGroups(movie) {
    const out = {};
    const cat = movie && movie.category;
    const groups = Array.isArray(cat) ? cat : (cat && typeof cat === 'object' ? Object.values(cat) : []);
    for (const g of groups) {
        const name = norm(g && g.group && g.group.name);
        const list = ((g && g.list) || []).map(x => norm(x && x.name)).filter(Boolean);
        if (name) out[normalize(name)] = list;
    }
    return out;
}

function splitNames(v) {
    if (Array.isArray(v)) return v.map(norm).filter(Boolean);
    return String(v || '').split(/[,;]/).map(norm).filter(Boolean);
}

/** Servers hold their episodes in `items` (`server_data` is accepted too); the server with most episodes drives the list. */
function serverEpisodes(server) {
    return (server && (server.items || server.server_data)) || [];
}

function mainServer(episodes) {
    return (episodes || []).reduce((best, s) => (serverEpisodes(s).length > serverEpisodes(best).length ? s : best), null);
}

async function getFilm(slug) {
    const cacheKey = `nguonc:film:${slug}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;
    const data = await getJson(`${API}/film/${encodeURIComponent(slug)}`);
    const movie = data.movie || (data.data && data.data.movie) || null;
    if (!movie) return null;
    const film = { movie, episodes: movie.episodes || data.episodes || [] };
    cache.set(cacheKey, film, 900);
    return film;
}

async function getMeta(type, id) {
    try {
        const slug = id.replace('nguonc:', '').split(':')[0];
        const cacheKey = `nguonc:meta:${slug}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const film = await getFilm(slug);
        if (!film) return null;
        const { movie, episodes } = film;

        const items = serverEpisodes(mainServer(episodes));
        const total = parseInt(movie.total_episodes, 10) || 0;
        const isSeries = type === 'series' || total > 1 || items.length > 1;
        const videos = isSeries ? items.map((ep, i) => ({
            id: `nguonc:${slug}:1:${ep.slug || i + 1}`,
            title: `Tập ${ep.name}`,
            season: 1,
            episode: i + 1,
            released: new Date(Date.UTC(2000, 0, 1) + i * 86400000).toISOString()
        })) : [];

        const groups = categoryGroups(movie);
        const genres = groups[normalize('Thể loại')] || [];
        const year = (groups[normalize('Năm')] || [])[0] || '';
        const meta = {
            id: `nguonc:${slug}`,
            type: isSeries ? 'series' : 'movie',
            name: movie.name,
            poster: absUrl(movie.thumb_url_webp || movie.thumb_url || movie.poster_url_webp || movie.poster_url),
            background: absUrl(movie.poster_url_webp || movie.poster_url || movie.thumb_url_webp || movie.thumb_url),
            description: String(movie.description || movie.content || '').replace(/<[^>]*>?/gm, '').trim(),
            releaseInfo: String(movie.year || year || ''),
            genres: genres.length ? genres : ['Phim'],
            director: splitNames(movie.director),
            cast: splitNames(movie.casts || movie.actor),
            imdb_id: movie.imdb && (movie.imdb.id || (typeof movie.imdb === 'string' ? movie.imdb : undefined)) || undefined,
            videos: videos.length ? videos : undefined
        };
        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.error('[NguonC Meta Error]:', err.message);
        return null;
    }
}

/**
 * One stream per server that has the requested episode: the CDN's own `m3u8` (the player pulls it straight from the CDN).
 * Only when no server has an m3u8 at all, the embed page is offered as an external link.
 */
async function getStream(id, type) {
    try {
        const parts = id.replace('nguonc:', '').split(':');
        const slug = parts[0];
        const targetEp = parts[2] || (type === 'series' ? parts[1] : null);

        const film = await getFilm(slug);
        if (!film) return [];
        const movieName = film.movie.name || '';
        const streams = [];
        const embeds = [];
        for (const server of film.episodes) {
            const item = findEpisode(serverEpisodes(server), targetEp);
            if (!item) continue;
            const label = norm(server.server_name) || 'VIP';
            const title = `${movieName}${targetEp && item.name ? ` - Tập ${item.name}` : ''}`;
            if (item.m3u8 || item.link_m3u8) {
                streams.push({
                    name: `⚡ NguonC • ${label}`,
                    title: `${title}\n⚡ CDN HLS trực tiếp`,
                    url: item.m3u8 || item.link_m3u8,
                    behaviorHints: { notWebReady: false }
                });
            } else if (item.embed || item.link_embed) {
                embeds.push({
                    name: `🌐 NguonC • ${label}`,
                    title: `${title}\n🌐 Mở trang phát trong trình duyệt`,
                    externalUrl: item.embed || item.link_embed
                });
            }
        }
        return streams.length ? streams : embeds;
    } catch (err) {
        console.error('[NguonC Stream Error]:', err.message);
        return [];
    }
}

module.exports = {
    API, CATALOG_OPTIONS, getCatalog, getMeta, getStream, search, searchItems, matchTitle,
    listItems, asJson, resolveBase, categoryGroups
};
