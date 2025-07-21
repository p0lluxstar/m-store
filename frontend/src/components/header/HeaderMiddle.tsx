'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import { IoSearch } from 'react-icons/io5';
import { LuMenu } from 'react-icons/lu';
import { useDispatch } from 'react-redux';

import { toggleVisibilityAsideMainMenu } from '@/store/slices/toggleAsideMainMenu';
import { toggleVisibilityAsideProductSearch } from '@/store/slices/toggleAsideProductSearch';

import HeaderCartBtn from '../cart/HeaderCartBtn';
import FormProductSearch from '../FormProductSearch';
import HeaderWishListBtn from '../wishlist/HeaderWishListBtn';

const HeaderMiddle = (): JSX.Element => {
  const dispatch = useDispatch();

  const heandleBtnMenu = (): void => {
    dispatch(toggleVisibilityAsideMainMenu());
  };

  const heandleForAsideProductSearch = (): void => {
    dispatch(toggleVisibilityAsideProductSearch());
  };

  return (
    <div className="py-6.25 px-[40px] max-[500px]:px-[20px]">
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <div className="flex justify-between items-center max-[400px]:flex-col">
          <div className="flex items-center">
            <div className="max-[400px]:mb-[30px]">
              <Link href="/">
                <Image
                  className="max-[500px]:w-[120px] max-[400px]:w-[140px]"
                  src={'/img/png/logo-bg-black.png'}
                  alt="Logo"
                  width={170}
                  height={50}
                />
              </Link>
            </div>
          </div>
          <div className="max-[900px]:hidden">
            <FormProductSearch />
          </div>
          <div className="max-[400px]:w-[100%]">
            <div className="flex gap-5 relative max-[400px]:justify-around">
              <div className="hidden max-[900px]:block">
                <button
                  className="text-[30px] cursor-pointer hover:opacity-90"
                  type="button"
                  onClick={heandleForAsideProductSearch}
                >
                  <IoSearch />
                </button>
              </div>
              <HeaderWishListBtn />
              <HeaderCartBtn />
              <div className="hidden max-[900px]:block">
                <button
                  className="text-[30px] cursor-pointer hover:opacity-90"
                  type="button"
                  onClick={heandleBtnMenu}
                >
                  <LuMenu />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
