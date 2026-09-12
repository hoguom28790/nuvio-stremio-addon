const app = require('./api/index');
const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log(`[Local Server] Hồ Phim Addon running at http://localhost:${port}`);
    console.log(`- Config page:   http://localhost:${port}`);
    console.log(`- Manifest URL:  http://localhost:${port}/manifest.json`);
});

