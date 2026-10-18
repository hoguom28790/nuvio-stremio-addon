// Search ranking for the phimapi-style sources (KKPhim family, VSMOV).
//
// The sites' own keyword search returns every title that contains the word, newest first, 24 per page: searching
// "Confessions" fills the page with "Confessions of ..." titles and buries the film that was meant. We resolve the
// query to IMDb titles first (Cinemeta, no API key), fetch a few pages of site results, and rank the items by
//   1. same IMDb id as a Cinemeta hit (best hit first)  2. same TMDB id (when the query is a TMDB id)
//   3. same title (+ year) as a Cinemeta hit            4. title equals / starts with / contains the query words
// The sites' own order breaks ties.
const axios = require('axios');
const cache = require('./cache');

const CINEMETA = 'https://v3-cinemeta.strem.io';
const MAX_CANDIDATES = 8;
const EXTRA_QUERIES = 2; // default: extra site queries made with the best Cinemeta titles

function normalize(s) {
    return String(s || '')
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/gi, 'd')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
}

/** `tt1234567` -> {imdb}; `tmdb:123` / `tmdb 123` -> {tmdb}; anything else -> null */
function parseIdQuery(q) {
    const s = String(q || '').trim();
    let m = s.match(/^(tt\d{5,10})$/i);
    if (m) return { imdb: m[1].toLowerCase() };
    m = s.match(/^tmdb[:\s-]*(\d{1,9})$/i);
    if (m) return { tmdb: m[1] };
    return null;
}

/** IMDb titles for a free-text query, best first. Cinemeta type: 'movie' | 'series'. */
async function cinemetaSearch(query, type) {
    const key = `cinemeta:search:${type}:${normalize(query)}`;
    const cached = cache.get(key);
    if (cached) return cached;
    try {
        const url = `${CINEMETA}/catalog/${type === 'series' ? 'series' : 'movie'}/top/search=${encodeURIComponent(query)}.json`;
        const res = await axios.get(url, { timeout: 5000 });
        const metas = (res.data && res.data.metas) || [];
        const list = metas.slice(0, MAX_CANDIDATES).map(m => ({
            imdb: m.imdb_id || m.id,
            name: m.name,
            year: String(m.year || m.releaseInfo || '').slice(0, 4)
        })).filter(c => c.imdb && /^tt\d+/.test(c.imdb) && c.name);
        if (list.length) cache.set(key, list, 86400);
        return list;
    } catch (e) {
        return [];
    }
}

async function cinemetaById(imdbId, type) {
    const key = `cinemeta:id:${type}:${imdbId}`;
    const cached = cache.get(key);
    if (cached) return cached;
    try {
        const res = await axios.get(`${CINEMETA}/meta/${type === 'series' ? 'series' : 'movie'}/${imdbId}.json`, { timeout: 5000 });
        const m = res.data && res.data.meta;
        if (!m || !m.name) return null;
        const info = { imdb: imdbId, name: m.name, year: String(m.year || m.releaseInfo || '').slice(0, 4) };
        cache.set(key, info, 86400);
        return info;
    } catch (e) {
        return null;
    }
}

function itemNames(item) {
    return [item.name, item.origin_name].map(normalize).filter(Boolean);
}

/**
 * Score one site item. `ctx` = { nq, tokens, candidates, idQuery }. Higher = better; -1 = drop.
 */
function scoreItem(item, ctx) {
    // `imdb` / `tmdb` are objects ({id}) on most sites; accept a bare id too
    const idOf = v => (v && typeof v === 'object' ? v.id : v);
    const imdb = item && idOf(item.imdb) ? String(idOf(item.imdb)).toLowerCase() : '';
    const tmdb = item && idOf(item.tmdb) ? String(idOf(item.tmdb)) : '';
    if (ctx.idQuery) {
        if (ctx.idQuery.imdb) return imdb === ctx.idQuery.imdb ? 10000 : -1;
        if (ctx.idQuery.tmdb) return tmdb === ctx.idQuery.tmdb ? 10000 : -1;
    }

    const names = itemNames(item);
    const year = String(item.year || '');
    let best = 0;

    ctx.candidates.forEach((c, i) => {
        if (imdb && imdb === String(c.imdb).toLowerCase()) best = Math.max(best, 5000 - i * 100);
        else {
            const cn = normalize(c.name);
            if (cn && names.includes(cn) && (!c.year || !year || c.year === year)) best = Math.max(best, 4000 - i * 100);
        }
    });

    if (names.includes(ctx.nq)) best = Math.max(best, 3000);
    else if (names.some(n => n.startsWith(`${ctx.nq} `))) best = Math.max(best, 1500);
    else if (ctx.tokens.length && names.some(n => { const w = n.split(' '); return ctx.tokens.every(t => w.includes(t)); })) best = Math.max(best, 800);
    else if (names.some(n => n.includes(ctx.nq))) best = Math.max(best, 300);
    return best;
}

/**
 * Rank site items for a query. `candidates` are IMDb titles from Cinemeta ({imdb, name, year}).
 * Stable: equal scores keep the site's order. Items that cannot be related to the query are kept at the end
 * (the site matched them for a reason), except for an id query where only exact id matches are kept.
 */
function rankItems(items, query, candidates = [], idQuery = null) {
    const nq = normalize(query);
    const ctx = { nq, tokens: nq.split(' ').filter(Boolean), candidates, idQuery };
    return items
        .map((item, i) => ({ item, i, score: scoreItem(item, ctx) }))
        .filter(x => x.score >= 0)
        .sort((a, b) => b.score - a.score || a.i - b.i)
        .map(x => x.item);
}

/**
 * Full search: Cinemeta candidates -> site pages (`fetchItems(keyword, page)` -> items[]) -> ranked, de-duplicated list.
 * `type` is 'movie' | 'series'. Results are cached for 10 minutes.
 */
async function searchRanked(query, type, fetchItems, opts = {}) {
    const q = String(query || '').trim();
    if (!q) return [];
    const pages = opts.pages || 2;
    const extraQueries = opts.extraQueries === undefined ? EXTRA_QUERIES : opts.extraQueries; // sites that rate-limit use fewer
    const cacheKey = `rank:${opts.prefix || ''}:${type}:${normalize(q)}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const idQuery = parseIdQuery(q);
    let candidates = [];
    const keywords = [q];

    if (idQuery && idQuery.imdb) {
        const info = await cinemetaById(idQuery.imdb, type);
        if (info) { candidates = [info]; keywords.length = 0; keywords.push(info.name); }
    } else if (!idQuery) {
        candidates = await cinemetaSearch(q, type);
        for (const c of candidates.slice(0, extraQueries)) {
            if (normalize(c.name) !== normalize(q) && !keywords.some(k => normalize(k) === normalize(c.name))) keywords.push(c.name);
        }
    }

    const jobs = [];
    keywords.forEach((kw, ki) => {
        const n = ki === 0 ? pages : 1;
        for (let p = 1; p <= n; p++) jobs.push(fetchItems(kw, p).catch(() => []));
    });
    const results = await Promise.all(jobs);

    const seen = new Set();
    const merged = [];
    for (const items of results) {
        for (const item of items || []) {
            const k = item && (item.slug || item._id);
            if (!k || seen.has(k)) continue;
            seen.add(k);
            merged.push(item);
        }
    }

    const ranked = rankItems(merged, q, candidates, idQuery);
    if (ranked.length) cache.set(cacheKey, ranked, 600);
    return ranked;
}

module.exports = { normalize, parseIdQuery, cinemetaSearch, cinemetaById, rankItems, scoreItem, searchRanked };
