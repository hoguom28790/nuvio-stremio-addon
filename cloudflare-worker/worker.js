export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
          'Access-Control-Allow-Headers': '*'
        }
      });
    }

    if (url.pathname === '/' || url.pathname === '/health') {
      return new Response('Hồ Phim Segment Proxy is running on Cloudflare Workers!', {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    const targetUrl = url.searchParams.get('url');
    if (!targetUrl) {
      return new Response('Missing url query parameter', { status: 400 });
    }

    // Determine upstream referer
    const isVlxx = targetUrl.includes('ibyteimg') || targetUrl.includes('vlxx') || targetUrl.includes('vlstream');
    const referer = isVlxx ? 'https://vlxx.phd/' : 'https://javhdz.ac/';

    try {
      const upstream = await fetch(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': referer
        },
        cf: {
          cacheEverything: true,
          cacheTtl: 86400
        }
      });

      if (!upstream.ok) {
        return new Response(`Upstream error: ${upstream.status}`, { status: upstream.status });
      }

      // Stream transform: strip the 95-byte PNG header if present
      const reader = upstream.body.getReader();
      let stripped = false;
      let leftover = new Uint8Array(0);

      const stream = new ReadableStream({
        async pull(controller) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              if (!stripped && leftover.length > 0) {
                controller.enqueue(leftover);
              }
              controller.close();
              return;
            }

            if (!stripped) {
              const combined = new Uint8Array(leftover.length + value.length);
              combined.set(leftover);
              combined.set(value, leftover.length);

              if (combined.length >= 95) {
                // Check PNG signature: 0x89 0x50 0x4E 0x47
                if (combined[0] === 0x89 && combined[1] === 0x50 && combined[2] === 0x4E && combined[3] === 0x47) {
                  controller.enqueue(combined.subarray(95));
                } else {
                  controller.enqueue(combined);
                }
                stripped = true;
                leftover = null;
                return;
              } else {
                leftover = combined;
              }
            } else {
              controller.enqueue(value);
              return;
            }
          }
        }
      });

      return new Response(stream, {
        headers: {
          'Content-Type': 'video/mp2t',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
          'Access-Control-Allow-Headers': '*',
          'Cache-Control': 'public, max-age=86400, s-maxage=86400, immutable',
          'CDN-Cache-Control': 'public, max-age=86400'
        }
      });
    } catch (err) {
      return new Response(`Proxy error: ${err.message}`, { status: 502 });
    }
  }
};
