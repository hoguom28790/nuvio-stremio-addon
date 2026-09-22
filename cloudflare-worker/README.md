# Hướng Dẫn Triển Khai Toàn Bộ Hồ Phim Addon Lên Cloudflare Workers (1 Phút)

Addon Hồ Phim đã được đóng gói toàn diện vào một file duy nhất (`cloudflare-worker/worker.js`) chạy 100% trên Cloudflare Workers.
- **Băng thông (Egress Bandwidth)**: **KHÔNG GIỚI HẠN (Unlimited 100% Miễn phí)**
- **Không cần Vercel**: Không sợ bị quá hạn 10 GB, không sợ lỗi `402 Payment Required`
- **Tốc độ cực nhanh**: Chạy trực tiếp tại mạng lưới Edge toàn cầu của Cloudflare.

---

## Cách 1: Triển khai qua Web Cloudflare (1 Phút - Đơn giản nhất, không cần cài đặt)

1. Truy cập [dash.cloudflare.com](https://dash.cloudflare.com/) và đăng nhập (hoặc đăng ký tài khoản miễn phí).
2. Ở menu bên trái, bấm **Workers & Pages** -> Bấm nút **Create application** -> Chọn thẻ **Workers** -> Bấm **Create Worker**.
3. Đặt tên cho Worker (ví dụ: `hophimaddon`) -> Bấm **Deploy**.
4. Sau khi deploy xong, bấm nút **Edit code** (Chỉnh sửa mã).
5. Mở file [worker.js](worker.js), copy toàn bộ nội dung (Ctrl+A -> Ctrl+C).
6. Dán đè vào khung soạn thảo trên web Cloudflare (Ctrl+A -> Ctrl+V) -> Bấm nút **Deploy** ở góc trên cùng bên phải.
7. Xong! Bạn đã có đường dẫn Addon riêng:
   ```
   https://hophimaddon.<subdomain-cua-ban>.workers.dev
   ```

---

## Cách 2: Triển khai bằng dòng lệnh (Wrangler CLI)

Nếu máy tính có cài Node.js:
```bash
npx wrangler login
npx wrangler deploy
```

---

## Cách sử dụng trên Stremio / Nuvio

- **Mở trang Cài đặt / Cấu hình danh mục**:
  Mở trình duyệt vào link:
  `https://hophimaddon.<subdomain-cua-ban>.workers.dev/`
- **Cài đặt vào Stremio**:
  Copy link manifest dán vào ô tìm kiếm của Stremio:
  `https://hophimaddon.<subdomain-cua-ban>.workers.dev/manifest.json`
