import React from 'react';

import { render, screen } from '@testing-library/react';
import LatestProducts from '../src/components/module/LatestProducts'; // مسیر دقیق کامپوننت LatestProducts را تنظیم کنید
import CardSlider from '../src/components/module/Slider/CardSlider'; // اطمینان از اینکه مسیر CardSlider درست است

jest.mock('../src/components/module/Slider/CardSlider', () => {
  return jest.fn(() => <div>Card Slider Mock</div>); // این برای mock کردن کامپوننت CardSlider است
});

describe('کامپوننت LatestProducts', () => {
  test('کامپوننت LatestProducts به درستی رندر می‌شود و محتوای صحیح را نمایش می‌دهد', () => {
    render(<LatestProducts />);

    // بررسی اینکه عنوان "NEW PRODUCTS" رندر شده است
    expect(screen.getByText(/NEW PRODUCTS/i)).toBeInTheDocument();

    // بررسی اینکه توضیحات در مورد محصولات جدید به درستی نمایش داده می‌شود
    expect(screen.getByText(/You can check out our work. Are you ready for a better, more productive Progress?/i)).toBeInTheDocument();

    // بررسی اینکه کامپوننت CardSlider رندر شده است
    expect(screen.getByText(/Card Slider Mock/i)).toBeInTheDocument();
  });

  test('کامپوننت دارای استایل‌های صحیح است', () => {
    render(<LatestProducts />);

    const title = screen.getByText(/NEW PRODUCTS/i);
    const description = screen.getByText(/You can check out our work. Are you ready for a better, more productive Progress?/i);

    // بررسی استایل‌ها
    expect(title).toHaveClass('text-C', 'font-bold', 'my-5');
    expect(description).toHaveClass('text-2xl', 'font-bold', 'text-black', 'text-center');
  });
});
