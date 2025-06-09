import { JSX } from 'react';

import styles from '../styles/components/mainMenu.module.scss';

const MainMenu = (): JSX.Element => {
  return (
    <ul className={styles['main-menu-list']}>
      <li className={styles['main-menu-item']}>
        <a className={styles['main-menu-link']} href="#/">
          <span>Home</span>
        </a>
      </li>
      <li>
        <a className={styles['main-menu-link']} href="about-us.html">
          <span>About</span>
        </a>
      </li>
      <li className={styles['main-menu-item']}>
        <a className={styles['main-menu-link']} href="#/">
          <span>Shop</span>
        </a>
      </li>
      <li>
        <a className={styles['main-menu-link']} href="contact.html">
          <span>Contact</span>
        </a>
      </li>
    </ul>
  );
};

export default MainMenu;
