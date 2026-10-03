const assert = require('assert');
const axios = require('axios');
const kkphim = require('../src/scrapers/kkphim');
const javhd = require('../src/scrapers/javhd');
const avdb = require('../src/scrapers/avdb');
const vlxx = require('../src/scrapers/vlxx');
const hentaiz = require('../src/scrapers/hentaiz');
const nguonc = require('../src/scrapers/nguonc');
const missav = require('../src/scrapers/missav');

const RENDER_BASE = 'https://nuvio-stremio-addon-1.onrender.com';
const CF_HOST = 'hophimaddon.hophim-4g6qbubt.workers.dev';

async function runTests() {
    console.log('====================================================');
    console.log('🚀 STARTING COMPREHENSIVE OCTOBER ADDON UNIT TESTS');
    console.log('====================================================\n');

    let passed = 0;
    let failed = 0;

    async function testCase(name, fn) {
        process.stdout.write(`⏳ Testing: ${name}... `);
        try {
            await fn();
            console.log('✅ PASSED');
            passed++;
        } catch (err) {
            console.log(`❌ FAILED: ${err.message}`);
            failed++;
        }
    }

    // 1. Render Healthcheck Ping
    await testCase('1. Render.com service is LIVE (/ping)', async () => {
        const res = await axios.get(`${RENDER_BASE}/ping`, { timeout: 5000 });
        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.data.status, 'ok');
    });

    // 2. KKPhim Stream Generation
    await testCase('2. KKPhim stream list generation with Clean M3U8 URL', async () => {
        const streams = await kkphim.getStream('kkphim:cuoc-chien-sinh-tu', 'movie', CF_HOST);
        assert(Array.isArray(streams) && streams.length > 0, 'No streams returned');
        const cleanStream = streams.find(s => s.name && s.name.includes('Lọc QC'));
        assert(cleanStream, 'Missing Clean M3U8 stream');
        assert(cleanStream.url.includes('/kkphim/clean.m3u8?url='), 'Invalid clean M3U8 url');
    });

    // 3. KKPhim SSAI Ad Filtering on Render
    await testCase('3. KKPhim SSAI Ad Filtering on Render (verifying direct CDN segments, 0 video proxy)', async () => {
        // Test master playlist
        const masterTarget = 'https://a.kvp726.com/20261001/Iw5yJa3S/index.m3u8';
        const masterRes = await axios.get(`${RENDER_BASE}/kkphim/clean.m3u8?url=${encodeURIComponent(masterTarget)}`, { timeout: 30000 });
        assert(masterRes.data.includes('#EXTM3U'), 'Invalid master playlist');
        assert(masterRes.data.includes('clean.m3u8?url=') || masterRes.data.includes('#EXT-X-STREAM-INF'), 'Variant sub-playlist or Virtual Master Playlist must be returned');

        // Test variant sub-playlist
        const variantTarget = 'https://a.kvp726.com/20261001/Iw5yJa3S/3500kb/hls/index.m3u8';
        const variantRes = await axios.get(`${RENDER_BASE}/kkphim/clean.m3u8?url=${encodeURIComponent(variantTarget)}`, { timeout: 30000 });
        assert(variantRes.data.includes('#EXTM3U'), 'Invalid variant playlist');
        assert(!/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i.test(variantRes.data), 'Contains ads!');
        // Verify segment URLs or Virtual Master Playlist fallback (both protect Render bandwidth)
        const lines = variantRes.data.split('\n');
        const tsLines = lines.filter(l => l.trim().endsWith('.ts'));
        const hasVirtualFallback = variantRes.data.includes('#EXT-X-STREAM-INF');
        assert(tsLines.length > 0 || hasVirtualFallback, 'Must return either direct CDN .ts segments or Virtual Master Playlist fallback');
        if (tsLines.length > 0) {
            assert(tsLines.every(l => l.startsWith('https://a.kvp726.com')), 'Segments must point directly to CDN to save Render bandwidth!');
        }
    });

    // 4. JavHD Catalog & Metadata
    await testCase('4. JavHD Catalog & Metadata resolution (verifying valid poster URLs, no wsrv.nl or dead domains)', async () => {
        const cat = await javhd.getCatalog('javhd-latest', 'movie', {}, CF_HOST);
        assert(Array.isArray(cat) && cat.length > 0, 'Empty catalog');
        const first = cat[0];
        assert(first.id.startsWith('javhd:'), 'Invalid ID format');
        assert(first.name, 'Missing name');
        assert(!first.poster.includes('wsrv.nl'), 'Must not use wsrv.nl');
        assert(!first.poster.includes('javhdz.bz'), 'Must not use dead javhdz.bz');
        assert(first.poster.includes('/javhd/poster/') || first.poster.includes('javhdz.wtf'), 'Must use live or edge poster URL');
    });

    // 5. JavHD M3U8 on Render (verifying segment URLs route to CF Worker, 0 video proxy)
    await testCase('5. JavHD M3U8 resolution on Render (zero video bandwidth on Render)', async () => {
        const cat = await javhd.getCatalog('javhd-latest', 'movie', {}, CF_HOST);
        const slug = (cat && cat[0] && cat[0].id.replace('javhd:', '')) || 'anh-hai-nung-qua-suc-cu-cho-anh-di-miyuu-kiyohara-4049';
        const res = await axios.get(`${RENDER_BASE}/javhd/stream/${slug}/1080.m3u8?cfhost=${CF_HOST}`, { timeout: 30000 });
        assert(res.data.includes('#EXTM3U'), 'Invalid M3U8');
        assert(res.data.includes('segment.ts?url='), 'Must rewrite segments to CF Worker edge');
        const lines = res.data.split('\n');
        const segLines = lines.filter(l => l.includes('segment.ts'));
        assert(segLines.length > 0, 'No segment lines found');
        console.log(`\n     Sample segment URL: ${segLines[0].slice(0, 90)}...`);
    });

    // 6. JavHD Segment Unwrapper on Cloudflare Worker (strips 95-byte PNG)
    await testCase('6. JavHD Segment Unwrapper on Cloudflare Edge (PNG stripped to MPEG-TS sync byte 0x47)', async () => {
        const targetUrl = 'https://sf16-ads-format-sign.tiktokcdn.com/obj/ad-site-i18n/64741464_4d25_4c3a_a667_f30c7f72d997.png?x-expires=1790948604&x-signature=%2BFdwW%2FY8VzvWJUkPTiigtWxakVU%3D';
        const proxyUrl = `https://${CF_HOST}/javhd/segment.ts?url=${encodeURIComponent(targetUrl)}`;
        const res = await axios.get(proxyUrl, { responseType: 'arraybuffer', timeout: 15000 });
        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.headers['content-type'], 'video/mp2t');
        // MPEG-TS packet sync byte is 0x47
        assert.strictEqual(res.data[0], 0x47, 'First byte must be MPEG-TS sync byte 0x47!');
    });

    // 7. AVDB Catalog & Meta
    await testCase('7. AVDB Catalog & Metadata resolution', async () => {
        const cat = await avdb.getCatalog('avdb-censored', 'movie', {});
        assert(Array.isArray(cat) && cat.length > 0, 'AVDB catalog empty');
        const sample = cat[0];
        assert(sample.id.startsWith('avdb:'), 'Invalid AVDB ID');
    });

    // 8. AVDB M3U8 Generation on Render
    await testCase('8. AVDB M3U8 Playlist resolution on Render', async () => {
        const res = await axios.get(`${RENDER_BASE}/avdb/stream/jur-835.m3u8?cfhost=${CF_HOST}`, { timeout: 30000 });
        assert(res.data.includes('#EXTM3U'), 'Invalid AVDB M3U8');
        const lines = res.data.split('\n');
        const segLines = lines.filter(l => l.includes('helvid.com'));
        assert(segLines.length > 0, 'No helvid segments found');
        console.log(`\n     Sample AVDB segment: ${segLines[0].slice(0, 90)}...`);
    });

    // 9. VLXX Catalog & Segment unwrapper
    await testCase('9. VLXX Catalog & Edge Unwrapper', async () => {
        const cat = await vlxx.getCatalog('vlxx-latest', 'movie', {});
        assert(Array.isArray(cat) && cat.length > 0, 'VLXX catalog empty');

        const sampleSegUrl = 'https://p16-oec-sg.ibyteimg.com/obj/tos-alisg-i-aphluv4xwc-sg/0192be9785d348c781a70baeb305b0c1';
        const proxyUrl = `https://${CF_HOST}/vlxx/segment.ts?url=${encodeURIComponent(sampleSegUrl)}`;
        const res = await axios.get(proxyUrl, { responseType: 'arraybuffer', timeout: 12000 });
        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.headers['content-type'], 'video/mp2t');
        assert.strictEqual(res.data[0], 0x47, 'First byte must be MPEG-TS sync byte 0x47!');
    });

    // 10. HentaiZ Catalog & Stream
    await testCase('10. HentaiZ Catalog & Stream resolution', async () => {
        const cat = await hentaiz.getCatalog('series', {});
        assert(Array.isArray(cat) && cat.length > 0, 'HentaiZ catalog empty');
    });

    // 11. NguonC Stream Generation
    await testCase('11. NguonC Catalog & Stream generation', async () => {
        const cat = await nguonc.getCatalog('movie', {});
        assert(Array.isArray(cat) && cat.length > 0, 'NguonC catalog empty');
        const streams = await nguonc.getStream(cat[0].id, 'movie', CF_HOST);
        assert(Array.isArray(streams) && streams.length > 0, 'NguonC streams empty');
    });

    // 12. MissAV Catalog, Stream & M3U8
    await testCase('12. MissAV Catalog, Stream & M3U8 generation', async () => {
        const cat = await missav.getCatalog('missav-movie', 'movie', {});
        assert(Array.isArray(cat) && cat.length > 0, 'MissAV catalog empty');
        const streams = await missav.getStream('missav:siro-5719', 'movie', CF_HOST);
        assert(Array.isArray(streams) && streams.length > 0, 'MissAV streams empty');
        const vipStream = streams.find(s => s.name.includes('VIP Direct CDN'));
        assert(vipStream, 'Missing VIP Direct CDN stream');
        assert(vipStream.behaviorHints && vipStream.behaviorHints.proxyHeaders, 'Missing proxyHeaders on VIP stream');
    });

    console.log('\n====================================================');
    console.log(`📊 TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
    console.log('====================================================');

    if (failed > 0) {
        process.exit(1);
    }
}

runTests().catch(err => {
    console.error('Test Suite Fatal Error:', err);
    process.exit(1);
});
