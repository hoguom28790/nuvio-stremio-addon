const reference = require('../Reference.json');

// Filter out tv/sports catalogs (streamfree-live, sports-live)
const filteredCatalogs = reference.catalogs.filter(c => c.type !== 'tv' && c.id !== 'streamfree-live' && c.id !== 'sports-live');

const baseManifest = {
    id: "org.hophim.stremio",
    version: "1.4.3",
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

const hentaizGenres = [
    "Tất Cả",
    "Không Che (Uncensored)",
    "3D",
    "Ahegao",
    "Anal",
    "Bao cao su",
    "Bạo dâm",
    "Big Boobs",
    "Big girls",
    "Bondage",
    "Bú liếm",
    "Cosplay",
    "Da ngăm",
    "Đẻ con",
    "Đồ Bơi",
    "Double Penetration",
    "Đụ Vú",
    "Elf",
    "Fantasy",
    "Femdom",
    "Foot Job",
    "Furry",
    "Futanari",
    "Gái quậy",
    "Gang Bang",
    "Giáo viên",
    "Goblin",
    "Guro",
    "Harem",
    "Hiếp dâm",
    "Idol",
    "Josei",
    "Kemonomimi",
    "Loạn luân",
    "Loli",
    "Maid",
    "Mang thai",
    "Megane",
    "MILF",
    "Mind Break",
    "Monster",
    "Ngủ",
    "NTR",
    "Nữ sinh",
    "Plot",
    "Quấy rối",
    "Scat",
    "Sex Toy",
    "Shota",
    "Softcore",
    "Stocking",
    "Sữa mẹ",
    "Succubus",
    "Thác loạn",
    "Thôi miên",
    "Threesome",
    "Thủ Dâm",
    "Thuốc kích dục",
    "Thụ thai",
    "Tiểu tiện",
    "Tống tình",
    "Trap",
    "Tsundere",
    "Ugly Bastard",
    "Vanilla",
    "Virgin",
    "Vú lép",
    "Wafuku",
    "X-Ray",
    "Xúc tu",
    "Yaoi",
    "Y Tá",
    "Yuri"
];

const hentaizCatalogs = [
    {
        type: "series",
        id: "hentaiz-anime",
        name: "Thế Giới Khác • HentaiZ",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: hentaizGenres }
        ]
    },
    {
        type: "movie",
        id: "hentaiz-movie",
        name: "Thế Giới Khác • HentaiZ Phim",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: hentaizGenres }
        ]
    }
];

function getManifest(config = {}) {
    let catalogs = filteredCatalogs;
    const isHentaiz = !!(config && Array.isArray(config.sources) && config.sources.includes('hentaiz'));

    if (isHentaiz) {
        catalogs = [...catalogs, ...hentaizCatalogs];
    }

    if (config && config.sources && Array.isArray(config.sources)) {
        catalogs = catalogs.filter(cat => {
            const prefix = cat.id.split('-')[0];
            return config.sources.includes(prefix);
        });
    }

    const idPrefixes = isHentaiz
        ? [...baseManifest.idPrefixes, "hentaiz:"]
        : baseManifest.idPrefixes;

    const resources = baseManifest.resources.map(res => {
        if (typeof res === 'object' && res.idPrefixes) {
            return Object.assign({}, res, { idPrefixes });
        }
        return res;
    });

    return Object.assign({}, baseManifest, {
        catalogs,
        idPrefixes,
        resources
    });
}

module.exports = baseManifest;
module.exports.getManifest = getManifest;



