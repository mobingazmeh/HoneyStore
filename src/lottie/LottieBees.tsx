'use client'

import dynamic from 'next/dynamic';

// بارگذاری داینامیک برای جلوگیری از رندر سمت سرور
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import animationData from '/public/animations/Animation-Bees.json'; // مسیر فایل JSON

const LottieBees:React.FC = () => {
  return (
    <div className="p-1 w-screen max-h-[100px] -z-10">
      <Lottie animationData={animationData} />
    </div>
  );
};

export default LottieBees;
