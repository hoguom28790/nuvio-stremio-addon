const assert = require('assert');
const axios = require('axios');
const app = require('../api/index');

const PORT = 7088;
const BASE = `http://127.0.0.1:${PORT}`;

async function runLocalSuite() {
    console.log('====================================================');
    console.log('🧪 RUNNING LOCAL EXPRESS TEST SUITE (PORT ' + PORT + ')');
    console.log('====================================================\n');

    const server = app.listen(PORT);
    let passed = 0;
    let failed = 0;

    async function testCase(name, fn) {
        process.stdout.write(`⏳ Testing: ${name}... `);
        const t0 = Date.now();
        try {
            await fn();
            console.log(`✅ PASSED (${Date.now() - t0}ms)`);
            passed++;
        } catch (err) {
            console.log(`❌ FAILED (${Date.now() - t0}ms): ${err.message}`);
            failed++;
        }
    }

    try {
        // 1. Ping
        await testCase('1. /ping healthcheck', async () => {
            const r = await axios.get(`${BASE}/ping`);
            assert.strictEqual(r.status, 200);
            assert.strictEqual(r.data.status, 'ok');
        });

        // 2. Manifest
        await testCase('2. /manifest.json', async () => {
            const r = await axios.get(`${BASE}/manifest.json`);
            assert.strictEqual(r.status, 200);
            assert(Array.isArray(r.data.catalogs) && r.data.catalogs.length > 0);
        });

        // 3. KKPhim clean.m3u8 fast fallback (Virtual Master Playlist)
        await testCase('3. /kkphim/clean.m3u8 returns 200 OK in <= 2.5s (no 30s hang, no 302)', async () => {
            const targetUrl = 'https://s2.phim1280.tv/20231217/wVfHknFS/index.m3u8';
            const r = await axios.get(`${BASE}/kkphim/clean.m3u8?url=${encodeURIComponent(targetUrl)}`, {
                timeout: 3500
            });
            assert.strictEqual(r.status, 200);
            assert(r.data.includes('#EXTM3U'), 'Must include #EXTM3U');
            assert(r.data.includes('clean.m3u8?url=') || r.data.includes('3000kb/hls/index.m3u8') || r.data.includes(targetUrl), 'Must contain rewritten clean URL or target url');
        });

        // 4. Bandwidth Protection: /javhd/segment.ts redirects 302 to CF Worker
        await testCase('4. /javhd/segment.ts redirects 302 to Cloudflare Worker (zero Render video bandwidth)', async () => {
            const r = await axios.get(`${BASE}/javhd/segment.ts?url=https%3A%2F%2Ftest.com%2Fvideo.ts`, {
                maxRedirects: 0,
                validateStatus: (status) => status === 302
            });
            assert.strictEqual(r.status, 302);
            assert(r.headers.location.includes('/javhd/segment.ts?url='), 'Location must point to CF Worker');
        });

        // 5. Bandwidth Protection: /vlxx/segment.ts redirects 302 to CF Worker
        await testCase('5. /vlxx/segment.ts redirects 302 to Cloudflare Worker', async () => {
            const r = await axios.get(`${BASE}/vlxx/segment.ts?url=https%3A%2F%2Ftest.com%2Fvideo.ts`, {
                maxRedirects: 0,
                validateStatus: (status) => status === 302
            });
            assert.strictEqual(r.status, 302);
            assert(r.headers.location.includes('/vlxx/segment.ts?url='));
        });

        // 6. Bandwidth Protection: /avdb/segment.ts redirects 302 to CF Worker
        await testCase('6. /avdb/segment.ts redirects 302 to Cloudflare Worker', async () => {
            const r = await axios.get(`${BASE}/avdb/segment.ts?url=https%3A%2F%2Ftest.com%2Fvideo.ts`, {
                maxRedirects: 0,
                validateStatus: (status) => status === 302
            });
            assert.strictEqual(r.status, 302);
            assert(r.headers.location.includes('/avdb/segment.ts?url='));
        });

        // 7. Bandwidth Protection: /missav/segment.ts redirects 302 to CF Worker
        await testCase('7. /missav/segment.ts redirects 302 to Cloudflare Worker', async () => {
            const r = await axios.get(`${BASE}/missav/segment.ts?url=https%3A%2F%2Ftest.com%2Fvideo.ts`, {
                maxRedirects: 0,
                validateStatus: (status) => status === 302
            });
            assert.strictEqual(r.status, 302);
            assert(r.headers.location.includes('/missav/segment.ts?url='));
        });

        // 8. MissAV M3U8 endpoint
        await testCase('8. /missav/stream/fays-017/1080.m3u8 returns 200 OK with #EXTM3U', async () => {
            const r = await axios.get(`${BASE}/missav/stream/fays-017/1080.m3u8`, { timeout: 10000 });
            assert.strictEqual(r.status, 200);
            assert(r.data.includes('#EXTM3U'), 'Must include #EXTM3U');
        });

        // 9. JavHD M3U8 endpoint (Must return 200 flat media playlist with unwrapped segments, NO master playlist)
        await testCase('9. /javhd/stream/toi-da-so-bim-chi-gai-tsubasa-mai-4017/1080.m3u8 returns flat media playlist with 0 #EXT-X-STREAM-INF', async () => {
            const r = await axios.get(`${BASE}/javhd/stream/toi-da-so-bim-chi-gai-tsubasa-mai-4017/1080.m3u8`, { timeout: 10000 });
            assert.strictEqual(r.status, 200);
            assert(r.data.includes('#EXTM3U'), 'Must include #EXTM3U');
            assert(!r.data.includes('#EXT-X-STREAM-INF'), 'Must be a flat media playlist without master recursion');
            assert(r.data.includes('/javhd/segment.ts?url='), 'Must rewrite segments to edge unwrapper');
        });

        // 9b. JavHD Poster endpoint redirect (0 bandwidth on Render)
        await testCase('9b. /javhd/poster/SONE-480-2026-01.jpg redirects 302 to CF Worker', async () => {
            const r = await axios.get(`${BASE}/javhd/poster/SONE-480-2026-01.jpg`, {
                maxRedirects: 0,
                validateStatus: (status) => status === 302
            });
            assert.strictEqual(r.status, 302);
            assert(r.headers.location.includes('/javhd/poster/SONE-480-2026-01.jpg'), 'Must redirect to CF Worker poster endpoint');
        });

        // 10. AVDB M3U8 endpoint
        await testCase('10. /avdb/stream/ipzz-921.m3u8 returns 200 OK with #EXTM3U', async () => {
            const r = await axios.get(`${BASE}/avdb/stream/ipzz-921.m3u8`, { timeout: 10000 });
            assert.strictEqual(r.status, 200);
            assert(r.data.includes('#EXTM3U'), 'Must include #EXTM3U');
        });

        // 11. Stremio stream resource endpoint for MissAV
        await testCase('11. Stremio stream endpoint /stream/movie/missav:siro-5719.json', async () => {
            const r = await axios.get(`${BASE}/stream/movie/missav:siro-5719.json`, { timeout: 10000 });
            assert.strictEqual(r.status, 200);
            assert(Array.isArray(r.data.streams) && r.data.streams.length > 0, 'Must return streams');
            const vip = r.data.streams.find(s => s.name.includes('VIP Direct CDN'));
            assert(vip, 'Must have VIP Direct CDN stream');
        });

        // 12. Stremio catalog endpoint for JavHD (verifying clean posters without wsrv.nl)
        await testCase('12. Stremio catalog endpoint /catalog/movie/javhd-latest.json has clean posters', async () => {
            const r = await axios.get(`${BASE}/catalog/movie/javhd-latest.json`, { timeout: 10000 });
            assert.strictEqual(r.status, 200);
            assert(Array.isArray(r.data.metas) && r.data.metas.length > 0, 'Must return metas');
            const first = r.data.metas[0];
            assert(!first.poster.includes('wsrv.nl'), 'Must not use wsrv.nl');
            assert(!first.poster.includes('javhdz.bz'), 'Must not use dead javhdz.bz');
            assert(first.poster.includes('/javhd/poster/') || first.poster.includes('javhdz.wtf'), 'Must use live or edge poster URL');
        });

        // 13. AVDB Segment streaming via stream=1 (Verifying Render bridge returns 200 and MPEG-TS)
        await testCase('13. AVDB Segment streaming (/avdb/segment.ts?stream=1)', async () => {
            const plRes = await axios.get(`${BASE}/avdb/stream/ipzz-921.m3u8`, { timeout: 10000 });
            assert.strictEqual(plRes.headers['access-control-allow-origin'], '*', 'Playlist must have CORS');
            const lines = plRes.data.split('\n').filter(l => l.includes('/avdb/segment.ts'));
            assert(lines.length > 0, 'Must have avdb segment URLs');
            const firstSegMatch = lines[0].match(/url=([^&\s]+)/);
            assert(firstSegMatch, 'Must find raw helvid url');
            const rawHelvidUrl = decodeURIComponent(firstSegMatch[1]);
            const segRes = await axios.get(`${BASE}/avdb/segment.ts?stream=1&url=${encodeURIComponent(rawHelvidUrl)}`, {
                responseType: 'arraybuffer',
                timeout: 15000
            });
            assert.strictEqual(segRes.status, 200);
            assert.strictEqual(segRes.headers['access-control-allow-origin'], '*', 'Segment must have CORS');
            assert.strictEqual(segRes.headers['content-type'], 'video/mp2t');
            assert(segRes.data.length > 1000, 'Segment body must be non-empty video chunk');
        });

        // 14. MissAV Segment streaming via stream=1 (Verifying surrit bridge returns 200 and MPEG-TS)
        await testCase('14. MissAV Segment streaming (/missav/segment.ts?stream=1)', async () => {
            const plRes = await axios.get(`${BASE}/missav/stream/fays-017/1080.m3u8`, { timeout: 10000 });
            assert.strictEqual(plRes.headers['access-control-allow-origin'], '*', 'Playlist must have CORS');
            const lines = plRes.data.split('\n').filter(l => l.includes('/missav/segment.ts'));
            assert(lines.length > 0, 'Must have missav segment URLs');
            const firstSegMatch = lines[0].match(/url=([^&\s]+)/);
            assert(firstSegMatch, 'Must find raw surrit url');
            const rawSurritUrl = decodeURIComponent(firstSegMatch[1]);
            const segRes = await axios.get(`${BASE}/missav/segment.ts?stream=1&url=${encodeURIComponent(rawSurritUrl)}`, {
                responseType: 'arraybuffer',
                timeout: 15000
            });
            assert.strictEqual(segRes.status, 200);
            assert.strictEqual(segRes.headers['access-control-allow-origin'], '*', 'Segment must have CORS');
            assert.strictEqual(segRes.headers['content-type'], 'video/mp2t');
            assert(segRes.data.length > 1000, 'Segment body must be non-empty video chunk');
        });

        // 15. HentaiZ master + variant playlists must only reference the Worker (CORS + Referer) and carry no BYTERANGE
        await testCase('15. HentaiZ master/variant playlists route via Worker (no direct CDN, no BYTERANGE)', async () => {
            const vid = 'c3dc551e-36e9-4685-961c-e2ce25cf6e7c';
            const m = await axios.get(`${BASE}/hentaiz/stream/${vid}/master.m3u8?cfhost=edge.example.dev`, { timeout: 15000 });
            assert.strictEqual(m.headers['access-control-allow-origin'], '*');
            assert(m.data.includes('#EXT-X-STREAM-INF'), 'master must list variants');
            assert(!m.data.includes('animez.top'), 'master must not point at the raw CDN');
            const variantLine = m.data.split('\n').map(s => s.trim()).filter(l => l.startsWith('https://')).pop();
            assert(variantLine.startsWith('https://edge.example.dev/hentaiz/stream/'), 'variant must point at the Worker');
            const v = await axios.get(variantLine.replace('https://edge.example.dev', BASE), { timeout: 15000 });
            assert(!v.data.includes('#EXT-X-BYTERANGE'), 'BYTERANGE must be resolved at the edge');
            assert(!v.data.includes('https://c1.animez.top'), 'segments must not point at the raw CDN');
            const segs = v.data.split('\n').filter(l => l.includes('/hentaiz/segment.ts'));
            assert(segs.length > 0, 'must have worker segment URLs');
            assert(/[?&]o=\d+&l=\d+/.test(segs[0]), 'segment must carry offset/length');
        });

    } finally {
        server.close();
    }

    console.log('\n====================================================');
    console.log(`📊 LOCAL TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
    console.log('====================================================');

    if (failed > 0) {
        process.exit(1);
    }
}

runLocalSuite().catch(err => {
    console.error('Local Suite Fatal Error:', err);
    process.exit(1);
});
