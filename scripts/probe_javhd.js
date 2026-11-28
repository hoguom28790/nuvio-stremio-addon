// Read-only probe of a JavHD mirror from this machine (GitHub Actions): list page, one movie page, its playlist and first
// segment. Prints a short report; changes nothing. JAVHD_BASE=https://javhdz.page node scripts/probe_javhd.js
const BASE = (process.env.JAVHD_BASE || 'https://javhdz.page').replace(/\/$/, '');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function get(url, headers = {}) {
    const r = await fetch(url, { headers: { 'User-Agent': UA, ...headers }, signal: AbortSignal.timeout(15000), redirect: 'follow' });
    return { r, text: await r.text() };
}
const line = (k, v) => console.log(`${k}: ${typeof v === 'string' ? v : JSON.stringify(v)}`);

(async () => {
    line('base', BASE);
    const list = await get(`${BASE}/video/`, { Referer: `${BASE}/` });
    line('list', { status: list.r.status, final: list.r.url, title: (list.text.match(/<title>([\s\S]*?)<\/title>/i) || [])[1], length: list.text.length });
    const cards = [...list.text.matchAll(/<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi)].map(m => m[0]);
    line('cards', cards.length);
    if (cards[0]) line('firstCard', cards[0].replace(/\s+/g, ' ').slice(0, 700));
    const pages = [...list.text.matchAll(/href="([^"]*\/page\/\d+\/?)"/g)].map(m => m[1]).slice(0, 5);
    line('pageLinks', pages);
    const slug = cards[0] && (cards[0].match(/href="(?:https?:\/\/[^/"]+)?\/?([^"\/]+)\.html"/i) || [])[1];
    line('slug', slug || null);
    if (!slug) return;
    const page = await get(`${BASE}/${slug}.html`, { Referer: `${BASE}/video/` });
    line('movie', { status: page.r.status, length: page.text.length, hasAtob: /window\.atob\(/.test(page.text), h1: ((page.text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || '').replace(/<[^>]+>/g, '').trim().slice(0, 80) });
    const atob = (page.text.match(/window\.atob\(["']([^"']+)["']\)/i) || [])[1];
    const stream = atob ? Buffer.from(atob.trim(), 'base64').toString('utf8').trim() : '';
    line('stream', stream || null);
    if (!/^https?:/.test(stream)) {
        line('moviePlayerLines', page.text.split('\n').map(l => l.trim()).filter(l => /m3u8|iframe|player|source|atob|embed/i.test(l)).slice(0, 12).map(l => l.slice(0, 220)));
        return;
    }
    for (const ref of [`${BASE}/`, 'https://javhdz.one/', null]) {
        const p = await get(stream, ref ? { Referer: ref } : {});
        line(`playlist(${ref ? 'referer' : 'no referer'})`, { status: p.r.status, type: p.r.headers.get('content-type'), cors: p.r.headers.get('access-control-allow-origin'), head: p.text.slice(0, 260) });
        const next = p.text.split('\n').map(l => l.trim()).find(l => l && !l.startsWith('#'));
        if (p.r.ok && next) {
            const u = new URL(next, stream).href;
            const v = /#EXT-X-STREAM-INF/.test(p.text) ? await get(u, ref ? { Referer: ref } : {}) : { r: p.r, text: p.text };
            const segRef = v.text.split('\n').map(l => l.trim()).find(l => l && !l.startsWith('#'));
            line('  media', { variant: u.slice(0, 160), lines: v.text.split('\n').length, firstSegment: segRef && segRef.slice(0, 160) });
            if (segRef) {
                const su = new URL(segRef, /#EXT-X-STREAM-INF/.test(p.text) ? u : stream).href;
                const s = await fetch(su, { headers: { 'User-Agent': UA, ...(ref ? { Referer: ref } : {}), Range: 'bytes=0-511' }, signal: AbortSignal.timeout(15000) });
                const b = new Uint8Array(await s.arrayBuffer());
                line('  segment', { status: s.status, type: s.headers.get('content-type'), first16: [...b.slice(0, 16)].map(x => x.toString(16).padStart(2, '0')).join(' ') });
            }
        }
    }
    const poster = (cards[0].match(/(?:data-src|src)="([^"]+)"/i) || [])[1];
    if (poster) {
        const pu = new URL(poster, BASE).href;
        for (const ref of [`${BASE}/`, null]) {
            const r = await fetch(pu, { headers: { 'User-Agent': UA, ...(ref ? { Referer: ref } : {}) }, signal: AbortSignal.timeout(15000) });
            line(`poster(${ref ? 'referer' : 'no referer'})`, { url: pu.slice(0, 120), status: r.status, type: r.headers.get('content-type') });
        }
    }
})().catch(e => { console.log('probe error:', e.message); process.exitCode = 1; });
