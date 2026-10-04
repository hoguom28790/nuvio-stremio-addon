# TÀI LIỆU GHI NHỚ YÊU CẦU DỰ ÁN HỒ PHIM (STREMIO ADDON & NUVIO APP)

Tài liệu này tổng hợp toàn bộ các yêu cầu khắt khe, ràng buộc kỹ thuật và mục tiêu cốt lõi của dự án từ trước đến nay. Bất kỳ khi nào thực hiện update hoặc refactor code, Antigravity AI PHẢI đọc và tuân thủ tuyệt đối các quy tắc trong tài liệu này.

## 1. Mục Tiêu Cốt Lõi
- **Trải nghiệm người dùng:** Xem phim nhanh chóng, mượt mà, không bị ngắt quãng, và **TUYỆT ĐỐI KHÔNG CÓ QUẢNG CÁO**.
- **Độ ổn định:** Code không được phép sai sót. Các phương án fallback phải được thiết kế chặt chẽ để hệ thống không bị crash.
- **Nền tảng mục tiêu:** Hỗ trợ hoàn hảo cho Nuvio Web, Nuvio Android TV, và Stremio Web.

## 2. Ràng Buộc Hệ Thống Backend (Stremio Addon)
- **Nền tảng triển khai:** Toàn bộ Core API và logic định tuyến (routing) của Addon **BẮT BUỘC phải chạy ổn định trên Cloudflare Workers**.
- **Giới hạn băng thông (Cấm Vercel Proxy Video):** Tuyệt đối KHÔNG sử dụng Vercel/Render để làm proxy trung chuyển cho các file video (`.ts` chunk) vì sẽ lập tức dính lỗi `networking-fast-origin-transfer` (vượt hạn mức 100GB của Vercel). Toàn bộ video segments phải được stream trực tiếp từ Edge của Cloudflare hoặc trả thẳng về cho thiết bị (client) tự tải từ CDN.
- **Vấn đề Geo-blocking của KKPhim / NguồnC:** CDN của nguồn phim (ví dụ: `s5.phim1280.tv`) chặn toàn bộ IP ngoài lãnh thổ Việt Nam. Do Cloudflare Workers và Google Apps Script (GAS) đều dùng IP quốc tế, việc fetch trực tiếp M3U8 từ các nền tảng này sẽ bị lỗi 404. Khi giải quyết vấn đề này, chỉ được phép sử dụng Proxy trung gian cho các file TEXT cực nhẹ (M3U8) chứ tuyệt đối không proxy video.

## 3. Quy Tắc Lọc Quảng Cáo (Ad-Filtering)
> **CẬP NHẬT 2026-10-04 (2):** Stream "Lọc QC" của KKPhim được BẬT LẠI (đặt trước) vì `/kkphim/debug` xác nhận bộ lọc nhận diện đúng khối QC phút 3:00 (`convertv8/`) và 15:00 (`/v8/<hash>/segment_NNNN.ts`). Luồng CDN gốc vẫn được trả ngay sau đó làm dự phòng nếu lọc không ổn định. 

- Việc lọc quảng cáo (đặc biệt là quảng cáo phút 3:00 và 15:00 của KKPhim/Ophim) là **Ưu tiên Hàng đầu**.
- **Trên Nuvio Web:** Lọc quảng cáo sẽ được thực hiện trực tiếp ở phía trình duyệt (Client-side) thông qua `CleanPlaylistLoader` tích hợp trong Hls.js (`multiThreadedPreloader.js`). Backend Cloudflare chỉ cần trả về *Virtual Master Playlist (Mã 200 OK)* thay vì *302 Redirect* để tránh lỗi CORS Preflight (OPTIONS 405) từ CDN chặn trình duyệt.
- **Trên Android TV & Stremio Web:** Các client này (ExoPlayer) không có khả năng lọc quảng cáo nội bộ. Mọi thao tác loại bỏ quảng cáo bắt buộc phải diễn ra tại Server-side trước khi truyền file M3U8 hoàn chỉnh về thiết bị. (Cần giải pháp vượt Geo-blocking tối ưu dung lượng).
- Thuật toán Regex nhận diện QC hiện tại: `/convertv\d*\/|\/v\d+\/.*segment_|segment_\d{4}/i` (Phải luôn giữ liên kết #EXT-X-DISCONTINUITY chặt chẽ).

## 4. Các Nguồn Phim Tích Hợp
- Nguồn đang hỗ trợ cho phim thường: KKPhim (client `src/scrapers/phimapi.js`) và VSMOV (xem bên dưới). NguonC đã bị GỠ (2026-10-04, theo yêu cầu chủ dự án; trang embed StreamC được bảo vệ nên không phát được trong app). CLBPX, HH3D, YAN, STP đã bị XÓA (2026-10-04) vì cùng dữ liệu `phimapi.com` với KKPhim.
- VSMOV (API công khai `https://vsmov.com/api`, `src/scrapers/vsmov.js`): chi tiết phim chỉ có `link_embed` (`v*.streamvsmov.com/video/<uuid>`). Trang embed lộ công khai `signedMasterUrl` (link có chữ ký, hết hạn ~1 giờ) nên addon phân giải TẠI THỜI ĐIỂM PHÁT qua `/vsmov/playlist.m3u8?e=<embed>`; đoạn video là TS bọc PNG nên đi qua `/vsmov/seg.ts?u=` (Cloudflare Edge, stream, bóc đến hết chunk IEND). `/vsmov/debug?slug=` để chẩn đoán. Không có endpoint năm phát hành (404).
- Hệ thống cần hỗ trợ bóc tách M3U8 và bypass các phương thức chống trộm link (nếu có) từ các nguồn: KKPhim, VSMOV, Ophim, Hentaiz, JavHD, VLXX, AVDB.
- Khi làm việc với phim người lớn (JavHD/VLXX), lưu ý xử lý Unwrapper (cắt header PNG rác 95-byte) trực tiếp qua Cloudflare Edge.

## 5. Quy Trình Cập Nhật & Deploy
- Mọi thay đổi liên quan đến `workerEntry.js` hoặc cấu trúc proxy đều phải được đóng gói kỹ lưỡng.
- Không đưa ra các đề xuất làm hao hụt tài nguyên hoặc trái với lệnh cấm sử dụng Vercel làm proxy video.

*(Tài liệu này được tạo tự động và sẽ là kim chỉ nam cho mọi tác vụ tương lai đối với Hồ Phim Addon).*
