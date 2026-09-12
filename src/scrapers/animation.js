const axios = require('axios');
const kkphim = require('./kkphim');
const cache = require('../utils/cache');
const { parseFilter } = require('../utils/filterHelper');

const BASE_URL = 'https://phimapi.com';
const CDN_URL = 'https://phimimg.com';

async function getCatalog(catalogId, type, extra = {}) {
    try {
        const page = extra.skip ? Math.floor(extra.skip / 24) + 1 : 1;
        let url = '';

        if (extra.search) {
            url = `${BASE_URL}/v1/api/tim-kiem?keyword=${encodeURIComponent(extra.search)}&limit=24`;
        } else if (extra.genre) {
            const filter = parseFilter(extra.genre);
            if (filter) {
                if (filter.filterType === 'genre') {
                    url = `${BASE_URL}/v1/api/the-loai/${filter.slug}?page=${page}`;
                } else if (filter.filterType === 'country') {
                    url = `${BASE_URL}/v1/api/quoc-gia/${filter.slug}?page=${page}`;
                } else if (filter.filterType === 'category') {
                    if (filter.slug === 'phim-le') {
                        url = `${BASE_URL}/v1/api/the-loai/hoat-hinh?page=${page}`;
                    } else {
                        url = `${BASE_URL}/v1/api/danh-sach/${filter.slug}?page=${page}`;
                    }
                } else if (filter.filterType === 'search') {
                    url = `${BASE_URL}/v1/api/tim-kiem?keyword=${encodeURIComponent(filter.value)}&limit=24`;
                }
            }
        }

        if (!url) {
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
            const rawPoster = item.poster_url || item.thumb_url || '';
            const poster = kkphim.formatPoster ? kkphim.formatPoster(rawPoster, cdnDomain) : (rawPoster.startsWith('http') ? rawPoster : `${cdnDomain}/${rawPoster.replace(/^\/+/, '')}`);

            return {
                id: `${prefix}:${item.slug}`,
                type: type === 'series' ? 'series' : 'movie',
                name: item.name || 'Không tên',
                poster: poster,
                posterShape: 'poster',
                description: `${brandName} (${item.year || ''})\n⚡ Định tuyến: CDN Tốc Độ Cao (Direct HLS)\n${item.origin_name || ''} - ${item.lang || 'Thuyết Minh / Vietsub'}`
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
        name: s.name.replace('KKPhim', brand).replace('[CDN]', `[CDN ${brand}]`),
        title: s.title.replace('KKPhim', brand)
    }));
}

module.exports = { getCatalog, getMeta, getStream };
