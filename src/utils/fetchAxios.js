// Lightweight fetch-based drop-in replacement for axios in Cloudflare Workers / browser environments
const DEFAULT_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function normalizeHeaders(headers = {}) {
    const norm = {};
    if (headers instanceof Headers) {
        for (const [k, v] of headers.entries()) {
            norm[k] = v;
        }
    } else if (headers && typeof headers === 'object') {
        for (const k of Object.keys(headers)) {
            if (headers[k] !== undefined && headers[k] !== null) {
                norm[k] = String(headers[k]);
            }
        }
    }
    const hasUa = Object.keys(norm).some(k => k.toLowerCase() === 'user-agent');
    if (!hasUa) {
        norm['User-Agent'] = DEFAULT_UA;
    }
    return norm;
}

function buildUrl(url, params) {
    if (!params) return url;
    const sp = new URLSearchParams();
    for (const [k, v] of Object.entries(params)) {
        if (v !== undefined && v !== null) {
            sp.append(k, String(v));
        }
    }
    const query = sp.toString();
    if (!query) return url;
    return url + (url.includes('?') ? '&' : '?') + query;
}

async function request(urlOrConfig, maybeConfig = {}) {
    let config = {};
    let url = '';

    if (typeof urlOrConfig === 'string') {
        url = urlOrConfig;
        config = { ...maybeConfig };
    } else if (urlOrConfig && typeof urlOrConfig === 'object') {
        config = { ...urlOrConfig };
        url = config.url || '';
    }

    const method = (config.method || 'GET').toUpperCase();
    const finalUrl = buildUrl(url, config.params);
    const headers = normalizeHeaders(config.headers);

    let signal = config.signal;
    let timeoutId = null;

    if (config.timeout && !signal) {
        if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function') {
            signal = AbortSignal.timeout(config.timeout);
        } else if (typeof AbortController !== 'undefined') {
            const controller = new AbortController();
            timeoutId = setTimeout(() => controller.abort(), config.timeout);
            signal = controller.signal;
        }
    }

    let body = config.data !== undefined ? config.data : config.body;
    if (body !== undefined && body !== null && method !== 'GET' && method !== 'HEAD') {
        const isJson = typeof body === 'object' && !(body instanceof FormData) && !(body instanceof URLSearchParams) && !(body instanceof ArrayBuffer);
        if (isJson) {
            body = JSON.stringify(body);
            const hasContentType = Object.keys(headers).some(k => k.toLowerCase() === 'content-type');
            if (!hasContentType) {
                headers['Content-Type'] = 'application/json';
            }
        }
    } else {
        body = undefined;
    }

    try {
        const fetchOptions = {
            method,
            headers,
            body,
            signal,
            redirect: 'follow'
        };

        const res = await fetch(finalUrl, fetchOptions);

        let data;
        const responseType = (config.responseType || '').toLowerCase();
        if (responseType === 'arraybuffer') {
            data = await res.arrayBuffer();
        } else if (responseType === 'blob') {
            data = await res.blob();
        } else {
            const text = await res.text();
            try {
                data = JSON.parse(text);
            } catch {
                data = text;
            }
        }

        const isValid = config.validateStatus ? config.validateStatus(res.status) : (res.status >= 200 && res.status < 300);
        if (!isValid) {
            const err = new Error(`Request failed with status code ${res.status}`);
            err.response = {
                status: res.status,
                statusText: res.statusText,
                headers: res.headers,
                data,
                config
            };
            err.status = res.status;
            throw err;
        }

        return {
            data,
            status: res.status,
            statusText: res.statusText,
            headers: res.headers,
            config
        };
    } finally {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    }
}

const axios = function(url, config) {
    return request(url, config);
};

axios.get = (url, config) => request(url, { ...config, method: 'GET' });
axios.post = (url, data, config) => request(url, { ...config, data, method: 'POST' });
axios.put = (url, data, config) => request(url, { ...config, data, method: 'PUT' });
axios.delete = (url, config) => request(url, { ...config, method: 'DELETE' });
axios.patch = (url, data, config) => request(url, { ...config, data, method: 'PATCH' });
axios.head = (url, config) => request(url, { ...config, method: 'HEAD' });

axios.defaults = {
    headers: {
        common: {}
    }
};

axios.create = function(instanceConfig = {}) {
    const instance = function(url, config) {
        return request(url, {
            ...instanceConfig,
            ...config,
            headers: {
                ...instanceConfig.headers,
                ...(config && config.headers)
            }
        });
    };
    instance.defaults = {
        headers: {
            ...instanceConfig.headers
        }
    };
    instance.get = (url, config) => instance(url, { ...config, method: 'GET' });
    instance.post = (url, data, config) => instance(url, { ...config, data, method: 'POST' });
    instance.put = (url, data, config) => instance(url, { ...config, data, method: 'PUT' });
    instance.delete = (url, config) => instance(url, { ...config, method: 'DELETE' });
    return instance;
};

module.exports = axios;
module.exports.default = axios;
