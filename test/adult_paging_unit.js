// Paging of every list-based "Thế giới khác" source against a fake site (odd page sizes, cold isolates):
// the catalog, walked the way Stremio does (skip += items received), must list every movie once, in order.
// node test/adult_paging_unit.js
const assert = require('assert');
const axios = require('axios');

const TOTAL = 70;
let site = null; // { size, match(urlOrPath) -> page | null, card(i), wrap(cards) }

const fakeGet = async (u) => {
    const url = String(u);
    const page = site.match(url);
    if (page === null) return { data: '' };
    const from = (page - 1) * site.size;
    const items = Array.from({ length: Math.max(0, Math.min(site.size, TOTAL - from)) }, (_, i) => from + i);
    return { data: site.wrap(items.map(site.card).join('\n'), items) };
};
axios.create = () => ({ get: fakeGet });
axios.get = fakeGet;
global.fetch = undefined;

const cache = require('../src/utils/cache');
const num = (re, s) => { const m = s.match(re); return m ? parseInt(m[1] || '1', 10) : null; };

const SOURCES = [
    {
        name: 'fs1', size: 20, mod: '../src/scrapers/fs1',
        call: (m, skip) => m.getCatalog('fs1-movie', 'movie', { skip }),
        match: u => (/^\/latest-updates\//.test(u) ? num(/\/latest-updates\/(\d+)\/$/, u) || 1 : null),
        card: i => `<div class="video-img-box"><a href="https://fs1.app/videos/slug-${i}/"></a><h6 class="title"><a href="x">Title ${i}</a></h6></div>`,
        wrap: c => c
    },
    {
        name: 'javtiful', size: 12, mod: '../src/scrapers/javtiful',
        call: (m, skip) => m.getCatalog('javtiful-movie', 'movie', { skip }, 'w.dev'),
        match: u => (u.startsWith('/vn/videos') ? num(/[?&]page=(\d+)/, u) || 1 : null),
        card: i => `<article class="video-card"><a href="/vn/video/${1000 + i}/slug-${i}" class="video-card__thumbnail"><img data-front-lazy-src="/uploads/uploads/videos/thumbs/2026/10/17/${i}.jpg"></a><a href="/vn/video/${1000 + i}/slug-${i}" class="video-card__title" title="Title ${i}">T</a></article>`,
        wrap: c => c
    },
    {
        name: 'hohoj', size: 24, mod: '../src/scrapers/hohoj',
        call: (m, skip) => m.getCatalog('hohoj-movie', 'movie', { skip, genre: 'Loạn Luân' }, 'w.dev'),
        match: u => (u.startsWith('/lang_en/main_ctg?id=8') ? num(/[?&]p=(\d+)/, u) || 1 : null),
        card: i => `<div class="video-item col-3"><a href="/video?id=${5000 + i}"><img src="https://cdn-1.ggjav.com/media/video/small_${i}.jpg" alt="T ${i}"><div class="video-item-title">Title ${i}</div></a></div>`,
        wrap: c => c
    },
    {
        name: 'sexmup', size: 16, mod: '../src/scrapers/sexmup',
        call: (m, skip) => m.getCatalog('sexmup-movie', 'movie', { skip, genre: 'Hiếp Dâm' }, 'w.dev'),
        match: u => (u.startsWith('/phim-sex-hiep-dam/') ? num(/\/page\/(\d+)\/$/, u) || 1 : null),
        card: i => `<li class="video-list"><a title="Title ${i}" href="https://sexmupxinh.net/phim/slug-${i}/"><img class="video-image" src="https://sexmupxinh.net/file/cover/slug-${i}.jpg"></a></li>`,
        wrap: c => c
    },
    {
        name: 'javhay', size: 20, mod: '../src/scrapers/javhay',
        call: (m, skip) => m.getCatalog('javhay-movie', 'movie', { skip, genre: 'Vietsub' }, 'w.dev'),
        match: u => (u.startsWith('/jav-vietsub/') ? num(/\/page\/(\d+)\/$/, u) || 1 : null),
        card: i => `<div class="thumbBlock"><div class="thumbInside"><a href="https://javhay.buzz/slug-${i}/" title="Title ${i}"><img src="https://javhay.buzz/wp-content/uploads/2021/05/slug-${i}-500x350.avif"></a></div></div>`,
        wrap: c => c
    },
    {
        name: 'vlxx (category)', size: 24, mod: '../src/scrapers/vlxx',
        call: (m, skip) => m.getCatalog('vlxx-vietsub', 'movie', { skip }),
        match: u => (u.startsWith('/vietsub/') ? num(/\/vietsub\/(\d+)\/$/, u) || 1 : null),
        card: i => `<div id="video-${i}" class="video-item"><a title="Title ${i}" href="/video/slug-${i}/${i}/"><img data-original="/p/${i}.jpg"/><div class="ribbon">HD</div></a><div class="video-name"><a href="x">Title ${i}</a></div></div>`,
        wrap: c => c
    },
    {
        // "Tất cả" is the home list, which paginates as /new/<n>/ (it used to be asked for as /<n>/)
        name: 'vlxx (home)', size: 24, mod: '../src/scrapers/vlxx',
        call: (m, skip) => m.getCatalog('vlxx-movie', 'movie', { skip, genre: 'Tất Cả' }),
        match: u => (u === '/' ? 1 : (/^\/new\/\d+\/$/.test(u) ? num(/\/new\/(\d+)\/$/, u) : null)),
        card: i => `<div id="video-${i}" class="video-item"><a title="Title ${i}" href="/video/slug-${i}/${i}/"><img data-original="/p/${i}.jpg"/></a><div class="video-name"><a href="x">Title ${i}</a></div></div>`,
        wrap: c => c
    },
    {
        name: 'avdb (browse)', size: 20, mod: '../src/scrapers/avdb',
        call: (m, skip) => m.getCatalog('avdb-movie', 'movie', { skip, genre: 'Có Che (Censored)' }),
        match: u => (u.includes('avdbapi.com') && u.includes('&t=1&') ? num(/[?&]pg=(\d+)/, u) : null),
        card: i => ({ id: 9000 + i, name: `Title ${i}`, movie_code: `C-${i}` }),
        wrap: (c, items) => ({ list: items.map(i => ({ id: 9000 + i, name: `Title ${i}`, movie_code: `C-${i}` })) })
    },
    {
        name: 'avdb (search)', size: 20, mod: '../src/scrapers/avdb',
        call: (m, skip) => m.getCatalog('avdb-movie', 'movie', { skip, search: 'abc' }),
        match: u => (u.includes('avdbapi.com') && u.includes('wd=abc') ? num(/[?&]pg=(\d+)/, u) : null),
        card: i => i,
        wrap: (c, items) => ({ list: items.map(i => ({ id: 9500 + i, name: `Title ${i}` })) })
    },
    {
        name: 'javhd', size: 24, mod: '../src/scrapers/javhd',
        call: (m, skip) => m.getCatalog('javhd-latest', 'movie', { skip }, 'w.dev'),
        match: u => (u.startsWith('https://javhdz.one/video/') ? num(/\/page\/(\d+)\/$/, u) || 1 : null),
        card: i => `<li class="x"><a class="movie-item" href="/slug-${i}.html" title="Title ${i}"><img data-src="/data/${i}.jpg"><span class="meta-sub">Vietsub</span></a></li>`,
        wrap: c => `<ul>${c}</ul>`
    }
];

(async () => {
    for (const src of SOURCES) {
        const mod = require(src.mod);
        site = src;
        for (const cold of [false, true]) {
            cache.clear();
            const ids = [];
            let skip = 0;
            for (let guard = 0; guard < 40; guard++) {
                if (cold) cache.clear();
                const metas = await src.call(mod, skip);
                if (!metas.length) break;
                ids.push(...metas.map(m => m.id));
                skip += metas.length;
            }
            assert.strictEqual(new Set(ids).size, ids.length, `${src.name}: no repeated movies (cold ${cold}, got ${ids.length})`);
            assert.strictEqual(ids.length, TOTAL, `${src.name}: every movie listed (cold ${cold})`);
        }
        console.log(`  ok ${src.name} (site page size ${src.size})`);
    }
    console.log('adult_paging_unit: all checks passed');
})().catch(e => { console.error(e); process.exit(1); });
