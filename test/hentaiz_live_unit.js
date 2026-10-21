// New releases of HentaiZ come from the home page: node test/hentaiz_live_unit.js
const assert = require('assert');
const axios = require('axios');

const HOME = `<html><body><script>__sveltekit_x.resolve(1, () => [{episodes:[` +
    `{id:"uPB1Gv9WDpE",title:"Infinitys Pleasure Castle",slug:"infinitys-pleasure-castle-3",episodeNumber:3,duration:null,animationType:"THREE_D",posterImage:null,backdropImage:{filePath:"/covers/fb42.jpg"},studios:[{studio:{name:"H69 Vision",slug:"h69"}}]},` +
    `{id:"khAUxAfOJYT",title:"Seishidouin no Oshigoto The Animation",slug:"seishidouin-no-oshigoto-the-animation-2",episodeNumber:2,duration:null,animationType:"TWO_D",posterImage:{filePath:"/2026/10/6869f814.jpg"},backdropImage:null,studios:[{studio:{name:"Blue bread",slug:"blue-bread"}}]},` +
    `{id:"newEpisode01",title:"Brand New \\"Title\\"",slug:"brand-new-title-1",episodeNumber:1,duration:null,animationType:"TWO_D",posterImage:{filePath:"/2026/10/aaa.jpg"},backdropImage:{filePath:"/covers/bbb.jpg"},studios:[{studio:{name:"Studio A",slug:"a"}},{studio:{name:"Studio B",slug:"b"}}]},` +
    `{id:"notAnEpisode",title:"Not an episode",slug:"not-an-episode",kind:"collection"}` +
    `]}])</script></body></html>`;

let homeCalls = 0;
let homeHtml = HOME;
const fs = require('fs');
const path = require('path');
const STATIC = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/hentaiz_catalog.json'), 'utf8'));
const fakeGet = async (url) => {
    if (String(url).includes('raw.githubusercontent.com') && String(url).includes('hentaiz_catalog.json')) return { data: STATIC };
    if (String(url).replace(/\/$/, '') === 'https://hentaiz2.com') { homeCalls++; return { data: homeHtml }; }
    throw new Error(`unexpected request ${url}`);
};
axios.create = () => ({ get: fakeGet });
axios.get = fakeGet;

const hz = require('../src/scrapers/hentaiz');

(async () => {
    // parsing
    const eps = hz.parseHomeEpisodes(HOME);
    assert.deepStrictEqual(eps.map(e => e.slug), ['infinitys-pleasure-castle-3', 'seishidouin-no-oshigoto-the-animation-2', 'brand-new-title-1']);
    const fresh = eps[2];
    assert.strictEqual(fresh.title, 'Brand New "Title"');
    assert.strictEqual(fresh.epId, 'newEpisode01');
    assert.strictEqual(fresh.poster, 'https://storage.haiten.org/2026/10/aaa.jpg');
    assert.strictEqual(fresh.background, 'https://storage.haiten.org/covers/bbb.jpg');
    assert.strictEqual(fresh.studios, 'Studio A, Studio B');
    assert.strictEqual(eps[0].poster, undefined);

    // catalog: unseen episodes come first, an episode of a known series joins that series
    const list = await hz.getCatalog('series', {});
    assert.strictEqual(homeCalls, 1, 'home page read once');
    assert.deepStrictEqual(list.slice(0, 2).map(s => s.name).sort(), ['Brand New "Title"', 'Seishidouin no Oshigoto The Animation'], 'series with a new episode come first, ahead of the pinned franchises');
    assert.strictEqual(list.filter(s => s.name === 'Infinitys Pleasure Castle').length, 1, 'known episode not added twice');

    // meta of the series that gained an episode lists both
    const seishi = list.find(s => s.name === 'Seishidouin no Oshigoto The Animation');
    const meta = await hz.getMeta('series', seishi.id);
    assert.ok(meta.videos.length >= 2, 'series meta includes the new episode');
    assert.ok(meta.videos.some(v => v.id.includes('seishidouin-no-oshigoto-the-animation-2')));

    // a second call inside 15 minutes does not hit the site again
    await hz.getCatalog('movie', {});
    assert.strictEqual(homeCalls, 1, 'refresh is rate limited');

    console.log('hentaiz_live_unit: all checks passed');
})().catch(e => { console.error(e); process.exit(1); });
