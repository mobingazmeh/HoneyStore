'use client';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

// تعریف اینترفیس برای تایپ دقیق‌تر متدها
interface AlertMethods {
  success: (message: string, options?: SweetAlertOptions) => void;
  warning: (message: string, options?: SweetAlertOptions) => void;
  error: (message: string, options?: SweetAlertOptions) => void;
  info: (message: string, options?: SweetAlertOptions) => void;
  question: (message: string, options?: SweetAlertOptions) => void;
}

const Alerts = (): AlertMethods => {
  // تنظیمات Toast به صورت عمومی
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
    // افزودن گزینه‌های سفارشی برای تمام هشدارها
    customClass: {
      popup: 'bg-gray-800 text-white', // کلاس‌های Tailwind برای استایل دهی
    },
  });

  // تابع عمومی برای ایجاد هشدار
  const createAlert = (icon: SweetAlertIcon) => (message: string, options: SweetAlertOptions = {}) => {
    Toast.fire({
      icon,
      title: message,
      ...options, // اضافه کردن گزینه‌های سفارشی به هر هشدار
    });
  };

  // برگشت متدهای هشدار
  return {
    success: createAlert('success'),
    warning: createAlert('warning'),
    error: createAlert('error'),
    info: createAlert('info'),
    question: createAlert('question'),
  };
};

export default Alerts;
