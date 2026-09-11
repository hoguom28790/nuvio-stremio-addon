const kkphim = require('../src/scrapers/kkphim');

async function runTests() {
    console.log("=========================================");
    console.log("   Testing Nuvio/KKPhim Scraper        ");
    console.log("=========================================\n");
    
    // Test case: Use a known slug from phimapi
    // "biet-doi-danh-thue-4" (Expendables 4) or any known slug
    const testId = "kkphim:biet-doi-danh-thue-4"; 
    const testType = "movie";
    
    console.log(`[TEST] Fetching streams for ID: ${testId} (Type: ${testType})`);
    console.log("Please wait...\n");
    
    try {
        const startTime = Date.now();
        const streams = await kkphim.getStream(testId, testType);
        const endTime = Date.now();
        
        if (streams && streams.length > 0) {
            console.log(`[SUCCESS] Found ${streams.length} streams in ${endTime - startTime}ms:`);
            console.dir(streams, { depth: null, colors: true });
        } else {
            console.log(`[FAILED] No streams found or an error occurred. Time: ${endTime - startTime}ms`);
        }
    } catch (err) {
        console.error("[ERROR] Unhandled error during test execution:", err);
    }
    
    console.log("\n=========================================");
    console.log("   Test Finished");
    console.log("=========================================");
}

// Execute the test
runTests();
