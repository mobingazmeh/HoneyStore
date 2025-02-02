'use client';
import Image from "next/image";
import FooterContact from "../models/FooterContact";
import FooterServices from "../models/FooterServices";
import FooterLogo from "../models/FooterLogo";
import FooterAbout from "../models/FooterAbout";
import LottieHive from "@/lottie/LottieHive";

// تایپ کامپوننت Footer با استفاده از React.FC
const Footer: React.FC = () => {
  return (
    <div className="relative h-[600px] w-full">
      {/* لایه‌ی تصویر پس‌زمینه */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: "url('/images/R.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* لایه‌ی گرادینت */}
      <div className="absolute inset-0 bg-gradient-to-r from-C to-B opacity-80" />

      {/* محتوای فوتر */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 py-10 px-40 z-20">
        <FooterLogo />
        <FooterServices />
        <FooterAbout />
        <FooterContact />
      </div>

      <div className="absolute bottom-0 right-0 flex justify-end">
        <LottieHive />
      </div>
    </div>
  );
};

export default Footer;
