const axios = require('axios');
const cache = require('../utils/cache');
const { pagedList } = require('../utils/pagedList');

const BASE_URL = 'https://javhay.buzz';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const DEFAULT_PAGE_SIZE = 24;

const client = axios.create({
    baseURL: BASE_URL,
    timeout: 12000,
    headers: { 'User-Agent': USER_AGENT, 'Referer': `${BASE_URL}/` }
});

const ACTRESSES = {
    'Shen Nana': 'shen-nana',
    'Yua Mikami': 'yua-mikami',
    'Tsumugi Akari': 'tsumugi-akari',
    'Airi Kijima': 'airi-kijima',
    'Karen Yuzuriha': 'karen-yuzuriha',
    'Riho Fujimori': 'riho-fujimori',
    'Eimi Fukada': 'eimi-fukada',
    'Mina Kitano': 'mina-kitano',
    'Jun Suehiro': 'jun-suehiro',
    'Yu Shinoda': 'yu-shinoda',
    'Moe Amatsuka': 'moe-amatsuka',
    'Jessica Kizaki': 'jessica-kizaki',
    'Yui Hatano': 'yui-hatano',
    'Megu Fujiura': 'megu-fujiura',
    'Tsubaki Sannomiya': 'tsubaki-sannomiya',
    'Ranran Fujii': 'ranran-fujii',
    'Li Nana': 'li-nana'
};

// Menu of the site (theme "javhaynew"). Lists paginate as <base>page/N/
const GENRE_MAP = {
    'Mới Nhất': '/',
    'Phim Sex JAV': '/phim-sex-jav/',
    'Loạn Luân': '/jav-loan-luan/',
    'Hiếp Dâm': '/sex-hiep-dam/',
    'Trung Quốc': '/phim-sex-trung-quoc/',
    'Âu Mỹ': '/sex-au-my/',
    'Uncen (Không Che)': '/sex-khong-che/',
    'Vietsub': '/jav-vietsub/',
    'Sex Hay': '/phim-sex-hay/',
    'Sex HD': '/sex-hd/',
    'Vụng Trộm': '/jav-vung-trom/',
    'Phim Sex Việt': '/phim-sex-viet/'
};
for (const [label, slug] of Object.entries(ACTRESSES)) GENRE_MAP[`👤 ${label}`] = `/dien-vien/${slug}/`;

