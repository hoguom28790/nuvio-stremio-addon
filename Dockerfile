# ==============================
# Stage 1: Builder
# ==============================
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --silent

COPY . .

# Build as CommonJS so require('./dist/worker.js') works in Node.js
RUN npx esbuild src/workerEntry.js \
    --bundle \
    --platform=node \
    --format=cjs \
    --outfile=dist/worker.js \
    --minify \
    --target=es2022

# ==============================
# Stage 2: Runtime
# ==============================
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/src ./src
COPY --from=builder /app/src/utils ./utils

RUN npm ci --production --silent

# Create the HTTP wrapper server
RUN cat > server.js << 'EOF'
const http = require('http');

// workerEntry.js uses `export default { fetch }` -> esbuild --format=cjs exports it as module.exports.default
const workerModule = require('./dist/worker.js');
const worker = workerModule.default || workerModule;

if (typeof worker.fetch !== 'function') {
  throw new Error('[Fatal] worker.fetch is not a function. Check esbuild output format.');
}

const server = http.createServer(async (req, res) => {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const url = new URL(req.url, `${protocol}://${host}`);

    const reqHeaders = {};
    for (const [k, v] of Object.entries(req.headers)) {
      reqHeaders[k] = v;
    }

    const request = new Request(url.toString(), {
      method: req.method,
      headers: reqHeaders,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req : null,
      redirect: 'manual'
    });

    const env = {
      GAS_PROXY_URL: process.env.GAS_PROXY_URL || ''
    };

    const response = await worker.fetch(request, env, {});

    const resHeaders = {};
    response.headers.forEach((v, k) => { resHeaders[k] = v; });

    res.writeHead(response.status, resHeaders);

    const buf = await response.arrayBuffer();
    res.end(Buffer.from(buf));
  } catch (err) {
    console.error('[Server Error]', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error: ' + err.message);
  }
});

const PORT = process.env.PORT || 7000;
server.listen(PORT, () => {
  console.log(`🚀 Addon running on port ${PORT}`);
});
EOF

EXPOSE 7000
ENV PORT=7000
ENV NODE_ENV=production

CMD ["node", "server.js"]
