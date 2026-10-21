// Unit checks for utils/pagedList against fake sites with different page sizes: node test/paged_list_unit.js
const assert = require('assert');
const cache = require('../src/utils/cache');
const { pagedList } = require('../src/utils/pagedList');

const fakeSite = (total, size, calls) => async (page) => {
    const from = (page - 1) * size;
    const items = Array.from({ length: Math.max(0, Math.min(size, total - from)) }, (_, i) => ({ id: `m${from + i}` }));
    if (calls && items.length) calls.push(page); // fetches that returned movies (empty answers are never cached)
    return items;
};

// Walk a catalog the way Stremio does: skip += number of items received, until an empty answer
async function walk(key, fetchPage, { coldEachCall = false, want = 24 } = {}) {
    const ids = [];
    let skip = 0;
    for (let guard = 0; guard < 60; guard++) {
        if (coldEachCall) cache.clear(); // a Worker isolate that lost its memory
        const got = await pagedList({ key, skip, want, fetchPage });
        if (!got.length) break;
        ids.push(...got.map(i => i.id));
        skip += got.length;
    }
    return ids;
}

(async () => {
    for (const size of [7, 12, 18, 20, 24, 30, 82]) {
        for (const cold of [false, true]) {
            cache.clear();
            const total = 150;
            const ids = await walk(`site-${size}-${cold}`, fakeSite(total, size), { coldEachCall: cold });
            assert.strictEqual(new Set(ids).size, ids.length, `no repeats (page size ${size}, cold ${cold})`);
            assert.deepStrictEqual(ids, Array.from({ length: total }, (_, i) => `m${i}`), `complete and in order (page size ${size}, cold ${cold})`);
        }
    }

    // the old hard-coded guess: page size 20 read as 24 -> skip 20 maps to page 1 again; ours must not repeat
    cache.clear();
    const ids20 = await walk('guess', fakeSite(60, 20));
    assert.strictEqual(ids20.length, 60);

    // a site that ignores the page parameter must end the list instead of repeating page 1
    cache.clear();
    const ignoring = async () => Array.from({ length: 10 }, (_, i) => ({ id: `x${i}` }));
    const idsIgnoring = await walk('ignoring', ignoring);
    assert.deepStrictEqual(idsIgnoring, Array.from({ length: 10 }, (_, i) => `x${i}`));

    // neighbouring pages that overlap (each page repeats the last 2 items of the previous one, or a pinned item)
    for (const cold of [false, true]) {
        cache.clear();
        const size = 20, step = 18, total = 70;
        const overlapping = async (page) => {
            const from = (page - 1) * step;
            return Array.from({ length: Math.max(0, Math.min(size, total - from)) }, (_, i) => ({ id: `o${from + i}` }));
        };
        const ids = await walk(`overlap-${cold}`, overlapping, { coldEachCall: cold });
        assert.strictEqual(new Set(ids).size, ids.length, `overlapping pages: no repeats (cold ${cold})`);
        assert.deepStrictEqual(ids, Array.from({ length: total }, (_, i) => `o${i}`), `overlapping pages: complete (cold ${cold})`);
    }
    // a pinned block repeated at the top of every page
    cache.clear();
    const pinned = async (page) => {
        const from = (page - 1) * 22;
        const body = Array.from({ length: Math.max(0, Math.min(22, 80 - from)) }, (_, i) => ({ id: `b${from + i}` }));
        return body.length ? [{ id: 'pin1' }, { id: 'pin2' }, ...body] : [];
    };
    const idsPinned = await walk('pinned', pinned);
    assert.strictEqual(new Set(idsPinned).size, idsPinned.length, 'pinned block shown once');
    assert.strictEqual(idsPinned.length, 82, 'pinned block + every movie');

    // an empty first page is an empty catalog; failures do not throw
    cache.clear();
    assert.deepStrictEqual(await pagedList({ key: 'empty', skip: 0, fetchPage: async () => [] }), []);
    cache.clear();
    assert.deepStrictEqual(await pagedList({ key: 'boom', skip: 0, fetchPage: async () => { throw new Error('x'); } }), []);

    // page cache: walking twice never refetches a page that had movies
    cache.clear();
    const calls = [];
    await walk('cached', fakeSite(50, 24, calls));
    const firstRun = calls.length;
    await walk('cached', fakeSite(50, 24, calls));
    assert.strictEqual(calls.length, firstRun, 'second walk served from the page cache');

    console.log('paged_list_unit: all checks passed');
})().catch(e => { console.error(e); process.exit(1); });
