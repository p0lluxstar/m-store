'use client';

import { JSX, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import MainWrapper from '@/components/main/MainWrapper';
import { clearCart } from '@/store/slices/cartItemsSlice';
import { ICartItem, TCartItemEssentials } from '@/types';

const CartPage = (): JSX.Element => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const getTotalPrice = (): number =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleClearCart = (): void => {
    setCart([]);
    dispatch(clearCart());
  };

  const placeOrder = async (): Promise<void> => {
    if (!customerName || !customerPhone) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const orderData = {
      region_id: 'reg_01JWRDG8DY2GDMAK48EY1BJ9MF',
      customer_name: customerName,
      customer_phone: customerPhone,
      items: cart.map((item: TCartItemEssentials) => ({
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
      console.error('Ошибка при создании заказа:', error);
    }
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
            <button onClick={handleClearCart}>Очистить корзину</button>
            <div>
              <label htmlFor="customerName">Имя: </label>
              <input
                type="text"
                id="customerName"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              ></input>
              <label htmlFor="customerPhone">Телефон: </label>
              <input
                type="text"
                id="customerPhone"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
              ></input>
            </div>
            <button onClick={placeOrder}>Оформить заказ</button>
          </>
        )}
      </div>
    </MainWrapper>
  );
};

export default CartPage;
