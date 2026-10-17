const axios = require('axios');
const cache = require('../utils/cache');

const BASE_URL = 'https://sexmupxinh.net';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const DEFAULT_PAGE_SIZE = 24;

const client = axios.create({
    baseURL: BASE_URL,
    timeout: 12000,
    headers: { 'User-Agent': USER_AGENT, 'Referer': `${BASE_URL}/` }
});

// Menu of the site. Lists paginate as <base>page/N/
const GENRE_MAP = {
    'Mới Nhất': '/',
    'Hiếp Dâm': '/phim-sex-hiep-dam/',
    'Loạn Luân': '/phim-sex-loan-luan/',
    'Không Che': '/phim-sex-khong-che/',
    'Nhật Bản': '/phim-sex-nhat-ban/',
    'Châu Âu': '/phim-sex-chau-au/',
    'JAV HD': '/jav-hd/',
    'XNXX': '/xnxx/',
    'Phim Hay': '/phim-sex-hay/',
    'Trung Quốc': '/phim-sex-trung-quoc/',
    'Lầu Xanh': '/phim-sex-lau-xanh/',
    'XXX': '/phim-xxx/',
    'VLXX': '/vlxx/',
    'Địt Nhau': '/phim-dit-nhau/',
    'Học Sinh': '/phim-sex-hoc-sinh/',
    'Vụng Trộm': '/phim-sex-vung-trom/'
};

function decode(str) {
    return String(str || '')
        .replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'")
        .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        .replace(/\s+/g, ' ').trim();
}

function edgeBaseOf(host) {
    if (!host) return '';
    const edgeHost = !host.includes('onrender.com') ? host : ((typeof process !== 'undefined' && process.env && process.env.CF_HOST) || 'hophimaddon.hophim-4g6qbubt.workers.dev');
    return edgeHost.includes('://') ? edgeHost : `https://${edgeHost}`;
}

/**
 * Covers are served through the edge poster proxy (/sexmup/poster/<slug>.jpg): sends the site Referer, cached at the edge.
 */
function coverUrl(slug, host) {
    const edge = edgeBaseOf(host);
    return edge ? `${edge}/sexmup/poster/${slug}.jpg` : `${BASE_URL}/file/cover/${slug}.jpg`;
}

function parseId(id) {
    const m = String(id).replace(/\.json$/, '').match(/^sexmup:([A-Za-z0-9_-]+)$/);
    return m ? m[1] : null;
}

/**
 * Parse a list page: every `<li class="video-list">` with `<a title=".." href=".../phim/<slug>/">`.
 */
function parseList(html) {
    const items = [];
    const seen = new Set();
    const blocks = String(html || '').split('<li class="video-list"');
    for (const block of blocks.slice(1)) {
        const link = block.match(/href="(?:https?:\/\/[^/"]+)?\/phim\/([A-Za-z0-9_-]+)\/?"/);
        if (!link || seen.has(link[1])) continue;
        seen.add(link[1]);
        const title = block.match(/<a[^>]+title="([^"]*)"/) || block.match(/alt="([^"]*)"/);
        items.push({ slug: link[1], title: decode(title ? title[1] : link[1]) });
    }
    return items;
}

async function fetchHtml(path, headers) {
    const res = await client.get(path, { responseType: 'text', transformResponse: [d => d], headers });
    return typeof res.data === 'string' ? res.data : '';
}

function toMeta(item, host) {
    const poster = coverUrl(item.slug, host);
    return {
        id: `sexmup:${item.slug}`,
        type: 'movie',
        name: item.title,
        poster,
        background: poster,
        posterShape: 'landscape',
        description: item.title,
        genres: ['18+']
    };
}

