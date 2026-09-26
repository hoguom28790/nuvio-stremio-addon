const express = require('express');
const cors = require('cors');
const qs = require('querystring');
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
const kkphim = require('../src/scrapers/kkphim');

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
    
    // Inject current host into config for dynamic stream URLs
    config.host = req.headers.host || 'hophimaddon.hophim-4g6qbubt.workers.dev';

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
    try {
        const playlist = await hentaiz.getM3u8(videoId, quality);
        res.setHeader('Content-Type', 'application/vnd.apple.mpegurl; charset=utf-8');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Cache-Control', 'max-age=1800, public');
        res.send(playlist);
    } catch (err) {
        console.error('[HentaiZ M3U8 Error]:', err.message);
        res.status(500).send('Error generating playlist');
    }
});

// JavHD HLS M3U8 Stream Delivery Route
app.get('/javhd/stream/:slug/:quality.m3u8', async (req, res) => {
    const { slug, quality } = req.params;
    const host = req.headers.host || 'hophimaddon.vercel.app';
    try {
        const playlist = await javhd.getM3u8(slug, quality, host);
        res.setHeader('Content-Type', 'application/vnd.apple.mpegurl; charset=utf-8');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Cache-Control', 'max-age=600, stale-while-revalidate=1200, public');
        res.send(playlist);
    } catch (err) {
        console.error('[JavHD M3U8 Error]:', err.message);
        res.status(500).send('Error generating playlist');
    }
});

// JavHD Segment Unwrapper (Strips 95-byte PNG fake header to output pure MPEG-TS)
app.get('/javhd/segment.ts', async (req, res) => {
    const rawUrl = req.query.url;
    if (!rawUrl) return res.status(400).send('Missing url');

    if (process.env.SEGMENT_PROXY_URL) {
        const base = process.env.SEGMENT_PROXY_URL.replace(/\/+$/, '');
        const sep = base.includes('?') ? '&' : '?';
        return res.redirect(302, `${base}${sep}url=${encodeURIComponent(rawUrl)}`);
    }

    try {
        const upstream = await axios.get(rawUrl, {
            responseType: 'stream',
            timeout: 15000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Referer': 'https://javhdz.ac/'
            }
        });

        res.setHeader('Content-Type', 'video/mp2t');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, immutable');
        res.setHeader('CDN-Cache-Control', 'public, max-age=86400');
        res.setHeader('Vercel-CDN-Cache-Control', 'public, max-age=86400');

        let stripped = false;
        let buf = Buffer.alloc(0);

        upstream.data.on('data', (chunk) => {
            if (!stripped) {
                buf = Buffer.concat([buf, chunk]);
                if (buf.length >= 95) {
                    // Check for PNG signature: 0x89 0x50 0x4E 0x47
                    if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47) {
                        res.write(buf.slice(95));
                    } else {
                        res.write(buf);
                    }
                    stripped = true;
                    buf = null;
                }
            } else {
                res.write(chunk);
            }
        });

        upstream.data.on('end', () => {
            if (!stripped && buf && buf.length > 0) {
                res.write(buf);
            }
            res.end();
        });

        upstream.data.on('error', (err) => {
            console.error('[JavHD Segment Stream Error]:', err.message);
            if (!res.headersSent) res.status(502).send('Stream error');
            else res.end();
        });

        req.on('close', () => {
            if (upstream.data && typeof upstream.data.destroy === 'function') {
                upstream.data.destroy();
            }
        });
    } catch (err) {
        console.error('[JavHD Segment Proxy Error]:', err.message);
        if (!res.headersSent) res.status(502).send('Upstream error');
    }
});

