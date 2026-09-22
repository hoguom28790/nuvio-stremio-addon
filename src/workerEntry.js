const addonInterface = require('./addon');
const { getManifest } = require('./manifest');
const { renderConfigPage } = require('./views/config');
const hentaiz = require('./scrapers/hentaiz');
const javhd = require('./scrapers/javhd');
const vlxx = require('./scrapers/vlxx');

function parseConfig(configParam) {
    if (!configParam) return {};
    try {
        const binary = atob(configParam.replace(/-/g, '+').replace(/_/g, '/'));
        const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
        const decoded = new TextDecoder().decode(bytes);
        return JSON.parse(decoded);
    } catch (e) {
        try {
            return JSON.parse(decodeURIComponent(configParam));
        } catch (err) {
            return {};
        }
    }
}

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
    'Access-Control-Allow-Headers': '*'
};

// Video segment unwrapper function (strips 95-byte PNG header with streaming & unlimited bandwidth)
async function handleSegmentProxy(targetUrl, referer) {
    if (!targetUrl) return new Response('Missing url query parameter', { status: 400 });

    try {
        const upstream = await fetch(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Referer': referer
            },
            cf: {
                cacheEverything: true,
                cacheTtl: 86400
            }
        });

        if (!upstream.ok) {
            return new Response(`Upstream error: ${upstream.status}`, { status: upstream.status });
        }

        const reader = upstream.body.getReader();
        let stripped = false;
        let leftover = new Uint8Array(0);

        const stream = new ReadableStream({
            async pull(controller) {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) {
                        if (!stripped && leftover.length > 0) {
                            controller.enqueue(leftover);
                        }
                        controller.close();
                        return;
                    }

                    if (!stripped) {
                        const combined = new Uint8Array(leftover.length + value.length);
                        combined.set(leftover);
                        combined.set(value, leftover.length);

                        if (combined.length >= 95) {
                            if (combined[0] === 0x89 && combined[1] === 0x50 && combined[2] === 0x4E && combined[3] === 0x47) {
                                controller.enqueue(combined.subarray(95));
                            } else {
                                controller.enqueue(combined);
                            }
                            stripped = true;
                            leftover = null;
                            return;
                        } else {
                            leftover = combined;
                        }
                    } else {
                        controller.enqueue(value);
                        return;
                    }
                }
            }
        });

        return new Response(stream, {
            headers: {
                ...CORS_HEADERS,
                'Content-Type': 'video/mp2t',
                'Cache-Control': 'public, max-age=86400, s-maxage=86400, immutable',
                'CDN-Cache-Control': 'public, max-age=86400'
            }
        });
    } catch (err) {
        return new Response(`Proxy error: ${err.message}`, { status: 502, headers: CORS_HEADERS });
    }
}

