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

    // covers go through the edge when a host is known
    const withHost = await v.getCatalog('vlxxai-movie', 'movie', { genre: 'Loạn Luân' }, 'w.dev');
    assert.strictEqual(withHost[0].poster, `https://w.dev/vlxxai/poster/thumb_${SLUG}.webp`);
    assert.strictEqual((await v.getMeta('movie', `vlxxai:${SLUG}`, 'w.dev')).poster, 'https://w.dev/vlxxai/poster/thumb_other.webp');

    // catalog: movies, like the other sources
    const cat = await v.getCatalog('vlxxai-movie', 'movie', {});
    assert.strictEqual(cat.length, 24);
    assert.strictEqual(cat[0].id, `vlxxai:${SLUG}`);
    assert.strictEqual(cat[0].type, 'movie');
    const srch = await v.getCatalog('vlxxai-movie', 'movie', { search: 'found' });
    assert.deepStrictEqual(srch.map(m => m.id), ['vlxxai:found-one']);
    const gen = await v.getCatalog('vlxxai-movie', 'movie', { genre: 'Loạn Luân' });
    assert.deepStrictEqual(gen.map(m => m.id), [`vlxxai:${SLUG}`, 'vlxxai:thai-tu-an-danh']); // single-page category

    // meta: a movie, title without the "- Tập N" suffix, poster from the page
    const meta = await v.getMeta('movie', `vlxxai:${SLUG}`);
    assert.strictEqual(meta.type, 'movie');
    assert.strictEqual(meta.name, 'Mười Năm Ở Rể');
    assert.ok(/3 tập/.test(meta.description) && /Dù mang hoài bão lớn/.test(meta.description));

    // streams: one per episode (ascending), pointing at the edge; no player call until played
    const before = calls.length;
    const streams = await v.getStream(`vlxxai:${SLUG}`, 'movie', 'w.dev');
    assert.deepStrictEqual(streams.map(s => s.url), [1, 2, 3].map(n => `https://w.dev/vlxxai/play/${SLUG}/${n}.m3u8`));
    assert.ok(streams[0].name.includes('Tập 1'));
    assert.ok(!calls.slice(before).some(c => c.startsWith('POST')));
    assert.strictEqual((await v.getStream(`vlxxai:${SLUG}:2`, 'movie', 'w.dev')).length, 1);

    // playing episode 1 = index 2 in the page's list
    assert.strictEqual(await v.resolveEpisode(SLUG, 1), 'https://cdn.example/ep1/index.m3u8');
    assert.ok(calls.some(c => c === `POST /${SLUG}?get_player=1 slug=${SLUG}&ep_index=2`), calls.join('\n'));
    // no edge host: resolved right away
    assert.deepStrictEqual((await v.getStream(`vlxxai:${SLUG}`)).map(s => s.url).length, 3);

    // browser playback: playlists and segments are routed back through the Worker (the CDN has no CORS)
    const master = '#EXTM3U\n#EXT-X-STREAM-INF:BANDWIDTH=1\n360p/video.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=2\n720p/video.m3u8';
    const mb = 'https://ss.cdnz.top/vai/abc/playlist.m3u8';
    const rm = v.rewritePlaylist(master, mb, 'https://w.dev').split('\n');
    assert.strictEqual(rm[0], '#EXTM3U');
    assert.strictEqual(rm[2], `https://w.dev/vlxxai/hls.m3u8?url=${encodeURIComponent('https://ss.cdnz.top/vai/abc/360p/video.m3u8')}`);
    const media = '#EXTM3U\n#EXT-X-KEY:METHOD=AES-128,URI="key.bin"\n#EXTINF:4.0,\nvideo0.png\n#EXT-X-ENDLIST\n';
    const rv = v.rewritePlaylist(media, 'https://ss.cdnz.top/vai/abc/360p/video.m3u8', 'https://w.dev').split('\n');
    assert.ok(rv[1].includes(`URI="https://w.dev/vlxxai/segment.ts?url=${encodeURIComponent('https://ss.cdnz.top/vai/abc/360p/key.bin')}"`));
    assert.strictEqual(rv[3], `https://w.dev/vlxxai/segment.ts?url=${encodeURIComponent('https://ss.cdnz.top/vai/abc/360p/video0.png')}`);
    assert.ok(v.HOST_RE.test('ss.cdnz.top') && !v.HOST_RE.test('evil.example') && !v.HOST_RE.test('cdnz.top.evil.example'));

    // player answers: error / embed only / relative link
    assert.deepStrictEqual(v.pickSources({ status: 'error', msg: 'x' }), []);
    assert.deepStrictEqual(v.pickSources({ sources: [{ file: 'https://e.example/x', type: 'embed' }] }), [{ url: 'https://e.example/x', embed: true }]);
    assert.deepStrictEqual(v.pickSources({ link: '/uploads/a.mp4', sources: [] }), [{ url: 'https://vlxxai.com/uploads/a.mp4', embed: false }]);
    player = { sources: [{ file: 'https://e.example/x', type: 'embed' }] };
    assert.strictEqual(await v.resolveEpisode(SLUG, 2), null); // embedded pages are not played directly
    assert.strictEqual(await v.resolveEpisode(SLUG, 9), null); // unknown episode
    assert.deepStrictEqual(await v.getStream('nope'), []);
    console.log('vlxxai_unit OK');
})().catch(e => { console.error(e); process.exit(1); });
