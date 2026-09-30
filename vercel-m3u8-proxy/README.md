# Hồ Phim M3U8 Vercel Proxy

Đây là một proxy cực nhẹ (Serverless Function) chạy trên Vercel. 
Nhiệm vụ **DUY NHẤT** của proxy này là tải file text M3U8 từ CDN của KKPhim, sau đó trả file text này về cho Cloudflare Worker để lọc quảng cáo.

Vì file M3U8 chỉ nặng khoảng 1KB, proxy này tiêu thụ **băng thông gần như bằng không**. Bạn có thể gọi hàng triệu lần mỗi tháng mà vẫn không bao giờ chạm tới hạn mức 100GB của Vercel (lỗi `networking-fast-origin-transfer`). Toàn bộ các cục video nặng (.ts) đều được truyền trực tiếp từ Cloudflare và CDN.

## Cách Deploy lên Vercel
1. Đăng nhập vào [Vercel](https://vercel.com)
2. Cài đặt Vercel CLI hoặc kéo thả trực tiếp thư mục `vercel-m3u8-proxy` này vào giao diện Vercel (Add New -> Project -> Upload).
3. Sau khi deploy thành công, Vercel sẽ cấp cho bạn một domain (ví dụ: `https://hophim-m3u8-proxy.vercel.app`).

## Tích hợp vào Cloudflare Worker
1. Mở trang quản trị của Cloudflare Worker (Stremio Addon).
2. Vào tab **Settings** -> **Variables and Secrets**.
3. Thêm một biến môi trường mới:
   - Tên biến: `GAS_PROXY_URL`
   - Giá trị: URL Vercel của bạn (ví dụ: `https://hophim-m3u8-proxy.vercel.app`)
4. Lưu lại (Deploy).

Từ giờ, Cloudflare Worker sẽ tự động gọi qua Vercel để lách Geo-blocking khi cần tải M3U8, qua đó **lọc sạch sẽ 100% quảng cáo cho Android TV và Stremio Web**!
