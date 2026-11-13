const axios = require('axios');
const cache = require('../utils/cache');
const { pagedList } = require('../utils/pagedList');

// VLXX AI (vlxxai.com): AI-made dubbed/subbed dramas. A title has several episodes (/<slug>/tap-N); here a title is a
// "movie" (like the other 'Thế giới khác' sources) and its episodes are the streams.
// Lists: home tabs `/?tab=N&page=P` (24 per page); category pages `/<category>` (one page); search `/search.php?q=`.
// The player is loaded by the site's own page script: POST `?get_player=1` { slug, ep_index } -> JSON { link, sources }.
// `ep_index` is the position of the episode in the page's episode list (newest first).
const BASE_URL = 'https://vlxxai.com';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const PAGE_SIZE = 24;     // cards the site shows per page
const WANT = 100;         // titles per catalog call: the whole site is ~70, so clients that never ask for the next page still see all
const HOST_RE = /(^|\.)cdnz\.top$/i; // hosts the playlists/segments live on (the Worker route is not an open proxy)

const client = axios.create({
    baseURL: BASE_URL,
    timeout: 12000,
    headers: { 'User-Agent': USER_AGENT, 'Referer': `${BASE_URL}/` }
});

// `tab` = home tab, `path` = category page
const GENRE_MAP = {
    'Mới Cập Nhật': { tab: 1 },
    'Đã Hoàn Thành': { tab: 2 },
    'Đang Cập Nhật': { tab: 3 },
    'Trùng Sinh': { path: '/trung-sinh' },
    'Học Đường': { path: '/hoc-duong' },
    'Loạn Luân': { path: '/loan-luan' },
    'Xuyên Không': { path: '/xuyen-khong' },
    'Hiện Đại': { path: '/hien-ai' },
    'Công Sở': { path: '/cong-so' },
    'Cổ Trang': { path: '/co-trang' },
    'Hệ Thống': { path: '/he-thong' },
    'Tu Tiên': { path: '/tu-tien' },
    'Ngoại Tình': { path: '/ngoai-tinh' },
    'Hấp Dẫn': { path: '/hap-diem' }
};

function decode(str) {
    return String(str || '')
        .replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'")
        .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        .replace(/\s+/g, ' ').trim();
}

function abs(u) {
    if (!u) return '';
    if (/^https?:\/\//i.test(u)) return u;
    return `${BASE_URL}${u.startsWith('/') ? '' : '/'}${u}`;
}

function edgeBaseOf(host) {
    if (!host) return '';
    const edgeHost = !host.includes('onrender.com') ? host : ((typeof process !== 'undefined' && process.env && process.env.CF_HOST) || 'hophimaddon.hophim-4g6qbubt.workers.dev');
    return edgeHost.includes('://') ? edgeHost : `https://${edgeHost}`;
}

function parseId(id) {
    const m = String(id).replace(/\.json$/, '').match(/^vlxxai:([A-Za-z0-9_-]+)(?::(\d+))?$/);
    return m ? { slug: m[1], ep: m[2] ? parseInt(m[2], 10) : null } : null;
}

/** Cards of a list page: `<article class="post-card"><a href="/<slug>"> ... <img src alt> ... ep-status ... title`. */
function parseList(html) {
    const items = [];
    const seen = new Set();
    for (const block of String(html || '').split('<article class="post-card"').slice(1)) {
        const link = block.match(/href="(?:https?:\/\/[^/"]+)?\/([A-Za-z0-9_-]+)"/);
        if (!link || seen.has(link[1])) continue;
        seen.add(link[1]);
        const img = block.match(/<img[^>]+src="([^"]+)"[^>]*>/);
        const alt = block.match(/<img[^>]+alt="([^"]*)"/);
        const title = block.match(/class="movie-card-title"[^>]*>([\s\S]*?)<\/h\d>/);
        items.push({
            slug: link[1],
            title: decode(title ? title[1] : alt ? alt[1] : link[1]),
            poster: img ? abs(img[1]) : '',
            badge: decode((block.match(/class="badge"[^>]*>([\s\S]*?)<\/span>/) || [])[1]),
            status: decode((block.match(/class="ep-status"[^>]*>([\s\S]*?)<\/span>/) || [])[1])
        });
    }
    return items;
}

