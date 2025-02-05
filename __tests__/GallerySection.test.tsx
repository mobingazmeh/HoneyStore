import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GallerySection from "../src/components/module/GallerySection"; // مسیر درست کامپوننت را وارد کنید

describe('GallerySection Component', () => {
  test('renders GallerySection component and checks if images and text are visible', () => {
    render(<GallerySection />);

    // بررسی اینکه عنوان "LATEST GALLERY" رندر می‌شود
    expect(screen.getByText('LATEST GALLERY')).toBeInTheDocument();

    // بررسی اینکه توضیحات "You can check out our work..." رندر می‌شود
    expect(
      screen.getByText('You can check out our work. Are you ready for a better, more productive Gallery.')
    ).toBeInTheDocument();

    // بررسی اینکه تعداد تصاویر برابر با تعداد آرایه images باشد
    const images = screen.getAllByAltText(/^Gallery Image/); // جستجو برای تصاویر با عنوان "Gallery Image"
    expect(images.length).toBe(4); // تعداد تصاویر باید ۴ باشد
  });
});
