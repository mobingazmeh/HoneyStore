'use clinet'
import Lottie from 'lottie-react';
import animationData from '/public/animations/Animation-bear.json'; // مسیر فایل JSON
//footer
const LottieBear:React.FC = () => {
  return (
    <div className=' p-1 w-[330px] h-[350px] ' >
      <Lottie animationData={animationData} />
    </div>
  );
};

export default LottieBear