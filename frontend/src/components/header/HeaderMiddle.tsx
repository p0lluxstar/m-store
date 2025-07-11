'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { JSX, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { LuMenu } from "react-icons/lu";

import styles from '../../styles/components/header/headerMiddle.module.scss';
import HeaderCartBtn from '../cart/HeaderCartBtn';
import HeaderWishListBtn from '../wishlist/HeaderWishListBtn';


const HeaderMiddle = (): JSX.Element => {
  const [searchParam, setSearchParam] = useState('');
  const router = useRouter();

  const heandleProductSearch = (event: React.FormEvent): void => {
    event.preventDefault();

    if (searchParam.trim()) {
      router.push(`/catalog?searchParam=${encodeURIComponent(searchParam.trim())}`);
    }
  };

  return (
    <div className="py-6.25 px-[40px] max-[500px]:px-[20px]">
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <div className="flex justify-between items-center max-[400px]:flex-col">
          <div className="flex items-center">
            <div className="max-[400px]:mb-[30px]">
              <Link href="/">
                <Image className='max-[500px]:w-[120px] max-[400px]:w-[140px]' src={'/img/png/logo-bg-black.png'} alt="Logo" width={170} height={50} />
              </Link>
            </div>
          </div>
          <div className="max-[900px]:hidden">
            <div className={styles['header-search-area']}>
              <form className="relative">
                <input
                  type="search"
                  className="rounded-lg text-[#989898] text-sm h-11 leading-[2.75rem] w-96 pt-[5px] pr-[70px] pb-[5px] pl-[10px] border-2 border-solid border-[#e8e8e8] focus:outline-none"
                  placeholder="Поиск товара"
                  onChange={(e) => setSearchParam(e.target.value)}
                />
                <button
                  className="flex justify-center items-center w-16 bg-[var(--theme-color)] rounded-l-none rounded-r-[8px] absolute right-0 top-0 h-11 cursor-pointer hover:opacity-90"
                  type="submit"
                  onClick={heandleProductSearch}
                >
                  <i className="text-white text-[30px]">
                    <IoIosSearch />
                  </i>
                </button>
              </form>
            </div>
          </div>
          <div className="max-[400px]:w-[100%]">
            <div className="flex gap-5 relative max-[400px]:justify-around">
              <div className="hidden max-[900px]:block">
                <button className="text-[30px]" type="button">
                  <IoSearch />
                </button>
              </div>
              <HeaderWishListBtn />
              <HeaderCartBtn />
              <div className="hidden max-[900px]:block">
                <button className="text-[30px]" type="button">
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
