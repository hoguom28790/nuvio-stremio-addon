# Cloudflare Worker Video Segment Proxy cho Hồ Phim Addon

Proxy chuyên dụng để bóc tách 95-byte PNG fake header cho các video stream (JavHD & VLXX).
- **Chi phí**: 100% Miễn phí
- **Băng thông (Egress Bandwidth)**: **KHÔNG GIỚI HẠN (Unlimited)**
- **Giới hạn request**: 100.000 requests/ngày trên gói Free của Cloudflare (thoải mái xem hàng trăm tập phim mỗi ngày).

---

## Cách 1: Triển khai trực tiếp qua Web Cloudflare (1 Phút - Không cần cài đặt gì)

1. Đăng nhập vào [Cloudflare Dashboard](https://dash.cloudflare.com/) (nếu chưa có tài khoản thì đăng ký miễn phí).
2. Ở thanh menu bên trái, chọn **Workers & Pages** -> Bấm **Create application** (Tạo ứng dụng).
3. Chọn thẻ **Workers** -> Bấm nút **Create Worker**.
4. Đặt tên cho Worker (ví dụ: `hophim-segment-proxy`) -> Bấm **Deploy**.
5. Bấm nút **Edit code** (Chỉnh sửa mã).
6. Xóa hết toàn bộ code mẫu có sẵn, mở file `worker.js` trong thư mục này, copy toàn bộ nội dung và dán vào.
7. Bấm **Deploy** (hoặc Save and Deploy).
8. Copy đường dẫn Worker vừa tạo, dạng:
   ```
   https://hophim-segment-proxy.<subdomain-cua-ban>.workers.dev
   ```

---

## Cách 2: Triển khai bằng dòng lệnh (Wrangler CLI)

Nếu máy tính đã cài Node.js / npm:

```bash
cd cloudflare-worker
npx wrangler login
npx wrangler deploy
```

Sau khi deploy xong, wrangler sẽ in ra đường link của Worker.

---

## Sử dụng trong Hồ Phim Addon

Sau khi có URL của Cloudflare Worker:
1. Trong Vercel (hoặc Render / VPS / local `.env`), thêm biến môi trường:
   ```env
   SEGMENT_PROXY_URL=https://hophim-segment-proxy.<subdomain-cua-ban>.workers.dev
   ```
2. Toàn bộ các phân đoạn video `.ts` của JavHD và VLXX sẽ được tải và xử lý trực tiếp qua Cloudflare Worker với băng thông Unlimited, Vercel sẽ tiêu tốn 0 MB băng thông video!
