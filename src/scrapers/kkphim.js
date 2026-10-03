const axios = require('axios');
const cache = require('../utils/cache');
const { parseFilter } = require('../utils/filterHelper');
const { findEpisode } = require('../utils/episodeHelper');

const BASE_URL = 'https://phimapi.com';
const CDN_URL = 'https://phimimg.com';

function getVnProxyFetcher() {
    if (typeof process === 'undefined' || !process?.versions?.node) {
        return null;
    }
    try {
        const req = Function('return require')();
        return req('../utils/vnProxyFetcher');
    } catch (e1) {
        return null;
    }
}

function formatPoster(path, cdnDomain = CDN_URL) {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    const clean = path.replace(/^\/+/, '');
    const domain = (cdnDomain || CDN_URL).replace(/\/+$/, '');
    if (clean.startsWith('upload/') || clean.startsWith('uploads/')) {
        return `${domain}/${clean}`;
    }
    return `${domain}/uploads/movies/${clean}`;
}

async function getCatalog(type, extra = {}) {
    try {
        const page = extra.skip ? Math.floor(extra.skip / 24) + 1 : 1;
        let url = '';

        if (extra.search) {
            url = `${BASE_URL}/v1/api/tim-kiem?keyword=${encodeURIComponent(extra.search)}&limit=24`;
        } else if (extra.genre) {
            const filter = parseFilter(extra.genre);
            if (filter) {
                if (filter.filterType === 'genre') {
                    url = `${BASE_URL}/v1/api/the-loai/${filter.slug}?page=${page}`;
                } else if (filter.filterType === 'country') {
                    url = `${BASE_URL}/v1/api/quoc-gia/${filter.slug}?page=${page}`;
                } else if (filter.filterType === 'year') {
                    url = `${BASE_URL}/v1/api/nam/${filter.slug}?page=${page}`;
                } else if (filter.filterType === 'category') {
                    url = `${BASE_URL}/v1/api/danh-sach/${filter.slug}?page=${page}`;
                } else if (filter.filterType === 'decade') {
                    url = `${BASE_URL}/v1/api/nam/${filter.slug}?page=${page}`;
                } else if (filter.filterType === 'search') {
                    url = `${BASE_URL}/v1/api/tim-kiem?keyword=${encodeURIComponent(filter.value)}&limit=24`;
                }
            }
        }

        if (!url) {
            if (type === 'series') {
                url = `${BASE_URL}/v1/api/danh-sach/phim-bo?page=${page}`;
            } else {
                url = `${BASE_URL}/v1/api/danh-sach/phim-le?page=${page}`;
            }
        }

        const cacheKey = `kkphim:catalog:${type}:${JSON.stringify(extra)}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const res = await axios.get(url, { timeout: 10000 });
        const items = res.data?.data?.items || res.data?.items || [];
        const cdnDomain = res.data?.data?.APP_DOMAIN_CDN_IMAGE || CDN_URL;

        const metas = items.map(item => {
            const rawPoster = item.poster_url || item.thumb_url || '';
            const poster = formatPoster(rawPoster, cdnDomain);
            
            return {
                id: `kkphim:${item.slug}`,
                type: type === 'series' ? 'series' : 'movie',
                name: item.name || 'Không tên',
                poster: poster,
                posterShape: 'poster',
                description: `${item.origin_name || ''} (${item.year || ''})\n⚡ Server: CDN Tốc Độ Cao\n🎞️ Chất lượng: ${item.quality || 'HD'} • ${item.lang || 'Vietsub'}`
            };
        });

        cache.set(cacheKey, metas, 600);
        return metas;
    } catch (err) {

        console.error('[KKPhim Catalog Error]:', err.message);
        return [];
    }
}

async function getMeta(type, id) {
    try {
        const slug = id.replace('kkphim:', '').split(':')[0];
        const cacheKey = `kkphim:meta:${slug}`;
        const cached = cache.get(cacheKey);
        if (cached) return cached;

        const res = await axios.get(`${BASE_URL}/phim/${slug}`, { timeout: 10000 });
        const movie = res.data?.movie;
        if (!movie) return null;

        const episodes = res.data?.episodes || [];
        const isSeries = type === 'series' || movie.type === 'series' || movie.type === 'hoathinh';

        const videos = [];
        if (isSeries && episodes.length > 0) {
            const serverData = episodes[0]?.server_data || [];
            serverData.forEach((ep, index) => {
                videos.push({
                    id: `kkphim:${slug}:1:${ep.slug || index + 1}`,
                    title: `Tập ${ep.name}`,
                    season: 1,
                    episode: index + 1,
                    released: new Date().toISOString()
                });
            });
        }

        const meta = {
            id: `kkphim:${slug}`,
            type: isSeries ? 'series' : 'movie',
            name: movie.name,
            poster: formatPoster(movie.poster_url),
            background: formatPoster(movie.thumb_url),
            description: (movie.content || '').replace(/<[^>]*>?/gm, ''),
            releaseInfo: String(movie.year || ''),
            genres: (movie.category || []).map(c => c.name),
            cast: movie.actor || [],
            director: movie.director ? [movie.director] : [],
            videos: videos.length > 0 ? videos : undefined
        };

        cache.set(cacheKey, meta, 3600);
        return meta;
    } catch (err) {
        console.error('[KKPhim Meta Error]:', err.message);
        return null;
    }
}

const AD_URI_RE = /convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i;
const HEADER_TAG_RE = /^#(EXTM3U|EXT-X-VERSION|EXT-X-TARGETDURATION|EXT-X-MEDIA-SEQUENCE|EXT-X-DISCONTINUITY-SEQUENCE|EXT-X-PLAYLIST-TYPE|EXT-X-ALLOW-CACHE|EXT-X-INDEPENDENT-SEGMENTS)/;
const MAX_AD_BLOCK_SECONDS = 90;

function segmentDir(uri) {
    const q = uri.split(/[?#]/)[0];
    return q.slice(0, q.lastIndexOf('/') + 1);
}

// Parse a media playlist into header tags, segment entries ({tags, uri, dur, disc, dir}) and trailing tags
function parseMedia(content, baseUrl) {
    const header = [];
    const entries = [];
    const tail = [];
    let pending = [];
    for (const raw of content.split(/\r?\n/)) {
        const line = raw.trim();
        if (!line) continue;
        if (line.startsWith('#')) {
            if (!entries.length && HEADER_TAG_RE.test(line)) header.push(raw);
            else pending.push(raw);
            continue;
        }
        const uri = /^https?:\/\//i.test(line) ? line : new URL(line, baseUrl).toString();
        const inf = pending.find(t => t.startsWith('#EXTINF'));
        entries.push({
            tags: pending,
            uri,
            dur: inf ? parseFloat(inf.slice(8)) || 0 : 0,
            disc: pending.some(t => t.trim().startsWith('#EXT-X-DISCONTINUITY') && !t.trim().startsWith('#EXT-X-DISCONTINUITY-SEQUENCE')),
            dir: segmentDir(uri)
        });
        pending = [];
    }
    tail.push(...pending);
    return { header, entries, tail };
}

// Mark ad entries: URL pattern match, plus structural detection of short DISCONTINUITY-bounded blocks that live in a
// different directory/host than the main feature (ad URLs change between providers, the structure does not).
function markAds(entries) {
    const blocks = [];
    entries.forEach((e, i) => {
        if (e.disc || !blocks.length) blocks.push({ from: i, to: i });
        else blocks[blocks.length - 1].to = i;
    });
    for (const e of entries) e.ad = AD_URI_RE.test(e.uri);
    if (blocks.length < 2) return;

    const dirTime = new Map();
    for (const e of entries) if (!e.ad) dirTime.set(e.dir, (dirTime.get(e.dir) || 0) + (e.dur || 1));
    let mainDir = null, mainTime = 0;
    for (const [d, t] of dirTime) if (t > mainTime) { mainDir = d; mainTime = t; }

    for (const b of blocks) {
        const slice = entries.slice(b.from, b.to + 1);
        if (slice.every(e => e.ad)) continue;
        const dur = slice.reduce((n, e) => n + (e.dur || 1), 0);
        const foreign = slice.every(e => e.dir !== mainDir);
        if (foreign && dur <= MAX_AD_BLOCK_SECONDS && dur < mainTime * 0.2) slice.forEach(e => { e.ad = true; });
    }
}

function cleanM3u8(content, baseUrl) {
    const { header, entries, tail } = parseMedia(content, baseUrl);
    markAds(entries);

    const out = [...header];
    let afterAd = false;
    for (const e of entries) {
        if (e.ad) { afterAd = true; continue; }
        let tags = e.tags;
        if (afterAd) {
            tags = tags.filter(t => {
                const x = t.trim();
                if (x.startsWith('#EXT-X-DISCONTINUITY-SEQUENCE')) return true;
                return !x.startsWith('#EXT-X-DISCONTINUITY') && !x.startsWith('#EXT-X-KEY:METHOD=NONE');
            });
            afterAd = false;
        }
        out.push(...tags, e.uri);
    }
    out.push(...tail);
    return out.join('\n');
}

function processCleanM3u8(content, targetUrl, host = '') {
    if (!content || typeof content !== 'string' || !content.includes('#EXTM3U')) {
        return null;
    }
    const hostBase = host ? (host.includes('://') ? host : `https://${host}`) : '';

    // 1. If this is a Master Playlist (#EXT-X-STREAM-INF), rewrite sub-playlist URLs to also be cleaned
    if (content.includes('#EXT-X-STREAM-INF')) {
        const lines = content.split(/\r?\n/);
        const rewritten = lines.map(line => {
            const trimmed = line.trim();
            if (trimmed && !trimmed.startsWith('#')) {
                const absoluteSubUrl = new URL(trimmed, targetUrl).toString();
                return `${hostBase}/kkphim/clean.m3u8?url=${encodeURIComponent(absoluteSubUrl)}`;
            }
            return line;
        });
        return rewritten.join('\n');
    }

    // 2. If this is a Media Playlist (#EXTINF:), clean ad segments and make .ts URLs absolute
    return cleanM3u8(content, targetUrl);
}

// Absolute URLs of every variant in a master playlist ([] for a media playlist)
function listVariants(content, baseUrl) {
    if (!content.includes('#EXT-X-STREAM-INF')) return [];
    const lines = content.split(/\r?\n/);
    const out = [];
    for (let i = 0; i < lines.length; i++) {
        if (!lines[i].startsWith('#EXT-X-STREAM-INF')) continue;
        const next = (lines[i + 1] || '').trim();
        if (next && !next.startsWith('#')) out.push(new URL(next, baseUrl).toString());
    }
    return out;
}

// Race a direct fetch against the Vietnam proxy: the KKPhim-family CDNs geo-block non-VN IPs (404), so on cloud hosts
// direct usually loses, but where it works it wins instantly. Running them in parallel avoids paying the direct
// timeout before the proxy even starts. `opts.fetchText` = Workers raw sockets; otherwise the Node proxy pool (Render).
async function fetchPlaylistText(targetUrl, fetchHeaders, opts = {}) {
    const valid = t => typeof t === 'string' && t.includes('#EXTM3U');
    const must = t => { if (!valid(t)) throw new Error('not m3u8'); return t; };

    const direct = async () => {
        if (typeof fetch === 'function') {
            const res = await fetch(targetUrl, {
                headers: fetchHeaders,
                signal: AbortSignal.timeout ? AbortSignal.timeout(4000) : undefined
            });
            if (!res.ok) throw new Error('direct ' + res.status);
            return must(await res.text());
        }
        const res = await axios.get(targetUrl, { headers: fetchHeaders, timeout: 4000, responseType: 'text' });
        return must(res.data);
    };

    const viaProxy = async () => {
        if (typeof opts.fetchText === 'function') {
            return must(await opts.fetchText(targetUrl, { headers: fetchHeaders }));
        }
        const fetcher = getVnProxyFetcher();
        if (!fetcher || typeof fetcher.fetchM3u8ViaVnProxy !== 'function') throw new Error('no proxy');
        return must(await fetcher.fetchM3u8ViaVnProxy(targetUrl));
    };

    try {
        return await Promise.any([direct(), viaProxy()]);
    } catch (e) {
        // one more proxy round (proxies are free/flaky) before giving up
        try { return await viaProxy(); } catch (e2) { return ''; }
    }
}

async function getCleanM3u8(targetUrl, host = 'localhost', opts = {}) {
    const cacheKey = `kkphim:clean:${targetUrl}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const fetchHeaders = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://player.phimapi.com/',
        'Origin': 'https://player.phimapi.com'
    };

    try {
        let content = await fetchPlaylistText(targetUrl, fetchHeaders, opts);
        if (!content) {
            // Immediate fallback to Virtual Master Playlist (HTTP 200) for client-side cleaning
            return `#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000\n${targetUrl}\n`;
        }

        // Master playlist with a single variant: return its cleaned media playlist directly (saves a round trip).
        // With several variants keep the master (variants rewritten to /kkphim/clean.m3u8) so the player's ABR can
        // start low and seeking does not always pull the heaviest 1080p segments.
        let mediaUrl = targetUrl;
        const variants = listVariants(content, targetUrl);
        if (variants.length === 1) {
            const variant = await fetchPlaylistText(variants[0], fetchHeaders, opts);
            if (variant.includes('#EXTINF')) {
                content = variant;
                mediaUrl = variants[0];
            }
        }

        const cleaned = processCleanM3u8(content, mediaUrl, host);
        if (cleaned) {
            cache.set(cacheKey, cleaned, 7200);
            return cleaned;
        }
        return `#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000\n${targetUrl}\n`;
    } catch (err) {
        console.warn(`[KKPhim Clean M3U8 Error for ${targetUrl}]:`, err.message);
        return `#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3000000\n${targetUrl}\n`;
    }
}

