const express = require('express');
const { getRouter } = require('stremio-addon-sdk');
const addonInterface = require('./src/addon');
const { renderConfigPage } = require('./src/views/config');

const app = express();
const port = process.env.PORT || 7000;

app.get(['/', '/configure'], (req, res) => {
    const host = req.headers.host || `localhost:${port}`;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(renderConfigPage(host));
});

app.use('/', getRouter(addonInterface));

app.listen(port, () => {
    console.log(`[Local Server] Hồ Phim Addon running at http://localhost:${port}`);
    console.log(`- Config page:   http://localhost:${port}`);
    console.log(`- Manifest URL:  http://localhost:${port}/manifest.json`);
});
