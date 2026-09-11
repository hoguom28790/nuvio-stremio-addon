const { addonBuilder } = require('stremio-addon-sdk');
const manifest = require('./manifest');
const { scrapeOphimApi } = require('./scrapers/ophim');
const cache = require('./utils/cache');

const builder = new addonBuilder(manifest);

const SOURCE_CONFIG = {
    'kkphim:': { baseUrl: 'https://phimapi.com', name: 'KKPhim' },
    'nguonc:': { baseUrl: 'https://nguonc.com/api', name: 'NguonC' },
    'stp:': { baseUrl: 'https://stp.com/api', name: 'STP' },
    'hh3d:': { baseUrl: 'https://hh3d.com/api', name: 'HH3D' },
    'clbpx:': { baseUrl: 'https://clbpx.com/api', name: 'CLBPX' },
    'vsmov:': { baseUrl: 'https://vsmov.com/api', name: 'VSMOV' },
    'yan:': { baseUrl: 'https://yan.com/api', name: 'YAN' }
};

builder.defineStreamHandler(async ({ type, id }) => {
    console.log(`[Stream Request] Type: ${type}, ID: ${id}`);
    
    const cacheKey = `stream:${type}:${id}`;
    const cachedStreams = cache.get(cacheKey);
    if (cachedStreams) {
        return Promise.resolve({ streams: cachedStreams });
    }

    let streams = [];
    
    try {
        let sourceMatched = false;
        
        for (const [prefix, config] of Object.entries(SOURCE_CONFIG)) {
            if (id.startsWith(prefix)) {
                sourceMatched = true;
                const slug = id.replace(prefix, '');
                const fetchedStreams = await scrapeOphimApi(slug, config.baseUrl, config.name);
                streams = streams.concat(fetchedStreams);
                break;
            }
        }

        if (!sourceMatched) {
            const mockSlug = 'biet-doi-danh-thue-4';
            const defaultSource = SOURCE_CONFIG['kkphim:'];
            const fetchedStreams = await scrapeOphimApi(mockSlug, defaultSource.baseUrl, defaultSource.name);
            streams = streams.concat(fetchedStreams);
        }

        if (streams && streams.length > 0) {
            cache.set(cacheKey, streams, 3600); 
        }
    } catch (error) {
        console.error(`[Error] Failed to handle stream for ${id}:`, error.message);
    }
    
    return Promise.resolve({ streams });
});

module.exports = builder.getInterface();
