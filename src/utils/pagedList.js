// Stremio pages a catalog with `skip` (items already received); sites page with a page number and a fixed, unknown
// page size. Guessing that size (or remembering it in memory that a Worker isolate may drop) makes pages repeat or be
// skipped. pagedList learns the size from page 1 (cached) and maps [skip, skip+want) onto the site pages it covers.
// A page > 1 that only repeats page 1 means the site ignored the page parameter: it counts as the end of the list.
// Overlapping neighbouring pages are de-duplicated across the whole list.
const cache = require('./cache');

const SIZE_TTL = 86400;
const MAX_WINDOW = 10;

/**
 * @param {string}   opts.key        identifies the list (source + category/search); pages are cached under it
 * @param {number}   opts.skip       Stremio `skip`
 * @param {number}   opts.want       items returned per call (Stremio then asks skip += want)
 * @param {function} opts.fetchPage  async (page >= 1) => items[]; every item needs a stable `id`
 * @param {number}   opts.ttl        page cache seconds
 */
async function pagedList({ key, skip = 0, want = 24, fetchPage, ttl = 600 }) {
    const load = async (page) => {
        const ck = `pl:${key}:${page}`;
        const hit = cache.get(ck);
        if (hit) return hit;
        let items = [];
        try { items = (await fetchPage(page)) || []; } catch (e) { items = []; }
        if (items.length) cache.set(ck, items, ttl);
        return items;
    };

    const sizeKey = `pl:size:${key}`;
    let size = cache.get(sizeKey);
    if (!size) {
        size = (await load(1)).length;
        if (!size) return [];
        cache.set(sizeKey, size, SIZE_TTL);
    }

    // Pages 1..N are merged and de-duplicated as a whole, so a movie that two neighbouring pages both list (sites shift
    // when something new is posted, some repeat a pinned block) is shown once. One page of slack covers the items the
    // de-duplication removes. Deep scrolling keeps a window of the last MAX_WINDOW pages.
    const lastPage = Math.floor((skip + want - 1) / size) + 2;
    const firstPage = Math.max(1, lastPage - MAX_WINDOW + 1);
    const pageNumbers = [];
    for (let p = firstPage; p <= lastPage; p++) pageNumbers.push(p);

    const [first, ...pages] = await Promise.all([load(1), ...pageNumbers.map(load)]);
    const firstIds = new Set(first.map(i => i.id));

    const merged = [];
    const seen = new Set();
    pages.forEach((items, idx) => {
        const page = pageNumbers[idx];
        if (page > 1 && items.length && items.every(i => firstIds.has(i.id))) return; // site ignores the page parameter
        for (const item of items) {
            if (seen.has(item.id)) continue;
            seen.add(item.id);
            merged.push(item);
        }
    });

    const offset = skip - (firstPage - 1) * size;
    return merged.slice(offset, offset + want);
}

module.exports = { pagedList };
