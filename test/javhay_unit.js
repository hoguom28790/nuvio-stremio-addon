// JavHay list parsing across themes: node test/javhay_unit.js
const assert = require('assert');
const j = require('../src/scrapers/javhay');

// New theme ("javhaynew"): a featured hero slide, then grid cards; menu links to categories carry no cover
const NEW_THEME = `
<nav><a href="https://javhay.buzz/phim-sex-trung-quoc/">Trung Quốc</a><a href="https://javhay.buzz/jav-vietsub/">Vietsub</a><a href="https://javhay.buzz/page/2/">2</a></nav>
<div class="hero-slide"><img width="1024" height="576" src="https://javhay.buzz/wp-content/uploads/2026/10/me-ke-loan-luan-cung-cau-con-chong-so-huong.avif" class="hero-img" alt="Mẹ kế loạn luân cùng cậu con chồng số hướng" srcset="https://javhay.buzz/wp-content/uploads/2026/10/me-ke-loan-luan-cung-cau-con-chong-so-huong.avif 800w">
<p class="hero-title"><a href="https://javhay.buzz/me-ke-loan-luan-cung-cau-con-chong-so-huong/">Mẹ kế loạn luân cùng cậu con chồng số hướng</a></p>
<ul class="hero-meta"><li><span class="badge badge-accent">Vietsub</span></li></ul>
<a class="btn btn-primary" href="https://javhay.buzz/me-ke-loan-luan-cung-cau-con-chong-so-huong/" tabindex="-1">Xem ngay</a></div>
<article class="card"><a href="https://javhay.buzz/vo-di-du-lich-xa-chong-o-nha-loan-luan/" class="card-link"><img src="https://javhay.buzz/wp-content/uploads/2022/01/vo-di-du-lich-xa-chong-o-nha-loan-luan-500x350.avif" alt="Vợ đi du lịch xa&#8230; chồng ở nhà" loading="lazy"></a><h3><a href="https://javhay.buzz/vo-di-du-lich-xa-chong-o-nha-loan-luan/" title="Vợ đi du lịch xa&#8230; chồng ở nhà">Vợ đi du lịch xa</a></h3></article>
<article class="card"><a href="https://javhay.buzz/loan-luan-bo-chong-dit-con-dau/"><img data-src="https://javhay.buzz/wp-content/uploads/2026/10/loan-luan-bo-chong-dit-con-dau-768x513.avif" alt="Loạn luân bố chồng"></a></article>
<a href="https://javhay.buzz/phim-sex-hay-nhat-moi-ngay/">a link without a cover is not a movie</a>
<a href="https://javhay.buzz/tag/xnxx/">tag</a>`;

const items = j.parseList(NEW_THEME);
assert.deepStrictEqual(items.map(i => i.slug), [
    'me-ke-loan-luan-cung-cau-con-chong-so-huong',
    'vo-di-du-lich-xa-chong-o-nha-loan-luan',
    'loan-luan-bo-chong-dit-con-dau'
]);
assert.strictEqual(items[0].title, 'Mẹ kế loạn luân cùng cậu con chồng số hướng');
assert.strictEqual(items[1].title, 'Vợ đi du lịch xa… chồng ở nhà');
assert.strictEqual(items[2].title, 'Loạn luân bố chồng');
assert.strictEqual(items[0].poster, 'https://javhay.buzz/wp-content/uploads/2026/10/me-ke-loan-luan-cung-cau-con-chong-so-huong.avif');
assert.strictEqual(items[1].poster, 'https://javhay.buzz/wp-content/uploads/2022/01/vo-di-du-lich-xa-chong-o-nha-loan-luan-500x350.avif');
assert.strictEqual(items[2].poster, 'https://javhay.buzz/wp-content/uploads/2026/10/loan-luan-bo-chong-dit-con-dau-768x513.avif');

// Old theme still works
const OLD = `<div class="thumbBlock"><div class="thumbInside"><a href="https://javhay.buzz/co-thu-ky-xinh-xan-vua-goi-chong/" title="Cô thư ký"><div class="thumbnail-wrapper"><img src="https://javhay.buzz/wp-content/uploads/2021/05/co-thu-ky-xinh-xan-vua-goi-chong-500x350.avif" alt="Cô thư ký"><div class="label-wrapper"><span class="video-label">Vietsub</span></div></div></a></div></div>`;
const old = j.parseList(OLD);
assert.strictEqual(old.length, 1);
assert.strictEqual(old[0].slug, 'co-thu-ky-xinh-xan-vua-goi-chong');
assert.strictEqual(old[0].title, 'Cô thư ký');
assert.strictEqual(old[0].label, 'Vietsub');

assert.deepStrictEqual(j.parseList('<html>nothing</html>'), []);
// category entries of the new menu exist
for (const k of ['Phim Sex JAV', 'Hiếp Dâm', 'Sex HD', 'Vụng Trộm', 'Phim Sex Việt']) assert.ok(j.GENRE_MAP[k], k);
console.log('javhay_unit: all checks passed');
