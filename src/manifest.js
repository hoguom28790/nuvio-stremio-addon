const reference = require('../Reference.json');

// Filter out tv/sports catalogs (streamfree-live, sports-live)
const filteredCatalogs = reference.catalogs.filter(c => c.type !== 'tv' && c.id !== 'streamfree-live' && c.id !== 'sports-live');

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
        name: "JavHD Mới Nhất",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: javhdGenres }
        ]
    },
    {
        type: "movie",
        id: "javhd-trending",
        name: "JavHD Xu Hướng",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: javhdGenres }
        ]
    },
    {
        type: "movie",
        id: "javhd-censored",
        name: "JavHD Có Che",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: javhdGenres }
        ]
    },
    {
        type: "movie",
        id: "javhd-uncensored",
        name: "JavHD Không Che",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: javhdGenres }
        ]
    },
    {
        type: "movie",
        id: "javhd-beauty",
        name: "JavHD Người Đẹp",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: javhdGenres }
        ]
    }
];

const vlxxGenres = [
    "Tất Cả",
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
        id: "vlxx-latest",
        name: "VLXX Mới Nhất",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: vlxxGenres }
        ]
    },
    {
        type: "movie",
        id: "vlxx-vietsub",
        name: "VLXX Vietsub",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: vlxxGenres }
        ]
    },
    {
        type: "movie",
        id: "vlxx-uncensored",
        name: "VLXX Không Che",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: vlxxGenres }
        ]
    },
    {
        type: "movie",
        id: "vlxx-popular",
        name: "VLXX Phim Hay",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: vlxxGenres }
        ]
    },
    {
        type: "movie",
        id: "vlxx-jav",
        name: "VLXX JAV",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: vlxxGenres }
        ]
    },
    {
        type: "movie",
        id: "vlxx-hocsinh",
        name: "VLXX Học Sinh",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: vlxxGenres }
        ]
    },
    {
        type: "movie",
        id: "vlxx-vungtrom",
        name: "VLXX Vụng Trộm",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: vlxxGenres }
        ]
    },
    {
        type: "movie",
        id: "vlxx-cap3",
        name: "VLXX Phim Cấp 3",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: vlxxGenres }
        ]
    },
    {
        type: "movie",
        id: "vlxx-aumy",
        name: "VLXX Âu Mỹ",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false },
            { name: "genre", isRequired: false, options: vlxxGenres }
        ]
    }
];

const avdbCatalogs = [
    {
        type: "movie",
        id: "avdb-censored",
        name: "AVDB Có Che (Censored)",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false }
        ]
    },
    {
        type: "movie",
        id: "avdb-uncensored",
        name: "AVDB Không Che (Uncensored)",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false }
        ]
    },
    {
        type: "movie",
        id: "avdb-leaked",
        name: "AVDB Rò Rỉ (Uncensored Leaked)",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false }
        ]
    },
    {
        type: "movie",
        id: "avdb-amateur",
        name: "AVDB Nghiệp Dư (Amateur)",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false }
        ]
    },
    {
        type: "movie",
        id: "avdb-chinese",
        name: "AVDB Trung Quốc (Chinese AV)",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false }
        ]
    },
    {
        type: "movie",
        id: "avdb-hentai",
        name: "AVDB Hentai",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false }
        ]
    },
    {
        type: "movie",
        id: "avdb-engsub",
        name: "AVDB Phụ Đề Tiếng Anh (English Sub)",
        extra: [
            { name: "search", isRequired: false },
            { name: "skip", isRequired: false }
        ]
    }
];

const adultCatalogs = [...hentaizCatalogs, ...javhdCatalogs, ...vlxxCatalogs, ...avdbCatalogs];
const allCatalogs = [...filteredCatalogs, ...adultCatalogs];
const allPrefixes = ["tt", "nguonc:", "stp:", "hh3d:", "clbpx:", "vsmov:", "yan:", "kkphim:", "hentaiz:", "javhd:", "vlxx:", "avdb:"];

const baseManifest = {
    id: "org.hophim.stremio",
    version: "1.4.4",
    name: "Hồ Phim",
    description: "Tổng hợp phim Vietsub & Thuyết minh lồng tiếng từ NguonC, Siêu Tầm Phim, Hoạt Hình 3D, CLB Phim Xưa, VSMOV, YanHH3D, KKPhim, HentaiZ, JavHD, VLXX, AVDB",
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
            if (cat.id.startsWith('avdb-')) {
                const subKey = cat.id.replace('-', '_');
                return config.sources.includes(subKey) || config.sources.includes('avdb');
            }
            const prefix = cat.id.split('-')[0];
            return config.sources.includes(prefix);
        });
        idPrefixes = allPrefixes.filter(p => {
            if (p === 'tt') return true;
            const cleanP = p.replace(':', '');
            if (cleanP === 'avdb') {
                return config.sources.some(s => s.startsWith('avdb'));
            }
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



