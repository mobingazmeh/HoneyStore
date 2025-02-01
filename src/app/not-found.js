'use client'
import LottieBear from '@/lottie/LottieBear';



const NotFound = ({ error, reset }) => {
  console.log('404', error, reset);
  
  return <LottieBear />;
};

export default NotFound;
