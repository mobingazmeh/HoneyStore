'use client';
import SignupPage from '@/components/template/SignupPage';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page: React.FC = () => {
  const router = useRouter();
  const token = Cookies.get('authToken');

  useEffect(() => {
    if (token) {
      router.replace('/');
    }
  }, [router, token]);

  return <SignupPage />;
};

export default Page;
