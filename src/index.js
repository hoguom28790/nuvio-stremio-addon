const { addonBuilder, serveHTTP } = require('stremio-addon-sdk');
const manifest = require('./manifest');
const { scrapeOphimApi } = require('./scrapers/ophim');
const cache = require('./utils/cache');

const builder = new addonBuilder(manifest);

// Configuration for different sources
// Mapping prefixes to their respective API base URLs and names
const SOURCE_CONFIG = {
    'kkphim:': { baseUrl: 'https://phimapi.com', name: 'KKPhim' },
    'nguonc:': { baseUrl: 'https://nguonc.com/api', name: 'NguonC' }, // Example URL, adjust if needed
    'stp:': { baseUrl: 'https://stp.com/api', name: 'STP' },
    'hh3d:': { baseUrl: 'https://hh3d.com/api', name: 'HH3D' },
    'clbpx:': { baseUrl: 'https://clbpx.com/api', name: 'CLBPX' },
    'vsmov:': { baseUrl: 'https://vsmov.com/api', name: 'VSMOV' },
    'yan:': { baseUrl: 'https://yan.com/api', name: 'YAN' }
};

console.log("Initializing Nuvio Addon (Multi-Source)...");

builder.defineStreamHandler(async ({ type, id }) => {
    console.log(`[Stream Request] Type: ${type}, ID: ${id}`);
    
    const cacheKey = `stream:${type}:${id}`;
    const cachedStreams = cache.get(cacheKey);
    if (cachedStreams) {
        console.log(`[Cache Hit] Returning cached streams for ${id}`);
        return Promise.resolve({ streams: cachedStreams });
    }

    let streams = [];
    
    try {
        // Check which source config matches the ID prefix
        let sourceMatched = false;
        
        for (const [prefix, config] of Object.entries(SOURCE_CONFIG)) {
            if (id.startsWith(prefix)) {
                sourceMatched = true;
                const slug = id.replace(prefix, '');
                const fetchedStreams = await scrapeOphimApi(slug, config.baseUrl, config.name);
                streams = streams.concat(fetchedStreams);
                break; // Or we could allow searching multiple if it's a generic ID
            }
        }

        // If no specific prefix matched (e.g., generic IMDB id like "tt1234567")
        if (!sourceMatched) {
            console.log(`[Info] Generic ID (${id}), attempting to search across sources or mapping...`);
            // In a complete implementation, we'd search the title or map IMDB ID here.
            // For testing, we mock a response using a default KKPhim fetch:
            const mockSlug = 'biet-doi-danh-thue-4';
            const defaultSource = SOURCE_CONFIG['kkphim:'];
            const fetchedStreams = await scrapeOphimApi(mockSlug, defaultSource.baseUrl, defaultSource.name);
            streams = streams.concat(fetchedStreams);
        }

        if (streams && streams.length > 0) {
            cache.set(cacheKey, streams, 3600); 
            console.log(`[Cache Set] Cached ${streams.length} streams for ${id}`);
        }
    } catch (error) {
        console.error(`[Error] Failed to handle stream for ${id}:`, error.message);
    }
    
    return Promise.resolve({ streams });
});

const port = process.env.PORT || 7000;
serveHTTP(builder.getInterface(), { port });
console.log(`Addon running at http://localhost:${port}/manifest.json`);
