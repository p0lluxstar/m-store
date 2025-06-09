import { JSX } from 'react';

import styles from '../../styles/components/header/headerBottom.module.scss';
import MainMenu from '../MainMenu';

const HeaderBottom = (): JSX.Element => {
  return (
    <div className={styles['header-bottom']}>
      <div className={styles['container']}>
        <div className={styles['row']}>
          <MainMenu />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