/** Episodes listed on a title page, in page order (newest first): [{ n, index }] */
function parseEpisodes(html, slug) {
    const re = new RegExp(`href="(?:https?://[^/"]+)?/${slug}/tap-(\\d+)"[^>]*class="ep-item`, 'g');
    const out = [];
    const seen = new Set();
    for (const m of String(html || '').matchAll(re)) {
        const n = parseInt(m[1], 10);
        if (seen.has(n)) continue;
        seen.add(n);
        out.push({ n, index: out.length });
    }
    return out;
}

async function fetchHtml(path, opts = {}) {
    const res = await client.get(path, { responseType: 'text', transformResponse: [d => d], ...opts });
    return typeof res.data === 'string' ? res.data : '';
}

function toMeta(item) {
    return {
        id: `vlxxai:${item.slug}`,
        type: 'movie',
        name: item.title,
        poster: item.poster,
        background: item.poster,
        description: [item.title, item.badge, item.status].filter(Boolean).join(' • '),
        genres: ['18+', item.badge].filter(Boolean)
    };
}

async function getCatalog(catalogId, type, extra = {}) {
    const search = extra.search ? String(extra.search).trim() : '';
    const skip = parseInt(extra.skip, 10) || 0;
    const genre = GENRE_MAP[extra.genre] || GENRE_MAP['Mới Cập Nhật'];

    try {
        // Home tabs page with `&page=N`. Search and category pages are a single page (no pager on the site).
        if (genre.tab && !search) {
            const fetchPage = async (page) => parseList(await fetchHtml(`/?tab=${genre.tab}${page > 1 ? `&page=${page}` : ''}`)).map(toMeta);
            return await pagedList({ key: `vlxxai:tab${genre.tab}`, skip, want: WANT, fetchPage });
        }
        const path = search ? `/search.php?q=${encodeURIComponent(search)}` : genre.path;
        const key = `vlxxai:single:${path}`;
        let metas = cache.get(key);
        if (!metas) {
            metas = parseList(await fetchHtml(path)).map(toMeta);
            if (metas.length) cache.set(key, metas, 600);
        }
        return metas.slice(skip, skip + WANT);
    } catch (err) {
        console.error('[VlxxAI Catalog Error]', err.message);
        return [];
    }
}

