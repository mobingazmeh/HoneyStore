'use client'

import dynamic from 'next/dynamic';

// بارگذاری داینامیک برای جلوگیری از رندر سمت سرور
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import animationData from '/public/animations/Animation-Loading1.json'; // مسیر فایل JSON

const LottieLoading = () => {
  return (
    <div className="bg-A flex justify-center items-center w-full h-screen">
      <div className="w-[700px]">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default LottieLoading;