function decode(str) {
    return String(str || '')
        .replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'")
        .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#8211;/g, '–')
        .replace(/&#(\d+);/g, (m, n) => { try { return String.fromCodePoint(parseInt(n, 10)); } catch (e) { return m; } })
        .replace(/\s+/g, ' ').trim();
}

function edgeBaseOf(host) {
    if (!host) return '';
    const edgeHost = !host.includes('onrender.com') ? host : ((typeof process !== 'undefined' && process.env && process.env.CF_HOST) || 'hophimaddon.hophim-4g6qbubt.workers.dev');
    return edgeHost.includes('://') ? edgeHost : `https://${edgeHost}`;
}

/**
 * Covers are .avif on the site; the edge poster proxy (/javhay/poster/<yyyy>/<mm>/<file>) tries .jpg/.webp first.
 */
function proxyPoster(src, host) {
    const m = String(src || '').match(/^https?:\/\/(?:www\.)?javhay\.buzz\/wp-content\/uploads\/(\d{4}\/\d{2}\/[A-Za-z0-9._-]+)$/);
    const edge = edgeBaseOf(host);
    if (!m || !edge) return src || '';
    return `${edge}/javhay/poster/${m[1]}`;
}

function parseId(id) {
    const m = String(id).replace(/\.json$/, '').match(/^javhay:([A-Za-z0-9_-]+)$/);
    return m ? m[1] : null;
}

const POST_ANCHOR_RE = /<a\b[^>]*href="https?:\/\/(?:www\.)?javhay\.buzz\/([a-z0-9]+(?:-[a-z0-9]+){2,})\/"[^>]*>/g;
const COVER_RE = /(https?:\/\/(?:www\.)?javhay\.buzz\/wp-content\/uploads\/\d{4}\/\d{2}\/([a-z0-9]+(?:-[a-z0-9]+)*?)(?:-\d{2,4}x\d{2,4})?\.(?:avif|jpe?g|webp|png))/;

/**
 * Parse a list page without depending on the theme's class names (it changed from `thumbBlock` to "javhaynew"): a movie
 * is a link to `/<slug>/` for which the page also shows the cover `wp-content/uploads/<yyyy>/<mm>/<slug>[-WxH].<ext>`
 * (categories, tags and menu links have no such cover). Results keep the order of first appearance.
 */
function parseList(html) {
    const text = String(html || '');
    const covers = new Map(); // slug -> { src, alt }
    for (const m of text.matchAll(/<img\b[^>]*>/g)) {
        const tag = m[0];
        const src = (tag.match(/\b(?:src|data-src|data-lazy-src)="([^"]+)"/g) || []).map(a => a.replace(/^[^"]*"|"$/g, '')).find(u => COVER_RE.test(u));
        if (!src) continue;
        const slug = src.match(COVER_RE)[2];
        if (!covers.has(slug)) covers.set(slug, { src: src.match(COVER_RE)[1], alt: (tag.match(/\balt="([^"]*)"/) || [])[1] || '' });
    }

    const items = [];
    const seen = new Set();
    for (const m of text.matchAll(POST_ANCHOR_RE)) {
        const slug = m[1];
        if (seen.has(slug) || !covers.has(slug)) continue;
        seen.add(slug);
        const cover = covers.get(slug);
        const title = (m[0].match(/\btitle="([^"]*)"/) || [])[1] || cover.alt || slug.replace(/-/g, ' ');
        const label = (text.slice(m.index, m.index + 900).match(/class="(?:video-label|badge[^"]*)">([^<]{2,20})</) || [])[1];
        items.push({ slug, title: decode(title), poster: cover.src, label: label ? decode(label) : '' });
    }
    return items;
}

async function fetchHtml(path, headers) {
    const res = await client.get(path, { responseType: 'text', transformResponse: [d => d], headers });
    const d = res.data;
    if (typeof d === 'string') return d;
    // some adapters hand JSON bodies back already parsed
    return d && typeof d === 'object' ? JSON.stringify(d) : '';
}

function toMeta(item, host) {
    const poster = proxyPoster(item.poster, host);
    return {
        id: `javhay:${item.slug}`,
        type: 'movie',
        name: item.title,
        poster,
        background: poster,
        posterShape: 'landscape',
        description: `${item.title}${item.label ? `\n🏷 ${item.label}` : ''}`,
        genres: ['18+']
    };
}

async function getCatalog(catalogId, type, extra = {}, host) {
    const search = extra.search ? String(extra.search).trim() : '';
    const base = search ? '/' : (GENRE_MAP[extra.genre] || GENRE_MAP['Mới Nhất']);
    const skip = parseInt(extra.skip, 10) || 0;

    const fetchPage = async (page) => {
        let url;
        if (search) url = page > 1 ? `/page/${page}/?s=${encodeURIComponent(search)}` : `/?s=${encodeURIComponent(search)}`;
        else url = page > 1 ? `${base}page/${page}/` : base;
        return parseList(await fetchHtml(url)).map(item => toMeta(item, host));
    };

    try {
        return await pagedList({ key: `javhay:${search ? `search:${search}` : base}`, skip, want: DEFAULT_PAGE_SIZE, fetchPage });
    } catch (err) {
        console.error(`[Javhay Catalog Error] ${base}:`, err.message);
        return [];
    }
}

async function getMeta(type, id, host) {
    const slug = parseId(id);
    if (!slug) return null;
    const cacheKey = `javhay:meta:${slug}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const html = await fetchHtml(`/${slug}/`);
        const og = (prop) => {
            const m = html.match(new RegExp(`<meta[^>]+property="og:${prop}"[^>]+content="([^"]*)"`, 'i'))
                || html.match(new RegExp(`<meta[^>]+content="([^"]*)"[^>]+property="og:${prop}"`, 'i'));
            return m ? decode(m[1]) : '';
        };
        const h1 = decode((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1]);
        const name = h1 || og('title') || slug;
        const poster = proxyPoster(og('image'), host) || og('image');
        const meta = {
            id: `javhay:${slug}`,
            type: 'movie',
            name,
            poster,
            background: poster,
            posterShape: 'landscape',
            description: og('description') || name,
            genres: ['18+']
        };
        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.error(`[Javhay Meta Error] ${id}:`, err.message);
        return null;
    }
}

