/**
 * ╔════════════════════════════════════════════════════════════════════════╗
 * ║  KKPhim M3U8 Ad Cleaner — Google Apps Script Proxy                    ║
 * ║  Lọc quảng cáo HLS (phút 3:00 & 15:00) qua Google Apps Script         ║
 * ╚════════════════════════════════════════════════════════════════════════╝
 *
 * CÁCH TRIỂN KHAI (Deploy):
 * 1. Vào https://script.google.com  →  Tạo dự án mới
 * 2. Dán toàn bộ nội dung file này vào editor
 * 3. Lưu (Ctrl+S)
 * 4. Chọn "Deploy" → "New deployment"
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Nhấn "Deploy" → Sao chép URL Web App
 * 6. Điền URL vào env var: KKPHIM_GAS_PROXY_URL=<URL>
 *    - Cloudflare Worker: Settings → Variables
 *    - Render.com: Environment tab
 *
 * CÁCH DÙNG:
 *   GET https://<GAS_URL>?url=<encoded_m3u8_url>
 *   Trả về M3U8 đã lọc sạch quảng cáo, với .ts URLs tuyệt đối
 *
 * TEST:
 *   https://<GAS_URL>?url=https%3A%2F%2Fv7.kkphimplayer7.com%2F...%2Findex.m3u8
 */

// ─── Hàm chính xử lý GET request ──────────────────────────────────────────
function doGet(e) {
  var gasUrl = ScriptApp.getService().getUrl();
  var url = e.parameter.url;

  if (!url) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: 'Missing ?url= parameter' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var response = UrlFetchApp.fetch(url, {
      method: 'get',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://player.phimapi.com/',
        'Origin': 'https://player.phimapi.com',
        'Accept': '*/*'
      },
      muteHttpExceptions: true,
      followRedirects: true
    });

    var code = response.getResponseCode();
    var content = response.getContentText('UTF-8');

    if (code < 200 || code >= 300) {
      return ContentService
        .createTextOutput('HTTP Error ' + code + ' from CDN\n' + content.substring(0, 200))
        .setMimeType(ContentService.MimeType.TEXT);
    }

    if (!content || !content.trim().startsWith('#EXTM3U')) {
      return ContentService
        .createTextOutput('Invalid M3U8 — response is not a valid HLS playlist')
        .setMimeType(ContentService.MimeType.TEXT);
    }

    // ─── Master Playlist (#EXT-X-STREAM-INF) ──────────────────────────────
    // Rewrite sub-playlist URLs so they also go through this GAS proxy
    if (content.indexOf('#EXT-X-STREAM-INF') !== -1) {
      var lines = content.split('\n');
      var rewritten = lines.map(function(line) {
        var trimmed = line.trim();
        if (trimmed && trimmed.charAt(0) !== '#') {
          var absoluteUrl = resolveUrl(trimmed, url);
          return gasUrl + '?url=' + encodeURIComponent(absoluteUrl);
        }
        return line;
      });
      return ContentService
        .createTextOutput(rewritten.join('\n'))
        .setMimeType(ContentService.MimeType.TEXT);
    }

    // ─── Media Playlist (#EXTINF:) ─────────────────────────────────────────
    // Filter ad segments and convert relative .ts URLs to absolute
    var cleaned = filterAds(content, url);
    return ContentService
      .createTextOutput(cleaned)
      .setMimeType(ContentService.MimeType.TEXT);

  } catch (err) {
    return ContentService
      .createTextOutput('GAS Error: ' + err.message)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

// ─── Lọc quảng cáo khỏi media playlist ───────────────────────────────────
function filterAds(content, baseUrl) {
  var lines = content.split(/\r?\n/);
  var cleanedLines = [];
  var currentTags = [];
  var inAdBlock = false;

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.charAt(0) === '#') {
      currentTags.push(line);
    } else {
      var isAd = isAdUrl(trimmed);
      if (isAd) {
        currentTags = [];
        inAdBlock = true;
      } else {
        if (inAdBlock) {
          for (var k = currentTags.length - 1; k >= 0; k--) {
            var tag = currentTags[k].trim();
            if (tag.indexOf('#EXT-X-DISCONTINUITY') === 0 || tag.indexOf('#EXT-X-KEY:METHOD=NONE') === 0) {
              currentTags.splice(k, 1);
            }
          }
          inAdBlock = false;
        }

        while (cleanedLines.length > 0 && cleanedLines[cleanedLines.length - 1].trim().indexOf('#EXT-X-DISCONTINUITY') === 0) {
          cleanedLines.pop();
        }

        for (var t = 0; t < currentTags.length; t++) {
          cleanedLines.push(currentTags[t]);
        }

        if (trimmed.indexOf('http://') !== 0 && trimmed.indexOf('https://') !== 0) {
          cleanedLines.push(resolveUrl(trimmed, baseUrl));
        } else {
          cleanedLines.push(line);
        }

        currentTags = [];
      }
    }
  }

  for (var t2 = 0; t2 < currentTags.length; t2++) {
    cleanedLines.push(currentTags[t2]);
  }

  return cleanedLines.join('\n');
}

// ─── Nhận dạng URL quảng cáo ──────────────────────────────────────────────
function isAdUrl(url) {
  if (!url) return false;
  return /convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i.test(url);
}

// ─── Giải quyết URL tương đối → tuyệt đối ─────────────────────────────────
function resolveUrl(relUrl, baseUrl) {
  if (!relUrl) return relUrl;
  if (relUrl.indexOf('http://') === 0 || relUrl.indexOf('https://') === 0) return relUrl;
  // Lấy base path (bỏ phần tên file)
  var base = baseUrl.substring(0, baseUrl.lastIndexOf('/') + 1);
  if (relUrl.charAt(0) === '/') {
    // Absolute path relative to origin
    var origin = baseUrl.match(/^https?:\/\/[^/]+/);
    return origin ? origin[0] + relUrl : base + relUrl;
  }
  return base + relUrl;
}
