// requests.test.ts
import { getUser } from '../src/utils/requests';
import Cookies from 'js-cookie';

jest.mock('js-cookie');
global.fetch = jest.fn();

describe('getUser', () => {
  it('should fetch user data successfully', async () => {
    const mockUserData = { name: 'John Doe' };
    const mockResponse = { ok: true, json: jest.fn().mockResolvedValue(mockUserData) };
    (fetch as jest.Mock).mockResolvedValue(mockResponse);
    (Cookies.get as jest.Mock).mockReturnValue('mockAuthToken');

    const data = await getUser();

    expect(data).toEqual(mockUserData);
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user`,
      expect.objectContaining({
        method: 'GET',
        headers: expect.objectContaining({
          'Authorization': 'Bearer mockAuthToken',
        }),
      })
    );
  });

  it('should throw an error when fetch fails', async () => {
    const mockResponse = { ok: false, statusText: 'Not Found' };
    (fetch as jest.Mock).mockResolvedValue(mockResponse);
    (Cookies.get as jest.Mock).mockReturnValue('mockAuthToken');

    await expect(getUser()).rejects.toThrow('Error fetching user data: Not Found');
  });
});


{/*✅ از Jest + React Testing Library برای کامپوننت‌ها و فانکشن‌های مستقل استفاده کن
✅ از Jest برای تست اینتگریشن مثل درخواست‌های API و تغییرات Zustand استفاده کن
✅ از Playwright برای تست تجربه کاربر در کل سایت استفاده کن (E2E)
✅ تست‌های مهم فروشگاه مثل جستجو، فیلتر، خرید و پرداخت را حتماً پوشش بده
✅ از Snapshot Testing برای اطمینان از تغییر نکردن ظاهر کامپوننت‌ها استفاده کن
✅ اجرای تست‌ها را در CI/CD خودکار کن تا با هر تغییری تست‌ها اجرا شوند */}