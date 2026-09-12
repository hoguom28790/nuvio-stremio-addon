const addon = require('../src/addon');
const { getManifest } = require('../src/manifest');

async function testAllScrapers() {
    console.log('==============================================');
    console.log('       TESTING HỒ PHIM ADDON & CONFIG         ');
    console.log('==============================================\n');

    // 1. Test Manifest
    console.log('[1] Checking Manifest:');
    console.log(`- Addon Name: ${addon.manifest.name}`);
    console.log(`- Version: ${addon.manifest.version}`);
    console.log(`- Total Catalogs: ${addon.manifest.catalogs.length}`);
    const tvInManifest = addon.manifest.catalogs.some(c => c.type === 'tv' || c.id.includes('live'));
    console.log(`- TV / Sports removed? ${!tvInManifest ? 'YES ✓' : 'NO ✗'}\n`);

    // 2. Test Catalogs
    const catalogsToTest = [
        { id: 'kkphim-movie', type: 'movie' },
        { id: 'nguonc-movie', type: 'movie' },
        { id: 'vsmov-movie', type: 'movie' },
        { id: 'hh3d-movie', type: 'movie' },
        { id: 'clbpx-movie', type: 'movie' },
        { id: 'stp-movie', type: 'movie' },
        { id: 'yan-movie', type: 'movie' }
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

    // 3. Test Config Filtering on Manifest
    console.log('[3] Testing Config Manifest Filtering:');
    const customConfig = { sources: ['kkphim', 'vsmov'], prefCdn: true, prefProxy: false };
    const filteredManifest = getManifest(customConfig);
    console.log(`  ✓ Filtered Catalogs count (only kkphim & vsmov): ${filteredManifest.catalogs.length}`);
    const catalogIds = filteredManifest.catalogs.map(c => c.id).join(', ');
    console.log(`  ✓ Catalogs present: ${catalogIds}`);

    // Test Config Filtering on Catalog Handler
    const blockedCatalog = await addon.get('catalog', 'movie', 'nguonc-movie', {}, customConfig);
    console.log(`  ✓ Disabled source (nguonc) returns: ${blockedCatalog.metas.length} items (expected: 0)`);
    const allowedCatalog = await addon.get('catalog', 'movie', 'kkphim-movie', {}, customConfig);
    console.log(`  ✓ Enabled source (kkphim) returns: ${allowedCatalog.metas.length} items`);
    console.log('');

    // 4. Test Stream Handlers
    console.log('[4] Testing Stream Handlers:');
    const streamsToTest = [
        { id: 'kkphim:biet-doi-danh-thue-4', type: 'movie' },
        { id: 'nguonc:khach', type: 'movie' }
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

