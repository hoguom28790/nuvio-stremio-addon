const axios = require('axios');
const kkphim = require('./kkphim');
const cache = require('../utils/cache');

const BASE_URL = 'https://phimapi.com';
const CDN_URL = 'https://phimimg.com';

async function getCatalog(catalogId, type, extra = {}) {
    try {
        const page = extra.skip ? Math.floor(extra.skip / 24) + 1 : 1;
        let url = '';

        if (extra.search) {
            url = `${BASE_URL}/v1/api/tim-kiem?keyword=${encodeURIComponent(extra.search)}&limit=24`;
        } else {
            // Filter by Hoạt Hình / Anime category
            url = `${BASE_URL}/v1/api/the-loai/hoat-hinh?page=${page}`;
        }

        const prefix = catalogId.startsWith('hh3d') ? 'hh3d' : (catalogId.startsWith('yan') ? 'yan' : 'stp');
        const brandName = prefix === 'hh3d' ? 'HH3D • Hoạt Hình 3D' : (prefix === 'yan' ? 'YAN • Hoạt Hình' : 'STP • Siêu Tầm Phim');

        const cacheKey = `${prefix}:catalog:${type}:${JSON.stringify(extra)}`;
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
                id: `${prefix}:${item.slug}`,
                type: type === 'series' ? 'series' : 'movie',
                name: item.name || 'Không tên',
                poster: poster,
                posterShape: 'poster',
                description: `${brandName} (${item.year || ''})\n${item.origin_name || ''} - ${item.lang || 'Thuyết Minh / Vietsub'}`
            };
        });

        cache.set(cacheKey, metas, 600);
        return metas;
    } catch (err) {
        console.error('[Animation Scraper Catalog Error]:', err.message);
        return [];
    }
}

async function getMeta(prefix, type, id) {
    const slug = id.replace(`${prefix}:`, '').split(':')[0];
    const rawMeta = await kkphim.getMeta(type, `kkphim:${slug}`);
    if (!rawMeta) return null;

    return {
        ...rawMeta,
        id: `${prefix}:${slug}`,
        videos: rawMeta.videos ? rawMeta.videos.map(v => ({
            ...v,
            id: v.id.replace('kkphim:', `${prefix}:`)
        })) : undefined
    };
}

async function getStream(prefix, id, type) {
    const mappedId = id.replace(`${prefix}:`, 'kkphim:');
    const streams = await kkphim.getStream(mappedId, type);
    const brand = prefix.toUpperCase();
    return streams.map(s => ({
        ...s,
        name: s.name.replace('KKPhim', brand)
    }));
}

module.exports = { getCatalog, getMeta, getStream };
