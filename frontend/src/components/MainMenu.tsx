'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JSX } from 'react';

import { MAIN_MENU_ITEMS } from '@/constants';

const MainMenu = (): JSX.Element => {
  const pathname = usePathname();
  const isCatalogActive = pathname.startsWith('/catalog');

  return (
    <ul className="flex items-center justify-center gap-5 h-12 list-none bg-[var(--theme-color)] rounded-t-lg">
      {MAIN_MENU_ITEMS.map((item) => {
        const isActive = pathname === item.url || (item.url === '/catalog' && isCatalogActive);

        return (
          <li key={item.name}>
            <Link
              className={`no-underline ${isActive ? 'text-[#c0c0c0]' : 'text-white'}`}
              href={item.url}
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
