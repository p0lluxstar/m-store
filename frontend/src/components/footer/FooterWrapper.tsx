import { JSX } from 'react';

import styles from '../../styles/components/footer/footerWrapper.module.scss';

import FooterMain from './FooterMain';
import FooterBottom from './FotterBottom';

const FooterWrapper = (): JSX.Element => {
  return (
    <footer className={styles['footer']}>
        <FooterMain />
        <FooterBottom />
    </footer>
  );
};

export default FooterWrapper;
