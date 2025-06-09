import { JSX } from 'react';

import styles from '../../styles/components/main/mainWrapper.module.scss';
import ProductList from '../ProductList';

const MainWrapper = (): JSX.Element => {
  return (
    <div className={styles['main']}>
      <div className={styles['container']}>
        <ProductList />
      </div>
    </div>
  );
};

export default MainWrapper;
