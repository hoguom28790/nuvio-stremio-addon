// Unit checks for scrapers/nguonc with a mocked API: node test/nguonc_unit.js
const axios = require('axios');
const seen = [];
const mk = (n, slug, orig) => ({ name: n, slug, original_name: orig, thumb_url: `https://phim.nguonc.com/public/images/${slug}.jpg`, poster_url: `/public/images/${slug}-p.jpg`, quality: 'HD', language: 'Vietsub', total_episodes: 1, current_episode: 'Full', time: '90 phút' });
const detail = { status: 'success', movie: { id: '1', name: 'Lời Thú Tội', slug: 'loi-thu-toi', original_name: 'Confessions', thumb_url: '/t.jpg', poster_url: '/p.jpg', description: '<p>Mô tả</p>', total_episodes: 1, director: 'A, B', casts: 'C, D',
  category: { '1': { group: { id: 'a', name: 'Định dạng' }, list: [{ id: 1, name: 'Phim lẻ' }] }, '2': { group: { id: 'b', name: 'Thể loại' }, list: [{ id: 2, name: 'Tâm Lý' }, { id: 3, name: 'Kinh Dị' }] }, '3': { group: { id: 'c', name: 'Năm' }, list: [{ id: 4, name: '2010' }] } },
  episodes: [{ server_name: 'Vietsub #1', items: [{ name: 'Full', slug: 'full', embed: 'https://e/embed?h=1', m3u8: 'https://cdn.x/1/index.m3u8' }] }, { server_name: 'Vietsub #2', items: [{ name: 'Full', slug: 'full', embed: 'https://e2/embed?h=2' }] }] } };
const series = { status: 'success', movie: { name: 'Bộ X', slug: 'bo-x', original_name: 'Show X', total_episodes: 3, episodes: [{ server_name: 'S1', items: [1,2,3].map(i => ({ name: String(i), slug: `tap-${i}`, m3u8: `https://cdn.x/x/${i}.m3u8` })) }] } };
axios.get = async (url) => {
  seen.push(url.replace('https://phim.nguonc.com/api',''));
  if (url.includes('cinemeta')) return { data: { metas: [{ id: 'tt1590193', imdb_id: 'tt1590193', name: 'Confessions', year: '2010' }] } };
  if (url.includes('/film/loi-thu-toi')) return { data: JSON.stringify(detail) }; // string body
  if (url.includes('/film/bo-x')) return { data: series };
  if (url.includes('/films/search')) return { data: { status: 'success', paginate: { current_page: 1, items_per_page: 10 }, items: [mk('Lời thú tội của kẻ vận chuyển ma túy Ibiza','ibiza','Confessions of an Ibiza Drug Mule'), mk('Lời Thú Tội','loi-thu-toi','Confessions')] } };
  return { data: { status: 'success', paginate: { current_page: 1, total_page: 9, items_per_page: 10 }, items: [mk('Phim A','a','A'), mk('Phim B','b','B'), mk('Phim A','a','dup')] } };
};
const ng = require('../src/scrapers/nguonc');
const assert = require('assert');
(async () => {
    const list = await ng.getCatalog('movie', {});
    assert.deepStrictEqual(list.map(m => m.id), ['nguonc:a', 'nguonc:b']);
    assert.strictEqual(list[0].poster, 'https://phim.nguonc.com/public/images/a.jpg');
    await ng.getCatalog('series', { genre: 'Thể loại: Hành Động', skip: '10' });
    await ng.getCatalog('movie', { genre: 'Quốc gia: Hàn Quốc' });
    await ng.getCatalog('movie', { genre: 'Năm: 2024' });
    assert.ok(seen.includes('/films/the-loai/hanh-dong?page=2'), 'genre + paging url');
    assert.ok(seen.includes('/films/quoc-gia/han-quoc?page=1'), 'country url');
    assert.ok(seen.includes('/films/nam-phat-hanh/2024?page=1'), 'year url');
    // ranked search: the IMDb title comes first
    assert.deepStrictEqual((await ng.getCatalog('movie', { search: 'Confessions' })).map(m => m.id), ['nguonc:loi-thu-toi', 'nguonc:ibiza']);
    const meta = await ng.getMeta('movie', 'nguonc:loi-thu-toi');
    assert.deepStrictEqual(meta.genres, ['Tâm Lý', 'Kinh Dị']);
    assert.strictEqual(meta.releaseInfo, '2010');
    assert.strictEqual(meta.description, 'Mô tả');
    const streams = await ng.getStream('nguonc:loi-thu-toi', 'movie');
    assert.deepStrictEqual(streams.map(s => s.url), ['https://cdn.x/1/index.m3u8']);
    const sm = await ng.getMeta('series', 'nguonc:bo-x');
    assert.deepStrictEqual(sm.videos.map(v => v.id), ['nguonc:bo-x:1:tap-1', 'nguonc:bo-x:1:tap-2', 'nguonc:bo-x:1:tap-3']);
    const ep2 = await ng.getStream('nguonc:bo-x:1:tap-2', 'series');
    assert.deepStrictEqual(ep2.map(s => s.url), ['https://cdn.x/x/2.m3u8']);
    assert.deepStrictEqual(ng.matchTitle(await ng.search('Confessions'), 'Confessions').map(i => i.slug), ['loi-thu-toi']);
    console.log('nguonc_unit: all checks passed');
})().catch(e => { console.error(e); process.exit(1); });
