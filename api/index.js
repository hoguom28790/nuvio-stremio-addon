const express = require('express');
const cors = require('cors');
const qs = require('querystring');
const https = require('https');
const axios = require('axios');
const addonInterface = require('../src/addon');
const { getManifest } = require('../src/manifest');
const { renderConfigPage } = require('../src/views/config');
const kkphim = require('../src/scrapers/kkphim');

const app = express();
app.use(cors());

// Initialize GAS proxy URL from environment on startup (for Render.com)
if (process.env.KKPHIM_GAS_PROXY_URL) {
    kkphim.setGasProxyUrl(process.env.KKPHIM_GAS_PROXY_URL);
    console.log('[KKPhim] GAS Proxy URL configured:', process.env.KKPHIM_GAS_PROXY_URL.slice(0, 60) + '...');
}


// Parse Base64 config helper
function parseConfig(configParam) {
    if (!configParam) return {};
    try {
        const decoded = Buffer.from(configParam, 'base64').toString('utf8');
        return JSON.parse(decoded);
    } catch (e) {
        try {
            return JSON.parse(decodeURIComponent(configParam));
        } catch (err) {
            return {};
        }
    }
}

// Healthcheck ping
app.get('/ping', (req, res) => res.json({ status: 'ok', ts: Date.now() }));

// Serve logo.png
const path = require('path');
app.get('/logo.png', (req, res) => {
    res.setHeader('Cache-Control', 'max-age=86400, public');
    res.sendFile(path.join(__dirname, '..', 'logo.png'));
});

// Manifest routes (Must be defined before generic parameterized routes)
app.get('/manifest.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'max-age=300, stale-while-revalidate=600, public');
    res.json(getManifest({}));
});

app.get('/:config/manifest.json', (req, res) => {
    const config = parseConfig(req.params.config);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'max-age=300, stale-while-revalidate=600, public');
    res.json(getManifest(config));
});

// Serve the Config / Landing page on root, /configure, and /:config/configure
app.get(['/', '/configure', '/:config/configure'], (req, res) => {
    const host = req.headers.host || 'hophimaddon.vercel.app';
    const config = parseConfig(req.params.config);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(renderConfigPage(host, config));
});

// Resource handler helper
const hentaiz = require('../src/scrapers/hentaiz');
const javhd = require('../src/scrapers/javhd');
const vlxx = require('../src/scrapers/vlxx');
const avdb = require('../src/scrapers/avdb');
const missav = require('../src/scrapers/missav');

async function handleResource(req, res, config) {
    const { resource, type } = req.params;
    let id = req.params.id;
    if (id) {
        try { id = decodeURIComponent(id); } catch (e) {}
    }
    const extra = req.params.extra ? qs.parse(req.params.extra) : {};
    if (extra && extra.genre && typeof extra.genre === 'string' && /phim\s+18(?:\s+|$)/i.test(extra.genre)) {
        extra.genre = extra.genre.replace(/phim\s+18(?:\s+|$)/i, 'Phim 18+');
    }
    
    // Inject current host into config for dynamic stream URLs (prioritize x-forwarded-host and cfhost)
    config.host = req.headers['x-forwarded-host'] || req.query.cfhost || process.env.CF_HOST || req.headers.host || 'hophimaddon.hophim-4g6qbubt.workers.dev';

    try {
        const resp = await addonInterface.get(resource, type, id, extra, config);
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.setHeader('Cache-Control', 'max-age=120, stale-while-revalidate=600, public');
        res.json(resp);
    } catch (err) {
        if (err.noHandler) {
            res.status(404).json({ err: 'not found' });
        } else {
            console.error(err);
            res.status(500).json({ err: 'handler error' });
        }
    }
}

// HentaiZ HLS M3U8 Stream Delivery Route
app.get('/hentaiz/stream/:videoId/:quality.m3u8', async (req, res) => {
    const { videoId, quality } = req.params;
    const cfHost = req.query.cfhost || process.env.CF_HOST || 'hophimaddon.hophim-4g6qbubt.workers.dev';
    try {
        const playlist = await hentaiz.getM3u8(videoId, quality, cfHost);
        res.setHeader('Content-Type', 'application/vnd.apple.mpegurl; charset=utf-8');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Cache-Control', 'max-age=1800, public');
        res.send(playlist);
    } catch (err) {
        console.error('[HentaiZ M3U8 Error]:', err.message);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(500).send('Error generating playlist');
    }
});