export default {
    async fetch(request, env, ctx) {
        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: CORS_HEADERS });
        }

        const url = new URL(request.url);
        const host = url.host;
        const pathname = url.pathname;

        // 1. Static / Favicon / Logo
        if (pathname === '/logo.png') {
            return Response.redirect('https://raw.githubusercontent.com/hoguom28790/nuvio-stremio-addon/master/logo.png', 302);
        }

        // 2. Configure page: /, /configure, /:config/configure
        if (pathname === '/' || pathname === '/configure' || pathname.endsWith('/configure')) {
            let configParam = null;
            const parts = pathname.split('/').filter(Boolean);
            if (parts.length >= 2 && parts[parts.length - 1] === 'configure') {
                configParam = parts[0];
            }
            const config = parseConfig(configParam);
            const html = renderConfigPage(host, config);
            return new Response(html, {
                headers: {
                    ...CORS_HEADERS,
                    'Content-Type': 'text/html; charset=utf-8'
                }
            });
        }

        // 3. Manifest: /manifest.json or /:config/manifest.json
        if (pathname === '/manifest.json' || pathname.endsWith('/manifest.json')) {
            let configParam = null;
            const parts = pathname.split('/').filter(Boolean);
            if (parts.length >= 2 && parts[parts.length - 1] === 'manifest.json') {
                configParam = parts[0];
            }
            const config = parseConfig(configParam);
            const manifest = getManifest(config);
            return new Response(JSON.stringify(manifest), {
                headers: {
                    ...CORS_HEADERS,
                    'Content-Type': 'application/json; charset=utf-8',
                    'Cache-Control': 'max-age=300, stale-while-revalidate=600, public'
                }
            });
        }

        // 4. JavHD Segment Unwrapper
        if (pathname === '/javhd/segment.ts') {
            return handleSegmentProxy(url.searchParams.get('url'), 'https://javhdz.ac/');
        }

        // 5. VLXX Segment Unwrapper
        if (pathname === '/vlxx/segment.ts') {
            return handleSegmentProxy(url.searchParams.get('url'), 'https://vlxx.phd/');
        }

        // 6. JavHD M3U8 Stream
        const javhdMatch = pathname.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);
        if (javhdMatch) {
            const [, slug, quality] = javhdMatch;
            try {
                const playlist = await javhd.getM3u8(slug, quality, host);
                return new Response(playlist, {
                    headers: {
                        ...CORS_HEADERS,
                        'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
                        'Cache-Control': 'max-age=600, stale-while-revalidate=1200, public'
                    }
                });
            } catch (err) {
                return new Response('Error generating playlist: ' + err.message, { status: 500, headers: CORS_HEADERS });
            }
        }

        // 7. VLXX M3U8 Stream
        const vlxxMatch = pathname.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);
        if (vlxxMatch) {
            const [, vid, server] = vlxxMatch;
            try {
                const playlist = await vlxx.getM3u8(vid, server, host);
                return new Response(playlist, {
                    headers: {
                        ...CORS_HEADERS,
                        'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
                        'Cache-Control': 'max-age=600, stale-while-revalidate=1200, public'
                    }
                });
            } catch (err) {
                return new Response('Error generating playlist: ' + err.message, { status: 500, headers: CORS_HEADERS });
            }
        }

        // 8. HentaiZ M3U8 Stream
        const hentaizMatch = pathname.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);
        if (hentaizMatch) {
            const [, videoId, quality] = hentaizMatch;
            try {
                const playlist = await hentaiz.getM3u8(videoId, quality);
                return new Response(playlist, {
                    headers: {
                        ...CORS_HEADERS,
                        'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
                        'Cache-Control': 'max-age=1800, public'
                    }
                });
            } catch (err) {
                return new Response('Error generating playlist: ' + err.message, { status: 500, headers: CORS_HEADERS });
            }
        }

        // 9. Debug routes
        if (pathname === '/debug/javhd') {
            try {
                const cat = await javhd.getCatalog('javhd-latest', 'movie', {});
                return new Response(JSON.stringify({ count: cat.length, sample: cat[0] }), {
                    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
                });
            } catch (e) {
                return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: CORS_HEADERS });
            }
        }

        // 10. Stremio Resources: /:config?/:resource/:type/:id/:extra?.json
        const cleanPath = pathname.replace(/\.json$/, '');
        const segments = cleanPath.split('/').filter(Boolean);
        const resourceIdx = segments.findIndex(s => ['catalog', 'stream', 'meta', 'subtitles'].includes(s));
        if (resourceIdx !== -1) {
            const configParam = resourceIdx > 0 ? segments[0] : null;
            const resource = segments[resourceIdx];
            const type = segments[resourceIdx + 1];
            const id = segments[resourceIdx + 2];
            const extraStr = segments.slice(resourceIdx + 3).join('/');

            const config = parseConfig(configParam);
            config.host = host;

            let extra = {};
            if (extraStr) {
                try {
                    const searchParams = new URLSearchParams(extraStr);
                    for (const [k, v] of searchParams.entries()) {
                        extra[k] = v;
                    }
                } catch (e) {}
            }

            try {
                const resp = await addonInterface.get(resource, type, id, extra, config);
                return new Response(JSON.stringify(resp), {
                    headers: {
                        ...CORS_HEADERS,
                        'Content-Type': 'application/json; charset=utf-8',
                        'Cache-Control': 'max-age=120, stale-while-revalidate=600, public'
                    }
                });
            } catch (err) {
                if (err && err.noHandler) {
                    return new Response(JSON.stringify({ err: 'not found' }), { status: 404, headers: CORS_HEADERS });
                }
                return new Response(JSON.stringify({ err: 'handler error: ' + (err.message || err) }), { status: 500, headers: CORS_HEADERS });
            }
        }

        return new Response('Not Found', { status: 404, headers: CORS_HEADERS });
    }
};
