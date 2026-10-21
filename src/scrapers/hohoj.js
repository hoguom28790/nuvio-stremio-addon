const axios = require('axios');
const cache = require('../utils/cache');
const { pagedList } = require('../utils/pagedList');

const BASE_URL = 'https://hohoj.tv';
const LANG = '/lang_en';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const DEFAULT_PAGE_SIZE = 24;

const client = axios.create({
    baseURL: BASE_URL,
    timeout: 12000,
    headers: { 'User-Agent': USER_AGENT, 'Referer': `${BASE_URL}/` }
});

// Entries of the site's menu that answer to the Worker. Listing pages live under /lang_en and paginate with ?p=N
// (the home page is a single page). /search pages answer 500 to the Worker, so there is no keyword search.
const GENRE_MAP = {
    'Mới Nhất': `${LANG}/`,
    'Loạn Luân': `${LANG}/main_ctg?id=8`,
    'Cưỡng Hiếp / Lăng Nhục': `${LANG}/main_ctg?id=2`,
    'Nội Xạ': `${LANG}/main_ctg?id=12`,
    'Nhóm / Đa Người': `${LANG}/main_ctg?id=5`,
    'Ngực Bự': `${LANG}/main_ctg?id=9`,
    'Ngoại Tình': `${LANG}/main_ctg?id=7`,
    'Nhập Vai / Kịch Bản': `${LANG}/main_ctg?id=6`,
    'Tất Lụa / Chân Đẹp': `${LANG}/main_ctg?id=1`,
    'Phun Nước': `${LANG}/main_ctg?id=10`,
    'Hậu Môn': `${LANG}/main_ctg?id=11`,
    'Đồng Phục': `${LANG}/main_ctg?id=4`,
    'Điều Giáo (BDSM)': `${LANG}/main_ctg?id=3`,
    '👤 波多野結衣': `${LANG}/model?id=43`,
    '👤 三上悠亞': `${LANG}/model?id=41`,
    '👤 北野未奈': `${LANG}/model?id=93`,
    '👤 凪光': `${LANG}/model?id=990`,
    '👤 森澤佳奈': `${LANG}/model?id=1002`,
    '👤 河北彩花': `${LANG}/model?id=586`,
    '👤 楪可憐': `${LANG}/model?id=69`,
    '👤 橘瑪麗': `${LANG}/model?id=726`,
    '👤 瀬戸環奈': `${LANG}/model?id=7197`,
    '👤 楓可憐': `${LANG}/model?id=19`,
    '👤 素人 (Nghiệp dư)': `${LANG}/model?id=404`
};

function decode(str) {
    return String(str || '')
        .replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'")
        .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        .replace(/\s+/g, ' ').trim();
}

/**
 * Route CDN thumbnails through the edge poster proxy (/hohoj/poster/...): cached at the edge, no hotlink issues.
 */
function proxyPoster(src, host) {
    const m = String(src || '').match(/^https?:\/\/cdn-1\.ggjav\.com\/media\/(.+)$/);
    if (!m || !host) return src || '';
    const edgeHost = !host.includes('onrender.com') ? host : ((typeof process !== 'undefined' && process.env && process.env.CF_HOST) || 'hophimaddon.hophim-4g6qbubt.workers.dev');
    const edgeBase = edgeHost.includes('://') ? edgeHost : `https://${edgeHost}`;
    return `${edgeBase}/hohoj/poster/${m[1]}`;
}

/**
 * Parse a list page: every `<div class="video-item ...">` with `<a href="/video?id=N">`, a thumbnail and a title.
 */
function parseList(html) {
    const items = [];
    const seen = new Set();
    const blocks = String(html || '').split('class="video-item ');
    for (const block of blocks.slice(1)) {
        const idm = block.match(/href="[^"]*video\?id=(\d+)"/);
        if (!idm || seen.has(idm[1])) continue;
        seen.add(idm[1]);
        const img = block.match(/<img[^>]+src="(https?:\/\/cdn-1\.ggjav\.com\/media\/video\/(?:small|large)_(\d+)\.jpg)"/);
        const alt = block.match(/<img[^>]+alt="([^"]*)"/);
        const title = block.match(/class="video-item-title[^"]*">([\s\S]*?)<\/div>/);
        const views = block.match(/fa-eye[^>]*><\/i>\s*<span[^>]*>([^<]+)<\/span>/);
        items.push({
            id: idm[1],
            title: decode((title && title[1]) || (alt && alt[1]) || `ID ${idm[1]}`),
            poster: img ? `https://cdn-1.ggjav.com/media/video/large_${img[2]}.jpg` : '',
            views: views ? decode(views[1]) : ''
        });
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
        id: `hohoj:${item.id}`,
        type: 'movie',
        name: item.title,
        poster,
        background: poster,
        posterShape: 'landscape',
        description: `${item.title}${item.views ? `\n👁 ${item.views}` : ''}`,
        genres: ['18+']
    };
}

