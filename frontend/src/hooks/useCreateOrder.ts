import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { TCartItemEssentials } from '@/types';

interface IUseCreateOrder {
  createOrder: (customerName: string, customerPhone: string) => Promise<void>;
  isLoading: boolean;
  error: Error | null;
}

export const useCreateOrder = (): IUseCreateOrder => {
  const cartItems = useSelector((state: RootState) => state.cartItems.items);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createOrder = async (customerName: string, customerPhone: string): Promise<void> => {
    setIsLoading(true);
    setError(null);

    const orderData = {
      region_id: process.env.NEXT_PUBLIC_REGION_ID,
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
