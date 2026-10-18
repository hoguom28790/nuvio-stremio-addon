// Unit checks for utils/searchRank (pure ranking, no network): node test/search_rank_unit.js
const assert = require('assert');
const { rankItems, parseIdQuery, normalize } = require('../src/utils/searchRank');

const items = [
    { slug: 'ibiza', name: 'Lời thú tội của một kẻ vận chuyển ma túy Ibiza', origin_name: 'Confessions of an Ibiza Drug Mule', year: 2016, imdb: { id: 'tt5555555' } },
    { slug: 'other', name: 'Thú tội', origin_name: 'Confession', year: 2020, imdb: { id: 'tt1111111' } },
    { slug: 'real', name: 'Lời Thú Tội', origin_name: '告白', year: 2010, imdb: { id: 'tt1590193' }, tmdb: { id: '38700' } },
    { slug: 'exact', name: 'Confessions', origin_name: 'Confessions', year: 1999, imdb: { id: 'tt2222222' } }
];
const slugs = list => list.map(i => i.slug);

// IMDb hit beats everything, then an exact title, then "starts with", then the rest in site order
assert.deepStrictEqual(slugs(rankItems(items, 'Confessions', [{ imdb: 'tt1590193', name: 'Confessions', year: '2010' }])),
    ['real', 'exact', 'ibiza', 'other']);
// without Cinemeta candidates an exact title still wins over the site's order
assert.deepStrictEqual(slugs(rankItems(items, 'Confessions', []))[0], 'exact');
// title + year match works when the site has no IMDb id
const noImdb = [{ slug: 'a', name: 'X', origin_name: 'Confessions', year: 2005 }, { slug: 'b', name: 'Y', origin_name: 'Confessions', year: 2010 }];
assert.deepStrictEqual(slugs(rankItems(noImdb, 'Confessions', [{ imdb: 'tt1590193', name: 'Confessions', year: '2010' }])), ['b', 'a']);
// id queries keep only exact id matches
assert.deepStrictEqual(parseIdQuery('tt1590193'), { imdb: 'tt1590193' });
assert.deepStrictEqual(parseIdQuery('TMDB:38700'), { tmdb: '38700' });
assert.strictEqual(parseIdQuery('confessions'), null);
assert.deepStrictEqual(slugs(rankItems(items, 'tt1590193', [], { imdb: 'tt1590193' })), ['real']);
assert.deepStrictEqual(slugs(rankItems(items, 'tmdb:38700', [], { tmdb: '38700' })), ['real']);
// stable order for equal scores
assert.deepStrictEqual(slugs(rankItems(items.slice(0, 2), 'zzz', [])), ['ibiza', 'other']);
// diacritics / đ
assert.strictEqual(normalize('Lời Thú Tội — Đẹp!'), 'loi thu toi dep');
console.log('search_rank_unit: all checks passed');
