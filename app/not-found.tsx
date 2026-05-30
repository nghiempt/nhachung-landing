import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-panel">
        <h1>Không tìm thấy trang</h1>
        <p>
          Đường dẫn này không tồn tại hoặc đã được di chuyển. Quay về trang chủ
          Nhà Chung để tiếp tục.
        </p>
        <Link href="/" className="not-found-button">
          Về trang chủ
        </Link>
      </div>
    </main>
  );
}
