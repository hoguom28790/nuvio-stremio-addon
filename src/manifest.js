module.exports = {
    id: "org.hpaddon.stremio",
    version: "1.0.0",
    name: "HPaddon",
    description: "Tổng hợp phim Vietsub & Thuyết minh từ NguonC, STP, Hoạt Hình 3D, CLB Phim Xưa, VSMOV, YanHH3D, KKPhim, StreamFree Live và Thể Thao Trực Tiếp",
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
    catalogs: [
        {
            type: "movie",
            id: "nguonc-movie",
            name: "NguonC • Phim Lẻ",
            extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }]
        },
        {
            type: "series",
            id: "nguonc-series",
            name: "NguonC • Phim Bộ",
            extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }]
        },
        {
            type: "movie",
            id: "stp-movie",
            name: "STP • Phim Lẻ",
            extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }]
        },
        {
            type: "movie",
            id: "hh3d-movie",
            name: "HH3D • Phim Lẻ",
            extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }]
        },
        {
            type: "series",
            id: "hh3d-series",
            name: "HH3D • Phim Bộ",
            extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }]
        },
        {
            type: "movie",
            id: "clbpx-movie",
            name: "CLBPX • Phim Lẻ",
            extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }]
        },
        {
            type: "series",
            id: "clbpx-series",
            name: "CLBPX • Phim Bộ",
            extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }]
        },
        {
            type: "movie",
            id: "vsmov-movie",
            name: "VSMOV • Phim Lẻ",
            extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }]
        },
        {
            type: "series",
            id: "vsmov-series",
            name: "VSMOV • Phim Bộ",
            extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }]
        },
        {
            type: "movie",
            id: "yan-movie",
            name: "YAN • Phim Lẻ",
            extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }]
        },
        {
            type: "movie",
            id: "kkphim-movie",
            name: "KKPhim • Phim Lẻ",
            extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }]
        },
        {
            type: "series",
            id: "kkphim-series",
            name: "KKPhim • Phim Bộ",
            extra: [{ name: "search", isRequired: false }, { name: "skip", isRequired: false }]
        },
        {
            type: "tv",
            id: "streamfree-live",
            name: "StreamFree • Trực Tiếp",
            extra: [{ name: "skip", isRequired: false }]
        },
        {
            type: "tv",
            id: "sports-live",
            name: "K20 • Thể Thao Trực Tiếp",
            extra: [
                { name: "skip", isRequired: false },
                {
                    name: "genre",
                    isRequired: false,
                    options: [
                        "Thể loại: Tất Cả Thể Thao",
                        "Kênh: [Xôi Lạc] Thể Thao Trực Tiếp",
                        "Kênh: [Cà Khịa] Thể Thao Trực Tiếp",
                        "Kênh: [SoCoLive] Thể Thao Trực Tiếp",
                        "Kênh: [Vebo TV] Thể Thao Trực Tiếp",
                        "Kênh: [Mì Tôm] Thể Thao Trực Tiếp"
                    ]
                }
            ]
        }
    ],
    behaviorHints: { adult: false, p2p: false, configurable: true, configurationRequired: false }
};