// HentaiZ Segment Route
// - ?stream=1 (Cloudflare Worker fallback when the edge IP is blocked by c1.animez.top): fetch here, return only the TS payload
// - otherwise: 302 to the Cloudflare Worker edge (0 Render bandwidth)
app.get('/hentaiz/segment.ts', async (req, res) => {
    const rawUrl = req.query.url;
    if (!rawUrl) return res.status(400).send('Missing url');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.query.stream !== '1') {
        const cfHost = process.env.CF_HOST || 'hophimaddon.hophim-4g6qbubt.workers.dev';
        const qsExtra = req.query.o !== undefined && req.query.l !== undefined ? `&o=${req.query.o}&l=${req.query.l}` : '';
        return res.redirect(302, `https://${cfHost}/hentaiz/segment.ts?url=${encodeURIComponent(rawUrl)}${qsExtra}`);
    }
    let u;
    try { u = new URL(rawUrl); } catch (e) { return res.status(400).send('Bad url'); }
    if (!(u.hostname === 'animez.top' || u.hostname.endsWith('.animez.top'))) {
        return res.status(403).send('Host not allowed');
    }
    try {
        const up = await axios.get(rawUrl, {
            responseType: 'arraybuffer',
            timeout: 20000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
                'Referer': 'https://x.haiten.org/',
                'Origin': 'https://x.haiten.org'
            }
        });
        const buf = Buffer.from(up.data);
        let start = 0;
        let end = buf.length;
        if (req.query.o !== undefined && req.query.l !== undefined) {
            start = parseInt(req.query.o, 10);
            end = Math.min(buf.length, start + parseInt(req.query.l, 10));
        } else {
            const iend = buf.indexOf(Buffer.from('IEND'));
            if (iend >= 0) start = iend + 8;
        }
        if (!(start < end) || buf[start] !== 0x47) {
            return res.status(502).send('Unexpected segment payload');
        }
        res.setHeader('Content-Type', 'video/mp2t');
        res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, immutable');
        res.send(buf.subarray(start, end));
    } catch (err) {
        const status = err.response && err.response.status ? err.response.status : 502;
        res.status(status).send('Upstream error: ' + (err.message || status));
    }
});


// JavHD HLS M3U8 Stream Delivery Route
app.get('/javhd/stream/:slug/:quality.m3u8', async (req, res) => {
    const { slug, quality } = req.params;
    const cfHost = req.query.cfhost || process.env.CF_HOST || 'hophimaddon.hophim-4g6qbubt.workers.dev';
    try {
        const playlist = await javhd.getM3u8(slug, quality, cfHost);
        res.setHeader('Content-Type', 'application/vnd.apple.mpegurl; charset=utf-8');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Cache-Control', 'public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600');
        res.send(playlist);
    } catch (err) {
        console.error('[JavHD M3U8 Error]:', err.message);
        res.status(500).send('Error generating playlist');
    }
});

// JavHD Poster Proxy: Redirect 302 to Cloudflare Worker edge (0 bandwidth on Render)
app.get('/javhd/poster/:name', (req, res) => {
    const cfHost = process.env.CF_HOST || 'hophimaddon.hophim-4g6qbubt.workers.dev';
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    return res.redirect(302, `https://${cfHost}/javhd/poster/${encodeURIComponent(req.params.name)}`);
});

// JavHD Segment Unwrapper: Redirect 302 to Cloudflare Worker edge to conserve Render bandwidth
app.get('/javhd/segment.ts', (req, res) => {
    const rawUrl = req.query.url;
    if (!rawUrl) return res.status(400).send('Missing url');

    const cfHost = process.env.CF_HOST || 'hophimaddon.hophim-4g6qbubt.workers.dev';
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    return res.redirect(302, `https://${cfHost}/javhd/segment.ts?url=${encodeURIComponent(rawUrl)}`);
});

// VLXX HLS M3U8 Stream Delivery Route
app.get('/vlxx/stream/:vid/:server.m3u8', async (req, res) => {
    const { vid, server } = req.params;
    const cfHost = req.query.cfhost || process.env.CF_HOST || 'hophimaddon.hophim-4g6qbubt.workers.dev';
    try {
        const playlist = await vlxx.getM3u8(vid, server, cfHost);
        res.setHeader('Content-Type', 'application/vnd.apple.mpegurl; charset=utf-8');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Cache-Control', 'max-age=600, stale-while-revalidate=1200, public');
        res.send(playlist);
    } catch (err) {
        console.error('[VLXX M3U8 Error]:', err.message);
        res.status(500).send('Error generating playlist');
    }
});

