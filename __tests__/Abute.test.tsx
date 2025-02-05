import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Abute from "../src/components/module/Abute";

describe('Abute Component', () => {
  test('renders Abute component and checks if content is visible', () => {
    render(<Abute />);

    expect(screen.getByText('About Us')).toBeInTheDocument();

    const images = screen.getAllByAltText('abuteImage');
    expect(images.length).toBeGreaterThan(0);

    expect(screen.getByText('We are a dedicated team passionate about producing the finest natural')).toBeInTheDocument();
  });
});


{/*✅ از Jest + React Testing Library برای کامپوننت‌ها و فانکشن‌های مستقل استفاده کن
✅ از Jest برای تست اینتگریشن مثل درخواست‌های API و تغییرات Zustand استفاده کن
✅ از Playwright برای تست تجربه کاربر در کل سایت استفاده کن (E2E)
✅ تست‌های مهم فروشگاه مثل جستجو، فیلتر، خرید و پرداخت را حتماً پوشش بده
✅ از Snapshot Testing برای اطمینان از تغییر نکردن ظاهر کامپوننت‌ها استفاده کن
✅ اجرای تست‌ها را در CI/CD خودکار کن تا با هر تغییری تست‌ها اجرا شوند */}