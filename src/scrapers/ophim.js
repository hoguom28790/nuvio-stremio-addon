const axios = require('axios');

/**
 * Generic scraper for sources using the Ophim API structure
 * @param {string} slug - The movie/series slug
 * @param {string} baseUrl - Base URL of the API (e.g., https://phimapi.com)
 * @param {string} sourceName - Name of the source (e.g., "KKPhim", "NguonC")
 * @returns {Promise<Array>} Array of Stremio stream objects
 */
async function scrapeOphimApi(slug, baseUrl, sourceName) {
    try {
        console.log(`[${sourceName} Scraper] Fetching data for slug: ${slug} from ${baseUrl}`);
        
        const response = await axios.get(`${baseUrl}/phim/${slug}`, { timeout: 10000 });
        const data = response.data;
        
        if (!data || !data.episodes || data.episodes.length === 0) {
            console.log(`[${sourceName} Scraper] No episodes found for: ${slug}`);
            return [];
        }
        
        const streams = [];
        const firstServer = data.episodes[0].server_data;
        
        if (firstServer && firstServer.length > 0) {
            firstServer.forEach(ep => {
                streams.push({
                    name: sourceName,
                    title: `${data.movie?.name || 'Unknown'} - ${ep.name}\nSource: ${sourceName}`,
                    url: ep.link_m3u8
                });
            });
        }
        
        return streams;
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            console.error(`[${sourceName} Scraper] Timeout fetching data for ${slug}`);
        } else {
            console.error(`[${sourceName} Scraper] Error: ${error.message}`);
        }
        return [];
    }
}

module.exports = { scrapeOphimApi };
