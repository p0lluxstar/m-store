'use client';

import { JSX, useEffect, useState } from 'react';

import MainWrapper from '@/components/main/MainWrapper';

interface ICartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

const CartPage = (): JSX.Element => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const getTotalPrice = (): number =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const clearCart = (): void => {
    localStorage.removeItem('cart');
    setCart([]);
  };

  const placeOrder = async (): Promise<void> => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const orderData = {
      name: 'Иван',
      phone: '+79991234567',
      items: cart.map((item: any) => ({
        product_id: item.id,
        variant_id: item.variant_id,
        quantity: item.quantity,
      })),
    };

    const res = await fetch('http://localhost:4000/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });

    const result = await res.json();
    console.log('Заказ создан:', result);
  };

  return (
    <MainWrapper>
      <div>
        <h1>Корзина</h1>
        {cart.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>Цена: {item.price}</p>
                  <p>Количество: {item.quantity}</p>
                  <p>Сумма: {item.price * item.quantity}</p>
                </li>
              ))}
            </ul>
            <h2>Итого: {getTotalPrice()} ₽</h2>
            <button onClick={clearCart}>Очистить корзину</button>
            <button onClick={placeOrder}>Оформить заказ</button>
          </>
        )}
      </div>
    </MainWrapper>
  );
};

export default CartPage;
