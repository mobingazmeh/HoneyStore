//requsts.ts

import axiosInstance from "./axiosInstance";

// **درخواست دریافت اطلاعات کاربر**
export const getUser = async () => {
  const response = await axiosInstance.get("/user", {
    cache: "no-cache",//getServerSideProps
  });
  return response.data;
};

// **درخواست به‌روزرسانی اطلاعات کاربر**
export const updateUser = async (userData: any) => {
  const response = await axiosInstance.put("/user/update", userData);
  return response.data;
};

// **درخواست دریافت تنظیمات سایت**
export const getOptions = async () => {
  const response = await axiosInstance.get("/options", {
    headers: {
      next: { revalidate: 7 * 24 * 60 * 1000 }, // getStaticProps
    },
  });
  return response.data;
};
