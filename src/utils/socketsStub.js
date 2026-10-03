// Node (Render Docker build) stand-in for the Workers-only 'cloudflare:sockets' module.
// On Render the Node proxy pool in vnProxyFetcher.js is used instead.
export function connect() {
    throw new Error('cloudflare:sockets is not available in Node');
}
