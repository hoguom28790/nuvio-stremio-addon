// JavHD when javhdz.one refuses the Worker (Cloudflare "Attention Required"): node test/javhd_static_unit.js
const assert = require('assert');
const axios = require('axios');

const CATALOG = [
    { id: 'javhd:slug-a-1', slug: 'slug-a-1', type: 'movie', name: 'Phim A', poster: 'https://javhdz.one/data/A-2026-01.jpg', genres: ['Vietsub'], streamUrl: 'https://p16-sg.tiktokcdn.top/ad-site-i18n-sg/aaa/javhd-1-playlist.m3u8', description: 'A' },
    { id: 'javhd:slug-b-2', slug: 'slug-b-2', type: 'movie', name: 'Phim B', poster: 'https://javhdz.one/data/B-2026-01.jpg', genres: ['Vietsub'], streamUrl: '', description: 'B' },
    { id: 'javhd:slug-c-3', slug: 'slug-c-3', type: 'movie', name: 'Phim C', poster: 'https://javhdz.one/data/C-2026-01.jpg', genres: ['Không Che'], streamUrl: 'https://p16-sg.tiktokcdn.top/ad-site-i18n-sg/ccc/javhd-3-playlist.m3u8', description: 'C' }
];

const requests = [];
const BLOCKED = '<!DOCTYPE html><html><head><title>Attention Required! | Cloudflare</title></head><body>Sorry, you have been blocked</body></html>';
const fakeGet = async (url, opts = {}) => {
    const u = String(url);
    requests.push({ url: u, ua: (opts.headers && opts.headers['User-Agent']) || '' });
    if (u.includes('raw.githubusercontent.com') && u.includes('javhd_catalog.json')) return { data: CATALOG };
    if (u.includes('javhdz.one')) return { data: BLOCKED, status: 403 };
    throw new Error(`unexpected request ${u}`);
};
axios.create = () => ({ get: fakeGet });
axios.get = fakeGet;

const javhd = require('../src/scrapers/javhd');

(async () => {
    // the site refuses us: only movies with a stream link are listed (the others could not be played)
    const list = await javhd.getCatalog('javhd-latest', 'movie', {}, 'w.dev');
    assert.deepStrictEqual(list.map(m => m.id), ['javhd:slug-a-1', 'javhd:slug-c-3']);
    assert.ok(list[0].poster.startsWith('https://w.dev/javhd/poster/'), 'posters go through the edge proxy');

    // genre filtering of the fallback works on playable movies only
    const uncensored = await javhd.getCatalog('javhd-latest', 'movie', { genre: 'Không Che (Uncensored)' }, 'w.dev');
    assert.deepStrictEqual(uncensored.map(m => m.id), ['javhd:slug-c-3']);

    // search falls back to the catalog too
    const found = await javhd.getCatalog('javhd-latest', 'movie', { search: 'Phim A' }, 'w.dev');
    assert.deepStrictEqual(found.map(m => m.id), ['javhd:slug-a-1']);

    // a movie of the catalog plays from its stored link, without touching the site
    const before = requests.length;
    const streams = await javhd.getStream('javhd:slug-a-1', 'movie', 'w.dev');
    assert.strictEqual(streams.length, 1);
    assert.strictEqual(streams[0].url, CATALOG[0].streamUrl);
    assert.strictEqual(requests.length, before, 'no request needed');

    // a movie without a stored link cannot be read while the site is closed
    assert.deepStrictEqual(await javhd.getStream('javhd:slug-b-2', 'movie', 'w.dev'), []);

    // the addon never disguises itself: no crawler User-Agents, no third-party reader
    for (const r of requests) {
        assert.ok(!/bot|facebookexternalhit|curl|spider|crawler/i.test(r.ua), `User-Agent "${r.ua}" for ${r.url}`);
        assert.ok(!/jina\.ai/.test(r.url), r.url);
    }
    console.log('javhd_static_unit: all checks passed');
})().catch(e => { console.error(e); process.exit(1); });
