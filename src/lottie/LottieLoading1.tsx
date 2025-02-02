'use clinet'
import Lottie from 'lottie-react';
import animationData from '/public/animations/Animation-Loading1.json'; // مسیر فایل JSON
const LottieLoading1 = () => {
  return (
    <div className=' p-1 w-[330px] h-[350px] ' >
      <Lottie animationData={animationData} />
    </div>
  );
};

export default LottieLoading1