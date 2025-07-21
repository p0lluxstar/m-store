'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JSX } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { MAIN_MENU_ITEMS } from '@/constants';
import { RootState } from '@/store';
import { toggleVisibilityAsideMainMenu } from '@/store/slices/toggleAsideMainMenu';

import InfoTopItems from './InfoTopItems';

const AsideMainMenu = (): JSX.Element => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const toggleAsideMainMenu = useSelector((state: RootState) => state.toggleAsideMainMenu.visible);
  const isCatalogActive = pathname.startsWith('/catalog');

  const handleAsideMainMenuCloseBtn = (): void => {
    dispatch(toggleVisibilityAsideMainMenu());
  };

  return (
    <div
      className={`${toggleAsideMainMenu ? 'translate-x-full' : 'translate-x-0'} fixed top-0 left-[-400px] z-20 w-[400px] overflow-auto h-screen bg-[#1f1f1f] transition-transform duration-100 ease-in-out text-white max-[400px]:w-[320px] max-[400px]:left-[-320px]`}
    >
      <button
        className="!uppercase block w-full h-[60px] font-semibold cursor-pointer text-left px-[50px] hover:opacity-80 bg-[#eb3e32] mb-[20px]"
        onClick={handleAsideMainMenuCloseBtn}
      >
        <div>Главное меню</div>
        <i className="absolute top-[20px] right-[35px] [font-size:18px] cursor-pointer">
          <FaChevronLeft />
        </i>
      </button>
      <InfoTopItems />
      <ul className="flex-col items-center justify-center [border-top:1px_solid_#373737] max-[900px]:flex-col max-[900px]:justify-start max-[900px]:bg-transparent mt-[20px]">
        {MAIN_MENU_ITEMS.map((item) => {
          const isActive = pathname === item.url || (item.url === '/catalog' && isCatalogActive);

          return (
            <li
              key={item.name}
              className="w-[100%] [border-bottom:1px_solid_#373737]"
            >
              <Link
                className={`no-underline ${isActive ? 'text-[#c0c0c0]' : 'text-white'} inline-block w-full p-[20px] hover:opacity-90`}
                href={item.url}
              >
                <span className="font-semibold uppercase">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AsideMainMenu;
