'use client';

import { JSX, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

const CartItemCounter = (): JSX.Element | null => {
  const [isMounted, setIsMounted] = useState(false);
  const totalCartItems = useSelector((state: RootState) => {
    return state.cartItems.items.length;
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center absolute top-[-2px] right-[4px] p-[3px] bg-[var(--theme-color)] w-[21px] h-[21px] text-white rounded-[50%] text-[12px] font-semibold">
      {totalCartItems}
    </div>
  );
};

export default CartItemCounter;
