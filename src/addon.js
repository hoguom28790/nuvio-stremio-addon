const manifest = require('./manifest');

const kkphim = require('./scrapers/kkphim');
const nguonc = require('./scrapers/nguonc');

const hentaiz = require('./scrapers/hentaiz');
const javhd = require('./scrapers/javhd');
const vlxx = require('./scrapers/vlxx');
const avdb = require('./scrapers/avdb');
const missav = require('./scrapers/missav');
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

// Helper to check if source is enabled in config
function isSourceEnabled(sourcePrefix, config) {
    if (!config || !config.sources || !Array.isArray(config.sources)) {
        return true; // default enabled for all sources
    }
    if (sourcePrefix.startsWith('avdb')) {
        return config.sources.includes(sourcePrefix) || config.sources.includes('avdb');
    }
    return config.sources.includes(sourcePrefix);
}

// 1. CATALOG HANDLER
builder.defineCatalogHandler(async ({ type, id, extra = {}, config = {} }) => {
    if (id) {
        try { id = decodeURIComponent(id); } catch (e) {}
    }
    console.log(`[Catalog Request] Type: ${type}, ID: ${id}, Extra:`, extra);
    try {
        if (id === 'kkphim-movie' && isSourceEnabled('kkphim', config)) return { metas: await kkphim.getCatalog('movie', extra) };
        if (id === 'kkphim-series' && isSourceEnabled('kkphim', config)) return { metas: await kkphim.getCatalog('series', extra) };

        if (id === 'nguonc-movie' && isSourceEnabled('nguonc', config)) return { metas: await nguonc.getCatalog('movie', extra) };
        if (id === 'nguonc-series' && isSourceEnabled('nguonc', config)) return { metas: await nguonc.getCatalog('series', extra) };

        if ((id === 'hentaiz-anime' || id === 'hentaiz-movie') && isSourceEnabled('hentaiz', config)) {
            return { metas: await hentaiz.getCatalog(type, extra) };
        }

        if (id.startsWith('javhd-') && isSourceEnabled('javhd', config)) {
            return { metas: await javhd.getCatalog(id, type, extra, config.host) };
        }

        if (id.startsWith('vlxx-') && isSourceEnabled('vlxx', config)) {
            return { metas: await vlxx.getCatalog(id, type, extra) };
        }

        if (id.startsWith('avdb-') && (isSourceEnabled('avdb', config) || isSourceEnabled(id.replace('-', '_'), config))) {
            return { metas: await avdb.getCatalog(id, type, extra) };
        }

        if (id.startsWith('missav-') && isSourceEnabled('missav', config)) {
            return { metas: await missav.getCatalog(id, type, extra) };
        }

    } catch (e) {
        console.error(`[Catalog Error] ID: ${id}:`, e.message);
    }
    return { metas: [] };
});

// 2. META HANDLER
builder.defineMetaHandler(async ({ type, id, config = {} }) => {
    if (id) {
        try { id = decodeURIComponent(id); } catch (e) {}
    }
    console.log(`[Meta Request] Type: ${type}, ID: ${id}`);
    try {
        if (id.startsWith('kkphim:') && isSourceEnabled('kkphim', config)) {
            const meta = await kkphim.getMeta(type, id);
            if (meta) return { meta };
        }
        if (id.startsWith('nguonc:') && isSourceEnabled('nguonc', config)) {
            const meta = await nguonc.getMeta(type, id);
            if (meta) return { meta };
        }
        if (id.startsWith('hentaiz:')) {
            const meta = await hentaiz.getMeta(type, id);
            if (meta) return { meta };
        }
        if (id.startsWith('javhd:')) {
            const meta = await javhd.getMeta(type, id, config.host);
            if (meta) return { meta };
        }
        if (id.startsWith('vlxx:')) {
            const meta = await vlxx.getMeta(type, id);
            if (meta) return { meta };
        }
        if (id.startsWith('avdb:')) {
            const meta = await avdb.getMeta(type, id);
            if (meta) return { meta };
        }
        if (id.startsWith('missav:')) {
            const meta = await missav.getMeta(type, id);
            if (meta) return { meta };
        }
    } catch (e) {
        console.error(`[Meta Error] ID: ${id}:`, e.message);
    }
    return { meta: {} };
});

// 3. STREAM HANDLER
builder.defineStreamHandler(async ({ type, id, config = {} }) => {
    if (id) {
        try { id = decodeURIComponent(id); } catch (e) {}
    }
    console.log(`[Stream Request] Type: ${type}, ID: ${id}`);
    
    const configHash = config && config.sources ? JSON.stringify(config) : 'default';
    const cacheKey = `stream:${type}:${id}:${configHash}`;
    const cachedStreams = cache.get(cacheKey);
    if (cachedStreams) {
        console.log(`[Cache Hit] Returning ${cachedStreams.length} streams for ${id}`);
        return { streams: cachedStreams };
    }

    let streams = [];

    try {
        if (id.startsWith('kkphim:') && isSourceEnabled('kkphim', config)) {
            streams = await kkphim.getStream(id, type, config.host);
        } else if (id.startsWith('nguonc:') && isSourceEnabled('nguonc', config)) {
            streams = await nguonc.getStream(id, type, config.host);
        } else if (id.startsWith('hentaiz:')) {
            streams = await hentaiz.getStream(id, type, config.host);
        } else if (id.startsWith('javhd:')) {
            streams = await javhd.getStream(id, type, config.host);
        } else if (id.startsWith('vlxx:')) {
            streams = await vlxx.getStream(id, type, config.host);
        } else if (id.startsWith('avdb:')) {
            streams = await avdb.getStream(id, type, config.host);
        } else if (id.startsWith('missav:')) {
            streams = await missav.getStream(id, type, config.host);
        } else if (id.startsWith('tt')) {
            if (config.prefImdb !== false) {
                streams = await imdb.getStream(id, type, config);
            }
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

