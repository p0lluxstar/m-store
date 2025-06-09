import { JSX } from 'react';

import styles from '../../styles/components/header/headerMiddle.module.scss';

const HeaderMiddle = (): JSX.Element => {
  return (
    <div className={styles['header-middle']}>
      <div className={styles['container']}>
        <div className={styles['row']}>
          <div className={styles['header-middle-start']}>
            <div className={styles['header-logo-area']}>
              <a href="index.html">
                <img
                  className={styles['logo-main']}
                  src="assets/img/logo.webp"
                  width="131"
                  height="34"
                  alt="Logo"
                />
              </a>
            </div>
          </div>
          <div className={styles['header-middle-center']}>
            <div className={styles['header-search-area']}>
              <form className={styles['header-searchbox']}>
                <input type="search" className="form-control" placeholder="Search" />
                <button className={styles['btn-submit']} type="submit">
                  <i className="pe-7s-search"></i>
                </button>
              </form>
            </div>
          </div>
          <div className={styles['header-middle-end']}>
            <div className={styles['header-action-area']}>
              <div className={styles['shopping-search']}>
                <button
                  className={styles['shopping-search-btn']}
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#AsideOffcanvasSearch"
                  aria-controls="AsideOffcanvasSearch"
                >
                  <i className="pe-7s-search icon"></i>
                </button>
              </div>
              <div className={styles['shopping-wishlist']}>
                <a className={styles['shopping-wishlist-btn']} href="shop-wishlist.html">
                  <i className="pe-7s-like icon"></i>
                </a>
              </div>
              <div className={styles['shopping-cart']}>
                <button
                  className={styles['shopping-cart-btn']}
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#AsideOffcanvasCart"
                  aria-controls="offcanvasRightLabel"
                >
                  <i className="pe-7s-shopbag icon"></i>
                  <sup className={styles['shop-count']}>02</sup>
                </button>
              </div>
              <button
                className={styles['btn-menu']}
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#AsideOffcanvasMenu"
                aria-controls="AsideOffcanvasMenu"
              >
                <i className="pe-7s-menu"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
