// components/Layout.tsx

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AosInitializer from "./AosInitializer";
import { request } from '@/utils/requests';

interface LayoutProps {
  children: ReactNode;
}

export const revalidate = 60; // بازسازی هر 60 ثانیه

export default async function Layout({ children }: LayoutProps) {
  let data = null;
  try {
    data = await request('get', '/options'); // درخواست GET
  } catch (err) {
    console.error('خطا در واکشی داده‌ها:', err);
  }

  return (
    <div className="mx-auto h-full flex flex-col justify-between max-w-[1400px]">
      <Header  />
      <div className="h-fit w-full mx-auto bg-white">
        {children}
      </div>
      <Footer />
      <AosInitializer />
    </div>
  );
}