// VLXX Segment Unwrapper: Redirect 302 to Cloudflare Worker edge to conserve Render bandwidth
app.get('/vlxx/segment.ts', (req, res) => {
    const rawUrl = req.query.url;
    if (!rawUrl) return res.status(400).send('Missing url');

    const cfHost = process.env.CF_HOST || 'hophimaddon.hophim-4g6qbubt.workers.dev';
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    return res.redirect(302, `https://${cfHost}/vlxx/segment.ts?url=${encodeURIComponent(rawUrl)}`);
});

// Stream a single upstream segment through Render (only used when the Cloudflare edge cannot fetch it itself).
// Host-allowlisted so this never becomes an open proxy.
function streamUpstreamSegment(res, rawUrl, { referer, allowedHosts }) {
    let u;
    try {
        u = new URL(rawUrl);
    } catch (e) {
        return res.status(400).send('Bad url');
    }
    if (!allowedHosts.some(h => u.hostname === h || u.hostname.endsWith('.' + h))) {
        return res.status(403).send('Host not allowed');
    }
    res.setHeader('Content-Type', 'video/mp2t');
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, immutable');

    let origin = referer;
    try { origin = new URL(referer).origin; } catch (e) {}

    const upstreamReq = https.request({
        protocol: u.protocol,
        hostname: u.hostname,
        port: u.port || 443,
        path: u.pathname + u.search,
        method: 'GET',
        headers: {
            'Host': u.hostname,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
            'Referer': referer,
            'Origin': origin,
            'Accept': '*/*',
            'Connection': 'keep-alive'
        },
        timeout: 20000
    }, upstreamRes => {
        if (upstreamRes.statusCode >= 400) {
            upstreamRes.resume();
            return res.status(upstreamRes.statusCode).send('Upstream error: ' + upstreamRes.statusCode);
        }
        res.status(upstreamRes.statusCode);
        if (upstreamRes.headers['content-length']) {
            res.setHeader('Content-Length', upstreamRes.headers['content-length']);
        }
        upstreamRes.pipe(res);
    });
    upstreamReq.on('error', err => {
        if (!res.headersSent) res.status(502).send('Error: ' + err.message);
    });
    upstreamReq.on('timeout', () => {
        upstreamReq.destroy();
        if (!res.headersSent) res.status(504).send('Timeout');
    });
    upstreamReq.end();
}

function setCors(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
}

// AVDB HLS M3U8 Stream Delivery Route
// Playlist minted on Render -> helvid token bound to Render's IP -> segments must come back through Render (via=render)
app.get('/avdb/stream/:slug.m3u8', async (req, res) => {
    const { slug } = req.params;
    const cfHost = req.query.cfhost || process.env.CF_HOST || 'hophimaddon.hophim-4g6qbubt.workers.dev';
    setCors(res);
    try {
        const playlist = await avdb.getM3u8(slug, cfHost, null, {}, 'render');
        res.setHeader('Content-Type', 'application/vnd.apple.mpegurl; charset=utf-8');
        res.setHeader('Cache-Control', 'public, max-age=600, s-maxage=600');
        res.send(playlist);
    } catch (err) {
        console.error('[AVDB M3U8 Error]:', err.message);
        res.status(502).send('Error generating playlist');
    }
});

// AVDB Segment Route
// - ?stream=1 (called by the Cloudflare Worker for Render-minted playlists): stream from helvid with Render's IP
// - otherwise: 302 to the Cloudflare Worker edge (0 Render bandwidth)
app.get('/avdb/segment.ts', (req, res) => {
    const rawUrl = req.query.url;
    if (!rawUrl) return res.status(400).send('Missing url');
    setCors(res);
    if (req.query.stream === '1') {
        return streamUpstreamSegment(res, rawUrl, { referer: 'https://upload18.com/', allowedHosts: ['helvid.com'] });
    }
    const cfHost = process.env.CF_HOST || 'hophimaddon.hophim-4g6qbubt.workers.dev';
    return res.redirect(302, `https://${cfHost}/avdb/segment.ts?url=${encodeURIComponent(rawUrl)}`);
});

// MissAV HLS M3U8 Stream Delivery Route
app.get(['/missav/stream/:slug.m3u8', '/missav/stream/:slug/:quality.m3u8'], async (req, res) => {
    const { slug, quality = '1080' } = req.params;
    const cfHost = req.query.cfhost || process.env.CF_HOST || 'hophimaddon.hophim-4g6qbubt.workers.dev';
    setCors(res);
    try {
        const playlist = await missav.getM3u8(slug, quality, cfHost);
        res.setHeader('Content-Type', 'application/vnd.apple.mpegurl; charset=utf-8');
        res.setHeader('Cache-Control', 'public, max-age=1800, s-maxage=1800');
        res.send(playlist);
    } catch (err) {
        console.error('[MissAV M3U8 Error]:', err.message);
        res.status(502).send('Error generating playlist');
    }
});

