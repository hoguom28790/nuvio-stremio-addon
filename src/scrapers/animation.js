const phimapi = require('./phimapi');

const BRANDS = { hh3d: 'HH3D • Hoạt Hình 3D', yan: 'YAN • Hoạt Hình', stp: 'STP • Siêu Tầm Phim' };

function getCatalog(catalogId, type, extra = {}) {
    const prefix = catalogId.startsWith('hh3d') ? 'hh3d' : (catalogId.startsWith('yan') ? 'yan' : 'stp');
    return phimapi.getCatalog(prefix, type, extra, {
        fallbackPath: '/v1/api/the-loai/hoat-hinh',
        // "Phim Lẻ" inside an animation catalog still means animated films
        category: slug => (slug === 'phim-le' ? '/v1/api/the-loai/hoat-hinh' : `/v1/api/danh-sach/${slug}`),
        describe: item => `${BRANDS[prefix]} (${item.year || ''})\n⚡ Định tuyến: CDN Tốc Độ Cao (Direct HLS)\n${item.origin_name || ''} - ${item.lang || 'Thuyết Minh / Vietsub'}`
    });
}

const getMeta = (prefix, type, id) => phimapi.getMeta(prefix, type, id);
const getStream = (prefix, id, type) => phimapi.getStream(prefix, prefix.toUpperCase(), id, type);

module.exports = { getCatalog, getMeta, getStream };
