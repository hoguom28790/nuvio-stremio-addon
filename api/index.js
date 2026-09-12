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

// Debug route
app.get('/debug/hentaiz', async (req, res) => {
    const axios = require('axios');
    const segUrl = 'https://c1.animez.top/7b9ab61d-239a-4641-bee1-6c018acfd21d/2R0nZA/4rDfPXoeWG6LOzLkqZ-_xR8jUsQ.png';
    const result = {};
    try {
        const rSeg = await axios.get(segUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Referer': 'https://x.haiten.org/',
                'Range': 'bytes=8343-10343'
            },
            timeout: 8000
        });
        result.segStatus = rSeg.status;
        result.segLen = rSeg.data?.length;
    } catch (e) {
        result.segError = { status: e.response?.status, message: e.message };
    }

    try {
        const streams = await hentaiz.getStream('hentaiz:kanojo-saimin-2', 'series', 'hophimaddon.vercel.app');
        result.streamsCount = streams.length;
        result.sample = streams[0];
    } catch (e) {
        result.streamError = e.message;
    }

    res.json(result);
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

