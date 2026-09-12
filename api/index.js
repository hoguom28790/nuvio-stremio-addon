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

