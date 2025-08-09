'use client';

import { JSX, Suspense } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { toggleVisibilityAsideProductSearch } from '@/store/slices/toggleAsideProductSearch';

import FormProductSearch from './FormProductSearch';

const AsideProductSearch = (): JSX.Element => {
  const dispatch = useDispatch();
  const toggleAsidePorductSearch = useSelector(
    (state: RootState) => state.toggleAsideProductSearch.visible
  );

  const handleBtnClose = (): void => {
    dispatch(toggleVisibilityAsideProductSearch());
  };

  return (
    <div
      className={`${toggleAsidePorductSearch ? 'translate-y-full' : 'translate-y-0'} flex justify-center items-center fixed top-[-200px] left-0 z-20 h-[200px] w-[100%] overflow-auto bg-white transition-transform duration-100 ease-in-out`}
    >
      <button
        className="absolute top-0 right-0 bg-[var(--theme-color)] text-white hover:cursor-pointer p-[5px] text-[24px]"
        onClick={handleBtnClose}
      >
        <VscChromeClose />
      </button>
      <Suspense fallback={<div>Загрузка...</div>}>
        <FormProductSearch />
      </Suspense>
    </div>
  );
};

export default AsideProductSearch;
