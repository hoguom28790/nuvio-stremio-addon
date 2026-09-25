# ==============================
# 1️⃣  Base image – Node 20 (alpine)
# ==============================
FROM node:20-alpine AS builder

WORKDIR /app

# ---- Install deps -------------------------------------------------
COPY package.json package-lock.json ./
RUN npm ci --silent

# ---- Copy source --------------------------------------------------
COPY . .

# ---- Build the worker (esbuild) ------------------------------------
RUN npx esbuild src/workerEntry.js \
    --bundle \
    --platform=node \
    --outfile=dist/worker.js \
    --minify \
    --target=es2022

# ==============================
# 2️⃣  Runtime image
# ==============================
FROM node:20-alpine

WORKDIR /app

# ---- Copy only the built artefacts --------------------------------
COPY --from=builder /app/dist/worker.js ./dist/worker.js
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/src ./src
COPY --from=builder /app/scripts ./scripts   # (có GAS‑proxy nếu muốn)

# ---- Install only production deps ---------------------------------
RUN npm ci --production --silent

# ---- Expose port (Render/Koyeb sẽ map env PORT) -----------------
EXPOSE 8080

# ==== 3️⃣  Simple HTTP wrapper -------------------------------------------------
# This tiny server receives a regular HTTP request, builds a Fetch API Request
# and forwards it to the bundled worker code.
# (No extra dependencies – uses node built‑in `http` & `undici`.)
RUN echo "\
const http = require('http');\nconst { fetch } = require('undici');\nconst worker = require('./dist/worker.js');\n\nconst server = http.createServer(async (req, res) => {\n  const url = new URL(req.url, `http://${req.headers.host}`);\n  const request = new Request(url, {\n    method: req.method,\n    headers: req.headers,\n    body: req.method === 'GET' ? null : req,\n    redirect: 'manual'\n  });\n  // Pass Cloudflare‑style env – GAS_PROXY_URL can be set in Render/Koyeb UI\n  const env = { GAS_PROXY_URL: process.env.GAS_PROXY_URL };\n  const response = await worker.fetch(request, env);\n  const headers = {};\n  response.headers.forEach((v, k) => { headers[k] = v; });\n  res.writeHead(response.status, headers);\n  const body = await response.text();\n  res.end(body);\n});\n\nserver.listen(process.env.PORT || 8080, () => {\n  console.log('🚀 Render / Koyeb worker listening on port', process.env.PORT || 8080);\n});\n\n" > server.js

CMD ["node", "server.js"]
