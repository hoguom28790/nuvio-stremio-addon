const axios = require('axios');
const cache = require('../utils/cache');
const phimapi = require('./phimapi');

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

const formatPoster = phimapi.formatPoster;

function getCatalog(type, extra = {}) {
    return phimapi.getCatalog('kkphim', type, extra, {
        fallbackPath: type === 'series' ? '/v1/api/danh-sach/phim-bo' : '/v1/api/danh-sach/phim-le',
        describe: item => `${item.origin_name || ''} (${item.year || ''})\n⚡ Server: CDN Tốc Độ Cao\n🎞️ Chất lượng: ${item.quality || 'HD'} • ${item.lang || 'Vietsub'}`
    });
}

function getMeta(type, id) {
    return phimapi.getMeta('kkphim', type, id);
}

// With `host` each server also gets a "[Lọc QC]" stream served by /kkphim/clean.m3u8 (SSAI ad blocks cut out)
function getStream(id, type, host) {
    return phimapi.getStream('kkphim', 'KKPhim', id, type, { cleanHost: host });
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

// Diagnostics: structure of a media playlist as the ad detector sees it (blocks split by DISCONTINUITY)
function describeBlocks(content, baseUrl) {
    const { entries } = parseMedia(content, baseUrl);
    markAds(entries);
    const blocks = [];
    let t = 0;
    entries.forEach((e, i) => {
        if (e.disc || !blocks.length) blocks.push({ from: i, startSec: Math.round(t), sec: 0, segs: 0, ads: 0, dir: e.dir, first: e.uri, extra: new Set() });
        const b = blocks[blocks.length - 1];
        b.sec += e.dur || 0;
        b.segs++;
        if (e.ad) b.ads++;
        if (e.dir !== b.dir) b.extra.add(e.dir);
        b.last = e.uri;
        t += e.dur || 0;
    });
    return {
        segments: entries.length,
        totalSec: Math.round(t),
        blocks: blocks.map(b => ({
            from: b.from, startSec: b.startSec, startMin: +(b.startSec / 60).toFixed(1), sec: Math.round(b.sec), segs: b.segs,
            markedAsAd: b.ads, dir: b.dir, first: b.first.slice(-60), last: (b.last || '').slice(-60),
            otherDirs: [...b.extra].slice(0, 3)
        }))
    };
}

// The playlist is re-served from this addon's host, so every URI inside tags (KEY, MAP, MEDIA, ...) must be
// absolute too; a relative one would resolve against the addon host and 404 (player: "Video is not supported").
function absolutizeTagUris(line, baseUrl) {
    if (!line || line[0] !== '#' || !line.includes('URI="')) return line;
    return line.replace(/URI="([^"]*)"/g, (m, uri) => {
        if (!uri || /^(?:[a-z][a-z0-9+.-]*:)/i.test(uri)) return m;
        try { return `URI="${new URL(uri, baseUrl).toString()}"`; } catch (e) { return m; }
    });
}

function cleanM3u8(content, baseUrl) {
    const { header, entries, tail } = parseMedia(content, baseUrl);
    markAds(entries);

    const out = header.map(t => absolutizeTagUris(t, baseUrl));
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
        out.push(...tags.map(t => absolutizeTagUris(t, baseUrl)), e.uri);
    }
    out.push(...tail.map(t => absolutizeTagUris(t, baseUrl)));
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
            return absolutizeTagUris(line, targetUrl);
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


module.exports = { describeBlocks, listVariants, getCatalog, getMeta, getStream, getCleanM3u8, cleanM3u8, processCleanM3u8, formatPoster };
