// Javtiful stream via the playback ticket (and the old in-page sources): node test/javtiful_stream_unit.js
const assert = require('assert');
const j = require('../src/scrapers/javtiful');

const PAGE = (extra) => `<html><h1>HIKR-082 Title</h1><video id="front-player" preload="none" class="front-player"></video>
<script>window.cfg = {"commentsEndpoint":"\\/vi\\/video\\/115304\\/comments","playback":{"endpoint":"\\/vi\\/video\\/115304\\/playback","ticket":"p1.115304.0.1793540186.aaa.bbb"},"videoTitle":"x"};</script>${extra || ''}</html>`;

const calls = [];
let mode = 'ok';
global.fetch = async (url, opts = {}) => {
    calls.push({ url: String(url), method: opts.method || 'GET', body: opts.body, headers: opts.headers });
    const headers = new Map([['set-cookie', 'front_locale=vi; path=/, front_locale=vi; Max-Age=100']]);
    const res = (status, body, ct) => ({ status, headers: { get: k => (k === 'set-cookie' ? headers.get('set-cookie') : ct) }, text: async () => body, json: async () => JSON.parse(body) });
    if (String(url).includes('/playback')) {
        if (mode === '409' && opts.body.includes('aaa')) return res(409, JSON.stringify({ success: false, renewTicket: 'p1.115304.0.9.ccc.ddd' }), 'application/json');
        if (mode === 'none') return res(200, JSON.stringify({ success: false }), 'application/json');
        return res(200, JSON.stringify({ success: true, sources: [
            { src: '/vi/media/video/115304/480p?expires=1&signature=a', type: 'video/mp4', size: 480, label: '480p' },
            { src: '/vi/media/video/115304/720p?expires=1&signature=b', type: 'video/mp4', size: 720, label: '720p', fallbackSrc: null }
        ], defaultQuality: 720 }), 'application/json');
    }
    return res(200, PAGE(mode === 'legacy' ? '<script>"playerSources":[{"src":"https://fast-stream.jav.si/p/x","type":"video/mp4","size":720}]</script>' : ''), 'text/html');
};

const cache = require('../src/utils/cache');
(async () => {
    // ticket parsed from the page
    assert.deepStrictEqual(j.parsePlayback(PAGE()), { endpoint: 'https://javtiful.com/vi/video/115304/playback', ticket: 'p1.115304.0.1793540186.aaa.bbb' });
    assert.strictEqual(j.parsePlayback('<html></html>'), null);

    // ticket -> POST -> absolute, best quality first
    let streams = await j.getStream('javtiful:115304:hikr-082');
    assert.deepStrictEqual(streams.map(s => s.url), ['https://javtiful.com/vi/media/video/115304/720p?expires=1&signature=b', 'https://javtiful.com/vi/media/video/115304/480p?expires=1&signature=a']);
    assert.deepStrictEqual(streams.map(s => s.name), ['🔞 Javtiful [720p MP4]', '🔞 Javtiful [480p MP4]']);
    const post = calls.find(c => c.method === 'POST');
    assert.strictEqual(post.url, 'https://javtiful.com/vi/video/115304/playback');
    assert.strictEqual(post.body, 'ticket=p1.115304.0.1793540186.aaa.bbb');
    assert.strictEqual(post.headers['X-Requested-With'], 'XMLHttpRequest');
    assert.strictEqual(post.headers.Cookie, 'front_locale=vi; front_locale=vi');

    // a 409 brings a renewed ticket, which is used once
    cache.clear(); calls.length = 0; mode = '409';
    streams = await j.getStream('javtiful:115304:hikr-082');
    assert.strictEqual(streams.length, 2);
    assert.deepStrictEqual(calls.filter(c => c.method === 'POST').map(c => c.body), ['ticket=p1.115304.0.1793540186.aaa.bbb', 'ticket=p1.115304.0.9.ccc.ddd']);

    // no sources -> no streams
    cache.clear(); mode = 'none';
    assert.deepStrictEqual(await j.getStream('javtiful:115304:hikr-082'), []);

    // old pages that list their sources keep working without any POST
    cache.clear(); calls.length = 0; mode = 'legacy';
    streams = await j.getStream('javtiful:115304:hikr-082');
    assert.deepStrictEqual(streams.map(s => s.url), ['https://fast-stream.jav.si/p/x']);
    assert.ok(!calls.some(c => c.method === 'POST'));

    console.log('javtiful_stream_unit: all checks passed');
})().catch(e => { console.error(e); process.exit(1); });
