const axios = require('axios');
const cache = require('../utils/cache');

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

// Menu of the site. Lists paginate as <base>page/N/
const GENRE_MAP = {
    'Mới Nhất': '/',
    'Loạn Luân': '/jav-loan-luan/',
    'Trung Quốc': '/phim-sex-trung-quoc/',
    'Âu Mỹ': '/sex-au-my/',
    'Uncen (Không Che)': '/sex-khong-che/',
    'Vietsub': '/jav-vietsub/',
    'Sex Hay': '/phim-sex-hay/'
};
for (const [label, slug] of Object.entries(ACTRESSES)) GENRE_MAP[`👤 ${label}`] = `/dien-vien/${slug}/`;

function decode(str) {
    return String(str || '')
        .replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'")
        .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#8211;/g, '–')
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

/**
 * Parse a list page: every `<div class="thumbBlock">` with `<a href="https://javhay.buzz/<slug>/" title="..">` + thumbnail.
 */
function parseList(html) {
    const items = [];
    const seen = new Set();
    const blocks = String(html || '').split('class="thumbBlock"');
    for (const block of blocks.slice(1)) {
        const anchor = (block.match(/<a\s[^>]*href="https?:\/\/(?:www\.)?javhay\.buzz\/[A-Za-z0-9_-]+\/"[^>]*>/) || [])[0];
        if (!anchor) continue;
        const slug = (anchor.match(/href="https?:\/\/(?:www\.)?javhay\.buzz\/([A-Za-z0-9_-]+)\/"/) || [])[1];
        const title = (anchor.match(/title="([^"]*)"/) || [])[1] || (block.match(/<img[^>]+alt="([^"]*)"/) || [])[1] || slug;
        if (!slug || seen.has(slug)) continue;
        seen.add(slug);
        const img = block.match(/<img[^>]+src="([^"]+)"/);
        const label = block.match(/class="video-label">([^<]*)</);
        items.push({ slug, title: decode(title), poster: img ? img[1] : '', label: label ? decode(label[1]) : '' });
    }
    return items;
}

async function fetchHtml(path, headers) {
    const res = await client.get(path, { responseType: 'text', transformResponse: [d => d], headers });
    return typeof res.data === 'string' ? res.data : '';
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
    const sizeKey = `javhay:psize:${search ? 'search' : base}`;
    const pageSize = cache.get(sizeKey) || DEFAULT_PAGE_SIZE;
    const page = extra.skip ? Math.max(1, Math.round(Number(extra.skip) / pageSize) + 1) : 1;

    let url;
    if (search) url = page > 1 ? `/page/${page}/?s=${encodeURIComponent(search)}` : `/?s=${encodeURIComponent(search)}`;
    else url = page > 1 ? `${base}page/${page}/` : base;

    const cacheKey = `javhay:catalog:${url}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const items = parseList(await fetchHtml(url));
        const metas = items.map(item => toMeta(item, host));
        if (page === 1 && metas.length > 0) cache.set(sizeKey, metas.length, 86400);
        if (metas.length > 0) cache.set(cacheKey, metas, 900);
        return metas;
    } catch (err) {
        console.error(`[Javhay Catalog Error] ${url}:`, err.message);
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
async function resolvePlaylist(slug) {
    const cacheKey = `javhay:playlist:${slug}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const page = await fetchHtml(`/${slug}/`);
    const pid = (page.match(/id="video-player"[^>]*data-id="(\d+)"/) || page.match(/<div id="video"[^>]*data-id="(\d+)"/) || page.match(/data-id="(\d+)"/) || [])[1];
    if (!pid) throw new Error('post id not found');

    const raw = await fetchHtml(`/wp-json/fb/v1/player/?id=${pid}&server=1`, { Referer: `${BASE_URL}/${slug}/`, 'X-Requested-With': 'XMLHttpRequest' });
    let data = raw;
    let parsed = null;
    try { parsed = JSON.parse(raw); } catch (e) { /* not JSON: scan the raw text */ }
    if (parsed) {
        if (!parsed.success || typeof parsed.data !== 'string') throw new Error(typeof parsed.data === 'string' ? parsed.data : 'player api failed');
        data = parsed.data;
    }
    const m = data.match(/\burl\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/);
    if (!m) throw new Error('m3u8 url not found');
    cache.set(cacheKey, m[1], 1800);
    return m[1];
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

module.exports = { getCatalog, getMeta, getStream, getM3u8, resolvePlaylist, parseList, GENRE_MAP };
