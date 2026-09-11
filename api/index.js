const express = require('express');
const { getRouter } = require('stremio-addon-sdk');
const addonInterface = require('../src/addon');
const { renderConfigPage } = require('../src/views/config');

const app = express();

// Serve the Config / Landing page on root and /configure
app.get(['/', '/configure'], (req, res) => {
    const host = req.headers.host || 'hophimaddon.vercel.app';
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(renderConfigPage(host));
});

// Mount the Stremio addon router
app.use('/', getRouter(addonInterface));

// Export the Express app so Vercel can run it
module.exports = app;