/**
 * Movie page (`data-id`) -> GET /wp-json/fb/v1/player/?id=<id>&server=1 (JSON whose `data` is the player HTML) -> `url: '...m3u8'`.
 */
async function fetchPlayerApi(slug) {
    const page = await fetchHtml(`/${slug}/`);
    const pid = (page.match(/id="video-player"[^>]*data-id="(\d+)"/) || page.match(/<div id="video"[^>]*data-id="(\d+)"/) || page.match(/data-id="(\d+)"/) || [])[1];
    if (!pid) throw new Error('post id not found');
    const raw = await fetchHtml(`/wp-json/fb/v1/player/?id=${pid}&server=1`, { Referer: `${BASE_URL}/${slug}/`, 'X-Requested-With': 'XMLHttpRequest' });
    return { pid, raw };
}

function findM3u8(raw) {
    let text = String(raw || '');
    try {
        const j = JSON.parse(text);
        if (j && typeof j.data === 'string') {
            if (j.success === false) throw new Error(j.data);
            text = j.data;
        }
    } catch (e) {
        if (!(e instanceof SyntaxError)) throw e;
    }
    text = text.replace(/\\\//g, '/');
    const m = text.match(/https?:\/\/[^'"\s\\<>]+\.m3u8[^'"\s\\<>]*/);
    return m ? m[0] : null;
}

async function resolvePlaylist(slug) {
    const cacheKey = `javhay:playlist:${slug}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const { pid, raw } = await fetchPlayerApi(slug);
    const url = findM3u8(raw);
    if (!url) throw new Error(`m3u8 url not found (post ${pid}, api ${String(raw).length} bytes)`);
    cache.set(cacheKey, url, 1800);
    return url;
}

/**
 * Fetch the playlist and point every segment at the edge unwrapper (/javhay/segment.ts): the segments are MPEG-TS behind
 * a fake PNG header, so the Worker strips it while streaming.
 */
async function getM3u8(slug, host) {
    const edge = edgeBaseOf(host);
    if (!edge) throw new Error('edge host required');
    let playlistUrl = await resolvePlaylist(slug);
    const headers = { 'User-Agent': USER_AGENT, 'Referer': `${BASE_URL}/` };

    const load = async (u) => {
        const res = await fetch(u, { headers });
        if (!res.ok) throw new Error(`playlist status ${res.status}`);
        return res.text();
    };
    let content = await load(playlistUrl);
    if (/#EXT-X-STREAM-INF/.test(content) && !/#EXTINF/.test(content)) {
        const variant = content.split('\n').map(l => l.trim()).find(l => l && !l.startsWith('#'));
        if (!variant) throw new Error('empty master playlist');
        playlistUrl = new URL(variant, playlistUrl).href;
        content = await load(playlistUrl);
    }

    const segmentBase = `${edge}/javhay/segment.ts`;
    return content.split('\n').map((line) => {
        const t = line.trim();
        if (!t || t.startsWith('#')) return line;
        return `${segmentBase}?url=${encodeURIComponent(new URL(t, playlistUrl).href)}`;
    }).join('\n');
}

async function getStream(id, type, host) {
    const slug = parseId(id);
    const edge = edgeBaseOf(host);
    if (!slug || !edge) return [];
    return [{
        name: '🔞 JavHay [HLS]',
        title: `${slug.replace(/-/g, ' ')}\n📡 Phát qua Cloudflare Edge`,
        url: `${edge}/javhay/play.m3u8?slug=${encodeURIComponent(slug)}`,
        behaviorHints: { notWebReady: false, bingeGroup: 'javhay-hls' }
    }];
}

module.exports = { getCatalog, getMeta, getStream, getM3u8, resolvePlaylist, fetchPlayerApi, findM3u8, parseList, GENRE_MAP };
