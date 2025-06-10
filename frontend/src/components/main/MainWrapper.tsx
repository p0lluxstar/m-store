import { JSX } from 'react';

import styles from '../../styles/components/main/mainWrapper.module.scss';

interface MainWrapperProps {
  children?: React.ReactNode;
}

const MainWrapper = ({ children }: MainWrapperProps): JSX.Element => {
  return (
    <main className={styles['main']}>
      <div className={styles['container']}>{children}</div>
    </main>
  );
};

export default MainWrapper;
