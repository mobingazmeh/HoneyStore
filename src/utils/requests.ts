// lib/api.ts
import axiosInstance from './axiosInstance';

export const postData = async (endpoint: string, data: object) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error('خطا در ارسال داده‌ها');
  }
};

export const putData = async (endpoint: string, data: object) => {
  try {
    const response = await axiosInstance.put(endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error('خطا در به‌روزرسانی داده‌ها');
  }
};



export const fetchData = async (endpoint: string) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error('خطا در واکشی داده‌ها');
  }
}