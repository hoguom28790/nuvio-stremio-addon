const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://javhdz.bz';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function fetchHtml(url) {
    const res = await fetch(url, {
        headers: {
            'User-Agent': USER_AGENT,
            'Referer': `${BASE_URL}/`
        },
        signal: AbortSignal.timeout(8000)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} on ${url}`);
    return await res.text();
}

function parseCards(html) {
    const cards = [];
    const cardRegex = /<li[^>]*>\s*<a\s+class="movie-item[\s\S]*?<\/li>/gi;
    let match;

    while ((match = cardRegex.exec(html)) !== null) {
        const fullCard = match[0];
        const slugMatch = fullCard.match(/href="(?:\/)?([^"\/]+)\.html"/i);
        if (!slugMatch || !slugMatch[1]) continue;
        const slug = slugMatch[1].trim();

        const titleMatch = fullCard.match(/title="([^"]*)"/i);
        let title = (titleMatch && titleMatch[1]) ? titleMatch[1].trim() : slug;

        let poster = '';
        const imgMatch = fullCard.match(/(?:data-src|src)="([^"]+)"/i);
        if (imgMatch && imgMatch[1]) {
            poster = imgMatch[1].trim();
            if (poster.startsWith('//')) poster = 'https:' + poster;
            else if (poster.startsWith('/')) poster = BASE_URL + poster;
            else if (!poster.startsWith('http')) poster = `${BASE_URL}/${poster}`;
        }

        let subBadge = '';
        const subMatch = fullCard.match(/<span class="meta-sub">([^<]*)<\/span>/i);
        if (subMatch && subMatch[1]) subBadge = subMatch[1].trim();

        title = title.replace(/&amp;/g, '&')
                     .replace(/&quot;/g, '"')
                     .replace(/&#039;/g, "'")
                     .replace(/&lt;/g, '<')
                     .replace(/&gt;/g, '>');

        cards.push({ slug, title, poster, subBadge });
    }
    return cards;
}

async function scrapeDetail(slug) {
    try {
        const url = `${BASE_URL}/${slug}.html`;
        const html = await fetchHtml(url);

        const atobMatch = html.match(/window\.atob\(["']([^"']+)["']\)/i);
        let streamUrl = '';
        if (atobMatch && atobMatch[1]) {
            streamUrl = Buffer.from(atobMatch[1].trim(), 'base64').toString('utf8').trim();
        }

        const genres = [];
        const tagRegex = /<a\s+class="tag-link"[^>]*>([^<]+)<\/a>/gi;
        let tagMatch;
        const seen = new Set();
        while ((tagMatch = tagRegex.exec(html)) !== null) {
            const tag = tagMatch[1].trim();
            if (tag && !seen.has(tag.toLowerCase())) {
                seen.add(tag.toLowerCase());
                genres.push(tag);
            }
        }

        return { streamUrl, genres };
    } catch (e) {
        return { streamUrl: '', genres: [] };
    }
}

async function updateCatalog() {
    const catalogPath = path.join(__dirname, '..', 'src', 'data', 'javhd_catalog.json');
    let existingMovies = [];
    if (fs.existsSync(catalogPath)) {
        try {
            const raw = fs.readFileSync(catalogPath, 'utf8');
            const clean = raw.charCodeAt(0) === 0xFEFF ? raw.slice(1) : raw;
            existingMovies = JSON.parse(clean);
        } catch (e) {
            console.error('Error reading existing catalog:', e.message);
        }
    }

    const existingMap = new Map();
    for (const m of existingMovies) {
        existingMap.set(m.slug, m);
    }
    console.log(`Loaded ${existingMovies.length} existing movies.`);

    // Scrape top 5 pages (90 newest movies)
    const scanPages = 5;
    const discoveredCards = [];
    const seenNewSlugs = new Set();

    for (let p = 1; p <= scanPages; p++) {
        try {
            const url = `${BASE_URL}/video/page/${p}/`;
            const html = await fetchHtml(url);
            const cards = parseCards(html);
            for (const c of cards) {
                if (!seenNewSlugs.has(c.slug)) {
                    seenNewSlugs.add(c.slug);
                    discoveredCards.push(c);
                }
            }
        } catch (e) {
            console.error(`Error scanning page ${p}:`, e.message);
        }
    }

    console.log(`Discovered ${discoveredCards.length} movies from latest ${scanPages} pages.`);

    const newlyAdded = [];
    for (const card of discoveredCards) {
        if (!existingMap.has(card.slug)) {
            console.log(`New movie detected: [${card.slug}] ${card.title}. Fetching stream...`);
            const detail = await scrapeDetail(card.slug);
            const movieItem = {
                id: `javhd:${card.slug}`,
                slug: card.slug,
                type: 'movie',
                name: card.title,
                poster: card.poster,
                background: card.poster,
                posterShape: 'poster',
                subBadge: card.subBadge,
                genres: detail.genres.length > 0 ? detail.genres : ['JavHD', 'Vietsub', '18+'],
                streamUrl: detail.streamUrl,
                description: `JavHD • ${card.subBadge ? '[' + card.subBadge + '] ' : ''}${card.title}\n⚡ Định tuyến: TikTok CDN Tốc Độ Cao (1080p Full HD)\nNhật Bản Vietsub 18+`
            };
            newlyAdded.push(movieItem);
            existingMap.set(card.slug, movieItem);
        }
    }

    if (newlyAdded.length > 0) {
        console.log(`Adding ${newlyAdded.length} new movies to top of catalog...`);
        const updatedList = [...newlyAdded, ...existingMovies];
        fs.writeFileSync(catalogPath, JSON.stringify(updatedList, null, 2), 'utf8');
        console.log(`Successfully updated ${catalogPath}. Total movies: ${updatedList.length}`);
    } else {
        console.log('No new movies found. Catalog is up to date.');
    }
}

updateCatalog().catch(console.error);
