'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import { HiMiniMinusSmall } from 'react-icons/hi2';
import { HiMiniPlusSmall } from 'react-icons/hi2';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import {
  clearCart,
  delItemFromCart,
  decQuantityItem,
  incQuantityItem,
} from '@/store/slices/cartItemsSlice';

import EmptyState from '../EmptyState';

const TableCart = (): JSX.Element => {
  const dispatch = useDispatch();
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

  if (cartItems.length === 0) {
    return (
      <EmptyState
        title="Корзина пуста"
        subtitle="Добавьте товары из каталога"
        linkText="Перейти в каталог"
        linkUrl="/catalog"
      />
    );
  }

  return (
    <table className="mb-[30px]">
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
                title='Удалить товар из корзины'
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
            <td className="text-center text-[18px] font-medium">{item.price.toFixed(2)}₽</td>
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
                  onChange={() => {}}
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
            <td className="text-center text-[18px] font-medium">{(item.price * item.quantity).toFixed(2)}₽</td>
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
  );
};

export default TableCart;
