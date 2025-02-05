import React from 'react';

import { render, screen } from '@testing-library/react';
import HoneyList from '../src/components/module/HoneyList'; // مسیر دقیق کامپوننت HoneyList را تنظیم کنید

describe('کامپوننت HoneyList', () => {
  test('کامپوننت HoneyList را رندر می‌کند و محتوای صحیح را بررسی می‌کند', () => {
    render(<HoneyList />);

    // بررسی اینکه آیا عنوان "DO WHAT I LOVE" رندر شده است یا نه
    expect(screen.getByText(/DO WHAT I LOVE/i)).toBeInTheDocument();

    // بررسی اینکه آیا متن "Lorem ipsum dolor sit amet..." رندر شده است
    const paragraphs = screen.queryAllByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel consectetur risus./i);
    expect(paragraphs).toHaveLength(3); // فرض می‌کنیم که 3 پاراگراف مشابه باید وجود داشته باشد

    // بررسی اینکه آیا عناصر دیگری نیز رندر شده‌اند
    expect(screen.getByText(/Forest Honey/i)).toBeInTheDocument();
    expect(screen.getByText(/Creamed Honey/i)).toBeInTheDocument();
    expect(screen.getByText(/Meadow Honey/i)).toBeInTheDocument();
  });
});
