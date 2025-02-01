
import Layout from "@/components/layout/Layout";
import "./globals.css";

export const metadata = {
  title: {
    default: "فروشگاه آنلاین عسل - خرید عسل طبیعی و ارگانیک",
    template: "%s | فروشگاه آنلاین عسل",
  },
  description: {
    default: "خرید انواع عسل طبیعی و محصولات ارگانیک با کیفیت بالا. فروشگاه آنلاین عسل با ارسال سریع و قیمت مناسب.",
  },
  icons: {
    icon: "/images/logo.png", // آیکون سایت
  },
  openGraph: {
    title: "فروشگاه آنلاین عسل - خرید عسل طبیعی و ارگانیک",
    description: "خرید انواع عسل طبیعی و محصولات ارگانیک با کیفیت بالا و ارسال سریع. عسل با قیمت مناسب، مستقیماً از کندو!",
    url: "https://mobingazmeh.ir", // آدرس کامل سایت
    site_name: "فروشگاه عسل موبین",
    images: [
      {
        url: "https://mobingazmeh.ir/images/og-image.jpg", // تصویر پیش‌نمایش برای اشتراک‌گذاری در شبکه‌های اجتماعی
        width: 1200,
        height: 630,
        alt: "فروشگاه آنلاین عسل موبین",
      },
    ],
  },
  alternates: {
    canonical: "https://mobingazmeh.ir", // لینک اصلی سایت
  },
  hreflang: [
    { hrefLang: "fa", href: "https://mobingazmeh.ir" }, // زبان فارسی
    { hrefLang: "en", href: "https://mobingazmeh.ir/en" }, // زبان انگلیسی (در صورت وجود)
  ],
  robots: "index, follow", // ایندکس صفحات و دنبال کردن لینک‌ها
  charset: "UTF-8", // کدینگ کاراکترها
};

export default function RootLayout({ children ,isLoading = false }) {
  return (
    <html lang="fa" dir="ltr">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
