const addonInterface = require('./addon');
const { getManifest } = require('./manifest');
const { renderConfigPage } = require('./views/config');
const hentaiz = require('./scrapers/hentaiz');
const javhd = require('./scrapers/javhd');
const vlxx = require('./scrapers/vlxx');
const avdb = require('./scrapers/avdb');
const kkphim = require('./scrapers/kkphim');
const vsmov = require('./scrapers/vsmov');
import { vnFetchText, vnProbe } from './utils/vnSocketFetch';

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
            'Content-Type': 'application/vnd.apple.mpegurl',
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

// Segment bridge through Render for upstreams that refuse Cloudflare IPs or whose tokens are
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

// VSMOV segment: PNG-wrapped MPEG-TS on *.streamvsmov.com. Streams the body, dropping everything before the TS payload.
async function handleVsmovSegment(rawUrl) {
    let target;
    try { target = new URL(rawUrl); } catch (e) { return new Response('Bad url', { status: 400, headers: CORS_HEADERS }); }
    if (target.protocol !== 'https:' || !vsmov.isVsmovHost(target.hostname)) {
        return new Response('Host not allowed', { status: 403, headers: CORS_HEADERS });
    }
    try {
        const upstream = await fetch(target.href, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
                'Referer': 'https://v2.streamvsmov.com/',
                'Origin': 'https://v2.streamvsmov.com',
                'Accept': '*/*'
            },
            cf: { cacheEverything: true, cacheTtlByStatus: { '200-299': 86400, '300-599': 0 } }
        });
        if (!upstream.ok) return new Response(`Upstream error: ${upstream.status}`, { status: upstream.status, headers: CORS_HEADERS });

        const reader = upstream.body.getReader();
        let head = new Uint8Array(0);
        let started = false;
        const stream = new ReadableStream({
            async pull(controller) {
                while (true) {
                    const { done, value } = await reader.read();
                    if (started) {
                        if (done) { controller.close(); return; }
                        controller.enqueue(value);
                        return;
                    }
                    if (value) {
                        const merged = new Uint8Array(head.length + value.length);
                        merged.set(head);
                        merged.set(value, head.length);
                        head = merged;
                    }
                    const off = vsmov.payloadOffset(head, done);
                    if (off >= 0) {
                        started = true;
                        if (head.length > off) controller.enqueue(head.subarray(off));
                        head = null;
                        if (done) { controller.close(); return; }
                        return;
                    }
                    if (head.length > 262144) { controller.error(new Error('PNG wrapper too large')); return; }
                }
            },
            cancel() { try { reader.cancel(); } catch (e) {} }
        });
        return new Response(stream, {
            headers: {
                ...CORS_HEADERS,
                'Content-Type': 'video/mp2t',
                'Cache-Control': 'public, max-age=86400, s-maxage=86400, immutable'
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
            const res = await handleSegmentProxy(segUrl, 'https://javhdz.one/');
            const ref = url.searchParams.get('r');
            if (res.status < 400 || !ref) return res;
            // Signed tiktokcdn URL expired -> fresh playlist (via VN proxy) -> same segment index
            const fresh = await refreshSegmentUrl('javhd', ref, segUrl, ([slug, quality]) =>
                javhd.getM3u8(slug, quality, host, env, { ...VN_FETCH, fresh: true }));
            return fresh ? handleSegmentProxy(fresh, 'https://javhdz.one/') : res;
        }

        // 4b. JavHD Poster Proxy (Edge cached with 7 days TTL, CORS enabled, bypasses ISP blocks)
        if (pathname.startsWith('/javhd/poster/')) {
            const filename = pathname.replace('/javhd/poster/', '');
            const targetUrl = `https://javhdz.one/data/${filename}`;
            try {
                const upstream = await fetch(targetUrl, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                        'Referer': 'https://javhdz.one/'
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

        // 4c. Javtiful Poster Proxy (Edge cached 7 days, sends the site Referer)
        if (pathname.startsWith('/javtiful/poster/')) {
            const rel = pathname.replace('/javtiful/poster/', '');
            if (!/^[A-Za-z0-9_\-./]+\.(?:jpg|jpeg|png|webp)$/i.test(rel) || rel.includes('..')) {
                return new Response('Bad poster path', { status: 400, headers: CORS_HEADERS });
            }
            const targetUrl = `https://javtiful.com/uploads/uploads/${rel}`;
            try {
                const upstream = await fetch(targetUrl, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                        'Referer': 'https://javtiful.com/'
                    },
                    cf: { cacheEverything: true, cacheTtl: 604800 }
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
                return new Response(`Upstream ${upstream.status}`, { status: 502, headers: CORS_HEADERS });
            } catch (err) {
                return new Response(`Poster error: ${err.message}`, { status: 502, headers: CORS_HEADERS });
            }
        }

        // 4d. HoHoJ Poster Proxy (Edge cached 7 days)
        if (pathname.startsWith('/hohoj/poster/')) {
            const rel = pathname.replace('/hohoj/poster/', '');
            if (!/^[A-Za-z0-9_\-./]+\.(?:jpg|jpeg|png|webp)$/i.test(rel) || rel.includes('..')) {
                return new Response('Bad poster path', { status: 400, headers: CORS_HEADERS });
            }
            const targetUrl = `https://cdn-1.ggjav.com/media/${rel}`;
            try {
                const upstream = await fetch(targetUrl, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                        'Referer': 'https://hohoj.tv/'
                    },
                    cf: { cacheEverything: true, cacheTtl: 604800 }
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
                return new Response(`Upstream ${upstream.status}`, { status: 502, headers: CORS_HEADERS });
            } catch (err) {
                return new Response(`Poster error: ${err.message}`, { status: 502, headers: CORS_HEADERS });
            }
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


        // JavHD diagnostics: reports each stage from the Worker (page, CDN playlist direct, VN proxies, Render)
        if (pathname === '/javhd/debug') {
            const diag = { stages: {} };
            const hdr = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Referer': 'https://javhdz.one/' };
            const probe = async (label, fn) => {
                const t0 = Date.now();
                try { diag.stages[label] = { ...(await fn()), ms: Date.now() - t0 }; }
                catch (e) { diag.stages[label] = { error: e.message, ms: Date.now() - t0 }; }
            };
            const brief = async (u, init = {}) => {
                const r = await fetch(u, { ...init, headers: hdr, signal: AbortSignal.timeout ? AbortSignal.timeout(8000) : undefined });
                const t = await r.text();
                return { status: r.status, len: t.length, head: t.slice(0, 160).replace(/\s+/g, ' ') };
            };
            let slug = url.searchParams.get('slug');
            try {
                await javhd.ensureStaticCatalog();
                const cat = await javhd.getCatalog('javhd-latest', 'movie', {});
                diag.catalogCount = cat.length;
                if (!slug && cat[0]) slug = String(cat[0].id).replace(/^javhd:/, '');
                const raw = await javhd.ensureStaticCatalog();
                const item = raw.find(x => x.slug === slug);
                diag.hasStaticStreamUrl = !!(item && item.streamUrl);
                if (item && item.streamUrl) diag.masterUrl = item.streamUrl;
            } catch (e) { diag.catalogError = e.message; }
            diag.slug = slug;
            let master = url.searchParams.get('m3u8') || diag.masterUrl;
            if (!master && slug) {
                const st = await javhd.getStream(`javhd:${slug}`, 'movie', host);
                diag.streamsCount = st.length;
            }
            await probe('page', () => brief(`https://javhdz.one/${slug}.html`));
            if (master) {
                await probe('cdnDirect', () => brief(master));
                if (IS_CF_WORKER) await probe('vnProxies', async () => ({ results: await vnProbe(master, { headers: hdr }) }));
            }
            await probe('render', () => brief(`${RENDER_BASE}/javhd/stream/${slug}/1080.m3u8?cfhost=${encodeURIComponent(host)}`));
            await probe('playlist', async () => {
                const p = await javhd.getM3u8(slug, '1080', host, env, { ...VN_FETCH, fresh: true });
                return { len: p.length, head: p.slice(0, 200) };
            });
            return new Response(JSON.stringify(diag, null, 2), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } });
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
                            'Content-Type': 'application/vnd.apple.mpegurl',
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
                                'Content-Type': 'application/vnd.apple.mpegurl',
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
                        'Content-Type': 'application/vnd.apple.mpegurl',
                        'Cache-Control': 'max-age=1800, public'
                    }
                });
            } catch (err) {
                return new Response('Error generating playlist: ' + err.message, { status: 500, headers: CORS_HEADERS });
            }
        }

        // fs1.app (Jable clone) diagnostics: page -> hlsUrl -> playlist from the Worker
        if (pathname === '/fs1/debug') {
            const slug = url.searchParams.get('slug') || 'start-617';
            const hdr = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Referer': 'https://fs1.app/' };
            const out = { slug };
            try {
                const pr = await fetch(`https://fs1.app/videos/${encodeURIComponent(slug)}/`, { headers: hdr, signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined });
                const html = await pr.text();
                out.page = { status: pr.status, length: html.length };
                const m = html.match(/var\s+hlsUrl\s*=\s*['"]([^'"]+)['"]/);
                out.hlsUrl = m ? m[1] : null;
                const t = html.match(/<title>([^<]*)<\/title>/);
                out.title = t ? t[1] : null;
                if (out.hlsUrl) {
                    const mr = await fetch(out.hlsUrl, { headers: hdr, signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined });
                    const mt = await mr.text();
                    out.playlist = { status: mr.status, length: mt.length, contentType: mr.headers.get('content-type'), cors: mr.headers.get('access-control-allow-origin'), head: mt.slice(0, 400) };
                    const mr2 = await fetch(out.hlsUrl, { headers: { 'User-Agent': hdr['User-Agent'] }, signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined });
                    out.playlistNoReferer = { status: mr2.status };
                }
            } catch (e) { out.error = e.message; }
            return new Response(JSON.stringify(out, null, 2), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8' } });
        }

        // Generic page scanner: fetch a URL from the Worker and list only player-related findings (keeps output small)
        if (pathname === '/debug/scan') {
            const target = url.searchParams.get('url');
            if (!target) return new Response('Missing url parameter', { status: 400, headers: CORS_HEADERS });
            try {
                const r = await fetch(target, {
                    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Referer': url.searchParams.get('referer') || new URL(target).origin + '/' },
                    signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined
                });
                const html = await r.text();
                const uniq = (arr) => [...new Set(arr)].slice(0, 25);
                const media = uniq(html.match(/(?:https?:)?\\?\/\\?\/[^"'\s<>\\]+\.(?:m3u8|mp4|mpd)[^"'\s<>\\]*/g) || []);
                const iframes = uniq([...html.matchAll(/<iframe[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]));
                let keys = /m3u8|\.mp4|video_url|video_embed|data-src-video|player|source|stream|embed|hls|file["']?\s*:/i;
                const q = url.searchParams.get('q');
                if (q) { try { keys = new RegExp(q, 'i'); } catch (e) {} }
                const lines = html.split('\n').map(l => l.trim()).filter(l => l && keys.test(l) && !/^<(link|meta|style)/i.test(l) && !/embed-responsive/.test(l)).map(l => { const m = l.match(keys); const i = Math.max(0, (m ? m.index : 0) - 120); return l.slice(i, i + 320); }).slice(0, 40);
                return new Response(JSON.stringify({ target, status: r.status, length: html.length, media, iframes, lines }, null, 2), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8' } });
            } catch (e) {
                return new Response(JSON.stringify({ target, error: e.message }), { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } });
            }
        }

        // Hohoj diagnostics: embed m3u8 + playlist/segment probe, plus list-page structure
        if (pathname === '/hohoj/debug') {
            const id = url.searchParams.get('id') || '60919';
            const listPath = url.searchParams.get('list') || '/';
            const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
            const out = { id };
            const get = async (u, headers = {}) => fetch(u, { headers: { 'User-Agent': UA, ...headers }, signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined });
            try {
                const er = await get(`https://hohoj.tv/embed?id=${encodeURIComponent(id)}`, { 'Referer': `https://hohoj.tv/video?id=${encodeURIComponent(id)}` });
                const eh = await er.text();
                out.embedStatus = er.status;
                const m = eh.match(/var\s+videoSrc\s*=\s*["']([^"']+)["']/);
                out.videoSrc = m ? m[1] : null;
                if (out.videoSrc) {
                    const probe = async (headers) => {
                        try {
                            const pr = await get(out.videoSrc, headers);
                            const txt = await pr.text();
                            const h = (n) => pr.headers.get(n);
                            const lines = txt.split('\n').map(l => l.trim()).filter(Boolean);
                            const seg = lines.find(l => !l.startsWith('#'));
                            return { status: pr.status, type: h('content-type'), cors: h('access-control-allow-origin'), head: txt.slice(0, 500), firstUri: seg, lineCount: lines.length };
                        } catch (e) { return { error: e.message }; }
                    };
                    out.playlistWithReferer = await probe({ 'Referer': 'https://hohoj.tv/' });
                    out.playlistNoReferer = await probe({});
                    const first = out.playlistNoReferer.firstUri || out.playlistWithReferer.firstUri;
                    if (first) {
                        const segUrl = new URL(first, out.videoSrc).href;
                        out.segmentUrl = segUrl;
                        try {
                            const sr = await get(segUrl, { 'Range': 'bytes=0-511' });
                            const buf = await sr.arrayBuffer();
                            out.segment = { status: sr.status, type: sr.headers.get('content-type'), bytes: buf.byteLength, cors: sr.headers.get('access-control-allow-origin') };
                        } catch (e) { out.segment = { error: e.message }; }
                        try {
                            const sr = await get(segUrl, { 'Range': 'bytes=0-511', 'Referer': 'https://hohoj.tv/' });
                            out.segmentWithReferer = { status: sr.status };
                        } catch (e) { out.segmentWithReferer = { error: e.message }; }
                    }
                }
            } catch (e) { out.error = e.message; }
            try {
                const lr = await get(new URL(listPath, 'https://hohoj.tv').href, { 'Referer': 'https://hohoj.tv/' });
                const html = await lr.text();
                const nth = Math.max(0, parseInt(url.searchParams.get('nth') || '0', 10) || 0);
                const idxs = [...html.matchAll(/video\?id=\d+/g)].map(m => m.index);
                const vi = idxs.length ? idxs[Math.min(nth, idxs.length - 1)] : -1;
                out.list = {
                    totalVideoLinks: idxs.length,
                    status: lr.status,
                    title: (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1],
                    sample: vi >= 0 ? html.slice(Math.max(0, vi - 500), vi + 1100) : null,
                    pagination: [...new Set([...html.matchAll(/href="([^"#]*[?&]page=\d+[^"]*)"/g)].map(m => m[1]))].slice(0, 8),
                    menu: [...new Set([...html.matchAll(/href="(\/[^"#]*)"/g)].map(m => m[1]))].filter(h => !/video\?id=|resources|^\/embed/.test(h)).slice(0, 50),
                    searchForms: [...html.matchAll(/<form[^>]*>[\s\S]{0,300}/gi)].map(m => m[0].replace(/\s+/g, ' ').slice(0, 300)).filter(f => /search|keyword|query/i.test(f)).slice(0, 3),
                    searchScript: (() => { const a = html.indexOf('#search-input'); return a >= 0 ? html.slice(Math.max(0, a - 1500), a + 1000).replace(/\s+/g, ' ') : null; })(),
                    searchFn: (() => { const a = html.search(/function\s+search\s*\(/); return a >= 0 ? html.slice(a, a + 900).replace(/\s+/g, ' ') : null; })(),
                    extraInfo: (() => { const a = html.indexOf('/extra_info'); return a >= 0 ? html.slice(Math.max(0, a - 50), a + 500).replace(/\s+/g, ' ') : null; })(),
                    searchInput: (html.match(/<input[^>]*id="search-input"[^>]*>/i) || [])[0],
                    pageLinks: [...new Set([...html.matchAll(/href="([^"#]*(?:page|p|pg)=\d+[^"]*)"/g)].map(m => m[1]))].slice(0, 8)
                };
            } catch (e) { out.list = { error: e.message }; }
            return new Response(JSON.stringify(out, null, 2), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8' } });
        }

        // Generic list-page structure probe: sample around a needle, pagination links, menu links, search forms
        if (pathname === '/debug/list') {
            const target = url.searchParams.get('url');
            if (!target) return new Response('Missing url parameter', { status: 400, headers: CORS_HEADERS });
            let needle;
            try { needle = new RegExp(url.searchParams.get('needle') || 'href="[^"]*/phim/', 'g'); } catch (e) { needle = /href="[^"]*\/phim\//g; }
            const nth = Math.max(0, parseInt(url.searchParams.get('nth') || '0', 10) || 0);
            try {
                const r = await fetch(target, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Referer': new URL(target).origin + '/' }, signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined });
                const html = await r.text();
                const idxs = [...html.matchAll(needle)].map(m => m.index);
                const at = idxs.length ? idxs[Math.min(nth, idxs.length - 1)] : -1;
                const hrefs = [...new Set([...html.matchAll(/href="([^"#]+)"/g)].map(m => m[1]))];
                const out = {
                    target, finalUrl: r.url, status: r.status, length: html.length,
                    title: (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1],
                    matches: idxs.length,
                    sample: at >= 0 ? html.slice(Math.max(0, at - 400), at + 1300) : null,
                    pageLinks: hrefs.filter(h => /[?&](?:page|p|paged)=\d+|\/page\/\d+|\/trang[-/]?\d+|\/p\d+/i.test(h)).slice(0, 10),
                    menu: hrefs.filter(h => !/\.(?:css|js|jpg|png|svg|ico|webp)/i.test(h)).slice(0, 60),
                    forms: [...html.matchAll(/<form[^>]*>[\s\S]{0,350}/gi)].map(m => m[0].replace(/\s+/g, ' ').slice(0, 350)).filter(f => /search|tim|keyword|query|name="s"|name="q"/i.test(f)).slice(0, 3)
                };
                return new Response(JSON.stringify(out, null, 2), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8' } });
            } catch (e) {
                return new Response(JSON.stringify({ target, error: e.message }), { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } });
            }
        }

        // Generic HLS probe: master -> variant -> first segment, with/without Referer
        if (pathname === '/debug/hls') {
            const target = url.searchParams.get('url');
            if (!target) return new Response('Missing url parameter', { status: 400, headers: CORS_HEADERS });
            const referer = url.searchParams.get('referer');
            const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
            const out = { target };
            const get = (u, headers = {}) => fetch(u, { headers: { 'User-Agent': UA, ...headers }, signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined });
            const firstUri = (txt) => txt.split('\n').map(l => l.trim()).find(l => l && !l.startsWith('#'));
            try {
                for (const withRef of [true, false]) {
                    if (withRef && !referer) continue;
                    const key = withRef ? 'withReferer' : 'noReferer';
                    const h = withRef ? { Referer: referer } : {};
                    const step = {};
                    try {
                        const mr = await get(target, h);
                        const mt = await mr.text();
                        step.master = { status: mr.status, type: mr.headers.get('content-type'), cors: mr.headers.get('access-control-allow-origin'), head: mt.slice(0, 400) };
                        const v = firstUri(mt);
                        if (mr.ok && v) {
                            const vUrl = new URL(v, target).href;
                            step.variantUrl = vUrl.slice(0, 200);
                            const isMedia = /#EXTINF/.test(mt);
                            let segSrc = isMedia ? mt : null, base = target;
                            if (!isMedia) {
                                const vr = await get(vUrl, h);
                                const vt = await vr.text();
                                step.variant = { status: vr.status, cors: vr.headers.get('access-control-allow-origin'), head: vt.slice(0, 400), lines: vt.split('\n').length };
                                segSrc = vt; base = vUrl;
                            }
                            const sv = segSrc && firstUri(segSrc);
                            if (sv) {
                                const segUrl = new URL(sv, base).href;
                                step.segmentUrl = segUrl.slice(0, 200);
                                const sr = await get(segUrl, { Range: 'bytes=0-511', ...h });
                                const buf = await sr.arrayBuffer();
                                const u8 = new Uint8Array(buf);
                                const hex = [...u8.slice(0, 16)].map(b => b.toString(16).padStart(2, '0')).join(' ');
                                const sync = []; for (let i = 0; i + 188 < u8.length && sync.length < 3; i++) { if (u8[i] === 0x47 && u8[i + 188] === 0x47) sync.push(i); }
                                step.segment = { status: sr.status, type: sr.headers.get('content-type'), bytes: buf.byteLength, cors: sr.headers.get('access-control-allow-origin'), first16: hex, tsSyncAt: sync, range: sr.headers.get('content-range') };
                            }
                        }
                    } catch (e) { step.error = e.message; }
                    out[key] = step;
                }
            } catch (e) { out.error = e.message; }
            return new Response(JSON.stringify(out, null, 2), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8' } });
        }

        // Sexmupxinh diagnostics: pid of a movie page + the /player-proxy.php answer
        if (pathname === '/sexmup/debug') {
            const target = url.searchParams.get('url') || 'https://sexmupxinh.net/phim/tinh-vung-trom-de-me-voi-me-dam-ban-than';
            const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
            const out = { target };
            try {
                const r = await fetch(target, { headers: { 'User-Agent': UA, 'Referer': 'https://sexmupxinh.net/' }, signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined });
                const html = await r.text();
                out.status = r.status;
                const pidLines = html.split('\n').map(l => l.trim()).filter(l => /\bpid\b/.test(l)).map(l => l.slice(0, 300)).slice(0, 8);
                out.pidLines = pidLines;
                const pm = html.match(/\bpid\s*=\s*['"]?([\w-]+)['"]?/) || html.match(/data-(?:pid|id)=["']([\w-]+)["']/);
                out.pid = url.searchParams.get('pid') || (pm && pm[1]) || null;
                if (out.pid) {
                    const pr = await fetch(`https://sexmupxinh.net/player-proxy.php?id=${encodeURIComponent(out.pid)}&_ts=${Date.now()}`, { headers: { 'User-Agent': UA, 'Referer': target, 'X-Requested-With': 'XMLHttpRequest' }, signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined });
                    const txt = await pr.text();
                    out.proxy = { status: pr.status, type: pr.headers.get('content-type'), len: txt.length, body: txt.slice(0, 1500) };
                }
            } catch (e) { out.error = e.message; }
            return new Response(JSON.stringify(out, null, 2), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8' } });
        }

        // Hohoj URL variants: which list/search URLs does the site answer to the Worker?
        if (pathname === '/hohoj/variants') {
            const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
            const paths = (url.searchParams.get('paths') || '').split('|').filter(Boolean);
            const defaults = [
                '/lang_en/?p=2',
                '/lang_en/main_ctg?id=1&p=2',
                '/lang_en/search?type=uncensored',
                '/lang_en/search?text=AVSA',
                '/lang_en/model?id=43',
                '/lang_en/extra_info',
                '/extra_info'
            ];
            const BROWSER = { 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', 'Accept-Language': 'en-US,en;q=0.9', 'Upgrade-Insecure-Requests': '1' };
            const results = [];
            for (const path of (paths.length ? paths : defaults)) {
                for (const variant of ['plain', 'browserAccept']) {
                    try {
                        const r = await fetch(new URL(path, 'https://hohoj.tv').href, { headers: { 'User-Agent': UA, 'Referer': 'https://hohoj.tv/', ...(variant === 'browserAccept' ? BROWSER : {}) }, signal: AbortSignal.timeout ? AbortSignal.timeout(8000) : undefined });
                        const html = await r.text();
                        const ids = [...html.matchAll(/video\?id=(\d+)/g)].map(m => m[1]);
                        results.push({ path, variant, status: r.status, type: r.headers.get('content-type'), len: html.length, videoLinks: ids.length, firstIds: ids.slice(0, 3), head: ids.length ? undefined : html.replace(/\s+/g, ' ').slice(0, 160) });
                    } catch (e) { results.push({ path, variant, error: e.message }); }
                }
            }
            return new Response(JSON.stringify(results, null, 1), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8' } });
        }

        // Javtiful list structure: sample cards, pagination, menu links, search form
        if (pathname === '/javtiful/list') {
            const target = url.searchParams.get('url') || 'https://javtiful.com/vn/videos';
            try {
                const r = await fetch(target, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Referer': 'https://javtiful.com/' }, signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined });
                const html = await r.text();
                const parts = html.split(/(?=<[a-z]+[^>]*class="[^"]*\bvideo-card\b[^"]*")/).slice(1, 3).map(s => s.slice(0, 1800));
                const hrefs = [...new Set([...html.matchAll(/href="([^"#]+)"/g)].map(m => m[1]))];
                const pag = hrefs.filter(h => /[?&]page=|\/page\/|\/\d+$/.test(h) && !/video\//.test(h)).slice(0, 12);
                const menu = hrefs.filter(h => /^\/(vn|en)?\/?(videos|categories|category|genre|tag|search|trending|popular|new|latest|hot|top)/i.test(h) || /\/(categories|category|search|trending|popular|newest|latest|hot|top)/i.test(h)).slice(0, 60);
                const forms = [...html.matchAll(/<form[^>]*>[\s\S]{0,400}/gi)].map(m => m[0].replace(/\s+/g, ' ').slice(0, 400)).filter(f => /search/i.test(f)).slice(0, 3);
                const cardCount = (html.match(/<article class="video-card/g) || []).length;
                const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1];
                const head = parts.length ? undefined : html.replace(/\s+/g, ' ').slice(0, 600);
                const videoLinks = [...new Set([...html.matchAll(/href="(\/(?:vn|en)\/video\/\d+\/[^"]+)"/g)].map(m => m[1]))].slice(0, 10);
                const vi = html.search(/\/(?:vn|en)\/video\/\d+\//);
                const sample = vi >= 0 ? html.slice(Math.max(0, vi - 300), vi + 1200) : undefined;
                const noResult = (html.match(/[^>]{0,80}(?:không tìm thấy|no results?|not found|0 kết quả)[^<]{0,80}/i) || [])[0];
                return new Response(JSON.stringify({ target, finalUrl: r.url, status: r.status, length: html.length, title, cardCount, videoLinks, noResult, sample, cards: parts, head: parts.length || sample ? undefined : head, pagination: pag, menu, searchForms: forms }, null, 2), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8' } });
            } catch (e) {
                return new Response(JSON.stringify({ target, error: e.message }), { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } });
            }
        }

        // Javtiful diagnostics: <video id="front-player"> + playerSources of a movie page, then probe the first source
        if (pathname === '/javtiful/debug') {
            const target = url.searchParams.get('url') || 'https://javtiful.com/vn/video/114709/tikb-229';
            const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
            const out = { target };
            try {
                const r = await fetch(target, { headers: { 'User-Agent': UA, 'Referer': 'https://javtiful.com/' }, signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined });
                const html = await r.text();
                out.status = r.status;
                const vm = html.match(/<video[^>]*id="front-player"[\s\S]*?<\/video>/i);
                out.videoTag = vm ? vm[0].slice(0, 3000) : null;
                let sources = null;
                const i = html.indexOf('"playerSources"');
                if (i >= 0) {
                    const a = html.indexOf('[', i);
                    let depth = 0, end = -1;
                    for (let k = a; k < html.length && k < a + 20000; k++) {
                        const ch = html[k];
                        if (ch === '[') depth++;
                        else if (ch === ']') { depth--; if (depth === 0) { end = k; break; } }
                    }
                    if (a >= 0 && end > a) { try { sources = JSON.parse(html.slice(a, end + 1)); } catch (e) { out.parseError = e.message; out.raw = html.slice(a, a + 1500); } }
                }
                out.playerSources = sources ? sources.slice(0, 6) : null;
                const first = sources && sources[0] && sources[0].src;
                if (first) {
                    const probe = async (headers) => {
                        try {
                            const pr = await fetch(first, { headers: { 'User-Agent': UA, 'Range': 'bytes=0-1023', ...headers }, signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined });
                            const buf = await pr.arrayBuffer();
                            const txt = new TextDecoder().decode(buf.slice(0, 300));
                            const h = (n) => pr.headers.get(n);
                            return { status: pr.status, type: h('content-type'), len: h('content-length'), range: h('content-range'), accept: h('accept-ranges'), cors: h('access-control-allow-origin'), head: /^#EXTM3U/.test(txt) ? txt : txt.replace(/[^\x20-\x7e]/g, '.').slice(0, 80) };
                        } catch (e) { return { error: e.message }; }
                    };
                    out.probeWithReferer = await probe({ 'Referer': 'https://javtiful.com/' });
                    out.probeNoReferer = await probe({});
                }
            } catch (e) { out.error = e.message; }
            return new Response(JSON.stringify(out, null, 2), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8' } });
        }

        // HAYAV diagnostics: inline player-loader script + source tokens of a movie page
        if (pathname === '/hayav/debug') {
            const target = url.searchParams.get('url') || 'https://hayav.com/video/chinese-subtitles/abf-375c/';
            try {
                const r = await fetch(target, {
                    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Referer': 'https://hayav.com/' },
                    signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined
                });
                const html = await r.text();
                const sm = html.match(/<script id="hayav-player-pilot-script"[^>]*>([\s\S]*?)<\/script>/i);
                const tokens = [...html.matchAll(/<[^>]*data-hayav-player-token=["'][^>]*>/gi)].map(m => m[0].slice(0, 400)).slice(0, 10);
                if (url.searchParams.get('probe')) {
                    const toks = [...new Set([...html.matchAll(/data-hayav-player-token=["']([^"']+)["']/g)].map(m => m[1]))].slice(0, 6);
                    const sources = [];
                    for (const token of toks) {
                        try {
                            const pr = await fetch('https://hayav.com/wp-admin/admin-ajax.php', {
                                method: 'POST',
                                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', 'Referer': target, 'Origin': 'https://hayav.com' },
                                body: new URLSearchParams({ action: 'hayav_player_pilot_source', token }).toString(),
                                signal: AbortSignal.timeout ? AbortSignal.timeout(10000) : undefined
                            });
                            const txt = await pr.text();
                            let h = txt;
                            try { const j = JSON.parse(txt); h = (j && j.data && j.data.html) || txt; } catch (e) {}
                            sources.push({ status: pr.status, html: String(h).slice(0, 1200) });
                        } catch (e) { sources.push({ error: e.message }); }
                    }
                    return new Response(JSON.stringify({ target, status: r.status, sources }, null, 2), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8' } });
                }
                return new Response(JSON.stringify({ target, status: r.status, script: sm ? sm[1].slice(0, 6000) : null, tokens }, null, 2), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8' } });
            } catch (e) {
                return new Response(JSON.stringify({ target, error: e.message }), { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } });
            }
        }

        // AVDB diagnostics: API item, 18plusok mirror, upload18 embed from the Worker, Render
        if (pathname === '/avdb/debug') {
            const id = url.searchParams.get('id') || '';
            const diag = { stages: {} };
            const probe = async (label, fn) => {
                const t0 = Date.now();
                try { diag.stages[label] = { ...(await fn()), ms: Date.now() - t0 }; }
                catch (e) { diag.stages[label] = { error: e.message, ms: Date.now() - t0 }; }
            };
            const brief = async (u, headers = { 'User-Agent': 'Mozilla/5.0' }) => {
                const r = await fetch(u, { headers, signal: AbortSignal.timeout ? AbortSignal.timeout(8000) : undefined });
                const t = await r.text();
                return { status: r.status, len: t.length, head: t.slice(0, 200).replace(/\s+/g, ' ') };
            };
            let item = null;
            await probe('api', async () => {
                const r = await fetch(`https://avdbapi.com/api.php/provide/vod?ac=detail&ids=${encodeURIComponent(id)}`, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout ? AbortSignal.timeout(8000) : undefined });
                const j = await r.json();
                item = j && j.list && j.list[0];
                return { status: r.status, found: !!item, episodes: item && item.episodes, keys: item && Object.keys(item) };
            });
            const ep = item && item.episodes && item.episodes.server_data && Object.values(item.episodes.server_data)[0];
            const slug = ep && ep.link_embed ? ep.link_embed.split('/').pop() : (item && item.slug) || '';
            await probe('provide1', async () => {
                const r = await fetch(`https://avdbapi.com/api.php/provide1/vod?ac=detail&ids=${encodeURIComponent(id)}`, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout ? AbortSignal.timeout(8000) : undefined });
                const j = await r.json();
                const it = j && j.list && j.list[0];
                return { status: r.status, vod_play_from: it && it.vod_play_from, vod_play_url: it && it.vod_play_url };
            });
            await probe('mirror', async () => {
                const r = await fetch(`https://18plusok.vercel.app/eyJoaWRlRnJvbUhvbWUiOnRydWV9/stream/movie/avdb:${encodeURIComponent(id)}.json`, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout ? AbortSignal.timeout(8000) : undefined });
                const j = await r.json();
                const s0 = j && j.streams && j.streams[0];
                diag.mirrorStream = s0 || null;
                return { status: r.status, streams: (j.streams || []).length };
            });
            if (diag.mirrorStream && diag.mirrorStream.url) {
                const ph = (diag.mirrorStream.behaviorHints && diag.mirrorStream.behaviorHints.proxyHeaders && diag.mirrorStream.behaviorHints.proxyHeaders.request) || { 'Referer': 'https://upload18.org/' };
                await probe('helvidFromWorker', () => brief(diag.mirrorStream.url, { 'User-Agent': 'Mozilla/5.0', ...ph }));
                await probe('helvidNoHeaders', () => brief(diag.mirrorStream.url, { 'User-Agent': 'Mozilla/5.0' }));
            }
            if (slug) {
                await probe('embedCom', () => brief(`https://upload18.com/play/index/${slug}`));
                await probe('embedOrg', () => brief(`https://upload18.org/play/index/${slug}`));
            }
            await probe('render', () => brief(`${RENDER_BASE}/avdb/stream/${encodeURIComponent(slug)}.m3u8?cfhost=${encodeURIComponent(host)}&id=${encodeURIComponent(id)}`));
            return new Response(JSON.stringify(diag, null, 2), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8' } });
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

        // 8c3. VSMOV playlist: resolve the embed page's signed master at play time, route segments through /vsmov/seg.ts
        if (pathname === '/vsmov/playlist.m3u8') {
            const embed = url.searchParams.get('e');
            if (!embed) return new Response('Missing e parameter', { status: 400, headers: CORS_HEADERS });
            const res = await edgeCached(request, ctx, 1800, async () => {
                try {
                    return playlistResponse(await vsmov.buildPlaylist(embed, `${url.protocol}//${host}`), 1800);
                } catch (err) {
                    console.warn('[VSMOV Playlist Error]:', err.message);
                    return null;
                }
            });
            return res || new Response('Cannot resolve VSMOV playlist', { status: 502, headers: CORS_HEADERS });
        }
        if (pathname === '/vsmov/seg.ts') {
            return handleVsmovSegment(url.searchParams.get('u'));
        }

        // 8c2. VSMOV diagnostics: embed page -> signed master -> variant -> first segment (status, CORS, PNG wrapper?)
        if (pathname === '/vsmov/debug') {
            const slug = url.searchParams.get('slug');
            if (!slug) return new Response('Missing slug query parameter', { status: 400, headers: CORS_HEADERS });
            try {
                const report = await vsmov.debugStream(slug);
                return new Response(JSON.stringify(report, null, 2), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json; charset=utf-8' } });
            } catch (e) {
                return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } });
            }
        }

        // 8d. KKPhim diagnostics: shows which stage (direct / VN proxy) works for a playlist URL and how many ads are cut
        if (pathname === '/kkphim/debug') {
            const targetUrl = url.searchParams.get('url');
            if (!targetUrl) return new Response('Missing url query parameter', { status: 400, headers: CORS_HEADERS });
            const hdrs = { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://player.phimapi.com/', 'Origin': 'https://player.phimapi.com' };
            const report = { url: targetUrl, isWorker: IS_CF_WORKER };
            const t0 = Date.now();
            try {
                const r = await fetch(targetUrl, { headers: hdrs, signal: AbortSignal.timeout ? AbortSignal.timeout(4000) : undefined });
                const txt = await r.text();
                report.direct = { status: r.status, m3u8: txt.includes('#EXTM3U'), ms: Date.now() - t0 };
            } catch (e) { report.direct = { error: e.message, ms: Date.now() - t0 }; }
            const t1 = Date.now();
            let raw = '';
            try {
                raw = IS_CF_WORKER ? await vnFetchText(targetUrl, { headers: hdrs }) : '';
                report.vnProxy = { ok: !!raw, ms: Date.now() - t1 };
            } catch (e) { report.vnProxy = { error: e.message, ms: Date.now() - t1 }; }
            if (raw) {
                report.isMaster = raw.includes('#EXT-X-STREAM-INF');
                if (report.isMaster) {
                    // look into the variants: block layout (DISCONTINUITY-separated) shows where the ads sit
                    const variants = kkphim.listVariants(raw, targetUrl);
                    report.variants = variants;
                    const wanted = url.searchParams.get('variant');
                    const vUrl = (wanted && variants.find(v => v.includes(wanted))) || variants[0];
                    if (vUrl) {
                        try {
                            const vText = IS_CF_WORKER ? await vnFetchText(vUrl, { headers: hdrs }) : '';
                            report.variant = { url: vUrl, ok: !!vText };
                            if (vText) {
                                report.layout = kkphim.describeBlocks(vText, vUrl);
                                // what the player gets vs. the original: tag kinds, first lines, relative URIs in tags
                                const tagKinds = {};
                                vText.split(/\r?\n/).forEach(l => { if (l.startsWith('#')) { const k = l.split(/[:,]/)[0]; tagKinds[k] = (tagKinds[k] || 0) + 1; } });
                                const cleanedText = kkphim.cleanM3u8(vText, vUrl);
                                report.tagKinds = tagKinds;
                                report.tagUriLines = [...new Set(vText.split(/\r?\n/).filter(l => l.startsWith('#') && l.includes('URI=')))].slice(0, 6);
                                report.rawHead = vText.split(/\r?\n/).slice(0, 14);
                                report.cleanedHead = cleanedText.split(/\r?\n/).slice(0, 14);
                                report.cleanedSegments = cleanedText.split(/\r?\n/).filter(l => l && !l.startsWith('#')).length;
                                if (url.searchParams.get('raw') === '1') report.variantText = vText.slice(0, 20000);
                            }
                        } catch (e) { report.variant = { url: vUrl, error: e.message }; }
                    }
                }
                if (!report.isMaster) {
                    const before = raw.split('\n').filter(l => l.trim() && !l.startsWith('#')).length;
                    const cleaned = kkphim.cleanM3u8(raw, targetUrl);
                    const after = cleaned.split('\n').filter(l => l.trim() && !l.startsWith('#')).length;
                    report.segments = { before, after, removed: before - after };
                    report.layout = kkphim.describeBlocks(raw, targetUrl);
                }
            }
            return new Response(JSON.stringify(report, null, 2), { headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } });
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
                        // Master: warm the cleaned variant playlists so the player's next request is an edge-cache hit
                        if (!playlist.includes('#EXTINF') && ctx && ctx.waitUntil && IS_CF_WORKER) {
                            playlist.split('\n').filter(l => l.includes('/kkphim/clean.m3u8?url=')).slice(0, 4)
                                .forEach(l => ctx.waitUntil(fetch(l.trim()).then(r => r.arrayBuffer()).catch(() => {})));
                        }
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
                                'Content-Type': 'application/vnd.apple.mpegurl',
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
                                        'Content-Type': 'application/vnd.apple.mpegurl',
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
                    'Content-Type': 'application/vnd.apple.mpegurl',
                    'Cache-Control': 'no-cache'
                }
            });
        }

        if (pathname === '/debug/test-render') {
            const target = url.searchParams.get('url') || 'https://javhdz.one/';
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

            // Fallback / Delegation to Render for adult resources that may be blocked on Cloudflare edge IPs (JavHD, VLXX, AVDB)
            const isAdultSource = id && (id.startsWith('javhd') || id.startsWith('vlxx') || id.startsWith('avdb'));
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

            // KKPhim: warm the "Lọc QC" playlists while the user is still picking a stream
            if (resource === 'stream' && IS_CF_WORKER && ctx && ctx.waitUntil && resp && Array.isArray(resp.streams)) {
                resp.streams.filter(st => st && st.url && st.url.includes('/kkphim/clean.m3u8?url=')).slice(0, 2)
                    .forEach(st => ctx.waitUntil(fetch(st.url).then(r => r.arrayBuffer()).catch(() => {})));
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
