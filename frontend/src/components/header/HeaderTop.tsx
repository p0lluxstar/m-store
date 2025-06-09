import { JSX } from 'react';

import styles from '../../styles/components/header/headerTop.module.scss';

const HeaderTop = (): JSX.Element => {
  return (
    <div className={styles['header-top']}>
      <div className={styles['container']}>
        <div className={styles['row']}>
          <div className={styles['header-top-start']}>
            <div className={styles['desc']}>
              <p>World Wide Completely Free Returns and Free Shipping</p>
            </div>
          </div>
          <div className={styles['header-top-end']}>
            <div className={styles['header-info-items']}>
              <div className={styles['info-items']}>
                <ul className={styles['info-items-list']}>
                  <li className={styles['number']}>
                    <i className="fa fa-phone"></i>
                    <a href="tel://0123456789">+00 123 456 789</a>
                  </li>
                  <li className={styles['email']}>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto://demo@example.com">demo@example.com</a>
                  </li>
                  <li className={styles['account']}>
                    <i className="fa fa-user"></i>
                    <a href="account-login.html">Account</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
