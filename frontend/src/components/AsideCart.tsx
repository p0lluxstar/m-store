'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX, useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { toggleVisibility } from '@/store/slices/toggleSlice';
import { ICartItem } from '@/types';

const AsideCart = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const [hasMounted, setHasMounted] = useState(false);
  const visible = useSelector((state: RootState) => state.toggle.visible);
  const cartItems = useSelector((state: RootState) => state.cartItems.items);

  const handleAsideCartCloseBtn = (): void => {
    dispatch(toggleVisibility());
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={` ${visible ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 z-20 w-[400px] h-screen bg-white transition-transform duration-300 ease-in-out`}
    >
      <div className="relative h-[60px] bg-[#f7f7f7] [border-bottom:1px_solid_#e8e8e8]">
        <button
          onClick={handleAsideCartCloseBtn}
          className="!uppercase block w-full h-[60px] font-semibold cursor-pointer text-left px-[50px] hover:opacity-80"
        >
          <div>Корзина покупок</div>
          <i className="absolute top-[20px] right-[35px] [font-size:18px] cursor-pointer">
            <FaChevronRight />
          </i>
        </button>
      </div>
      <div className="p-[50px]">
        {cartItems.length > 0 ? (
          <>
            <ul>
              {cartItems.map((item: ICartItem) => {
                return (
                  <li className="flex mb-[30px]" key={item.id}>
                    <Image
                      className="mr-[20px]"
                      src={'/img/webp/aside-cart-img-product.webp'}
                      alt=""
                      width={70}
                      height={70}
                    />
                    <div>
                      <h3
                        className="[font-size:18px] font-medium mb-[10px]"
                        onClick={handleAsideCartCloseBtn}
                      >
                        <Link href={`/catalog/${item.handle}/${item.id}`}>{item.title}</Link>
                      </h3>
                      <p>1 × {item.price}₽</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="flex justify-between text-[#333131] [font-size:18px] font-medium mb-[30px]">
              <span>Итого:</span>
              <span>{totalAmount.toFixed(2)}₽</span>
            </div>
            <Link
              onClick={handleAsideCartCloseBtn}
              className="!bg-[#232324] block text-center p-[15px] text-white font-semibold uppercase hover:opacity-90"
              href={'/cart'}
            >
              Просмотр корзины
            </Link>
          </>
        ) : (
          <>
            <p className="text-lg">Корзина пуста</p>
            <p className="text-sm">Добавьте товары из каталога</p>
          </>
        )}
      </div>
    </div>
  );
};

export default AsideCart;
