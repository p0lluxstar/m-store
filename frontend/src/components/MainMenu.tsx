'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JSX } from 'react';

import styles from '../styles/components/mainMenu.module.scss';

const MainMenu = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <ul className={styles['main-menu-list']}>
      <li className={styles['main-menu-item']}>
        <Link
          className={`${styles['main-menu-link']} ${pathname === '/' ? styles['active'] : ''}`}
          href="/"
        >
          <span>Home</span>
        </Link>
      </li>
      <li className={styles['main-menu-item']}>
        <Link
          className={`${styles['main-menu-link']} ${pathname === '/shop' ? styles['active'] : ''}`}
          href="/shop"
        >
          <span>Shop</span>
        </Link>
      </li>
      <li>
        <Link
          className={`${styles['main-menu-link']} ${pathname === '/about' ? styles['active'] : ''}`}
          href="about"
        >
          <span>About</span>
        </Link>
      </li>
      <li>
        <Link
          className={`${styles['main-menu-link']} ${pathname === '/contact' ? styles['active'] : ''}`}
          href="contact"
        >
          <span>Contact</span>
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
