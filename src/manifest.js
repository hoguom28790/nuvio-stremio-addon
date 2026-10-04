const reference = require('../Reference.json');
const vsmov = require('./scrapers/vsmov');

// Filter out tv/sports catalogs and legacy vsmov
const nguoncLanguages = ["Ngôn ngữ: Vietsub", "Ngôn ngữ: Thuyết minh", "Ngôn ngữ: Lồng tiếng"];

const filteredCatalogs = reference.catalogs.filter(c => 
    c.type !== 'tv' && 
    c.id !== 'streamfree-live' && 
    c.id !== 'sports-live' && 
    !/^(hh3d|yan|stp|clbpx)-/.test(c.id)
).map(c => {
    if (c.id.startsWith('vsmov-')) {
        // VSMOV filters come from the scraper (only lists/genres/countries the API really serves)
        return Object.assign({}, c, {
            extra: c.extra.map(e => e.name === 'genre' ? Object.assign({}, e, { options: vsmov.CATALOG_OPTIONS }) : e)
        });
    }
    if (!c.id.startsWith('nguonc-')) return c;
    // NguonC /films/ngon-ngu/{slug} filter: add language options after the category entries
    return Object.assign({}, c, {
        extra: c.extra.map(e => e.name === 'genre'
            ? Object.assign({}, e, { options: [...e.options.slice(0, 6), ...nguoncLanguages, ...e.options.slice(6)] })
            : e)
    });
});

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
        name: "HentaiZ",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: hentaizGenres }
        ]
    },
    {
        type: "movie",
        id: "hentaiz-movie",
        name: "HentaiZ Phim",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: hentaizGenres }
        ]
    }
];

const javhdGenres = [
    "Tất Cả",
    "Mới Cập Nhật",
    "Thịnh Hành",
    "Vietsub",
    "Có Che (Censored)",
    "Không Che (Uncensored)",
    "Người Đẹp (Beauty)",
    "Tokyo Hot",
    "S-Cute",
    "Loạn Luân",
    "Gái Xinh",
    "Vụng Trộm",
    "Gái Dâm",
    "Tập Thể",
    "Học Đường",
    "Văn Phòng",
    "Bố Chồng Nàng Dâu",
    "Hiếp Dâm",
    "Sex Teen"
];

const javhdCatalogs = [
    {
        type: "movie",
        id: "javhd-latest",
        name: "JavHD",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: javhdGenres }
        ]
    }
];

const vlxxGenres = [
    "Tất Cả",
    "Mới Cập Nhật",
    "Vietsub",
    "Không Che",
    "Phim Hay",
    "JAV",
    "Sex Học Sinh",
    "Vụng Trộm - Ngoại Tình",
    "Phim Cấp 3",
    "Sex Mỹ - Châu Âu",
    "XVIDEOS",
    "XNXX",
    "XXX"
];

const vlxxCatalogs = [
    {
        type: "movie",
        id: "vlxx-movie",
        name: "VLXX",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: vlxxGenres }
        ]
    }
];

const avdbGenres = [
    "Tất Cả",
    "Có Che (Censored)",
    "Không Che (Uncensored)",
    "Rò Rỉ (Uncensored Leaked)",
    "Nghiệp Dư (Amateur)",
    "Trung Quốc (Chinese AV)",
    "Hentai",
    "Phụ Đề Tiếng Anh (English Sub)"
];

const avdbCatalogs = [
    {
        type: "movie",
        id: "avdb-movie",
        name: "AVDB",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: avdbGenres }
        ]
    }
];

const missavGenres = [
    "Tất Cả",
    "Phát Hành Mới",
    "Mới Cập Nhật",
    "Không Che (Uncensored)",
    "Vietsub / Phụ Đề",
    "Phụ Đề Tiếng Anh",
    "Nghiệp Dư / FC2",
    "Thịnh Hành (Hôm nay)",
    "Thịnh Hành (Tuần)",
    "Thịnh Hành (Tháng)",
    "VR Thực Tế Ảo",
    "Siro (Amateur)",
    "Luxu (Amateur)",
    "Gana (Amateur)",
    "Maan (Amateur)",
    "Nữ Sinh (Schoolgirl)",
    "Ngực Khủng (Big Breasts)",
    "Vợ / MILF (Mature Woman)",
    "Xuất Tinh Trong (Creampie)",
    "Gái Xinh (Pretty Girl)",
    "Oral Sex",
    "Tập Thể (Orgy)"
];

const missavCatalogs = [
    {
        type: "movie",
        id: "missav-movie",
        name: "MissAV",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: missavGenres }
        ]
    }
];

const adultCatalogs = [...hentaizCatalogs, ...javhdCatalogs, ...vlxxCatalogs, ...avdbCatalogs, ...missavCatalogs];
const allCatalogs = [...filteredCatalogs, ...adultCatalogs];
const allPrefixes = ["tt", "nguonc:", "kkphim:", "vsmov:", "hentaiz:", "javhd:", "vlxx:", "avdb:", "missav:"];

const baseManifest = {
    id: "org.hophim.stremio",
    version: "1.4.5",
    name: "Hồ Phim",
    description: "Tổng hợp phim Vietsub & Thuyết minh lồng tiếng từ KKPhim, NguonC, VSMOV",
    logo: "https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png",
    resources: [
        "catalog",
        {
            name: "meta",
            types: ["movie", "series"],
            idPrefixes: allPrefixes
        },
        {
            name: "stream",
            types: ["movie", "series"],
            idPrefixes: allPrefixes
        }
    ],
    types: ["movie", "series"],
    idPrefixes: allPrefixes,
    catalogs: allCatalogs,
    behaviorHints: { adult: false, p2p: false, configurable: true, configurationRequired: false }
};

function getManifest(config = {}) {
    let catalogs = allCatalogs;
    let idPrefixes = [...allPrefixes];

    if (config && Array.isArray(config.sources) && config.sources.length > 0) {
        catalogs = allCatalogs.filter(cat => {
            const prefix = cat.id.split('-')[0];
            return config.sources.includes(prefix);
        });
        idPrefixes = allPrefixes.filter(p => {
            if (p === 'tt') return true;
            const cleanP = p.replace(':', '');
            return config.sources.includes(cleanP);
        });
    }

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



