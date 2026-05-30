import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://nhachung.niandemo.site",
  ),
  title: "Nhà Chung - Minh bạch thông tin, Vững niềm tin cư dân",
  description:
    "Nhà Chung giúp Ban quản trị công bố thông tin minh bạch, kết nối cư dân dễ dàng và quản lý tòa nhà hiệu quả.",
  openGraph: {
    title: "Nhà Chung - Minh bạch thông tin, Vững niềm tin cư dân",
    description:
      "Nhà Chung giúp Ban quản trị công bố thông tin minh bạch, kết nối cư dân dễ dàng và quản lý tòa nhà hiệu quả.",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "/thumbnail.jpeg",
        width: 1152,
        height: 837,
        alt: "Nhà Chung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nhà Chung - Minh bạch thông tin, Vững niềm tin cư dân",
    description:
      "Nhà Chung giúp Ban quản trị công bố thông tin minh bạch, kết nối cư dân dễ dàng và quản lý tòa nhà hiệu quả.",
    images: ["/thumbnail.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Manrope:wght@800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
