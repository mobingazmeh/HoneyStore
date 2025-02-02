'use client';

import HomePage from "@/components/template/HomePage";

// کامپوننت 'page' تایپ شده به نوع React.FC (برای کامپوننت‌های function)
const Page: React.FC = () => {
  return (
    <div className="w-full h-full ">
      <HomePage />
    </div>
  );
};

export default Page;
