const OFFICIAL_GENRES = {
    'Bí Ẩn': 'bi-an',
    'Chiến Tranh': 'chien-tranh',
    'Chính Kịch': 'chinh-kich',
    'Cổ Trang': 'co-trang',
    'Gia Đình': 'gia-dinh',
    'Hài': 'hai-huoc',
    'Hài Hước': 'hai-huoc',
    'Hành Động': 'hanh-dong',
    'Hình Sự': 'hinh-su',
    'Học Đường': 'hoc-duong',
    'Khoa Học': 'khoa-hoc',
    'Kinh Dị': 'kinh-di',
    'Kinh Điển': 'kinh-dien',
    'Lịch Sử': 'lich-su',
    'Miền Tây': 'mien-tay',
    'Phim 18+': 'phim-18',
    'Phim 18': 'phim-18',
    '18+': 'phim-18',
    '18': 'phim-18',
    'Phim Ngắn': 'phim-ngan',
    'Phiêu Lưu': 'phieu-luu',
    'Thần Thoại': 'than-thoai',
    'Thể Thao': 'the-thao',
    'Trẻ Em': 'tre-em',
    'Tài Liệu': 'tai-lieu',
    'Tâm Lý': 'tam-ly',
    'Tình Cảm': 'tinh-cam',
    'Viễn Tưởng': 'vien-tuong',
    'Khoa Học Viễn Tưởng': 'vien-tuong',
    'Võ Thuật': 'vo-thuat',
    'Âm Nhạc': 'am-nhac',
    'Nhạc': 'am-nhac',
    'Hoạt Hình': 'hoat-hinh'
};

const OFFICIAL_COUNTRIES = {
    'Âu Mỹ': 'au-my',
    'Mỹ': 'au-my',
    'Hàn Quốc': 'han-quoc',
    'Trung Quốc': 'trung-quoc',
    'Nhật Bản': 'nhat-ban',
    'Thái Lan': 'thai-lan',
    'Việt Nam': 'viet-nam',
    'Hồng Kông': 'hong-kong',
    'Đài Loan': 'dai-loan',
    'Ấn Độ': 'an-do',
    'Anh': 'anh',
    'Pháp': 'phap',
    'Đức': 'duc',
    'Nga': 'nga',
    'Hà Lan': 'ha-lan',
    'Indonesia': 'indonesia',
    'Philippines': 'philippines',
    'Tây Ban Nha': 'tay-ban-nha',
    'Úc': 'uc',
    'Canada': 'canada',
    'Singapore': 'singapore',
    'Quốc Gia Khác': 'quoc-gia-khac',
    'Quốc gia khác': 'quoc-gia-khac',
    'Khác': 'quoc-gia-khac'
};

const OFFICIAL_LISTS = {
    'Phim Lẻ': 'phim-le',
    'Phim Bộ': 'phim-bo',
    'Hoạt Hình': 'hoat-hinh',
    'TV Shows': 'tv-shows',
    'Đang Chiếu': 'phim-dang-chieu',
    'Mới Cập Nhật': 'phim-moi-cap-nhat',
    'Phim Chiếu Rạp': 'phim-chieu-rap'
};

function parseFilter(genreString) {
    if (!genreString || typeof genreString !== 'string') return null;

    let trimmed = genreString.trim();

    // 1. Check "Danh mục: "
    if (trimmed.startsWith('Danh mục:')) {
        const val = trimmed.replace(/^Danh mục:\s*/, '').trim();
        if (OFFICIAL_LISTS[val]) {
            return { filterType: 'category', slug: OFFICIAL_LISTS[val], value: val };
        }
        return { filterType: 'search', slug: val, value: val };
    }

    // 2. Check "Thể loại: "
    if (trimmed.startsWith('Thể loại:')) {
        const val = trimmed.replace(/^Thể loại:\s*/, '').trim();

        // 18+ specific check (handles trailing space or missing plus from URL encoding)
        if (/^phim\s*18(?:\s*|\+|$)/i.test(val) || /^18(?:\s*|\+|$)/.test(val)) {
            return { filterType: 'genre', slug: 'phim-18', value: 'Phim 18+' };
        }

        // Decade filter (e.g. Thập Niên 80 -> 1980)
        const decadeMatch = val.match(/Thập Niên (\d+)/i);
        if (decadeMatch) {
            const dec = decadeMatch[1];
            return { filterType: 'decade', slug: dec === '2000' ? '2000' : `19${dec}`, value: val };
        }

        if (OFFICIAL_GENRES[val]) {
            return { filterType: 'genre', slug: OFFICIAL_GENRES[val], value: val };
        }

        // Subgenres not having official API slugs (e.g. Kiếm Hiệp, Huyền Huyễn, Xuyên Không, Tiên Hiệp)
        return { filterType: 'search', slug: val, value: val };
    }

    // Direct 18+ check
    if (/^phim\s*18(?:\s*|\+|$)/i.test(trimmed) || /^18(?:\s*|\+|$)/.test(trimmed)) {
        return { filterType: 'genre', slug: 'phim-18', value: 'Phim 18+' };
    }

    // 3. Check "Quốc gia: "
    if (trimmed.startsWith('Quốc gia:')) {
        const val = trimmed.replace(/^Quốc gia:\s*/, '').trim();
        if (OFFICIAL_COUNTRIES[val]) {
            return { filterType: 'country', slug: OFFICIAL_COUNTRIES[val], value: val };
        }
        return { filterType: 'country', slug: val.toLowerCase().replace(/\s+/g, '-'), value: val };
    }

    // 4. Check "Năm: "
    if (trimmed.startsWith('Năm:')) {
        const val = trimmed.replace(/^Năm:\s*/, '').trim();
        return { filterType: 'year', slug: val, value: val };
    }

    // Fallbacks
    if (OFFICIAL_LISTS[trimmed]) {
        return { filterType: 'category', slug: OFFICIAL_LISTS[trimmed], value: trimmed };
    }
    if (OFFICIAL_GENRES[trimmed]) {
        return { filterType: 'genre', slug: OFFICIAL_GENRES[trimmed], value: trimmed };
    }
    if (OFFICIAL_COUNTRIES[trimmed]) {
        return { filterType: 'country', slug: OFFICIAL_COUNTRIES[trimmed], value: trimmed };
    }

    return { filterType: 'search', slug: trimmed, value: trimmed };
}

module.exports = {
    parseFilter,
    OFFICIAL_GENRES,
    OFFICIAL_COUNTRIES,
    OFFICIAL_LISTS
};
