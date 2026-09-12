const reference = require('../Reference.json');

// Filter out tv/sports catalogs (streamfree-live, sports-live)
const filteredCatalogs = reference.catalogs.filter(c => c.type !== 'tv' && c.id !== 'streamfree-live' && c.id !== 'sports-live');

const baseManifest = {
    id: "org.hophim.stremio",
    version: "1.4.1",
    name: "Hồ Phim",
    description: "Tổng hợp phim Vietsub & Thuyết minh lồng tiếng từ NguonC, Siêu Tầm Phim, Hoạt Hình 3D, CLB Phim Xưa, VSMOV, YanHH3D, KKPhim",
    logo: "https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",
    resources: [
        "catalog",
        {
            name: "meta",
            types: ["movie", "series"],
            idPrefixes: ["tt", "nguonc:", "stp:", "hh3d:", "clbpx:", "vsmov:", "yan:", "kkphim:"]
        },
        {
            name: "stream",
            types: ["movie", "series"],
            idPrefixes: ["tt", "nguonc:", "stp:", "hh3d:", "clbpx:", "vsmov:", "yan:", "kkphim:"]
        }
    ],
    types: ["movie", "series"],
    idPrefixes: ["tt", "nguonc:", "stp:", "hh3d:", "clbpx:", "vsmov:", "yan:", "kkphim:"],
    catalogs: filteredCatalogs,
    behaviorHints: { adult: false, p2p: false, configurable: true, configurationRequired: false }
};

function getManifest(config = {}) {
    let catalogs = filteredCatalogs;
    if (config && config.sources && Array.isArray(config.sources)) {
        catalogs = filteredCatalogs.filter(cat => {
            const prefix = cat.id.split('-')[0];
            return config.sources.includes(prefix);
        });
    }
    return Object.assign({}, baseManifest, { catalogs });
}

module.exports = baseManifest;
module.exports.getManifest = getManifest;



