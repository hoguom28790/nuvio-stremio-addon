/**
 * GOOGLE APPS SCRIPT - M3U8 RESOLVER CHO JAVHD (CLOUDFLARE WORKER)
 * 
 * ====================================================================
 * HƯỚNG DẪN CÀI ĐẶT (MẤT 1 PHÚT - HOÀN TOÀN MIỄN PHÍ TRÊN GOOGLE):
 * ====================================================================
 * 1. Mở trình duyệt, truy cập: https://script.google.com/home/start
 * 2. Bấm nút "+ Dự án mới" (New project).
 * 3. Xóa hết code mặc định trong ô soạn thảo, dán toàn bộ đoạn mã file này vào.
 * 4. Bấm nút "Triển khai" (Deploy) màu xanh ở góc trên bên phải -> Chọn "Tùy chọn triển khai mới" (New deployment).
 * 5. Nhấn vào biểu tượng bánh răng bên cạnh "Chọn loại" -> Chọn "Ứng dụng web" (Web app).
 * 6. Điền cấu hình:
 *    - Mô tả (Description): JAVHD M3U8 Resolver
 *    - Thực thi dưới dạng (Execute as): Tôi (Me)
 *    - Ai có quyền truy cập (Who has access): BẤT KỲ AI (Anyone)  <--- BẮT BUỘC CHỌN CÁI NÀY
 * 7. Bấm "Triển khai" (Deploy).
 *    (Nếu Google yêu cầu cấp quyền: Bấm "Ủy quyền truy cập" -> Chọn tài khoản Google của bạn -> Bấm "Nâng cao" (Advanced) -> Bấm "Đi tới... (không an toàn)" -> Bấm "Cho phép" (Allow)).
 * 8. Copy đường dẫn "URL ứng dụng web" (Web app URL có dạng: https://script.google.com/macros/s/AKfycb.../exec).
 * 
 * ====================================================================
 * GẮN VÀO CLOUDFLARE WORKER:
 * ====================================================================
 * Cách 1: Cấu hình biến môi trường trên Cloudflare (Khuyên dùng)
 * 1. Truy cập Cloudflare Dashboard -> Workers & Pages -> Chọn Worker addon của bạn.
 * 2. Vào tab "Settings" -> "Variables and Secrets".
 * 3. Bấm "Add" -> Tên biến: GAS_PROXY_URL
 * 4. Giá trị: Dán URL Web App của Google vừa copy ở trên vào.
 * 5. Bấm "Deploy" / "Save".
 * 
 * Cách 2: Gán trực tiếp vào file worker:
 * - Thay URL vào hằng số DEFAULT_GAS_URL trong file src/scrapers/javhd.js.
 */

function doGet(e) {
  var url = e.parameter.url;
  var referer = e.parameter.referer || 'https://javhdz.bz/';

  if (!url) {
    return ContentService.createTextOutput("Missing url parameter")
      .setMimeType(ContentService.MimeType.TEXT);
  }

  try {
    var response = UrlFetchApp.fetch(url, {
      method: 'get',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': referer,
        'Accept': '*/*'
      },
      muteHttpExceptions: true,
      followRedirects: true
    });

    var code = response.getResponseCode();
    var content = response.getContentText();

    if (code >= 200 && code < 300) {
      return ContentService.createTextOutput(content)
        .setMimeType(ContentService.MimeType.TEXT);
    } else {
      return ContentService.createTextOutput("HTTP Error: " + code + "\n" + content)
        .setMimeType(ContentService.MimeType.TEXT);
    }
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.message)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}
