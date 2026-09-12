const express = require('express');
const cors = require('cors');
const qs = require('querystring');
const addonInterface = require('../src/addon');
const { getManifest } = require('../src/manifest');
const { renderConfigPage } = require('../src/views/config');

const app = express();
app.use(cors());

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

async function handleResource(req, res, config) {
    const { resource, type, id } = req.params;
    const extra = req.params.extra ? qs.parse(req.params.extra) : {};
    
    // Inject current host into config for dynamic stream URLs
    config.host = req.headers.host || 'hophimaddon.vercel.app';

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
        res.setHeader('Cache-Control', 'max-age=1800, public');
        res.send(playlist);
    } catch (err) {
        console.error('[HentaiZ M3U8 Error]:', err.message);
        res.status(500).send('Error generating playlist');
    }
});

// Debug route for hentaiz
app.get('/debug/hentaiz', async (req, res) => {
    const axios = require('axios');
    try {
        const r = await axios.get('https://hentaiz2.com/browse/__data.json', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            },
            timeout: 10000
        });
        res.json({
            status: r.status,
            nodesCount: r.data?.nodes?.length,
            sample: JSON.stringify(r.data?.nodes?.[2]?.data).slice(0, 200)
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
            status: err.response?.status,
            data: typeof err.response?.data === 'string' ? err.response?.data.slice(0, 500) : err.response?.data
        });
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