// VLXX HLS M3U8 Stream Delivery Route
app.get('/vlxx/stream/:vid/:server.m3u8', async (req, res) => {
    const { vid, server } = req.params;
    const host = req.headers.host || 'hophimaddon.vercel.app';
    try {
        const playlist = await vlxx.getM3u8(vid, server, host);
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

// VLXX Segment Unwrapper (Strips 95-byte PNG fake header to output pure MPEG-TS)
app.get('/vlxx/segment.ts', async (req, res) => {
    const rawUrl = req.query.url;
    if (!rawUrl) return res.status(400).send('Missing url');

    if (process.env.SEGMENT_PROXY_URL) {
        const base = process.env.SEGMENT_PROXY_URL.replace(/\/+$/, '');
        const sep = base.includes('?') ? '&' : '?';
        return res.redirect(302, `${base}${sep}url=${encodeURIComponent(rawUrl)}`);
    }

    try {
        const upstream = await axios.get(rawUrl, {
            responseType: 'stream',
            timeout: 15000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Referer': 'https://vlxx.phd/'
            }
        });

        res.setHeader('Content-Type', 'video/mp2t');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, immutable');
        res.setHeader('CDN-Cache-Control', 'public, max-age=86400');
        res.setHeader('Vercel-CDN-Cache-Control', 'public, max-age=86400');

        let stripped = false;
        let buf = Buffer.alloc(0);

        upstream.data.on('data', (chunk) => {
            if (!stripped) {
                buf = Buffer.concat([buf, chunk]);
                if (buf.length >= 95) {
                    // Check for PNG signature: 0x89 0x50 0x4E 0x47
                    if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47) {
                        res.write(buf.slice(95));
                    } else {
                        res.write(buf);
                    }
                    stripped = true;
                    buf = null;
                }
            } else {
                res.write(chunk);
            }
        });

        upstream.data.on('end', () => {
            if (!stripped && buf && buf.length > 0) {
                res.write(buf);
            }
            res.end();
        });

        upstream.data.on('error', (err) => {
            console.error('[VLXX Segment Stream Error]:', err.message);
            if (!res.headersSent) res.status(502).send('Stream error');
            else res.end();
        });

        req.on('close', () => {
            if (upstream.data && typeof upstream.data.destroy === 'function') {
                upstream.data.destroy();
            }
        });
    } catch (err) {
        console.error('[VLXX Segment Proxy Error]:', err.message);
        if (!res.headersSent) res.status(502).send('Upstream error');
    }
});


// AVDB HLS M3U8 Stream Delivery Route
app.get('/avdb/stream/:slug.m3u8', async (req, res) => {
    const { slug } = req.params;
    const host = req.headers.host || 'hophimaddon.hophim-4g6qbubt.workers.dev';
    try {
        const playlist = await avdb.getM3u8(slug, host);
        res.setHeader('Content-Type', 'application/vnd.apple.mpegurl; charset=utf-8');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Cache-Control', 'max-age=600, stale-while-revalidate=1200, public');
        res.send(playlist);
    } catch (err) {
        console.error('[AVDB M3U8 Error]:', err.message);
        res.status(500).send('Error generating playlist');
    }
});

// AVDB Segment Proxy Route
app.get('/avdb/segment.ts', async (req, res) => {
    const rawUrl = req.query.url;
    if (!rawUrl) return res.status(400).send('Missing url');

    if (process.env.SEGMENT_PROXY_URL) {
        const base = process.env.SEGMENT_PROXY_URL.replace(/\/+$/, '');
        const sep = base.includes('?') ? '&' : '?';
        return res.redirect(302, `${base}${sep}url=${encodeURIComponent(rawUrl)}`);
    }

    try {
        const upstream = await axios.get(rawUrl, {
            responseType: 'stream',
            timeout: 15000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Referer': 'https://upload18.org/'
            }
        });

        res.setHeader('Content-Type', 'video/mp2t');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, immutable');
        res.setHeader('CDN-Cache-Control', 'public, max-age=86400');
        res.setHeader('Vercel-CDN-Cache-Control', 'public, max-age=86400');

        upstream.data.pipe(res);

        upstream.data.on('error', (err) => {
            console.error('[AVDB Segment Stream Error]:', err.message);
            if (!res.headersSent) res.status(502).send('Stream error');
            else res.end();
        });

        req.on('close', () => {
            if (upstream.data && typeof upstream.data.destroy === 'function') {
                upstream.data.destroy();
            }
        });
    } catch (err) {
        console.error('[AVDB Segment Proxy Error]:', err.message);
        if (!res.headersSent) res.status(502).send('Upstream error');
    }
});

// KKPhim Clean M3U8 Stream Delivery Route (Filter out 15:00 and 3:00 SSAI ads)
app.get('/kkphim/clean.m3u8', async (req, res) => {
    const targetUrl = req.query.url;
    const host = req.headers.host || 'localhost';
    if (!targetUrl) return res.status(400).send('Missing url');
    try {
        const playlist = await kkphim.getCleanM3u8(targetUrl, host);
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
    // Auto-fallback: redirect directly to upstream targetUrl
    // MUST include CORS headers so Stremio Web (browser) can follow the cross-origin redirect
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.set('Access-Control-Allow-Headers', '*');
    return res.redirect(302, targetUrl);
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