async function loadTitle(slug) {
    const cacheKey = `vlxxai:page:${slug}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;
    const html = await fetchHtml(`/${slug}`);
    const episodes = parseEpisodes(html, slug);
    const h1 = decode((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1]).replace(/\s*-\s*Tập\s*\d+\s*$/i, '');
    const og = (html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i) || [])[1]
        || (html.match(/uploads\/thumbs\/[A-Za-z0-9_.-]+\.(?:webp|jpe?g|png)/) || [])[0] || '';
    const info = {
        name: h1 || slug,
        poster: abs(og),
        description: decode((html.match(/id="movieContent"[^>]*>([\s\S]*?)<\/div>/) || [])[1]),
        badge: decode((html.match(/⭐\s*([^<]+)</) || [])[1]),
        episodes
    };
    if (episodes.length) cache.set(cacheKey, info, 600);
    return info;
}

async function getMeta(type, id) {
    const p = parseId(id);
    if (!p) return null;
    try {
        const info = await loadTitle(p.slug);
        const last = info.episodes.reduce((m, e) => Math.max(m, e.n), 0);
        return {
            id: `vlxxai:${p.slug}`,
            type: 'movie',
            name: info.name,
            poster: info.poster,
            background: info.poster,
            description: `${info.description || info.name}\n\n📺 ${info.episodes.length} tập${last ? ` (tới tập ${last})` : ''} — chọn tập ở danh sách nguồn phát.`,
            genres: ['18+', info.badge].filter(Boolean)
        };
    } catch (err) {
        console.error(`[VlxxAI Meta Error] ${id}:`, err.message);
        return null;
    }
}

/** Player data of one episode: the site's own AJAX call. */
async function fetchPlayer(slug, epIndex) {
    const res = await client.post(`/${slug}?get_player=1`, new URLSearchParams({ slug, ep_index: String(epIndex) }).toString(), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Referer': `${BASE_URL}/${slug}`
        },
        responseType: 'text',
        transformResponse: [d => d]
    });
    const data = res.data;
    if (data && typeof data === 'object') return data; // some runtimes already parse JSON
    try { return JSON.parse(String(data || '')); } catch (e) { return null; }
}

/** Playable URLs from the player JSON: { link, sources: [{ file, type }] } -> [{ url, embed }] */
function pickSources(player) {
    if (!player || player.status === 'error') return [];
    const out = [];
    const seen = new Set();
    const add = (url, embed) => {
        const u = abs(String(url || '').trim());
        if (!u || seen.has(u)) return;
        seen.add(u);
        out.push({ url: u, embed: !!embed });
    };
    for (const s of Array.isArray(player.sources) ? player.sources : []) {
        if (!s) continue;
        add(typeof s === 'string' ? s : s.file, s.type === 'embed');
    }
    add(player.link, false);
    return out;
}

/** Playlist URL of one episode (null when the site gives none). Embedded pages are not played directly. */
async function resolveEpisode(slug, n) {
    const info = await loadTitle(slug);
    const ep = info.episodes.find(e => e.n === n);
    if (!ep) return null;
    const src = pickSources(await fetchPlayer(slug, ep.index)).find(x => !x.embed);
    return src ? src.url : null;
}

/**
 * A title is one "movie" whose episodes are the streams (Tập 1, Tập 2, ...). Each stream points at the Worker
 * (/vlxxai/play/<slug>/<n>.m3u8), which redirects to the episode's playlist when it is played, so listing the streams
 * costs a single page fetch however many episodes there are.
 */
async function getStream(id, type, host) {
    const p = parseId(id);
    if (!p) return [];
    try {
        const info = await loadTitle(p.slug);
        const edge = edgeBaseOf(host);
        const eps = [...info.episodes].filter(e => !p.ep || e.n === p.ep).sort((a, b) => a.n - b.n);
        const label = (n) => `${info.name}\nTập ${n}${info.badge ? ` • ${info.badge}` : ''}`;
        if (edge) {
            return eps.map(e => ({
                name: `🔞 VLXX AI • Tập ${e.n}`,
                title: label(e.n),
                url: `${edge}/vlxxai/play/${p.slug}/${e.n}.m3u8`,
                behaviorHints: { notWebReady: false, bingeGroup: `vlxxai-${p.slug}` }
            }));
        }
        const out = [];
        for (const e of eps.slice(0, 10)) { // no edge host: resolve now (kept small)
            const url = await resolveEpisode(p.slug, e.n).catch(() => null);
            if (url) out.push({ name: `🔞 VLXX AI • Tập ${e.n}`, title: label(e.n), url, behaviorHints: { notWebReady: false, bingeGroup: `vlxxai-${p.slug}` } });
        }
        return out;
    } catch (err) {
        console.error(`[VlxxAI Stream Error] ${id}:`, err.message);
        return [];
    }
}

/**
 * Browsers (Nuvio web) cannot read the CDN's playlists/segments directly (no CORS headers), so for them the Worker
 * serves the playlist itself: every URI is rewritten to /vlxxai/hls.m3u8 (playlists) or /vlxxai/segment.ts (the rest).
 */
function rewritePlaylist(text, baseUrl, edge) {
    const wrap = (ref) => {
        const abs = new URL(ref, baseUrl).href;
        const kind = /\.m3u8(?:$|\?)/i.test(abs) ? 'hls.m3u8' : 'segment.ts';
        return `${edge}/vlxxai/${kind}?url=${encodeURIComponent(abs)}`;
    };
    return String(text || '').split('\n').map((line) => {
        const t = line.trim();
        if (!t) return line;
        if (t.startsWith('#')) return line.replace(/URI="([^"]+)"/g, (m, u) => `URI="${wrap(u)}"`);
        return wrap(t);
    }).join('\n');
}

module.exports = { rewritePlaylist, HOST_RE, getCatalog, getMeta, getStream, resolveEpisode, fetchPlayer, pickSources, parseList, parseEpisodes, GENRE_MAP };
