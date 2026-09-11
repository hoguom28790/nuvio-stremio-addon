const axios = require('axios');
const cache = require('../utils/cache');

const SPORTS_CHANNELS = [
    {
        id: 'sports:xoilac',
        name: 'Xôi Lạc TV • Trực Tiếp Bóng Đá',
        poster: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500',
        description: 'Kênh phát trực tiếp bóng đá Ngoại Hạng Anh, Cúp C1, La Liga, Serie A bình luận tiếng Việt.',
        genre: 'Bóng Đá (Soccer)',
        url: 'https://live.vebo.xyz/live/channel-1/index.m3u8'
    },
    {
        id: 'sports:cakhia',
        name: 'Cà Khịa TV • Thể Thao Trực Tiếp',
        poster: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=500',
        description: 'Trực tiếp bóng đá, bình luận tấu hài vui nhộn, cập nhật link tốc độ cao Full HD.',
        genre: 'Bóng Đá (Soccer)',
        url: 'https://live.vebo.xyz/live/channel-2/index.m3u8'
    },
    {
        id: 'sports:vebo',
        name: 'Vebo TV • Trực Tiếp Bóng Đá',
        poster: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500',
        description: 'Kênh Vebo TV trực tiếp thể thao, bóng đá, bóng rổ NBA chất lượng mượt mà không quảng cáo.',
        genre: 'Bóng Đá (Soccer)',
        url: 'https://live.vebo.xyz/live/channel-3/index.m3u8'
    },
    {
        id: 'sports:socolive',
        name: 'SoCoLive TV • Trực Tiếp Thể Thao',
        poster: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=500',
        description: 'SoCoLive phát trực tiếp các giải đấu thể thao hàng đầu thế giới, tennis, cầu lông, đua xe F1.',
        genre: 'Đua Xe (F1/Racing)',
        url: 'https://live.vebo.xyz/live/channel-4/index.m3u8'
    },
    {
        id: 'sports:mitom',
        name: 'Mì Tôm TV • Trực Tiếp Thể Thao',
        poster: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500',
        description: 'Mì Tôm TV trực tiếp bóng đá đỉnh cao, bình luận viên chuyên nghiệp.',
        genre: 'Bóng Đá (Soccer)',
        url: 'https://live.vebo.xyz/live/channel-5/index.m3u8'
    },
    {
        id: 'sports:90phut',
        name: '90 Phút TV • Trực Tiếp Bóng Đá',
        poster: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500',
        description: '90phut TV truyền hình trực tiếp các trận cầu tâm điểm hàng ngày.',
        genre: 'Bóng Đá (Soccer)',
        url: 'https://live.vebo.xyz/live/channel-6/index.m3u8'
    },
    {
        id: 'sports:colatv',
        name: 'CoLa TV • Thể Thao Trực Tiếp',
        poster: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500',
        description: 'CoLa TV xem trực tiếp bóng đá, bóng rổ, bóng chuyền, UFC võ thuật tổng hợp.',
        genre: 'Võ Thuật (Combat/UFC)',
        url: 'https://live.vebo.xyz/live/channel-7/index.m3u8'
    },
    {
        id: 'sports:luongson',
        name: 'Lương Sơn TV • Thể Thao Trực Tiếp',
        poster: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=500',
        description: 'Lương Sơn TV trực tiếp bóng đá châu Âu và thế giới.',
        genre: 'Bóng Đá (Soccer)',
        url: 'https://live.vebo.xyz/live/channel-8/index.m3u8'
    },
    {
        id: 'sports:s8tv',
        name: 'S8 TV • Thể Thao Đỉnh Cao',
        poster: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500',
        description: 'S8 TV trực tiếp thể thao tổng hợp 24/7.',
        genre: 'Tất Cả Thể Thao',
        url: 'https://live.vebo.xyz/live/channel-9/index.m3u8'
    }
];

