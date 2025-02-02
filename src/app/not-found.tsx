'use client'
import LottieBear from '@/lottie/LottieBear'

interface NotFoundProps {
  error: Error; // نوع خطا
  reset: () => void; // تابع ریست کردن
}

const NotFound: React.FC<NotFoundProps> = ({ error, reset }) => {
  console.log('404', error, reset);
  
  return <LottieBear />;
};

export default NotFound;
