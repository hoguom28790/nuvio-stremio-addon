// Read-only look at one page from this machine (GitHub Actions): status, title, first links/cards, player hints.
// node scripts/probe_site.js <url> [<url> ...]   Plain GETs with an ordinary browser User-Agent; changes nothing.
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const line = (k, v) => console.log(`${k}: ${typeof v === 'string' ? v : JSON.stringify(v)}`);

async function look(url, referer) {
    const r = await fetch(url, { headers: { 'User-Agent': UA, ...(referer ? { Referer: referer } : {}) }, signal: AbortSignal.timeout(20000), redirect: 'follow' });
    const t = await r.text();
    const title = (t.match(/<title>([\s\S]*?)<\/title>/i) || [])[1];
    line('url', url);
    line('  status', { status: r.status, final: r.url, title: title && title.trim().slice(0, 100), length: t.length, challenge: /Just a moment|cf-chl|challenge-platform|Attention Required/i.test(t) });
    const hrefs = [...new Set([...t.matchAll(/href="([^"#]+)"/g)].map(m => m[1]))].filter(h => !/\.(css|js|png|jpg|svg|ico|webp)(\?|$)/i.test(h));
    line('  links', hrefs.slice(0, 45));
    line('  pager', hrefs.filter(h => /[?&]page=\d+|\/page\/\d+|\/trang[-/]?\d+|\/p\d+/i.test(h)).slice(0, 6));
    line('  forms', [...t.matchAll(/<form[^>]*>/gi)].map(m => m[0].replace(/\s+/g, ' ').slice(0, 160)).slice(0, 3));
    line('  media', [...new Set((t.match(/(?:https?:)?\\?\/\\?\/[^"'\s<>\\]+\.(?:m3u8|mp4|mpd)[^"'\s<>\\]*/g) || []))].slice(0, 6));
    line('  iframes', [...t.matchAll(/<iframe[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]).slice(0, 6));
    line('  players', t.split('\n').map(l => l.trim()).filter(l => /m3u8|atob|player|videoSrc|embed|sources\s*[:=]|file\s*:/i.test(l) && !/^<(link|meta|style)/i.test(l)).slice(0, 10).map(l => l.slice(0, 240)));
    return { t, hrefs };
}

(async () => {
    for (const u of process.argv.slice(2)) {
        try { await look(u); } catch (e) { line('error', `${u} ${e.message}`); }
    }
})();
