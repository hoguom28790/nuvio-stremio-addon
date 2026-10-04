const phimapi = require('./phimapi');

function getCatalog(type, extra = {}) {
    return phimapi.getCatalog('clbpx', type, extra, {
        fallbackPath: '/v1/api/the-loai/kinh-dien',
        describe: item => `CLBPX • CLB Phim Xưa (${item.year || ''})\n⚡ Định tuyến: CDN Tốc Độ Cao (Direct HLS)\n${item.origin_name || ''} - Kinh Điển Vietsub & Lồng Tiếng`
    });
}

const getMeta = (type, id) => phimapi.getMeta('clbpx', type, id);
const getStream = (id, type) => phimapi.getStream('clbpx', 'CLB Phim Xưa', id, type);

module.exports = { getCatalog, getMeta, getStream };
