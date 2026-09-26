const http = require('http');
const https = require('https');

// Pool of Vietnam HTTP proxies
const DEFAULT_VN_PROXIES = [
    { host: '14.251.13.17', port: 8080 },
    { host: '14.232.228.49', port: 8080 },
    { host: '113.161.66.196', port: 8080 },
    { host: '203.205.49.2', port: 10005 },
    { host: '210.211.113.35', port: 80 },
    { host: '116.108.82.164', port: 8080 }
];

let dynamicProxies = [];
let lastProxyFetch = 0;

/**
 * Fetch fresh list of VN proxies from public APIs
 */
async function refreshVnProxies() {
    if (Date.now() - lastProxyFetch < 300000 && dynamicProxies.length > 0) {
        return dynamicProxies;
    }
    try {
        const fetchFn = globalThis.fetch;
        if (typeof fetchFn === 'function') {
            const res = await fetchFn('https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&country=vn&timeout=5000', {
                signal: AbortSignal.timeout ? AbortSignal.timeout(5000) : undefined
            });
            if (res.ok) {
                const text = await res.text();
                const lines = text.split('\r\n').flatMap(l => l.split('\n')).map(l => l.trim()).filter(Boolean);
                const parsed = lines.map(line => {
                    const [host, port] = line.split(':');
                    return { host, port: parseInt(port, 10) };
                }).filter(p => p.host && p.port);
                if (parsed.length > 0) {
                    dynamicProxies = parsed;
                    lastProxyFetch = Date.now();
                }
            }
        }
    } catch (e) {
        // Silently fallback to DEFAULT_VN_PROXIES
    }
    return dynamicProxies;
}

/**
 * Single proxy HTTPS request via HTTP CONNECT
 */
function fetchWithProxy(targetUrl, host, port, timeoutMs = 6000) {
    return new Promise((resolve, reject) => {
        let isDone = false;
        const done = (err, result) => {
            if (isDone) return;
            isDone = true;
            if (err) reject(err);
            else resolve(result);
        };

        try {
            const urlObj = new URL(targetUrl);
            const req = http.request({
                host,
                port,
                method: 'CONNECT',
                path: `${urlObj.hostname}:443`,
                timeout: timeoutMs
            });

            req.on('connect', (res, socket) => {
                if (res.statusCode !== 200) {
                    socket.destroy();
                    return done(new Error(`Proxy connect failed: ${res.statusCode}`));
                }

                const client = https.get(targetUrl, {
                    socket,
                    agent: false,
                    timeout: timeoutMs,
                    headers: {
                        'Host': urlObj.hostname,
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                        'Referer': 'https://player.phimapi.com/',
                        'Origin': 'https://player.phimapi.com',
                        'Accept': '*/*'
                    }
                }, (response) => {
                    let body = '';
                    response.on('data', chunk => {
                        body += chunk;
                        if (body.length > 500000) {
                            socket.destroy();
                            done(new Error('Response too large'));
                        }
                    });
                    response.on('end', () => {
                        if (response.statusCode === 200 && body.includes('#EXTM3U')) {
                            done(null, body);
                        } else {
                            done(new Error(`Upstream returned ${response.statusCode} (has M3U: ${body.includes('#EXTM3U')})`));
                        }
                    });
                });

                client.on('error', err => done(err));
                client.on('timeout', () => {
                    socket.destroy();
                    done(new Error('HTTPS client timeout'));
                });
            });

            req.on('error', err => done(err));
            req.on('timeout', () => {
                req.destroy();
                done(new Error('CONNECT timeout'));
            });

            req.end();
        } catch (err) {
            done(err);
        }
    });
}

/**
 * Fetch M3U8 content using Vietnam proxy pool
 * Tries known proxies with race / fast fallback
 */
async function fetchM3u8ViaVnProxy(targetUrl) {
    const fresh = await refreshVnProxies();
    const candidatePool = [...fresh, ...DEFAULT_VN_PROXIES];

    const seen = new Set();
    const uniqueProxies = candidatePool.filter(p => {
        const key = `${p.host}:${p.port}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });

    const batchSize = 3;
    for (let i = 0; i < Math.min(uniqueProxies.length, 9); i += batchSize) {
        const batch = uniqueProxies.slice(i, i + batchSize);
        try {
            const result = await Promise.any(
                batch.map(p => fetchWithProxy(targetUrl, p.host, p.port, 7000))
            );
            if (result && result.includes('#EXTM3U')) {
                return result;
            }
        } catch (e) {
            // Try next batch
        }
    }

    throw new Error('All Vietnam proxies failed to fetch M3U8');
}

module.exports = {
    fetchM3u8ViaVnProxy
};
