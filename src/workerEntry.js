const addonInterface = require('./addon');
const { getManifest } = require('./manifest');
const { renderConfigPage } = require('./views/config');
const hentaiz = require('./scrapers/hentaiz');
const javhd = require('./scrapers/javhd');
const vlxx = require('./scrapers/vlxx');
const avdb = require('./scrapers/avdb');
const missav = require('./scrapers/missav');
const kkphim = require('./scrapers/kkphim');
import { vnFetchText } from './utils/vnSocketFetch';

// The same bundle also runs on Render (Dockerfile -> Node). There, raw sockets are unavailable (the Node proxy pool
// in vnProxyFetcher.js is used instead) and "delegate to Render" would be Render calling itself.
// navigator.userAgent is the reliable check: nodejs_compat also defines process.versions.node on Workers.
const IS_CF_WORKER = typeof navigator !== 'undefined' && navigator.userAgent === 'Cloudflare-Workers';
const VN_FETCH = IS_CF_WORKER ? { fetchText: vnFetchText } : {};

// Edge cache for generated playlists (Workers do not cache their own responses automatically)
async function edgeCached(request, ctx, ttlSeconds, build) {
    const cache = typeof caches !== 'undefined' ? caches.default : null;
    const key = new Request(request.url, { method: 'GET' });
    if (cache) {
        const hit = await cache.match(key);
        if (hit) return hit;
    }
    const res = await build();
    if (cache && res && res.status === 200 && res.headers.get('X-Cacheable') === '1') {
        const headers = new Headers(res.headers);
        headers.delete('X-Cacheable');
        headers.set('Cache-Control', `public, max-age=${ttlSeconds}, s-maxage=${ttlSeconds}`);
        const body = await res.text();
        const out = new Response(body, { status: 200, headers });
        const put = cache.put(key, out.clone());
        if (ctx && ctx.waitUntil) ctx.waitUntil(put); else await put;
        return out;
    }
    return res;
}

// ---- Expired signed segment URLs (JavHD tiktokcdn x-expires, AVDB helvid e=, both ~2h) ----
// Playlists tag each segment with `r=<id parts>~<index>`. When the CDN rejects an expired URL, load a fresh playlist
// and retry the same segment index. Fresh playlists are memoised per isolate so a whole movie needs one refresh.
const refreshMemo = new Map();

function nthSegmentTarget(playlist, idx) {
    let line = null;
    if (idx === 'm') {
        const m = playlist.match(/#EXT-X-MAP:URI="([^"]+)"/);
        line = m && m[1];
    } else {
        const segs = playlist.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));
        line = segs[parseInt(idx, 10)];
    }
    if (!line) return null;
    try { return new URL(line).searchParams.get('url'); } catch (e) { return null; }
}

async function refreshSegmentUrl(kind, ref, failedUrl, loadPlaylist) {
    const parts = String(ref).split('~');
    const idx = parts.pop();
    const ids = parts.map(p => { try { return decodeURIComponent(p); } catch (e) { return p; } });
    const key = `${kind}:${parts.join('~')}`;

    const memo = refreshMemo.get(key);
    if (memo) {
        const text = await memo.promise.catch(() => null);
        const u = text && nthSegmentTarget(text, idx);
        if (u && u !== failedUrl && Date.now() - memo.ts < 3600000) return u;
    }
    const promise = loadPlaylist(ids);
    refreshMemo.set(key, { promise, ts: Date.now() });
    if (refreshMemo.size > 200) refreshMemo.delete(refreshMemo.keys().next().value);
    const text = await promise.catch(() => null);
    if (!text) { refreshMemo.delete(key); return null; }
    const u = nthSegmentTarget(text, idx);
    return u && u !== failedUrl ? u : null;
}

function playlistResponse(text, ttlSeconds) {
    return new Response(text, {
        headers: {
            ...CORS_HEADERS,
            'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
            'Cache-Control': `public, max-age=${ttlSeconds}, s-maxage=${ttlSeconds}`,
            'X-Cacheable': '1'
        }
    });
}

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

