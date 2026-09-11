const express = require('express');
const { getRouter } = require('stremio-addon-sdk');
const addonInterface = require('../src/addon');

const app = express();

// Mount the Stremio addon router
app.use('/', getRouter(addonInterface));

// Export the Express app so Vercel can run it
module.exports = app;