const STREAMFREE_CHANNELS = [
    {
        id: 'streamfree:vtv1',
        name: 'VTV1 HD • Thời Sự & Chính Luận',
        poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/VTV1_logo_2013_final.svg/512px-VTV1_logo_2013_final.svg.png',
        url: 'https://liveh12.vtvprime.vn/hls/ANNINHTV/index.m3u8',
        description: 'Kênh truyền hình thời sự, chính trị, kinh tế xã hội quốc gia của Đài Truyền hình Việt Nam.'
    },
    {
        id: 'streamfree:vtv3',
        name: 'VTV3 HD • Giải Trí Tổng Hợp',
        poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/VTV3_logo_2013_final.svg/512px-VTV3_logo_2013_final.svg.png',
        url: 'https://vtvgolive-ott3.vtvdigital.vn/live/dongnai1tv/chunklist_2.m3u8',
        description: 'Kênh thể thao, giải trí, gameshow, phim truyện hàng đầu của Đài Truyền hình Việt Nam.'
    },
    {
        id: 'streamfree:htv7',
        name: 'HTV7 HD • Đài Truyền Hình TP.HCM',
        poster: 'https://upload.wikimedia.org/wikipedia/vi/thumb/8/87/HTV7_logo_2016.svg/512px-HTV7_logo_2016.svg.png',
        url: 'https://live.canthotv.vn/live/tv/chunklist.m3u8',
        description: 'Kênh thông tin, giải trí tổng hợp của Đài Truyền hình Thành phố Hồ Chí Minh.'
    },
    {
        id: 'streamfree:htv9',
        name: 'HTV9 HD • Tin Tức & Phóng Sự',
        poster: 'https://upload.wikimedia.org/wikipedia/vi/thumb/6/6b/HTV9_logo_2016.svg/512px-HTV9_logo_2016.svg.png',
        url: 'https://live.canthotv.vn/cs2/live.stream/playlist.m3u8',
        description: 'Kênh truyền hình chính luận, đời sống văn hóa xã hội của HTV.'
    },
    {
        id: 'streamfree:antv',
        name: 'ANTV • Truyền Hình Công An Nhân Dân',
        poster: 'https://static.wikia.nocookie.net/logos/images/1/1a/ANTV_2023.png/revision/latest/scale-to-width-down/512?path-prefix=vi',
        url: 'https://liveh12.vtvprime.vn/hls/ANNINHTV/index.m3u8',
        description: 'Kênh truyền hình an ninh trật tự, xã hội pháp luật quốc gia.'
    },
    {
        id: 'streamfree:cantho',
        name: 'Cần Thơ TV • Truyền Hình Miền Tây',
        poster: 'https://i.imgur.com/mgp6RAU.png',
        url: 'https://live.canthotv.vn/cs3/tv/chunklist.m3u8',
        description: 'Kênh truyền hình khu vực Đồng bằng Sông Cửu Long.'
    }
];

async function getCatalog(catalogId, type, extra = {}) {
    if (catalogId === 'sports-live') {
        let list = SPORTS_CHANNELS;
        if (extra.genre && !extra.genre.includes('Tất Cả')) {
            const keyword = extra.genre.replace(/^(Thể loại|Kênh):\s*/, '').toLowerCase();
            list = list.filter(item => 
                item.name.toLowerCase().includes(keyword) || 
                (item.genre && item.genre.toLowerCase().includes(keyword))
            );
        }
        return list.map(item => ({
            id: item.id,
            type: 'tv',
            name: item.name,
            poster: item.poster,
            posterShape: 'landscape',
            description: item.description
        }));
    }

    if (catalogId === 'streamfree-live') {
        return STREAMFREE_CHANNELS.map(item => ({
            id: item.id,
            type: 'tv',
            name: item.name,
            poster: item.poster,
            posterShape: 'landscape',
            description: item.description
        }));
    }

    return [];
}

async function getMeta(type, id) {
    let item = SPORTS_CHANNELS.find(c => c.id === id);
    if (!item) {
        item = STREAMFREE_CHANNELS.find(c => c.id === id);
    }
    if (!item) return null;

    return {
        id: item.id,
        type: 'tv',
        name: item.name,
        poster: item.poster,
        background: item.poster,
        description: item.description,
        releaseInfo: 'LIVE 24/7'
    };
}

async function getStream(id, type) {
    let item = SPORTS_CHANNELS.find(c => c.id === id);
    if (!item) {
        item = STREAMFREE_CHANNELS.find(c => c.id === id);
    }
    if (!item || !item.url) return [];

    return [
        {
            name: 'Live Stream • HD',
            title: `${item.name}\nTrực tiếp tốc độ cao (HLS)`,
            url: item.url
        }
    ];
}

module.exports = { getCatalog, getMeta, getStream };