// MissAV Segment Route
// - ?stream=1 (called by the Cloudflare Worker, surrit.com blocks Cloudflare IPs): stream via Render
// - otherwise: 302 to the Cloudflare Worker edge
app.get('/missav/segment.ts', (req, res) => {
    const rawUrl = req.query.url;
    if (!rawUrl) return res.status(400).send('Missing url');
    setCors(res);
    if (req.query.stream === '1') {
        return streamUpstreamSegment(res, rawUrl, { referer: 'https://missav.ai/', allowedHosts: ['surrit.com'] });
    }
    const cfHost = process.env.CF_HOST || 'hophimaddon.hophim-4g6qbubt.workers.dev';
    return res.redirect(302, `https://${cfHost}/missav/segment.ts?url=${encodeURIComponent(rawUrl)}`);
});

// KKPhim Clean M3U8 Stream Delivery Route (Filter out 15:00 and 3:00 SSAI ads)
app.get('/kkphim/clean.m3u8', async (req, res) => {
    const targetUrl = req.query.url;
    const cfHost = req.query.cfhost || process.env.CF_HOST || req.headers.host || 'hophimaddon.hophim-4g6qbubt.workers.dev';
    if (!targetUrl) return res.status(400).send('Missing url');
    try {
        const playlist = await kkphim.getCleanM3u8(targetUrl, cfHost);
        if (playlist) {
            res.setHeader('Content-Type', 'application/vnd.apple.mpegurl; charset=utf-8');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=7200');
            return res.send(playlist);
        }
    } catch (err) {
        console.error('[KKPhim Clean M3U8 Error]:', err.message);
    }
    // Auto-fallback: return Virtual Master Playlist (HTTP 200 OK) to avoid CORS Preflight (OPTIONS 405) from upstream CDN
    res.setHeader('Content-Type', 'application/vnd.apple.mpegurl; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Cache-Control', 'no-cache');
    return res.send(`#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000\n${targetUrl}\n`);
});

// Debug JavHD
app.get('/debug/javhd', async (req, res) => {
    let catalogCount = 0;
    let sampleStreams = null;
    try {
        const cat = await javhd.getCatalog('javhd-latest', 'movie', {});
        catalogCount = cat ? cat.length : 0;
    } catch (e) {
        catalogCount = e.message;
    }
    try {
        sampleStreams = await javhd.getStream('javhd:giup-em-hang-xom-sua-ong-nuoc-marino-azusa-4024', 'movie', req.headers.host);
    } catch (e) {
        sampleStreams = e.message;
    }
    res.json({
        catalogCount,
        sampleStreams
    });
});

// Debug route
app.get('/debug/hentaiz', async (req, res) => {
    let catalogCount = 0;
    let sampleStreams = null;
    try {
        const cat = await hentaiz.getCatalog('series', {});
        catalogCount = cat ? cat.length : 0;
    } catch (e) {
        catalogCount = e.message;
    }
    try {
        sampleStreams = await hentaiz.getStream('hentaiz:choro-mesu-days-2:1:2', 'series', req.headers.host);
    } catch (e) {
        sampleStreams = e.message;
    }

    res.json({
        catalogCount,
        sampleStreams
    });
});

app.get('/debug/fetch', async (req, res) => {
    const target = req.query.url;
    if (!target) return res.status(400).json({ error: 'Missing url query param' });
    const customReferer = req.query.referer;
    const customUa = req.query.ua;
    const customOrigin = req.query.origin;
    const reqHeaders = {
        'User-Agent': customUa || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': '*/*'
    };
    if (customReferer) reqHeaders['Referer'] = customReferer;
    if (customOrigin) reqHeaders['Origin'] = customOrigin;

    try {
        const t0 = Date.now();
        const r = await fetch(target, {
            headers: reqHeaders,
            signal: AbortSignal.timeout ? AbortSignal.timeout(15000) : undefined
        });
        const elapsed = Date.now() - t0;
        const text = await r.text();
        res.json({
            target,
            status: r.status,
            ok: r.ok,
            elapsedMs: elapsed,
            bodyLength: text.length,
            headers: Object.fromEntries(r.headers.entries()),
            body: text
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Configured Resource routes
app.get('/:config/:resource(catalog|stream|meta|subtitles)/:type/:id/:extra?.json', (req, res) => {
    const config = parseConfig(req.params.config);
    handleResource(req, res, config);
});

// Default Resource routes
app.get('/:resource(catalog|stream|meta|subtitles)/:type/:id/:extra?.json', (req, res) => {
    handleResource(req, res, {});
});

// Export the Express app so Vercel can run it
module.exports = app;

