import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { TCartItemEssentials } from '@/types';

export const useCreateOrder = (): any => {
  const cartItems = useSelector((state: RootState) => state.cartItems.items);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createOrder = async (customerName: string, customerPhone: string): Promise<any> => {
    setIsLoading(true);
    setError(null);

    const orderData = {
      region_id: 'reg_01JWRDG8DY2GDMAK48EY1BJ9MF',
      customer_name: customerName,
      customer_phone: customerPhone,
      items: cartItems.map((item: TCartItemEssentials) => ({
        variant_id: item.variant_id,
        quantity: item.quantity,
      })),
    };

    try {
      const res = await fetch('http://localhost:4000/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${res.status} ${res.statusText}`);
      }

      const result = await res.json();
      return result;
    } catch (error) {
      setError(error as Error);
      console.error('Ошибка при создании заказа:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { createOrder, isLoading, error };
};
