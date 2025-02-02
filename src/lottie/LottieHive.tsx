'use client'

import dynamic from 'next/dynamic';

// بارگذاری داینامیک برای جلوگیری از رندر سمت سرور
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import animationData from '/public/animations/Animation-Hive.json'; // مسیر فایل JSON

const LottieHive:React.FC = () => {
  return (
    <div className='p-1 w-[500px] h-[500px]'>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default LottieHive;
