/**
 * Helper to match episodes and seasons accurately across Vietnamese movie sources
 */

function findEpisode(items, targetEp) {
    if (!items || !Array.isArray(items) || items.length === 0) return null;
    
    // If no specific episode requested (e.g. movie), return first item
    if (!targetEp) return items[0];

    const targetStr = String(targetEp).trim().toLowerCase();

    // 1. Direct exact match on slug or name
    let found = items.find(it => 
        (it.slug && it.slug.toLowerCase() === targetStr) ||
        (it.name && it.name.toLowerCase() === targetStr)
    );
    if (found) return found;

    // 2. Numeric match (e.g. "3" matches "Tập 03", "tap-03", "3", "03", "Tập 3")
    const numMatch = targetStr.match(/\d+/);
    if (numMatch) {
        const targetNum = parseInt(numMatch[0], 10);

        found = items.find(it => {
            const slugNumMatch = it.slug ? String(it.slug).match(/\d+/) : null;
            const nameNumMatch = it.name ? String(it.name).match(/\d+/) : null;
            
            const slugNum = slugNumMatch ? parseInt(slugNumMatch[0], 10) : null;
            const nameNum = nameNumMatch ? parseInt(nameNumMatch[0], 10) : null;

            return slugNum === targetNum || nameNum === targetNum;
        });
        if (found) return found;
    }

    // 3. Prefix matching: "tap-" + targetStr
    found = items.find(it => 
        (it.slug && (it.slug === `tap-${targetStr}` || it.slug === `tap-0${targetStr}`)) ||
        (it.name && (it.name === `Tập ${targetStr}` || it.name === `Tập 0${targetStr}`))
    );
    if (found) return found;

    // Do NOT fallback to items[0] if a specific episode was requested!
    return null;
}

function findBestSeasonMatch(items, targetSeason) {
    if (!items || !Array.isArray(items) || items.length === 0) return null;
    const sNum = parseInt(targetSeason, 10) || 1;

    // Regex for matching target season in title or slug
    // e.g. "phần 2", "phan-2", "season 2", "ss2", "p2", "p-2"
    const targetSeasonRegex = new RegExp(`(phần|phan|season|ss|p)\\s*[-_]?\\s*0?${sNum}(\\b|\\D|$)`, 'i');

    // 1. Check if any item explicitly matches target season
    for (const item of items) {
        const str = `${item.name || ''} ${item.origin_name || ''} ${item.slug || ''}`;
        if (targetSeasonRegex.test(str)) {
            return item;
        }
    }

    // 2. If targetSeason is 1:
    // Accept item that does NOT have any other season number (e.g. does not have "phần 2", "phần 3", etc.)
    if (sNum === 1) {
        const otherSeasonRegex = /(phần|phan|season|ss|p)\s*[-_]?\s*0?[2-9]/i;
        for (const item of items) {
            const str = `${item.name || ''} ${item.origin_name || ''} ${item.slug || ''}`;
            if (!otherSeasonRegex.test(str)) {
                return item;
            }
        }
    }

    // 3. Fallback: return first item
    return items[0];
}

module.exports = {
    findEpisode,
    findBestSeasonMatch
};
