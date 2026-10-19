// Unit checks for utils/pagedList against fake sites with different page sizes: node test/paged_list_unit.js
const assert = require('assert');
const cache = require('../src/utils/cache');
const { pagedList } = require('../src/utils/pagedList');

const fakeSite = (total, size, calls) => async (page) => {
    if (calls) calls.push(page);
    const from = (page - 1) * size;
    return Array.from({ length: Math.max(0, Math.min(size, total - from)) }, (_, i) => ({ id: `m${from + i}` }));
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

    // an empty first page is an empty catalog; failures do not throw
    cache.clear();
    assert.deepStrictEqual(await pagedList({ key: 'empty', skip: 0, fetchPage: async () => [] }), []);
    cache.clear();
    assert.deepStrictEqual(await pagedList({ key: 'boom', skip: 0, fetchPage: async () => { throw new Error('x'); } }), []);

    // page cache: walking twice only refetches the trailing empty page (empty answers are deliberately not cached)
    cache.clear();
    const calls = [];
    await walk('cached', fakeSite(50, 24, calls));
    const firstRun = calls.length;
    await walk('cached', fakeSite(50, 24, calls));
    assert.ok(calls.length <= firstRun + 1, 'second walk served from the page cache');

    console.log('paged_list_unit: all checks passed');
})().catch(e => { console.error(e); process.exit(1); });
