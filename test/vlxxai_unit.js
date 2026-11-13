// VLXX AI: list parsing, episode index, series meta, and streams from the site's player JSON: node test/vlxxai_unit.js
const assert = require('assert');
const axios = require('axios');

const SLUG = 'muoi-nam-den-sach-van-phai-o-re';
const card = (slug, title, ep, tag = 'h3') => `
<article class="post-card">
  <a href="/${slug}">
    <div class="thumb-wrap">
      <img src="https://vlxxai.com/uploads/thumbs/thumb_${slug}.webp" alt="${title}" loading="lazy">
      <span class="badge">Thuyết Minh</span>
      <span class="ep-status">
        Tập ${ep}
      </span>
    </div>
    <${tag} class="movie-card-title">${title}</${tag}>
  </a>
</article>`;
const HOME = `<div class="post-grid">${card(SLUG, 'Mười Năm &amp; Ở Rể', 3)}${card('thai-tu-an-danh', 'Thái Tử Ẩn Danh', 2, 'h4')}${card(SLUG, 'dup', 3)}</div>`;
// a full site page (24 cards) so the catalog pages like the real site
const FULL = `<div class="post-grid">${card(SLUG, 'Mười Năm &amp; Ở Rể', 3)}${Array.from({ length: 23 }, (_, i) => card(`t-${i}`, `Title ${i}`, 1)).join('')}</div>`;
const TITLE_PAGE = `<h1 style="x"> Mười Năm Ở Rể - Tập 1 </h1><span>⭐ Thuyết Minh</span>
<div class="episodes-area"><div class="ep-grid active" id="group-0">
 <a href="/${SLUG}/tap-3" \n class="ep-item "\n title="Tập 3">Tập 3</a>
 <a href="/${SLUG}/tap-2" \n class="ep-item "\n title="Tập 2">Tập 2</a>
 <a href="/${SLUG}/tap-1" \n class="ep-item active"\n title="Tập 1">Tập 1</a>
</div></div>
<div class="content-text" id="movieContent">
  Dù mang hoài bão lớn.
</div>
<article class="post-card"><a href="/other"><img src="https://vlxxai.com/uploads/thumbs/thumb_other.webp"></a></article>`;

const calls = [];
let player = { status: 'success', link: 'https://cdn.example/ep1/index.m3u8', sources: [{ file: 'https://cdn.example/ep1/index.m3u8', type: 'hls' }] };
const client = {
    get: async (u) => {
        calls.push(`GET ${u}`);
        if (u.startsWith('/search.php')) return { data: card('found-one', 'Found', 1) };
        if (u === `/${SLUG}`) return { data: TITLE_PAGE };
        if (u.startsWith('/loan-luan')) return { data: HOME };
        if (u.startsWith('/?tab=')) return { data: /page=\d/.test(u) ? '' : FULL };
        return { data: '' };
    },
    post: async (u, body) => { calls.push(`POST ${u} ${body}`); return { data: JSON.stringify(player) }; }
};
axios.create = () => client;

const v = require('../src/scrapers/vlxxai');

(async () => {
    // parseList: both heading tags, entities decoded, duplicates dropped
    const items = v.parseList(HOME);
    assert.deepStrictEqual(items.map(i => i.slug), [SLUG, 'thai-tu-an-danh']);
    assert.strictEqual(items[0].title, 'Mười Năm & Ở Rể');
    assert.strictEqual(items[0].poster, `https://vlxxai.com/uploads/thumbs/thumb_${SLUG}.webp`);
    assert.strictEqual(items[0].status, 'Tập 3');

    // episodes: index = position in the page (newest first)
    assert.deepStrictEqual(v.parseEpisodes(TITLE_PAGE, SLUG), [{ n: 3, index: 0 }, { n: 2, index: 1 }, { n: 1, index: 2 }]);

    // catalog
    const cat = await v.getCatalog('vlxxai-series', 'series', {});
    assert.strictEqual(cat.length, 24);
    assert.strictEqual(cat[0].id, `vlxxai:${SLUG}`);
    assert.strictEqual(cat[0].type, 'series');
    const srch = await v.getCatalog('vlxxai-series', 'series', { search: 'found' });
    assert.deepStrictEqual(srch.map(m => m.id), ['vlxxai:found-one']);
    const gen = await v.getCatalog('vlxxai-series', 'series', { genre: 'Loạn Luân' });
    assert.deepStrictEqual(gen.map(m => m.id), [`vlxxai:${SLUG}`, 'vlxxai:thai-tu-an-danh']); // single-page category

    // meta: episodes ascending, title without the "- Tập N" suffix, poster from the page
    const meta = await v.getMeta('series', `vlxxai:${SLUG}`);
    assert.strictEqual(meta.name, 'Mười Năm Ở Rể');
    assert.deepStrictEqual(meta.videos.map(x => x.id), [`vlxxai:${SLUG}:1`, `vlxxai:${SLUG}:2`, `vlxxai:${SLUG}:3`]);
    assert.ok(/Dù mang hoài bão lớn/.test(meta.description));

    // stream: episode 1 is index 2 in the page's list
    const streams = await v.getStream(`vlxxai:${SLUG}:1`);
    assert.strictEqual(streams.length, 1);
    assert.strictEqual(streams[0].url, 'https://cdn.example/ep1/index.m3u8');
    assert.ok(calls.some(c => c === `POST /${SLUG}?get_player=1 slug=${SLUG}&ep_index=2`), calls.join('\n'));
    assert.strictEqual(streams[0].behaviorHints.proxyHeaders.request.Referer, 'https://vlxxai.com/');

    // player answers: error / embed only / relative link
    assert.deepStrictEqual(v.pickSources({ status: 'error', msg: 'x' }), []);
    assert.deepStrictEqual(v.pickSources({ sources: [{ file: 'https://e.example/x', type: 'embed' }] }), [{ url: 'https://e.example/x', embed: true }]);
    assert.deepStrictEqual(v.pickSources({ link: '/uploads/a.mp4', sources: [] }), [{ url: 'https://vlxxai.com/uploads/a.mp4', embed: false }]);
    player = { sources: [{ file: 'https://e.example/x', type: 'embed' }] };
    assert.deepStrictEqual(await v.getStream(`vlxxai:${SLUG}:2`), []); // embedded pages are not played directly
    assert.deepStrictEqual(await v.getStream(`vlxxai:${SLUG}:9`), []); // unknown episode
    assert.deepStrictEqual(await v.getStream('vlxxai:' + SLUG), []);   // no episode in the id
    console.log('vlxxai_unit OK');
})().catch(e => { console.error(e); process.exit(1); });