const RENDER_BASE = 'https://nuvio-stremio-addon-1.onrender.com';

// Segment bridge through Render for upstreams that refuse Cloudflare IPs (MissAV/surrit) or whose tokens are
// bound to Render's IP (Render-minted AVDB/helvid playlists). Successful responses are cached at the edge.
async function proxyViaRender(renderUrl) {
    try {
        const upstream = await fetch(renderUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0' },
            redirect: 'manual',
            cf: { cacheEverything: true, cacheTtlByStatus: { '200-299': 86400, '300-599': 0 } }
        });
        if (!upstream.ok) {
            return new Response(`Upstream error: ${upstream.status}`, { status: upstream.status === 302 ? 502 : upstream.status, headers: CORS_HEADERS });
        }
        const headers = {
            ...CORS_HEADERS,
            'Content-Type': 'video/mp2t',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400, immutable'
        };
        const len = upstream.headers.get('content-length');
        if (len) headers['Content-Length'] = len;
        return new Response(upstream.body, { status: 200, headers });
    } catch (err) {
        return new Response('Render bridge error: ' + err.message, { status: 502, headers: CORS_HEADERS });
    }
}

// Video segment unwrapper function (strips 95-byte PNG header with streaming & unlimited bandwidth)
async function handleSegmentProxy(targetUrl, referer) {
    if (!targetUrl) return new Response('Missing url query parameter', { status: 400, headers: CORS_HEADERS });

    try {
        let origin = '';
        try {
            origin = new URL(referer).origin;
        } catch (e) {
            origin = referer;
        }

        const upstream = await fetch(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                'Referer': referer,
                'Origin': origin,
                'Accept': '*/*'
            },
            referrer: referer,
            referrerPolicy: 'unsafe-url',
            cf: {
                cacheEverything: true,
                cacheTtlByStatus: { '200-299': 86400, '300-599': 0 }
            }
        });

        if (!upstream.ok) {
            return new Response(`Upstream error: ${upstream.status}`, { status: upstream.status, headers: CORS_HEADERS });
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

                        if (combined.length >= 1024) {
                            if (combined[0] === 0x89 && combined[1] === 0x50 && combined[2] === 0x4E && combined[3] === 0x47) {
                                let offset = 95;
                                for (let i = 4; i <= Math.min(combined.length - 376, 2048); i++) {
                                    if (combined[i] === 0x47 && combined[i + 188] === 0x47 && combined[i + 376] === 0x47) {
                                        offset = i;
                                        break;
                                    }
                                }
                                controller.enqueue(combined.subarray(offset));
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

let lastRenderWarm = 0;

export default {
    async fetch(request, env, ctx) {
        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: CORS_HEADERS });
        }

        const url = new URL(request.url);
        const host = url.host;
        const pathname = url.pathname;

        // Wake Render in the background while the user is just browsing (it sleeps on the free plan)
        if (IS_CF_WORKER && ctx && ctx.waitUntil && /\/(catalog|meta|stream)\//.test(pathname) && Date.now() - lastRenderWarm > 240000) {
            lastRenderWarm = Date.now();
            ctx.waitUntil(fetch(`${RENDER_BASE}/ping`, { headers: { 'User-Agent': 'Mozilla/5.0' } }).catch(() => {}));
        }

        // 1. Static / Favicon / Logo
        // 0. Keepalive ping endpoint (used by GitHub Actions cron to prevent Render.com from sleeping)
        if (pathname === '/ping') {
            return new Response(JSON.stringify({ status: 'ok', ts: Date.now() }), {
                headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
            });
        }

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

        // 4. JavHD Segment Unwrapper (Direct Cloudflare Edge streaming with PNG-header unwrapping)
        if (pathname === '/javhd/segment.ts') {
            const segUrl = url.searchParams.get('url');
            const res = await handleSegmentProxy(segUrl, 'https://javhdz.wtf/');
            const ref = url.searchParams.get('r');
            if (res.status < 400 || !ref) return res;
            // Signed tiktokcdn URL expired -> fresh playlist (via VN proxy) -> same segment index
            const fresh = await refreshSegmentUrl('javhd', ref, segUrl, ([slug, quality]) =>
                javhd.getM3u8(slug, quality, host, env, { ...VN_FETCH, fresh: true }));
            return fresh ? handleSegmentProxy(fresh, 'https://javhdz.wtf/') : res;
        }

        // 4b. JavHD Poster Proxy (Edge cached with 7 days TTL, CORS enabled, bypasses ISP blocks)
        if (pathname.startsWith('/javhd/poster/')) {
            const filename = pathname.replace('/javhd/poster/', '');
            const targetUrl = `https://javhdz.wtf/data/${filename}`;
            try {
                const upstream = await fetch(targetUrl, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                        'Referer': 'https://javhdz.wtf/'
                    },
                    cf: {
                        cacheEverything: true,
                        cacheTtl: 604800
                    }
                });
                if (upstream.ok) {
                    return new Response(upstream.body, {
                        headers: {
                            ...CORS_HEADERS,
                            'Content-Type': upstream.headers.get('content-type') || 'image/jpeg',
                            'Cache-Control': 'public, max-age=604800, immutable',
                            'CDN-Cache-Control': 'public, max-age=604800'
                        }
                    });
                }
            } catch (err) {}
            return Response.redirect(targetUrl, 302);
        }

        // 5. VLXX Segment Unwrapper
        if (pathname === '/vlxx/segment.ts') {
            return handleSegmentProxy(url.searchParams.get('url'), 'https://vlxx.phd/');
        }

        // 5c. AVDB Segment Proxy
        //  - default: playlist was minted by this Worker -> fetch helvid directly at the edge (0 Render bandwidth)
        //  - via=render: playlist was minted by Render -> helvid token is bound to Render's IP -> bridge through Render
        if (pathname === '/avdb/segment.ts') {
            const rawTarget = url.searchParams.get('url');
            if (!rawTarget) return new Response('Missing url parameter', { status: 400, headers: CORS_HEADERS });
            if (url.searchParams.get('via') === 'render' && IS_CF_WORKER) {
                const res = await proxyViaRender(`${RENDER_BASE}/avdb/segment.ts?stream=1&url=${encodeURIComponent(rawTarget)}`);
                const ref = url.searchParams.get('r');
                if (res.status < 400 || !ref) return res;
                // helvid token expired -> re-mint on Render (bypassing caches) -> same segment index
                const fresh = await refreshSegmentUrl('avdb', ref, rawTarget, async ([slug, avdbId]) => {
                    const r = await fetch(`${RENDER_BASE}/avdb/stream/${encodeURIComponent(slug)}.m3u8?cfhost=${encodeURIComponent(host)}&fresh=1${avdbId ? `&id=${encodeURIComponent(avdbId)}` : ''}`, {
                        headers: { 'User-Agent': 'Mozilla/5.0' },
                        signal: AbortSignal.timeout ? AbortSignal.timeout(25000) : undefined
                    });
                    const text = r.ok ? await r.text() : '';
                    return text.includes('#EXTM3U') ? text : null;
                });
                return fresh ? proxyViaRender(`${RENDER_BASE}/avdb/segment.ts?stream=1&url=${encodeURIComponent(fresh)}`) : res;
            }
            return handleSegmentProxy(rawTarget, 'https://upload18.com/');
        }

        // 5d. MissAV Segment Proxy (surrit.com refuses Cloudflare IPs -> bridge through Render, cached at the edge)
        if (pathname === '/missav/segment.ts') {
            const rawUrl = url.searchParams.get('url');
            if (!rawUrl) return new Response('Missing url parameter', { status: 400, headers: CORS_HEADERS });
            if (!IS_CF_WORKER) return handleSegmentProxy(rawUrl, 'https://missav.ai/');
            return proxyViaRender(`${RENDER_BASE}/missav/segment.ts?stream=1&url=${encodeURIComponent(rawUrl)}`);
        }

        // 5e. HentaiZ Segment (PNG-wrapped TS on c1.animez.top: needs haiten.org Referer, no CORS upstream)
        if (pathname === '/hentaiz/segment.ts') {
            const rawUrl = url.searchParams.get('url');
            if (!rawUrl) return new Response('Missing url parameter', { status: 400, headers: CORS_HEADERS });
            let target;
            try { target = new URL(rawUrl); } catch (e) { return new Response('Bad url', { status: 400, headers: CORS_HEADERS }); }
            if (!(target.hostname === 'animez.top' || target.hostname.endsWith('.animez.top'))) {
                return new Response('Host not allowed', { status: 403, headers: CORS_HEADERS });
            }
            const o = url.searchParams.get('o');
            const l = url.searchParams.get('l');
            const hasRange = o !== null && l !== null;
            const tsHeaders = {
                ...CORS_HEADERS,
                'Content-Type': 'video/mp2t',
                'Cache-Control': 'public, max-age=86400, s-maxage=86400, immutable'
            };
            try {
                const upstream = await fetch(rawUrl, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
                        'Referer': 'https://x.haiten.org/',
                        'Origin': 'https://x.haiten.org'
                    },
                    cf: { cacheEverything: true, cacheTtlByStatus: { '200-299': 86400, '300-599': 0 } }
                });
                if (upstream.ok) {
                    const buf = new Uint8Array(await upstream.arrayBuffer());
                    let start = 0;
                    let end = buf.length;
                    if (hasRange) {
                        start = parseInt(o, 10);
                        end = Math.min(buf.length, start + parseInt(l, 10));
                    } else {
                        // No byte-range: skip the PNG wrapper (everything up to and including the IEND chunk CRC)
                        for (let i = 0; i < buf.length - 8; i++) {
                            if (buf[i] === 0x49 && buf[i + 1] === 0x45 && buf[i + 2] === 0x4e && buf[i + 3] === 0x44) { start = i + 8; break; }
                        }
                    }
                    if (start < end && buf[start] === 0x47) {
                        return new Response(buf.slice(start, end), { status: 200, headers: tsHeaders });
                    }
                }
            } catch (e) {}
            // Edge blocked / rate limited by c1.animez.top -> bridge through Render (different IP), cached at the edge
            let renderUrl = `${RENDER_BASE}/hentaiz/segment.ts?stream=1&url=${encodeURIComponent(rawUrl)}`;
            if (hasRange) renderUrl += `&o=${o}&l=${l}`;
            return proxyViaRender(renderUrl);
        }


        // 6. JavHD M3U8 Stream
        const javhdMatch = pathname.match(/^\/javhd\/stream\/([^/]+)\/([^/]+)\.m3u8$/);
        if (javhdMatch) {
            const [, slug, quality] = javhdMatch;
            const resolveHost = host;

            // Signed tiktokcdn segment URLs expire ~2h after issue -> keep the playlist cache short
            return edgeCached(request, ctx, 600, async () => {
                // 1. Local resolution: tiktokcdn.top refuses Cloudflare IPs, so the playlist text goes through the VN proxy (~0.4s)
                try {
                    const playlist = await javhd.getM3u8(slug, quality, resolveHost, env, VN_FETCH);
                    if (playlist && playlist.includes('#EXTM3U')) return playlistResponse(playlist, 600);
                } catch (err) {
                    console.warn('[JavHD Local M3U8 Error]:', err.message);
                }

                // 2. Fallback: delegate to Render (slow, ~20s)
                const renderUrl = `${RENDER_BASE}/javhd/stream/${slug}/${quality}.m3u8?cfhost=${encodeURIComponent(resolveHost)}`;
                if (IS_CF_WORKER) try {
                    const renderRes = await fetch(renderUrl, {
                        headers: { 'User-Agent': 'Mozilla/5.0' },
                        signal: AbortSignal.timeout ? AbortSignal.timeout(25000) : undefined
                    });
                    if (renderRes.ok) {
                        const renderText = await renderRes.text();
                        if (renderText && renderText.includes('#EXTM3U')) return playlistResponse(renderText, 600);
                    }
                } catch (renderErr) {
                    console.warn('[JavHD Render Delegation Error]:', renderErr.message);
                }
                return new Response('Error generating playlist: Could not retrieve JavHD stream playlist', { status: 502, headers: CORS_HEADERS });
            });
        }

        // 7. VLXX M3U8 Stream
        const vlxxMatch = pathname.match(/^\/vlxx\/stream\/([^/]+)\/([^/]+)\.m3u8$/);
        if (vlxxMatch) {
            const [, vid, server] = vlxxMatch;
            const resolveHost = host;

            // 1. Try local resolution first
            try {
                const playlist = await vlxx.getM3u8(vid, server, resolveHost);
                if (playlist && playlist.includes('#EXTM3U')) {
                    return new Response(playlist, {
                        headers: {
                            ...CORS_HEADERS,
                            'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
                            'Cache-Control': 'max-age=600, stale-while-revalidate=1200, public'
                        }
                    });
                }
            } catch (err) {
                console.warn('[VLXX Local M3U8 Error]:', err.message);
            }

            // 2. Fallback to Render delegation
            const renderUrl = `https://nuvio-stremio-addon-1.onrender.com/vlxx/stream/${vid}/${server}.m3u8?cfhost=${encodeURIComponent(resolveHost)}`;
            if (IS_CF_WORKER) try {
                const renderRes = await fetch(renderUrl, {
                    headers: { 'User-Agent': 'Mozilla/5.0' },
                    signal: AbortSignal.timeout ? AbortSignal.timeout(2500) : undefined
                });
                if (renderRes.ok) {
                    const renderText = await renderRes.text();
                    if (renderText && renderText.includes('#EXTM3U')) {
                        return new Response(renderText, {
                            headers: {
                                ...CORS_HEADERS,
                                'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
                                'Cache-Control': 'max-age=600, stale-while-revalidate=1200, public'
                            }
                        });
                    }
                }
            } catch (renderErr) {
                console.warn('[VLXX Render Delegation Error]:', renderErr.message);
            }

            return new Response('Error generating playlist', { status: 500, headers: CORS_HEADERS });
        }

        // 8. HentaiZ M3U8 Stream
        const hentaizMatch = pathname.match(/^\/hentaiz\/stream\/([^/]+)\/([^/]+)\.m3u8$/);
        if (hentaizMatch) {
            const [, videoId, quality] = hentaizMatch;
            try {
                const playlist = await hentaiz.getM3u8(videoId, quality, host);
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

        // 8c. AVDB M3U8 Stream
        const avdbMatch = pathname.match(/^\/avdb\/stream\/([^/]+)\.m3u8$/);
        if (avdbMatch) {
            const slug = decodeURIComponent(avdbMatch[1]);
            const resolveHost = host;
            const avdbId = url.searchParams.get('id');
            const fresh = url.searchParams.get('fresh') === '1';

            // helvid refuses Cloudflare IPs entirely -> the playlist (and its segments, via=render) come from Render.
            // helvid tokens last ~2h -> short edge cache. fresh=1 (expired-token refresh) bypasses every cache.
            const build = async () => {
                const renderUrl = `${RENDER_BASE}/avdb/stream/${encodeURIComponent(slug)}.m3u8?cfhost=${encodeURIComponent(resolveHost)}${avdbId ? `&id=${encodeURIComponent(avdbId)}` : ''}${fresh ? '&fresh=1' : ''}`;
                if (IS_CF_WORKER) try {
                    const renderRes = await fetch(renderUrl, {
                        headers: { 'User-Agent': 'Mozilla/5.0' },
                        signal: AbortSignal.timeout ? AbortSignal.timeout(28000) : undefined
                    });
                    if (renderRes.ok) {
                        const renderText = await renderRes.text();
                        if (renderText && renderText.includes('#EXTM3U')) return playlistResponse(renderText, 600);
                    }
                } catch (renderErr) {
                    console.warn('[AVDB Render Delegation Error]:', renderErr.message);
                }

                // On Render: mint here (mirror URL first), segments come back through Render (via=render).
                // On Cloudflare this fallback only works if upload18/helvid stop blocking Cloudflare IPs.
                try {
                    const mirror = !IS_CF_WORKER && avdbId ? await avdb.fetchMirrorStream(avdbId) : null;
                    const playlist = await avdb.getM3u8(slug, resolveHost, mirror ? mirror.url : null, env,
                        IS_CF_WORKER ? 'edge' : 'render', { avdbId: avdbId || '', fresh });
                    return playlistResponse(playlist, 600);
                } catch (err) {
                    return new Response('Error generating playlist: ' + err.message, { status: 502, headers: CORS_HEADERS });
                }
            };
            return fresh ? build() : edgeCached(request, ctx, 600, build);
        }

        // 8d. MissAV M3U8 Stream
        const missavMatch = pathname.match(/^\/missav\/stream\/([^/]+)(?:\/([^/]+))?\.m3u8$/);
        if (missavMatch) {
            const [, slug, quality = '1080'] = missavMatch;
            const resolveHost = host;

            // 1. Delegate to Render (Render resolves playlist with zero video bandwidth)
            const renderUrl = `https://nuvio-stremio-addon-1.onrender.com/missav/stream/${encodeURIComponent(slug)}/${quality}.m3u8?cfhost=${encodeURIComponent(resolveHost)}`;
            if (IS_CF_WORKER) try {
                const renderRes = await fetch(renderUrl, {
                    headers: { 'User-Agent': 'Mozilla/5.0' },
                    cf: {
                        cacheEverything: true,
                        cacheTtl: 1800
                    },
                    signal: AbortSignal.timeout ? AbortSignal.timeout(20000) : undefined
                });
                if (renderRes.ok) {
                    const renderText = await renderRes.text();
                    if (renderText && renderText.includes('#EXTM3U')) {
                        return new Response(renderText, {
                            headers: {
                                ...CORS_HEADERS,
                                'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
                                'Cache-Control': 'public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600',
                                'CDN-Cache-Control': 'public, max-age=1800'
                            }
                        });
                    }
                }
            } catch (renderErr) {
                console.warn('[MissAV Render Delegation Error]:', renderErr.message);
            }

            // 2. Fallback to local missav.getM3u8
            try {
                const playlist = await missav.getM3u8(slug, quality, resolveHost);
                return new Response(playlist, {
                    headers: {
                        ...CORS_HEADERS,
                        'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
                        'Cache-Control': 'public, max-age=1800, s-maxage=1800, stale-while-revalidate=3600',
                        'CDN-Cache-Control': 'public, max-age=1800'
                    }
                });
            } catch (err) {
                return new Response('Error generating playlist: ' + err.message, { status: 500, headers: CORS_HEADERS });
            }
        }

        // 8e. KKPhim Clean M3U8 Stream (Filter out 15:00 and 3:00 SSAI ads with auto-fallback)
        if (pathname === '/kkphim/clean.m3u8') {
            const targetUrl = url.searchParams.get('url');
            if (!targetUrl) return new Response('Missing url query parameter', { status: 400, headers: CORS_HEADERS });

            // 1. Clean at the edge. The CDNs geo-block non-VN IPs, so the playlist TEXT is fetched through the VN proxy
            //    pool; segments stay direct CDN -> client. Only a really cleaned playlist is edge-cached (6h, VOD).
            const cleanedRes = await edgeCached(request, ctx, 21600, async () => {
                try {
                    const playlist = await kkphim.getCleanM3u8(targetUrl, host, VN_FETCH);
                    // cleaned media playlist, or a master whose variants were rewritten to /kkphim/clean.m3u8
                    if (playlist && (playlist.includes('#EXTINF') || playlist.includes('/kkphim/clean.m3u8?url='))) {
                        return playlistResponse(playlist, 21600);
                    }
                } catch (err) {
                    console.warn('[KKPhim Clean M3U8 Local Error]:', err.message);
                }
                return null;
            });
            if (cleanedRes) return cleanedRes;

            // 2. Delegate to Render (Render can bypass Vietnam CDN geo-blocking on s5.phim1280.tv / a.kvp726.com)
            const renderCleanUrl = `https://nuvio-stremio-addon-1.onrender.com/kkphim/clean.m3u8?url=${encodeURIComponent(targetUrl)}&cfhost=${encodeURIComponent(host)}`;
            if (IS_CF_WORKER) try {
                const renderRes = await fetch(renderCleanUrl, {
                    headers: { 'User-Agent': 'Mozilla/5.0' },
                    signal: AbortSignal.timeout ? AbortSignal.timeout(2000) : undefined
                });
                if (renderRes.ok) {
                    const renderText = await renderRes.text();
                    if (renderText && renderText.includes('#EXTM3U')) {
                        return new Response(renderText, {
                            headers: {
                                ...CORS_HEADERS,
                                'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
                                'Cache-Control': 'public, max-age=7200, s-maxage=14400'
                            }
                        });
                    }
                }
            } catch (renderErr) {
                console.warn('[KKPhim Clean M3U8 Render Delegation Error]:', renderErr.message);
            }

            // 3. If local and Render failed, try optional Google Apps Script proxy if configured
            const gasProxyUrl = env?.KKPHIM_GAS_PROXY_URL || env?.GAS_PROXY_URL;
            if (gasProxyUrl) {
                try {
                    const gasRes = await fetch(`${gasProxyUrl}?url=${encodeURIComponent(targetUrl)}&referer=${encodeURIComponent('https://player.phimapi.com/')}`, {
                        signal: AbortSignal.timeout ? AbortSignal.timeout(1500) : undefined
                    });
                    if (gasRes.ok) {
                        const rawGasText = await gasRes.text();
                        if (rawGasText && rawGasText.includes('#EXTM3U')) {
                            const cleanedPlaylist = kkphim.processCleanM3u8(rawGasText, targetUrl, host);
                            if (cleanedPlaylist) {
                                return new Response(cleanedPlaylist, {
                                    headers: {
                                        ...CORS_HEADERS,
                                        'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
                                        'Cache-Control': 'public, max-age=7200, s-maxage=14400'
                                    }
                                });
                            }
                        }
                    }
                } catch (gasErr) {
                    console.warn('[KKPhim Clean M3U8 GAS Delegation Error]:', gasErr.message);
                }
            }

            // 4. Fallback: If cleaning failed (e.g. geo-blocked), DO NOT return 302 Redirect because it triggers CORS preflight (OPTIONS 405) on some clients.
            // Instead, return a virtual master playlist pointing to the raw URL. Nuvio Web will fetch it directly and clean it client-side.
            return new Response(`#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000\n${targetUrl}\n`, {
                status: 200,
                headers: {
                    ...CORS_HEADERS,
                    'Content-Type': 'application/vnd.apple.mpegurl; charset=utf-8',
                    'Cache-Control': 'no-cache'
                }
            });
        }

        if (pathname === '/debug/test-render') {
            const target = url.searchParams.get('url') || 'https://javhdz.bz/';
            const customReferer = url.searchParams.get('referer');
            const customUa = url.searchParams.get('ua');
            const customOrigin = url.searchParams.get('origin');
            const reqHeaders = {
                'User-Agent': customUa || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': '*/*'
            };
            if (customReferer) reqHeaders['Referer'] = customReferer;
            if (customOrigin) reqHeaders['Origin'] = customOrigin;

            try {
                const t0 = Date.now();
                const res = await fetch(target, {
                    headers: reqHeaders,
                    signal: AbortSignal.timeout ? AbortSignal.timeout(20000) : undefined
                });
                const elapsed = Date.now() - t0;
                const text = await res.text();
                return new Response(JSON.stringify({
                    target,
                    status: res.status,
                    ok: res.ok,
                    elapsedMs: elapsed,
                    bodyLength: text.length,
                    headers: Object.fromEntries(res.headers.entries()),
                    body: text
                }, null, 2), {
                    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
                });
            } catch (err) {
                return new Response(JSON.stringify({
                    target,
                    error: err.message,
                    stack: err.stack
                }, null, 2), { status: 500, headers: CORS_HEADERS });
            }
        }

        if (pathname === '/debug/javhd') {
            const diag = {};
            try {
                const cat = await javhd.getCatalog('javhd-latest', 'movie', {});
                diag.catalogCount = cat.length;
                diag.sampleItems = cat.slice(0, 3);
                diag.status = 'success';
                return new Response(JSON.stringify(diag, null, 2), {
                    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
                });
            } catch (e) {
                return new Response(JSON.stringify({ error: e.message, stack: e.stack }), { status: 500, headers: CORS_HEADERS });
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
            const rawId = segments[resourceIdx + 2];
            let id = rawId;
            if (id) {
                try {
                    id = decodeURIComponent(id);
                } catch (e) {}
            }
            const extraStr = segments.slice(resourceIdx + 3).join('/');

            const config = parseConfig(configParam);
            config.host = host;

            let extra = {};
            if (extraStr) {
                // Support both /genre=X/skip=Y and /genre=X&skip=Y formats across various Stremio/Nuvio clients
                const parts = extraStr.split('/');
                for (const part of parts) {
                    let searchParams = null;
                    try {
                        searchParams = new URLSearchParams(part);
                    } catch (e) {
                        try { searchParams = new URLSearchParams(decodeURIComponent(part)); } catch (err) {}
                    }
                    if (searchParams) {
                        for (const [k, v] of searchParams.entries()) {
                            let val = v;
                            if (typeof val === 'string' && /phim\s+18(?:\s+|$)/i.test(val)) {
                                val = val.replace(/phim\s+18(?:\s+|$)/i, 'Phim 18+');
                            }
                            extra[k] = val;
                        }
                    }
                }
            }


            let resp = null;
            try {
                resp = await addonInterface.get(resource, type, id, extra, config);
            } catch (err) {
                if (err && err.noHandler) {
                    return new Response(JSON.stringify({ err: 'not found' }), { status: 404, headers: CORS_HEADERS });
                }
            }

            // Fallback / Delegation to Render for adult resources that may be blocked on Cloudflare edge IPs (MissAV, JavHD, VLXX, AVDB)
            const isAdultSource = id && (id.startsWith('missav') || id.startsWith('javhd') || id.startsWith('vlxx') || id.startsWith('avdb'));
            const isEmpty = !resp || 
                (resource === 'catalog' && (!resp.metas || resp.metas.length === 0)) ||
                (resource === 'meta' && (!resp.meta || !resp.meta.name)) ||
                (resource === 'stream' && (!resp.streams || resp.streams.length === 0));

            if (isAdultSource && isEmpty) {
                const renderResourceUrl = `https://nuvio-stremio-addon-1.onrender.com${pathname}`;
                if (IS_CF_WORKER) try {
                    const rRes = await fetch(renderResourceUrl, {
                        headers: {
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                            'x-forwarded-host': host
                        },
                        signal: AbortSignal.timeout ? AbortSignal.timeout(18000) : undefined
                    });
                    if (rRes.ok) {
                        const rJson = await rRes.json();
                        if (rJson && ((rJson.metas && rJson.metas.length > 0) || (rJson.meta && rJson.meta.name) || (rJson.streams && rJson.streams.length > 0))) {
                            resp = rJson;
                        }
                    }
                } catch (rErr) {
                    console.warn('[Render Resource Delegation Error]:', rErr.message);
                }
            }

            const defaultFallback = resource === 'stream' ? { streams: [] } : resource === 'meta' ? { meta: null } : { metas: [] };
            return new Response(JSON.stringify(resp || defaultFallback), {
                headers: {
                    ...CORS_HEADERS,
                    'Content-Type': 'application/json; charset=utf-8',
                    'Cache-Control': 'max-age=120, stale-while-revalidate=600, public'
                }
            });
        }

        return new Response('Not Found', { status: 404, headers: CORS_HEADERS });
    }
};
