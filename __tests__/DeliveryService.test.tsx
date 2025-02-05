import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeliveryService from "../src/components/module/DeliveryService";

describe('DeliveryService Component', () => {
  test('renders DeliveryService component and checks if content is visible', () => {
    render(<DeliveryService />);

    // بررسی اینکه عنوان "Delivery" و "Service" رندر می‌شوند
    expect(screen.getByText('Delivery')).toBeInTheDocument();
    expect(screen.getByText('Service')).toBeInTheDocument();

    // بررسی اینکه متن "FREE CALL TO OUR CALL-CENTER" رندر می‌شود
    expect(screen.getByText('FREE CALL TO OUR CALL-CENTER')).toBeInTheDocument();

    // بررسی اینکه شماره تماس "+555 666 999 00" رندر می‌شود
    expect(screen.getByText('+555 666 999 00')).toBeInTheDocument();

    // بررسی اینکه تصویر با عنوان "banner" رندر می‌شود
    const images = screen.getAllByAltText('banner');
    expect(images.length).toBeGreaterThan(0);

    // بررسی اینکه تصویر دوم (با عنوان "banner") نیز رندر می‌شود
    const secondImage = screen.getAllByAltText('banner')[1];
    expect(secondImage).toBeInTheDocument();
  });
});