async function getStream(id, type, host = '') {
    try {
        // id format: kkphim:slug or kkphim:slug:season:episode
        const parts = id.replace('kkphim:', '').split(':');
        const slug = parts[0];
        const targetEp = parts[2] || (type === 'series' ? parts[1] : null);

        const res = await axios.get(`${BASE_URL}/phim/${slug}`, { timeout: 10000 });
        const episodes = res.data?.episodes || [];
        if (episodes.length === 0) return [];

        const streams = [];
        const fallbackHost = 'https://hophimaddon.hophim-4g6qbubt.workers.dev';
        const hostBase = host ? (host.includes('://') ? host : `https://${host}`) : fallbackHost;

        episodes.forEach(server => {
            const serverName = server.server_name || 'VIP';
            const serverData = server.server_data || [];

            const targetItem = findEpisode(serverData, targetEp);

            if (targetItem && targetItem.link_m3u8) {
                // Stream 1 (Ưu tiên số 1): Lọc Quảng Cáo (Khử sạch QC 15:00 & 3:00)
                streams.push({
                    name: `🛡️ [CDN] KKPhim • ${serverName} [Lọc QC]`,
                    title: `${res.data?.movie?.name || ''} - Tập ${targetItem.name}\n🛡️ Khử QC 15:00 & 3:00 (1080p Full HD)\n🎞️ 1080p Full HD • Vietsub`,
                    url: `${hostBase}/kkphim/clean.m3u8?url=${encodeURIComponent(targetItem.link_m3u8)}`,
                    behaviorHints: {
                        notWebReady: false
                    }
                });

                // Stream 2 (Dự phòng): Luồng trực tiếp CDN gốc
                streams.push({
                    name: `⚡ [CDN] KKPhim • ${serverName} [Gốc]`,
                    title: `${res.data?.movie?.name || ''} - Tập ${targetItem.name}\n⚡ Định tuyến: CDN Tốc Độ Cao (Direct HLS Gốc)\n🎞️ Độ phân giải: 1080p Full HD • Vietsub`,
                    url: targetItem.link_m3u8,
                    behaviorHints: {
                        notWebReady: false
                    }
                });
            }
        });

        return streams;
    } catch (err) {
        console.error('[KKPhim Stream Error]:', err.message);
        return [];
    }
}

module.exports = { listVariants, getCatalog, getMeta, getStream, getCleanM3u8, cleanM3u8, processCleanM3u8, formatPoster };



