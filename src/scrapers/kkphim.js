const axios = require('axios');

const BASE_URL = 'https://phimapi.com';

/**
 * Scrape stream data from KKPhim (phimapi)
 * @param {string} id - The stream ID (e.g., kkphim:slug-of-the-movie)
 * @param {string} type - "movie" or "series"
 * @returns {Promise<Array>} Array of Stremio stream objects
 */
async function getStream(id, type) {
    try {
        // Extract the slug from the prefixed ID
        const slug = id.replace('kkphim:', '');
        
        console.log(`[KKPhim Scraper] Fetching data for slug: ${slug}`);
        
        // Timeout set to gracefully handle network issues without crashing the server
        const response = await axios.get(`${BASE_URL}/phim/${slug}`, { timeout: 10000 });
        const data = response.data;
        
        // Handle invalid or missing data
        if (!data || !data.episodes || data.episodes.length === 0) {
            console.log(`[KKPhim Scraper] No episodes found for: ${slug}`);
            return [];
        }
        
        const streams = [];
        
        // Typically, Ophim API structures servers inside `episodes`
        // Movie usually has 1 episode (Full), Series has multiple
        const firstServer = data.episodes[0].server_data;
        
        if (firstServer && firstServer.length > 0) {
            firstServer.forEach(ep => {
                streams.push({
                    name: "KKPhim",
                    title: `${data.movie?.name || 'Unknown'} - ${ep.name}\nResolution: HD`,
                    url: ep.link_m3u8,
                    // If it's a direct mp4 instead of m3u8 we could use 'url', but Stremio handles m3u8 nicely usually
                    // or we can provide alternative links if available
                });
            });
        }
        
        return streams;
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            console.error(`[KKPhim Scraper] Timeout fetching data for ${id}`);
        } else {
            console.error(`[KKPhim Scraper] Error: ${error.message}`);
        }
        // Graceful degradation: return empty streams instead of throwing and crashing server
        return []; 
    }
}

module.exports = { getStream };
