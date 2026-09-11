const manifest = require('./manifest');

const kkphim = require('./scrapers/kkphim');
const nguonc = require('./scrapers/nguonc');
const vsmov = require('./scrapers/vsmov');
const animation = require('./scrapers/animation');
const clbpx = require('./scrapers/clbpx');
const live = require('./scrapers/live');
const imdb = require('./scrapers/imdb');
const cache = require('./utils/cache');

// Custom Builder to allow manifests larger than the default 8KB SDK limit
function CustomAddonBuilder(manifest) {
    const handlers = {};
    this.defineResourceHandler = function(resource, handler) {
        handlers[resource] = handler;
        return this;
    };
    this.defineStreamHandler = this.defineResourceHandler.bind(this, 'stream');
    this.defineMetaHandler = this.defineResourceHandler.bind(this, 'meta');
    this.defineCatalogHandler = this.defineResourceHandler.bind(this, 'catalog');
    this.defineSubtitlesHandler = this.defineResourceHandler.bind(this, 'subtitles');

    this.getInterface = function() {
        function AddonInterface() {
            this.manifest = Object.freeze(Object.assign({}, manifest));
            this.get = (resource, type, id, extra = {}, config = {}) => {
                const handler = handlers[resource];
                if (!handler) {
                    return Promise.reject({ message: `No handler for ${resource}`, noHandler: true });
                }
                return handler({ type, id, extra, config });
            };
        }
        return new AddonInterface();
    };
    return this;
}

const builder = new CustomAddonBuilder(manifest);

// 1. CATALOG HANDLER
builder.defineCatalogHandler(async ({ type, id, extra = {} }) => {
    console.log(`[Catalog Request] Type: ${type}, ID: ${id}, Extra:`, extra);
    try {
        if (id === 'kkphim-movie') return { metas: await kkphim.getCatalog('movie', extra) };
        if (id === 'kkphim-series') return { metas: await kkphim.getCatalog('series', extra) };

        if (id === 'nguonc-movie') return { metas: await nguonc.getCatalog('movie', extra) };
        if (id === 'nguonc-series') return { metas: await nguonc.getCatalog('series', extra) };

        if (id === 'vsmov-movie') return { metas: await vsmov.getCatalog('movie', extra) };
        if (id === 'vsmov-series') return { metas: await vsmov.getCatalog('series', extra) };

        if (id === 'hh3d-movie') return { metas: await animation.getCatalog('hh3d-movie', 'movie', extra) };
        if (id === 'hh3d-series') return { metas: await animation.getCatalog('hh3d-series', 'series', extra) };

        if (id === 'yan-movie') return { metas: await animation.getCatalog('yan-movie', 'movie', extra) };
        if (id === 'stp-movie') return { metas: await animation.getCatalog('stp-movie', 'movie', extra) };

        if (id === 'clbpx-movie') return { metas: await clbpx.getCatalog('movie', extra) };
        if (id === 'clbpx-series') return { metas: await clbpx.getCatalog('series', extra) };

        if (id === 'streamfree-live') return { metas: await live.getCatalog('streamfree-live', 'tv', extra) };
        if (id === 'sports-live') return { metas: await live.getCatalog('sports-live', 'tv', extra) };
    } catch (e) {
        console.error(`[Catalog Error] ID: ${id}:`, e.message);
    }
    return { metas: [] };
});

// 2. META HANDLER
builder.defineMetaHandler(async ({ type, id }) => {
    console.log(`[Meta Request] Type: ${type}, ID: ${id}`);
    try {
        if (id.startsWith('kkphim:')) {
            const meta = await kkphim.getMeta(type, id);
            if (meta) return { meta };
        }
        if (id.startsWith('nguonc:')) {
            const meta = await nguonc.getMeta(type, id);
            if (meta) return { meta };
        }
        if (id.startsWith('vsmov:')) {
            const meta = await vsmov.getMeta(type, id);
            if (meta) return { meta };
        }
        if (id.startsWith('hh3d:')) {
            const meta = await animation.getMeta('hh3d', type, id);
            if (meta) return { meta };
        }
        if (id.startsWith('yan:')) {
            const meta = await animation.getMeta('yan', type, id);
            if (meta) return { meta };
        }
        if (id.startsWith('stp:')) {
            const meta = await animation.getMeta('stp', type, id);
            if (meta) return { meta };
        }
        if (id.startsWith('clbpx:')) {
            const meta = await clbpx.getMeta(type, id);
            if (meta) return { meta };
        }
        if (id.startsWith('streamfree:') || id.startsWith('sports:')) {
            const meta = await live.getMeta(type, id);
            if (meta) return { meta };
        }
    } catch (e) {
        console.error(`[Meta Error] ID: ${id}:`, e.message);
    }
    return { meta: {} };
});

// 3. STREAM HANDLER
builder.defineStreamHandler(async ({ type, id }) => {
    console.log(`[Stream Request] Type: ${type}, ID: ${id}`);
    
    const cacheKey = `stream:${type}:${id}`;
    const cachedStreams = cache.get(cacheKey);
    if (cachedStreams) {
        console.log(`[Cache Hit] Returning ${cachedStreams.length} streams for ${id}`);
        return { streams: cachedStreams };
    }

    let streams = [];

    try {
        if (id.startsWith('kkphim:')) {
            streams = await kkphim.getStream(id, type);
        } else if (id.startsWith('nguonc:')) {
            streams = await nguonc.getStream(id, type);
        } else if (id.startsWith('vsmov:')) {
            streams = await vsmov.getStream(id, type);
        } else if (id.startsWith('hh3d:')) {
            streams = await animation.getStream('hh3d', id, type);
        } else if (id.startsWith('yan:')) {
            streams = await animation.getStream('yan', id, type);
        } else if (id.startsWith('stp:')) {
            streams = await animation.getStream('stp', id, type);
        } else if (id.startsWith('clbpx:')) {
            streams = await clbpx.getStream(id, type);
        } else if (id.startsWith('streamfree:') || id.startsWith('sports:')) {
            streams = await live.getStream(id, type);
        } else if (id.startsWith('tt')) {
            streams = await imdb.getStream(id, type);
        }

        if (streams && streams.length > 0) {
            cache.set(cacheKey, streams, 1800);
        }
    } catch (err) {
        console.error(`[Stream Error] ID: ${id}:`, err.message);
    }

    return { streams };
});

module.exports = builder.getInterface();
