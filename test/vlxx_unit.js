// VLXX list parsing after the move vlxx.phd -> vlxx.net (<img src>, no data-original): node test/vlxx_unit.js
const assert = require('assert');
const v = require('../src/scrapers/vlxx');

const NEW = `<div id="video-list"><!-- ad -->
<div id="video-3256" class="video-item"> <a title="Vợ mở &amp; tiệm" href="/video/vo-mo-tiem/3256/"> <img class="video-image" src="https://vlxx.net/img/3256.jpg" loading="lazy" width="240" alt="x" /> <div class="ribbon">Vietsub</div> </a> <div class="video-name"> <a title="Vợ mở &amp; tiệm" href="/video/vo-mo-tiem/3256/">Vợ mở tiệm</a> </div> </div><div id="video-3255" class="video-item"> <a title="Địt" href="/video/dit/3255/"> <img class="video-image" src="https://vlxx.net/img/3255.jpg" /> <div class="ribbon">Uncen</div> </a> <div class="video-name"> <a href="/video/dit/3255/">Địt</a> </div> </div></div>`;
const OLD = `<div id="video-9" class="video-item"> <a title="Cũ" href="/video/cu/9/"> <img data-original="/img/9.jpg" src="/blank.gif" /> </a> <div class="video-name"><a href="/video/cu/9/">Cũ</a></div></div>`;

const a = v.parseVideoList(NEW);
assert.deepStrictEqual(a.map(i => [i.id, i.slug, i.title, i.poster, i.ribbon]), [
    ['3256', 'vo-mo-tiem', 'Vợ mở & tiệm', 'https://vlxx.net/img/3256.jpg', 'Vietsub'],
    ['3255', 'dit', 'Địt', 'https://vlxx.net/img/3255.jpg', 'Uncen']
]);
const b = v.parseVideoList(OLD);
assert.deepStrictEqual(b.map(i => [i.id, i.slug, i.poster]), [['9', 'cu', 'https://vlxx.net/img/9.jpg']]);
assert.deepStrictEqual(v.parseVideoList('<html>nothing</html>'), []);
console.log('vlxx_unit OK');
