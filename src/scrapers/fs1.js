const axios = require('axios');
const cache = require('../utils/cache');

const BASE_URL = 'https://fs1.app';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const PAGE_SIZE = 24;

const client = axios.create({
    baseURL: BASE_URL,
    timeout: 12000,
    headers: { 'User-Agent': USER_AGENT, 'Referer': `${BASE_URL}/` }
});

const GENRE_MAP = {
    'Mới Cập Nhật': '/latest-updates/',
    'Xem Nhiều (Hot)': '/hot/',
    'Mới Ra Mắt': '/new-release/',
    'Phụ Đề Trung': '/categories/chinese-subtitle/',
    'Kịch Bản Nhập Vai': '/categories/roleplay/',
    'Đồng Phục': '/categories/uniform/',
    'Quần Tất': '/categories/pantyhose/',
    'Vào Việc Ngay': '/categories/sex-only/',
    'Nhóm (Group)': '/categories/groupsex/',
    'BDSM': '/categories/bdsm/',
    'POV': '/categories/pov/',
    'Quay Lén': '/categories/private-cam/'
};

function decode(str) {
    return String(str || '')
        .replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'")
        .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        .replace(/\s+/g, ' ').trim();
}

function toPoster(src) {
    if (!src) return '';
    return src.replace(/\/\d+x\d+\/\d+\.jpg$/, '/preview.jpg');
}

/**
 * Parse a KVS list page: every `.video-img-box` that links to /videos/<slug>/ and carries a title.
 */
function parseList(html) {
    const items = [];
    const seen = new Set();
    const blocks = String(html || '').split('class="video-img-box');
    for (const block of blocks.slice(1)) {
        const slugMatch = block.match(/href="https?:\/\/[^/"]+(?:\/s\d+)?\/videos\/([^/"]+)\/"/);
        const titleMatch = block.match(/<h6 class="title"><a [^>]*>([\s\S]*?)<\/a><\/h6>/);
        if (!slugMatch || !titleMatch) continue;
        const slug = slugMatch[1];
        if (seen.has(slug)) continue;
        seen.add(slug);
        const img = block.match(/data-src="([^"]+videos_screenshots[^"]+)"/);
        const duration = block.match(/<span class="label">([^<]+)<\/span>/);
        items.push({
            slug,
            title: decode(titleMatch[1]),
            poster: img ? toPoster(img[1]) : '',
            duration: duration ? decode(duration[1]) : ''
        });
    }
    return items;
}

async function fetchHtml(path) {
    const res = await client.get(path, { responseType: 'text', transformResponse: [d => d] });
    return typeof res.data === 'string' ? res.data : '';
}

function toMeta(item) {
    return {
        id: `fs1:${item.slug}`,
        type: 'movie',
        name: item.title,
        poster: item.poster,
        background: item.poster,
        posterShape: 'landscape',
        description: `${item.title}${item.duration ? `\nThời lượng: ${item.duration}` : ''}`,
        genres: ['18+']
    };
}

async function getCatalog(catalogId, type, extra = {}) {
    const page = extra.skip ? Math.floor(Number(extra.skip) / PAGE_SIZE) + 1 : 1;
    const search = extra.search ? String(extra.search).trim() : '';
    const base = search
        ? `/search/${encodeURIComponent(search)}/`
        : (GENRE_MAP[extra.genre] || '/latest-updates/');

    const cacheKey = `fs1:catalog:${base}:${page}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        let items;
        if (page <= 1) {
            items = parseList(await fetchHtml(base));
        } else {
            items = parseList(await fetchHtml(`${base}${page}/`));
            if (items.length === 0) {
                items = parseList(await fetchHtml(`${base}?from=${page}`));
            }
        }
        const metas = items.map(toMeta);
        if (metas.length > 0) cache.set(cacheKey, metas, 900);
        return metas;
    } catch (err) {
        console.error(`[FS1 Catalog Error] ${base}:`, err.message);
        return [];
    }
}

async function getMeta(type, id) {
    const slug = id.replace(/^fs1:/, '').replace(/\.json$/, '');
    const cacheKey = `fs1:meta:${slug}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const html = await fetchHtml(`/videos/${encodeURIComponent(slug)}/`);
        const og = (prop) => {
            const m = html.match(new RegExp(`<meta property="og:${prop}" content="([^"]*)"`));
            return m ? decode(m[1]) : '';
        };
        const name = og('title') || slug.toUpperCase();
        const poster = og('image');
        const cast = [...html.matchAll(/class="model"[^>]*>\s*<span[^>]*title="([^"]+)"/g)].map(m => decode(m[1]));
        const tagBlock = (html.match(/<h5 class="tags[^>]*>([\s\S]*?)<\/h5>/) || [])[1] || '';
        const genres = ['18+', ...[...tagBlock.matchAll(/<a [^>]*>([^<]+)<\/a>/g)].map(m => decode(m[1]))];
        const meta = {
            id: `fs1:${slug}`,
            type: 'movie',
            name,
            poster,
            background: poster,
            posterShape: 'landscape',
            description: name,
            genres,
            cast
        };
        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.error(`[FS1 Meta Error] ${id}:`, err.message);
        return null;
    }
}

/**
 * The page embeds a signed HLS playlist (`var hlsUrl`). It is served without Referer checks and is not IP bound,
 * so the player fetches it straight from the CDN: no Worker bandwidth. Signed links expire -> keep the cache short.
 */
async function getStream(id) {
    const slug = id.replace(/^fs1:/, '').replace(/\.json$/, '');
    const cacheKey = `fs1:stream:${slug}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const html = await fetchHtml(`/videos/${encodeURIComponent(slug)}/`);
        const m = html.match(/var\s+hlsUrl\s*=\s*['"]([^'"]+)['"]/);
        if (!m) return [];
        const t = html.match(/<meta property="og:title" content="([^"]*)"/);
        const title = t ? decode(t[1]) : slug.toUpperCase();
        const streams = [{
            name: '🔞 Jable (fs1) [HLS]',
            title: `${title}\n⚡ Phát trực tiếp từ CDN • Không qua máy chủ`,
            url: m[1],
            behaviorHints: {
                notWebReady: false,
                bingeGroup: 'fs1-hls',
                proxyHeaders: { request: { 'User-Agent': USER_AGENT, 'Referer': `${BASE_URL}/` } }
            }
        }];
        cache.set(cacheKey, streams, 600);
        return streams;
    } catch (err) {
        console.error(`[FS1 Stream Error] ${id}:`, err.message);
        return [];
    }
}

module.exports = { getCatalog, getMeta, getStream, parseList, GENRE_MAP };
