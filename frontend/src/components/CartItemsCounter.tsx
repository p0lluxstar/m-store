'use client';

import { JSX, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

const CartItemCounter = (): JSX.Element | null => {
  const [isMounted, setIsMounted] = useState(false);
  const totalCartItems = useSelector((state: RootState) => {
    let quantityCartItems = 0;

    state.cartItems.items.map((item) => {
      quantityCartItems += item.quantity;
    });

    return quantityCartItems;
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center absolute top-[-2px] right-[4px] p-[3px] bg-[var(--theme-color)] w-[21px] h-[21px] text-white rounded-[50%] text-[14px] font-semibold">
      <span>{totalCartItems}</span>
    </div>
  );
};

export default CartItemCounter;
