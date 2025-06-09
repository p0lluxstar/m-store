import { JSX } from 'react';

import styles from '../../styles/components/footer/footerBottom.module.scss';

const FooterBottom = (): JSX.Element => {
  return (
    <div className={styles['footer-bottom']}>
      <div className={styles['container']}>
        <div className={styles['row']}>
          <div className="col-md-7 col-lg-6">
            <p className="copyright">
              © 2021 Shome. Made with <i className="fa fa-heart"></i> by{' '}
              <a target="_blank" href="https://themeforest.net/user/codecarnival/portfolio">
                Codecarnival.
              </a>
            </p>
          </div>
          <div className="col-md-5 col-lg-6">
            <div className="payment">
              <a href="account-login.html">
                <img
                  src="assets/img/photos/payment-card.webp"
                  width="192"
                  height="21"
                  alt="Payment Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