async function getCatalog(catalogId, type, extra = {}, host) {
    // Keyword search is not available (the site's /search answers 500 to the Worker)
    if (extra.search && String(extra.search).trim()) return [];

    const base = GENRE_MAP[extra.genre] || GENRE_MAP['Mới Nhất'];
    const singlePage = base === `${LANG}/`; // the home page has no pagination
    const skip = parseInt(extra.skip, 10) || 0;

    const fetchPage = async (page) => {
        if (singlePage && page > 1) return [];
        const url = page > 1 ? `${base}${base.includes('?') ? '&' : '?'}p=${page}` : base;
        return parseList(await fetchHtml(url)).map(item => toMeta(item, host));
    };

    try {
        return await pagedList({ key: `hohoj:${base}`, skip, want: DEFAULT_PAGE_SIZE, fetchPage });
    } catch (err) {
        console.error(`[HoHoJ Catalog Error] ${base}:`, err.message);
        return [];
    }
}

function parseId(id) {
    const m = String(id).replace(/\.json$/, '').match(/^hohoj:(\d+)$/);
    return m ? m[1] : null;
}

async function getMeta(type, id, host) {
    const vid = parseId(id);
    if (!vid) return null;
    const cacheKey = `hohoj:meta:${vid}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const html = await fetchHtml(`${LANG}/video?id=${vid}`);
        const og = (prop) => {
            const m = html.match(new RegExp(`<meta[^>]+property="og:${prop}"[^>]+content="([^"]*)"`, 'i'))
                || html.match(new RegExp(`<meta[^>]+content="([^"]*)"[^>]+property="og:${prop}"`, 'i'));
            return m ? decode(m[1]) : '';
        };
        const pageTitle = decode((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1]).replace(/\s*[-|–]\s*HoHoJ.*$/i, '');
        const name = og('title') || pageTitle || `HoHoJ ${vid}`;
        const pid = (html.match(/media\/video\/(?:large|small)_(\d+)\.jpg/) || html.match(/media\/preview\/(\d+)_\d+\.jpg/) || [])[1];
        const poster = proxyPoster(pid ? `https://cdn-1.ggjav.com/media/video/large_${pid}.jpg` : og('image'), host);
        const cast = [...html.matchAll(/href="[^"]*model\?id=\d+[^"]*"[^>]*>([\s\S]*?)<\/a>/g)].map(m => decode(m[1])).filter(Boolean);
        const meta = {
            id: `hohoj:${vid}`,
            type: 'movie',
            name,
            poster,
            background: poster,
            posterShape: 'landscape',
            description: name,
            genres: ['18+'],
            cast: [...new Set(cast)].slice(0, 8)
        };
        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.error(`[HoHoJ Meta Error] ${id}:`, err.message);
        return null;
    }
}

/**
 * The /embed page holds `var videoSrc = ".../index.m3u8"`: a plain HLS playlist on the site's CDN. Playlist and segments
 * answer without Referer, with CORS `*` and absolute segment URLs, so the player pulls them straight from the CDN
 * (works on Nuvio Web too) and the Worker only serves this tiny lookup.
 */
async function getStream(id) {
    const vid = parseId(id);
    if (!vid) return [];
    const cacheKey = `hohoj:stream:${vid}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const html = await fetchHtml(`/embed?id=${vid}`, { Referer: `${BASE_URL}/video?id=${vid}` });
        const m = html.match(/var\s+videoSrc\s*=\s*["']([^"']+)["']/);
        if (!m) return [];
        const t = html.match(/<title>([\s\S]*?)<\/title>/i);
        const title = decode(t ? t[1] : '').replace(/\s*HoHoJ\.TV Player.*$/i, '') || `HoHoJ ${vid}`;
        const streams = [{
            name: '🔞 HoHoJ [HLS]',
            title: `${title}\n⚡ Phát trực tiếp từ CDN • Không qua máy chủ`,
            url: m[1],
            behaviorHints: { notWebReady: false, bingeGroup: 'hohoj-hls' }
        }];
        cache.set(cacheKey, streams, 1800);
        return streams;
    } catch (err) {
        console.error(`[HoHoJ Stream Error] ${id}:`, err.message);
        return [];
    }
}

module.exports = { getCatalog, getMeta, getStream, parseList, GENRE_MAP };
