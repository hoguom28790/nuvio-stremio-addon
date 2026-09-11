const { serveHTTP } = require('stremio-addon-sdk');
const addonInterface = require('./src/addon');

const port = process.env.PORT || 7000;
serveHTTP(addonInterface, { port });
console.log(`[Local Server] Addon running at http://localhost:${port}/manifest.json`);