async function getCatalog(catalogId, type, extra = {}, host) {
    const search = extra.search ? String(extra.search).trim() : '';
    const base = search ? '/search/' : (GENRE_MAP[extra.genre] || GENRE_MAP['Mới Nhất']);
    const sizeKey = `sexmup:psize:${search ? 'search' : base}`;
    const pageSize = cache.get(sizeKey) || DEFAULT_PAGE_SIZE;
    const page = extra.skip ? Math.max(1, Math.round(Number(extra.skip) / pageSize) + 1) : 1;

    let url;
    if (search) {
        if (page > 1) return []; // pagination of the search page has not been verified
        url = `/search/?do=search&qh=${encodeURIComponent(search)}`;
    } else {
        url = page > 1 ? `${base}page/${page}/` : base;
    }

    const cacheKey = `sexmup:catalog:${url}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const items = parseList(await fetchHtml(url));
        const metas = items.map(item => toMeta(item, host));
        if (page === 1 && metas.length > 0) cache.set(sizeKey, metas.length, 86400);
        if (metas.length > 0) cache.set(cacheKey, metas, 900);
        return metas;
    } catch (err) {
        console.error(`[Sexmup Catalog Error] ${url}:`, err.message);
        return [];
    }
}

async function getMeta(type, id, host) {
    const slug = parseId(id);
    if (!slug) return null;
    const cacheKey = `sexmup:meta:${slug}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const html = await fetchHtml(`/phim/${slug}/`);
        const og = (prop) => {
            const m = html.match(new RegExp(`<meta[^>]+property="og:${prop}"[^>]+content="([^"]*)"`, 'i'))
                || html.match(new RegExp(`<meta[^>]+content="([^"]*)"[^>]+property="og:${prop}"`, 'i'));
            return m ? decode(m[1]) : '';
        };
        const h1 = decode((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1]);
        const name = h1 || og('title') || slug;
        const poster = coverUrl(slug, host);
        const meta = {
            id: `sexmup:${slug}`,
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
        console.error(`[Sexmup Meta Error] ${id}:`, err.message);
        return null;
    }
}

/**
 * Movie page -> `var pid` -> /player-proxy.php?id=<pid> (plain text: the player page URL, .../video/<hash>?cdn=r2)
 * -> the playlist is <player origin>/video/<hash>/master.m3u8?cdn=r2 (what the player's own JS requests).
 */
async function resolveMaster(slug) {
    const cacheKey = `sexmup:master:${slug}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const page = await fetchHtml(`/phim/${slug}/`);
    const pid = (page.match(/\bvar\s+pid\s*=\s*['"]?(\d+)/) || [])[1];
    if (!pid) throw new Error('pid not found');

    const embed = String(await fetchHtml(`/player-proxy.php?id=${pid}&_ts=${Date.now()}`, { Referer: `${BASE_URL}/phim/${slug}/`, 'X-Requested-With': 'XMLHttpRequest' })).trim();
    const m = embed.match(/^(https?:\/\/[^/\s]+)\/video\/([A-Za-z0-9-]+)(?:\?([^\s]*))?$/);
    if (!m) throw new Error(`unexpected player-proxy answer: ${embed.slice(0, 80)}`);
    const master = `${m[1]}/video/${m[2]}/master.m3u8${m[3] ? `?${m[3]}` : ''}`;
    cache.set(cacheKey, master, 1800);
    return master;
}

/**
 * Fetch the playlist and point every segment at the edge unwrapper (/sexmup/segment.ts): the segments are MPEG-TS
 * disguised behind a fake PNG header, so the Worker strips it while streaming.
 */
async function getM3u8(slug, host) {
    const edge = edgeBaseOf(host);
    if (!edge) throw new Error('edge host required');
    let masterUrl = await resolveMaster(slug);
    const origin = new URL(masterUrl).origin;
    const headers = { 'User-Agent': USER_AGENT, 'Referer': `${origin}/` };

    const load = async (u) => {
        const res = await fetch(u, { headers });
        if (!res.ok) throw new Error(`playlist status ${res.status}`);
        return res.text();
    };
    let content = await load(masterUrl);
    if (/#EXT-X-STREAM-INF/.test(content) && !/#EXTINF/.test(content)) {
        const variant = content.split('\n').map(l => l.trim()).find(l => l && !l.startsWith('#'));
        if (!variant) throw new Error('empty master playlist');
        masterUrl = new URL(variant, masterUrl).href;
        content = await load(masterUrl);
    }

    const segmentBase = `${edge}/sexmup/segment.ts`;
    return content.split('\n').map((line) => {
        const t = line.trim();
        if (!t || t.startsWith('#')) return line;
        return `${segmentBase}?url=${encodeURIComponent(new URL(t, masterUrl).href)}`;
    }).join('\n');
}

/**
 * The stream is the Worker's own rewritten playlist; resolution happens when the player requests it.
 */
async function getStream(id, type, host) {
    const slug = parseId(id);
    const edge = edgeBaseOf(host);
    if (!slug || !edge) return [];
    return [{
        name: '🔞 Sex Mụp Xinh [HLS]',
        title: `${slug.replace(/-/g, ' ')}\n📡 Phát qua Cloudflare Edge`,
        url: `${edge}/sexmup/play.m3u8?slug=${encodeURIComponent(slug)}`,
        behaviorHints: { notWebReady: false, bingeGroup: 'sexmup-hls' }
    }];
}

module.exports = { getCatalog, getMeta, getStream, getM3u8, resolveMaster, parseList, GENRE_MAP };
