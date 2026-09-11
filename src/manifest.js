const reference = require('../Reference.json');

module.exports = {
    id: "org.hophim.stremio",
    version: "1.4.0",
    name: "Hồ Phim",
    description: "Tổng hợp phim Vietsub & Thuyết minh lồng tiếng từ NguonC, Siêu Tầm Phim, Hoạt Hình 3D, CLB Phim Xưa, VSMOV, YanHH3D, KKPhim, StreamFree Live và Thể Thao Trực Tiếp",
    logo: "https://dl.strem.io/addon-logo.png",
    resources: [
        "catalog",
        {
            name: "meta",
            types: ["movie", "series", "tv"],
            idPrefixes: ["tt", "nguonc:", "stp:", "hh3d:", "clbpx:", "vsmov:", "yan:", "kkphim:", "sf:", "streamfree:", "iptv:", "sports:"]
        },
        {
            name: "stream",
            types: ["movie", "series", "tv"],
            idPrefixes: ["tt", "nguonc:", "stp:", "hh3d:", "clbpx:", "vsmov:", "yan:", "kkphim:", "sf:", "streamfree:", "iptv:", "sports:"]
        }
    ],
    types: ["movie", "series", "tv"],
    idPrefixes: ["tt", "nguonc:", "stp:", "hh3d:", "clbpx:", "vsmov:", "yan:", "kkphim:", "sf:", "streamfree:", "iptv:", "sports:"],
    catalogs: reference.catalogs,
    behaviorHints: { adult: false, p2p: false, configurable: true, configurationRequired: false }
};
