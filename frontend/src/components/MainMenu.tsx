'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JSX } from 'react';

import { MAIN_MENU_ITEMS } from '@/constants';

const MainMenu = (): JSX.Element => {
  const pathname = usePathname();
  const isCatalogActive = pathname.startsWith('/catalog');

  return (
    <ul className="flex items-center justify-center h-12 list-none bg-[var(--theme-color)] rounded-t-lg">
      {MAIN_MENU_ITEMS.map((item) => {
        const isActive = pathname === item.url || (item.url === '/catalog' && isCatalogActive);

        return (
          <li className={`h-[100%]  aitemsno-underline }`} key={item.name}>
            <Link
              href={item.url}
              className={`flex items-center h-[100%] px-[20px] text-white [transition:background_0.2s_ease-in-out] ${isActive ? 'bg-[#dd1414] cursor-default' : 'hover:bg-[#e75349]'}`}
            >
              <span className="font-semibold uppercase">{item.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
