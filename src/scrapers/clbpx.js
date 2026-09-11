const axios = require('axios');
const kkphim = require('./kkphim');
const cache = require('../utils/cache');

const BASE_URL = 'https://phimapi.com';
const CDN_URL = 'https://phimimg.com';

async function getCatalog(type, extra = {}) {
    try {
        const page = extra.skip ? Math.floor(extra.skip / 24) + 1 : 1;
        let url = '';

        if (extra.search) {
            url = `${BASE_URL}/v1/api/tim-kiem?keyword=${encodeURIComponent(extra.search)}&limit=24`;
        } else {
            url = `${BASE_URL}/v1/api/the-loai/kinh-dien?page=${page}`;
        }

        const cacheKey = `clbpx:catalog:${type}:${JSON.stringify(extra)}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const res = await axios.get(url, { timeout: 10000 });
        const items = res.data?.data?.items || [];
        const cdnDomain = res.data?.data?.APP_DOMAIN_CDN_IMAGE || CDN_URL;

        const metas = items.map(item => {
            const poster = item.poster_url?.startsWith('http') 
                ? item.poster_url 
                : `${cdnDomain}/uploads/movies/${(item.poster_url || '').replace(/^\/?uploads\/movies\//, '')}`;

            return {
                id: `clbpx:${item.slug}`,
                type: type === 'series' ? 'series' : 'movie',
                name: item.name || 'Không tên',
                poster: poster,
                posterShape: 'poster',
                description: `CLBPX • CLB Phim Xưa (${item.year || ''})\n⚡ Định tuyến: CDN Tốc Độ Cao (Direct HLS)\n${item.origin_name || ''} - Kinh Điển Vietsub & Lồng Tiếng`
            };
        });

        cache.set(cacheKey, metas, 600);
        return metas;
    } catch (err) {
        console.error('[CLBPX Catalog Error]:', err.message);
        return [];
    }
}

async function getMeta(type, id) {
    const slug = id.replace('clbpx:', '').split(':')[0];
    const rawMeta = await kkphim.getMeta(type, `kkphim:${slug}`);
    if (!rawMeta) return null;

    return {
        ...rawMeta,
        id: `clbpx:${slug}`,
        videos: rawMeta.videos ? rawMeta.videos.map(v => ({
            ...v,
            id: v.id.replace('kkphim:', 'clbpx:')
        })) : undefined
    };
}

async function getStream(id, type) {
    const mappedId = id.replace('clbpx:', 'kkphim:');
    const streams = await kkphim.getStream(mappedId, type);
    return streams.map(s => ({
        ...s,
        name: s.name.replace('KKPhim', 'CLB Phim Xưa').replace('[CDN]', '[CDN Phim Xưa]'),
        title: s.title.replace('KKPhim', 'CLB Phim Xưa')
    }));
}

module.exports = { getCatalog, getMeta, getStream };
