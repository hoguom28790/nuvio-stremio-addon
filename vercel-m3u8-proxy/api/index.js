const { fetchM3u8ViaVnProxy } = require('../utils/vnProxyFetcher');

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { url } = req.query;
    if (!url) {
        return res.status(400).send('Missing url parameter');
    }

    try {
        let content = '';
        
        // 1. Dùng proxy Việt Nam để lách Geo-blocking
        try {
            content = await fetchM3u8ViaVnProxy(url);
        } catch (proxyErr) {
            console.warn('VN Proxy failed, trying direct Vercel fetch:', proxyErr.message);
            
            // 2. Fallback: Dùng IP của Vercel (phòng hờ CDN nhả chặn)
            const fallbackRes = await fetch(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    'Referer': 'https://player.phimapi.com/',
                    'Origin': 'https://player.phimapi.com'
                },
                // Timeout để tránh treo
                signal: AbortSignal.timeout ? AbortSignal.timeout(6000) : undefined
            });
            content = await fallbackRes.text();
        }

        if (!content || !content.includes('#EXTM3U')) {
            return res.status(502).send('Failed to fetch valid M3U8 from upstream.');
        }

        // Trả về file M3U8 raw, Cloudflare Worker sẽ lấy nội dung này và Lọc Quảng Cáo
        res.setHeader('Content-Type', 'application/vnd.apple.mpegurl; charset=utf-8');
        res.setHeader('Cache-Control', 'public, max-age=600, s-maxage=1200');
        res.status(200).send(content);

    } catch (err) {
        console.error('Vercel M3U8 Proxy Error:', err.message);
        res.status(500).send('Internal Server Error: ' + err.message);
    }
}
