// Javtiful list parsing must survive the language segment of its paths changing (/vn/ -> /vi/): node test/javtiful_unit.js
const assert = require('assert');
const j = require('../src/scrapers/javtiful');

const card = (href) => `<article class="video-card"><a href="${href}" class="video-card__thumbnail"><img data-front-lazy-src="/uploads/uploads/videos/thumbs/2026/10/17/x.jpg"><span class="video-card__details"><strong>FHD</strong>01:45:51</span></a><a href="${href}" class="video-card__title" title="Title">Title</a></article>`;

for (const [href, vid, slug] of [
    ['/vi/video/115304/hikr-082', '115304', 'hikr-082'],
    ['/vn/video/114709/tikb-229', '114709', 'tikb-229'],
    ['/en/video/2/b', '2', 'b'],
    ['/video/3/c', '3', 'c'],
    ['https://javtiful.com/vi/video/4/d', '4', 'd']
]) {
    const items = j.parseList(card(href));
    assert.strictEqual(items.length, 1, href);
    assert.strictEqual(items[0].vid, vid, href);
    assert.strictEqual(items[0].slug, slug, href);
    assert.strictEqual(items[0].poster, 'https://javtiful.com/uploads/uploads/videos/thumbs/2026/10/17/x.jpg');
    assert.strictEqual(items[0].quality, 'FHD');
}
// partner (ad) cards are skipped
assert.strictEqual(j.parseList('<article class="video-card video-card--partner"><a href="https://t.example/c1" class="video-card__thumbnail"></a></article>').length, 0);
console.log('javtiful_unit: all checks passed');
