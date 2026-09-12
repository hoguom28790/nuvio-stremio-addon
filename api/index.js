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
const axios = require('axios');
app.get('/logo.png', (req, res) => {
    res.setHeader('Cache-Control', 'max-age=86400, public');
    res.sendFile(path.join(__dirname, '..', 'logo.png'));
});

// Debug endpoint to diagnose NguonC outbound connectivity from Vercel
app.get('/debug-nguonc', async (req, res) => {
    const url = req.query.url || 'https://phim.nguonc.com/api/films/danh-sach/phim-le?page=1';
    const ua = req.query.ua || 'default';
    const method = req.query.method || 'axios';

    try {
        const t0 = Date.now();
        if (method === 'fetch') {
            const fetchRes = await fetch(url, {
                headers: ua === 'none' ? {} : { 'User-Agent': ua }
            });
            const text = await fetchRes.text();
            let json;
            try { json = JSON.parse(text); } catch (e) {}
            return res.json({
                ok: fetchRes.ok,
                status: fetchRes.status,
                itemsCount: json?.items?.length,
                bodySnippet: text.slice(0, 200)
            });
        }

        const headers = ua === 'none' ? {} : { 'User-Agent': ua };
        const r = await axios.get(url, { timeout: 8000, headers });
        res.json({ ok: true, duration: Date.now() - t0, status: r.status, itemsCount: r.data?.items?.length });
    } catch(err) {
        res.json({
            ok: false,
            message: err.message,
            code: err.code,
            responseStatus: err.response?.status,
            responseData: typeof err.response?.data === 'string' ? err.response.data.slice(0, 300) : err.response?.data
        });
    }
});

// Serve the Config / Landing page on root, /configure, and /:config/configure
app.get(['/', '/configure', '/:config/configure', '/:config'], (req, res) => {
    const host = req.headers.host || 'hophimaddon.vercel.app';
    const config = parseConfig(req.params.config);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(renderConfigPage(host, config));
});


// Manifest routes
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

// Resource handler helper
async function handleResource(req, res, config) {
    const { resource, type, id } = req.params;
    const extra = req.params.extra ? qs.parse(req.url.split('/').pop().slice(0, -5)) : {};

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

