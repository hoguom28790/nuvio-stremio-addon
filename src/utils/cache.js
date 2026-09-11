/**
 * Simple in-memory cache to store Stremio responses and avoid spamming APIs
 */
const cache = new Map();

module.exports = {
    /**
     * Get item from cache
     * @param {string} key 
     * @returns {any|null} The cached value or null if expired/not found
     */
    get: (key) => {
        const item = cache.get(key);
        if (item && item.expiry > Date.now()) {
            return item.value;
        }
        if (item) {
            cache.delete(key); // clear expired item
        }
        return null;
    },
    
    /**
     * Set item in cache
     * @param {string} key 
     * @param {any} value 
     * @param {number} ttlSeconds Time to live in seconds
     */
    set: (key, value, ttlSeconds = 3600) => {
        cache.set(key, {
            value,
            expiry: Date.now() + (ttlSeconds * 1000)
        });
    },

    /**
     * Clear all cached items
     */
    clear: () => {
        cache.clear();
    }
};
