'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JSX } from 'react';

import { MAIN_MENU_ITEMS } from '@/constants';

const MainMenu = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center justify-center gap-5 h-12 list-none bg-[var(--theme-color)] rounded-t-lg">
      {MAIN_MENU_ITEMS.map((item) => {
        return (
          <li key={item.name}>
            <Link
              className={`no-underline ${pathname === item.url ? 'text-[#fffc]' : 'text-white'}`}
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
