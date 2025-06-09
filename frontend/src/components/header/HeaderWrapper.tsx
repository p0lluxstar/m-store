import { JSX } from 'react';

import styles from '../../styles/components/header/headerWrapper.module.scss';

import HeaderBottom from './HeaderBottom';
import HeaderMiddle from './HeaderMiddle';
import HeaderTop from './HeaderTop';

const HeaderWrapper = (): JSX.Element => {
  return (
    <header className={`${styles['main-header-wrapper']}`}>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
};

export default HeaderWrapper;
