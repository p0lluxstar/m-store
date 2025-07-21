'use client';

import { JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { toggleVisibility } from '@/store/slices/toggleAsideCartSlice';
import { toggleVisibilityAsideMainMenu } from '@/store/slices/toggleAsideMainMenu';
import { toggleVisibilityAsideProductSearch } from '@/store/slices/toggleAsideProductSearch';

const Blackout = (): JSX.Element => {
  const dispatch = useDispatch();
  const visibleAsideCart = useSelector((state: RootState) => state.toggleAsideCart.visible);
  const visibleAsideMainMenu = useSelector((state: RootState) => state.toggleAsideMainMenu.visible);
  const visibilityAsideProductSearch = useSelector(
    (state: RootState) => state.toggleAsideProductSearch.visible
  );

  const handleClick = (): void => {
    if (visibleAsideCart) {
      dispatch(toggleVisibility());
    }

    if (visibleAsideMainMenu) {
      dispatch(toggleVisibilityAsideMainMenu());
    }

    if (visibilityAsideProductSearch) {
      dispatch(toggleVisibilityAsideProductSearch());
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        fixed top-0 left-0 w-full h-full z-10 bg-[#292929]/80
        transition-opacity duration-300 ease-in-out
        ${visibleAsideCart || visibleAsideMainMenu || visibilityAsideProductSearch ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    ></div>
  );
};

export default Blackout;
