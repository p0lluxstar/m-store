'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX, useEffect, useState } from 'react';
import { HiMiniMinusSmall } from 'react-icons/hi2';
import { HiMiniPlusSmall } from 'react-icons/hi2';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';
import { RootState } from '@/store';
import {
  clearCart,
  delItemFromCart,
  decQuantityItem,
  incQuantityItem,
} from '@/store/slices/cartItemsSlice';
import { ICartItem, TCartItemEssentials } from '@/types';

const CartPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const cartItems = useSelector((state: RootState) => state.cartItems.items);

  const handleClearCart = (): void => {
    dispatch(clearCart());
  };

  const handleDecQuantity = (productId: string): void => {
    dispatch(decQuantityItem(productId));
  };

  const handleIncQuantity = (productId: string): void => {
    dispatch(incQuantityItem(productId));
  };

  const handleDelItemFromCart = (productId: string): void => {
    dispatch(delItemFromCart(productId));
  };

  // useEffect(() => {
  //   const storedCart = localStorage.getItem('cart');
  //   if (storedCart) {
  //     setCart(JSON.parse(storedCart));
  //   }
  // }, []);

  // const getTotalPrice = (): number =>
  //   cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // const placeOrder = async (): Promise<void> => {
  //   if (!customerName || !customerPhone) {
  //     alert('Пожалуйста, заполните все поля');
  //     return;
  //   }
  //   const cart = JSON.parse(localStorage.getItem('cart') || '[]');

  //   const orderData = {
  //     region_id: 'reg_01JWRDG8DY2GDMAK48EY1BJ9MF',
  //     customer_name: customerName,
  //     customer_phone: customerPhone,
  //     items: cartItems.map((item: TCartItemEssentials) => ({
  //       variant_id: item.variant_id,
  //       quantity: item.quantity,
  //     })),
  //   };

  //   try {
  //     const res = await fetch('http://localhost:4000/order', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(orderData),
  //     });

  //     if (!res.ok) {
  //       const errorData = await res.json().catch(() => ({}));
  //       throw new Error(errorData.message || `HTTP error! status: ${res.status} ${res.statusText}`);
  //     }

  //     const result = await res.json();
  //     return result;
  //   } catch (error) {
  //     console.error('Ошибка при создании заказа:', error);
  //   }
  // };

  return (
    <MainWrapper>
      <PageHeaderArea />
      <div>
        {cartItems.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <>
            <table>
              <thead className="table-header-group bg-[#F7F7F7]">
                <tr>
                  <th className="min-w-[30px] py-[12px]">&nbsp;</th>
                  <th className="min-w-[110px] py-[12px]">&nbsp;</th>
                  <th className="w-[600px] py-[12px] text-left">Товар</th>
                  <th className="w-[200px] py-[12px]">Цена</th>
                  <th className="w-[100px] py-[12px]">Количество</th>
                  <th className="w-[200px] py-[12px]">Сумма</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr className="h-[150px] [border-bottom:1px_solid_#e8e8e8]" key={item.id}>
                    <td>
                      <button
                        className="text-[20px] hover:cursor-pointer hover:opacity-80"
                        onClick={() => handleDelItemFromCart(item.id)}
                      >
                        <RiDeleteBinLine />
                      </button>
                    </td>
                    <td>
                      <Image
                        src={'/img/webp/aside-cart-img-product.webp'}
                        alt="product img"
                        width={90}
                        height={110}
                      />
                    </td>
                    <td className="text-[18px] font-medium">
                      <Link
                        className="hover:text-[var(--theme-color)] transition-colors"
                        href={`/catalog/${item.handle}/${item.id}`}
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td className="text-center text-[18px] font-medium">{item.price}₽</td>
                    <td className="text-center text-[18px] font-medium">
                      <div className="flex justify-center items-center mx-[auto] my-[0] w-[80px] border border-gray-300 rounded-md overflow-hidden bg-white">
                        {/* Кнопка минус */}
                        <button
                          type="button"
                          className="flex items-center justify-center h-10 hover:cursor-pointer"
                          onClick={() => handleDecQuantity(item.id)}
                        >
                          <HiMiniMinusSmall />
                        </button>

                        {/* Поле ввода */}
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          className="w-8 h-10 text-center text-lg font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />

                        {/* Кнопка плюс */}
                        <button
                          type="button"
                          className="flex items-center justify-center h-10 hover:cursor-pointer"
                          onClick={() => handleIncQuantity(item.id)}
                        >
                          <HiMiniPlusSmall />
                        </button>
                      </div>
                    </td>
                    <td className="text-center text-[18px] font-medium">
                      {item.price * item.quantity}₽
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="h-[100px]">
                  <td className="text-right" colSpan={6}>
                    <button
                      type="button"
                      className="min-w-[180px] h-[50px] font-medium border-[1px] border-solid border-[#e8e8e8] rounded-[8px] [box-shadow:none] cursor-pointer text-[#333131] hover:text-white hover:bg-[#333131] transition-colors"
                      onClick={handleClearCart}
                    >
                      Очистить коризну
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </>
        )}
      </div>
      {/* <div>
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
      </div> */}
    </MainWrapper>
  );
};

export default CartPage;
