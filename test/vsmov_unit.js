// Offline checks for the VSMOV pieces that need no network: PNG-wrapper offset, streaming unwrapper, playlist rewrite.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const vsmov = require('../src/scrapers/vsmov');

function chunk(type, data) {
    const b = Buffer.alloc(12 + data.length);
    b.writeUInt32BE(data.length, 0);
    b.write(type, 4, 'latin1');
    data.copy(b, 8);
    return b; // CRC left as zeros: the parser skips it
}
function tsPayload(packets) {
    const out = Buffer.alloc(188 * packets, 0xff);
    for (let i = 0; i < packets; i++) out[i * 188] = 0x47;
    return out;
}
const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', Buffer.alloc(13, 1)),
    chunk('IDAT', Buffer.alloc(300, 7)),
    chunk('IEND', Buffer.alloc(0))
]);
const padding = Buffer.from('YIFY(junk'); // seen after IEND in real segments
const ts = tsPayload(40);
const wrapped = Buffer.concat([png, padding, ts]);

(async () => {
    // payloadOffset: whole buffer, then truncated heads
    assert.strictEqual(vsmov.payloadOffset(wrapped, true), png.length + padding.length);
    assert.strictEqual(vsmov.payloadOffset(ts, true), 0, 'plain TS passes through');
    assert.strictEqual(vsmov.payloadOffset(wrapped.subarray(0, 20), false), -1, 'needs more bytes');
    assert.strictEqual(vsmov.payloadOffset(wrapped.subarray(0, png.length), false), -1, 'needs more after IEND');

    // streaming unwrapper from workerEntry, fed in awkward chunk sizes
    const src = fs.readFileSync(path.join(__dirname, '../src/workerEntry.js'), 'utf8');
    const body = src.slice(src.indexOf('async function handleVsmovSegment'), src.indexOf('let lastRenderWarm'));
    for (const size of [1, 7, 100, 4096, wrapped.length]) {
        const make = new Function('vsmov', 'CORS_HEADERS', 'fetch', 'Response', 'ReadableStream', `${body}; return handleVsmovSegment;`);
        const upstreamStream = () => new ReadableStream({
            start(c) { for (let i = 0; i < wrapped.length; i += size) c.enqueue(new Uint8Array(wrapped.subarray(i, i + size))); c.close(); }
        });
        const handler = make(vsmov, {}, async () => ({ ok: true, status: 200, body: upstreamStream() }), Response, ReadableStream);
        const res = await handler('https://p25.streamvsmov.com/file/x/file-tiktok_1.png');
        assert.strictEqual(res.headers.get('Content-Type'), 'video/mp2t');
        const out = Buffer.from(await res.arrayBuffer());
        assert.ok(out.equals(ts), `payload mismatch for chunk size ${size}: got ${out.length} bytes`);
    }
    const make = new Function('vsmov', 'CORS_HEADERS', 'fetch', 'Response', 'ReadableStream', `${body}; return handleVsmovSegment;`);
    const guard = make(vsmov, {}, async () => { throw new Error('must not fetch'); }, Response, ReadableStream);
    assert.strictEqual((await guard('https://evil.example.com/a.png')).status, 403);
    assert.strictEqual((await guard('http://p25.streamvsmov.com/a.png')).status, 403);
    assert.strictEqual((await guard('not a url')).status, 400);

    // playlist rewrite (media playlist as served by VSMOV, with a relative URI tag)
    const embed = 'https://v2.streamvsmov.com/video/abc';
    const page = '<script>const playerOptions={signedMasterUrl: "https://v2.streamvsmov.com/stream/abc/master.m3u8?expires=1&signature=zz"};</script>';
    const pl = '#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-TARGETDURATION:6\n#EXT-X-KEY:METHOD=AES-128,URI="k.key"\n#EXTINF:6.0,\nhttps://p25.streamvsmov.com/file/q/file-tiktok_1.png\n#EXTINF:6.0,\nfile-tiktok_2.png\n#EXT-X-ENDLIST';
    const real = axios.get;
    axios.get = async (u) => ({ status: 200, data: u.includes('/video/') ? page : pl });
    const out = await vsmov.buildPlaylist(embed, 'https://w.dev');
    axios.get = real;
    const lines = out.trim().split('\n');
    assert.ok(lines.includes('#EXT-X-ENDLIST') && lines[0] === '#EXTM3U');
    assert.ok(lines.some(l => l.startsWith('#EXT-X-KEY') && l.includes('URI="https://v2.streamvsmov.com/stream/abc/k.key"')));
    const segLines = lines.filter(l => !l.startsWith('#'));
    assert.strictEqual(segLines.length, 2);
    assert.ok(segLines.every(l => l.startsWith('https://w.dev/vsmov/seg.ts?u=')));
    assert.strictEqual(decodeURIComponent(segLines[1].split('u=')[1]), 'https://v2.streamvsmov.com/stream/abc/file-tiktok_2.png');
    await assert.rejects(() => vsmov.buildPlaylist('https://evil.example.com/video/x', 'https://w.dev'));
    await assert.rejects(() => vsmov.buildPlaylist('http://v2.streamvsmov.com/video/x', 'https://w.dev'));

    console.log('vsmov_unit: all checks passed');
})().catch(e => { console.error('FAILED:', e.message); process.exit(1); });
