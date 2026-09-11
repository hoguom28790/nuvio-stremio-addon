const addon = require('../src/addon');

async function testAllScrapers() {
    console.log('==============================================');
    console.log('       TESTING HPADDON MULTI-SOURCE SCRAPERS  ');
    console.log('==============================================\n');

    // 1. Test Manifest
    console.log('[1] Checking Manifest:');
    console.log(`- Addon Name: ${addon.manifest.name}`);
    console.log(`- Version: ${addon.manifest.version}`);
    console.log(`- Total Catalogs: ${addon.manifest.catalogs.length}\n`);

    // 2. Test Catalogs
    const catalogsToTest = [
        { id: 'kkphim-movie', type: 'movie' },
        { id: 'nguonc-movie', type: 'movie' },
        { id: 'vsmov-movie', type: 'movie' },
        { id: 'hh3d-movie', type: 'movie' },
        { id: 'clbpx-movie', type: 'movie' },
        { id: 'sports-live', type: 'tv' },
        { id: 'streamfree-live', type: 'tv' }
    ];

    console.log('[2] Testing Catalog Handlers:');
    for (const cat of catalogsToTest) {
        try {
            const start = Date.now();
            const res = await addon.get('catalog', cat.type, cat.id, {});
            const count = res?.metas?.length || 0;
            const first = res?.metas?.[0]?.name || 'None';
            console.log(`  ✓ Catalog "${cat.id}": ${count} items in ${Date.now() - start}ms (Top: "${first}")`);
        } catch (e) {
            console.log(`  ✗ Catalog "${cat.id}" Error: ${e.message}`);
        }
    }
    console.log('');

    // 3. Test Meta Handlers
    console.log('[3] Testing Meta Handlers:');
    const metasToTest = [
        { id: 'kkphim:hen-em-ngay-nhat-thuc', type: 'movie' },
        { id: 'nguonc:khach', type: 'movie' },
        { id: 'sports:xoilac', type: 'tv' }
    ];
    for (const m of metasToTest) {
        try {
            const start = Date.now();
            const res = await addon.get('meta', m.type, m.id);
            const name = res?.meta?.name || 'Unknown';
            console.log(`  ✓ Meta for "${m.id}": "${name}" in ${Date.now() - start}ms`);
        } catch (e) {
            console.log(`  ✗ Meta for "${m.id}" Error: ${e.message}`);
        }
    }
    console.log('');

    // 4. Test Stream Handlers
    console.log('[4] Testing Stream Handlers:');
    const streamsToTest = [
        { id: 'kkphim:biet-doi-danh-thue-4', type: 'movie' },
        { id: 'nguonc:khach', type: 'movie' },
        { id: 'sports:xoilac', type: 'tv' }
    ];
    for (const s of streamsToTest) {
        try {
            const start = Date.now();
            const res = await addon.get('stream', s.type, s.id);
            const count = res?.streams?.length || 0;
            const firstName = res?.streams?.[0]?.name || 'None';
            console.log(`  ✓ Streams for "${s.id}": ${count} links in ${Date.now() - start}ms (Source: ${firstName})`);
        } catch (e) {
            console.log(`  ✗ Streams for "${s.id}" Error: ${e.message}`);
        }
    }

    console.log('\n==============================================');
    console.log('            ALL TESTS COMPLETED!              ');
    console.log('==============================================');
}

testAllScrapers();
