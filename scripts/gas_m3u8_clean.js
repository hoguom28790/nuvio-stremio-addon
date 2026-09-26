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
  var lines = content.split('\n');
  var cleaned = [];
  var skippingAd = false;

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var trimmed = line.trim();

    // ── Xử lý DISCONTINUITY markers (ranh giới quảng cáo) ─────────────────
    if (trimmed.indexOf('#EXT-X-DISCONTINUITY') === 0) {
      // Lookahead: xem phía sau có đoạn QC không
      var isAdAhead = false;
      for (var j = i + 1; j < Math.min(lines.length, i + 25); j++) {
        var next = lines[j].trim();
        if (isAdUrl(next)) {
          isAdAhead = true;
          break;
        }
        // Nếu gặp EXTINF và dòng tiếp theo không phải QC → dừng lookahead
        if (next.indexOf('#EXTINF:') === 0) {
          var nextSeg = (j + 1 < lines.length) ? lines[j + 1].trim() : '';
          if (!isAdUrl(nextSeg)) break;
        }
      }

      if (isAdAhead) {
        skippingAd = true;
        continue; // Bỏ DISCONTINUITY này
      } else if (skippingAd) {
        // Kiểm tra xem đoạn QC đã kết thúc chưa
        var stillAd = false;
        for (var k = i + 1; k < Math.min(lines.length, i + 15); k++) {
          if (isAdUrl(lines[k].trim())) {
            stillAd = true;
            break;
          }
        }
        if (!stillAd) {
          skippingAd = false; // Thoát chế độ skip
          continue; // Bỏ DISCONTINUITY cuối của đoạn QC
        } else {
          continue;
        }
      }
    }

    // ── Bỏ qua tất cả dòng trong đoạn QC ──────────────────────────────────
    if (skippingAd) continue;

    // ── Safety: bắt URL QC sót lại ────────────────────────────────────────
    if (isAdUrl(trimmed)) {
      // Xoá EXTINF ngay trước nếu có
      if (cleaned.length > 0 && cleaned[cleaned.length - 1].indexOf('#EXTINF:') === 0) {
        cleaned.pop();
      }
      continue;
    }

    // ── Chuyển relative .ts URL → absolute URL ─────────────────────────────
    if (trimmed && trimmed.charAt(0) !== '#') {
      if (trimmed.indexOf('http://') !== 0 && trimmed.indexOf('https://') !== 0) {
        cleaned.push(resolveUrl(trimmed, baseUrl));
        continue;
      }
    }

    cleaned.push(line);
  }

  return cleaned.join('\n');
}

// ─── Nhận dạng URL quảng cáo ──────────────────────────────────────────────
function isAdUrl(url) {
  if (!url) return false;
  return url.indexOf('/v8/') !== -1 ||
         url.indexOf('convertv8/') !== -1 ||
         url.indexOf('segment_00') !== -1;
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
