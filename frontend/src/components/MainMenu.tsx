'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JSX } from 'react';

import styles from '../styles/components/mainMenu.module.scss';

const MainMenu = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center justify-center gap-5 h-12 list-none bg-[var(--theme-color)] rounded-t-lg">
      <li className={styles['main-menu-item']}>
        <Link
          className={`no-underline ${pathname === '/' ? 'text-[#fffc]' : 'text-white'}`}
          href="/"
        >
          <span className='font-semibold uppercase'>Главная</span>
        </Link>
      </li>
      <li className={styles['main-menu-item']}>
        <Link
          className={`no-underline ${pathname === '/shop' ? 'text-[#fffc]' : 'text-white'}`}
          href="/catalog"
        >
          <span className='font-semibold uppercase'>Каталог</span>
        </Link>
      </li>
      <li>
        <Link
          className={`no-underline ${pathname === '/about' ? 'text-[#fffc]' : 'text-white'}`}
          href="about"
        >
          <span className='font-semibold uppercase'>О нас</span>
        </Link>
      </li>
      <li>
        <Link
          className={`no-underline ${pathname === '/contact' ? 'text-[#fffc]' : 'text-white'}`}
          href="contact"
        >
          <span className='font-semibold uppercase'>Контакты</span>
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
