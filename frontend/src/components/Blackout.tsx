'use client';

import { JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { toggleVisibility } from '@/store/slices/toggleSlice';

const Blackout = (): JSX.Element => {
  const dispatch = useDispatch();
  const visible = useSelector((state: RootState) => state.toggle.visible);

  const handleClick = (): void => {
    dispatch(toggleVisibility());
  };

  return (
    <div
      onClick={handleClick}
       className={`
        fixed top-0 left-0 w-full h-full z-10 bg-[#292929]/80
        transition-opacity duration-300 ease-in-out
        ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    ></div>
  );
};

export default Blackout;
