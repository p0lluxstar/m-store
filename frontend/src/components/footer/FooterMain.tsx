'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX, useState } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaVk } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { MAIN_MENU_ITEMS } from '@/constants';
import { SECONDARY_MENU_ITEMS } from '@/constants';

import styles from '../../styles/components/footer/footerMain.module.css';

const FooterMain = (): JSX.Element => {
  const [openMenus, setOpenMenus] = useState({
    mainMenu: false,
    customers: false,
    contacts: false,
  });

  const toggleMenu = (menu: keyof typeof openMenus): void => {
    if (window.innerWidth <= 700) {
      setOpenMenus((prev) => ({
        ...prev,
        [menu]: !prev[menu],
      }));
    }
  };

  return (
    <div className="py-24 text-[var(--white-ca)] px-[40px] max-[500px]:px-[20px]">
      <div className="max-w-[var(--content-max-width)] mx-auto max-[1000px]:max-w-[80%]">
        <div className="grid grid-cols-4 gap-10 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1">
          <div className="widget-item">
            <div className="about-widget-wrap max-[700px]:flex flex-col justify-center items-center">
              <div className="mb-[20px]">
                <Link href="/">
                  <Image src={'/img/png/logo-bg-white.png'} alt="Logo" width={170} height={50} />
                </Link>
              </div>
              <p className="mb-[30px] text-[18px] leading-loose max-[700px]:text-center">
                Идеальный баланс функциональности и внешнего вида — для тех, кто ценит комфорт и
                детали.
              </p>
              <div className="flex gap-3">
                <Link href="/" target="_blank" rel="noopener">
                  <i className="flex justify-center items-center bg-[#5d5d5d] text-[#fff] w-[36px] h-[36px] text-[26px] rounded-[7px] hover:bg-[var(--theme-color)] transition-colors">
                    <FaVk />
                  </i>
                </Link>
                <Link href="/" target="_blank" rel="noopener">
                  <i className="flex justify-center items-center bg-[#5d5d5d] text-[#fff] w-[36px] h-[36px] text-[26px] rounded-[7px] hover:bg-[var(--theme-color)] transition-colors">
                    <BsInstagram />
                  </i>
                </Link>
              </div>
            </div>
          </div>

          {/* Главное меню */}
          <div className={styles.widgetServicesItem}>
            <h4
              className={`text-white text-[24px] mb-[20px] ${styles.widgetTitle}`}
              onClick={() => toggleMenu('mainMenu')}
            >
              Главное меню
              <span className="hidden max-[700px]:inline-block transition-transform duration-200">
                {openMenus.mainMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </h4>
            <ul className={`${styles.menuList} ${openMenus.mainMenu ? styles.open : ''}`}>
              {MAIN_MENU_ITEMS.map((item) => (
                <li key={item.name} className="max-[700px]:mb-2 last:max-[700px]:mb-0">
                  <Link href={item.url}>
                    <span className="font-semibold hover:text-[var(--theme-color)] transition-colors">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Покупателям */}
          <div className="widget-item widget-account-item">
            <h4
              className={`text-white text-[24px] mb-[20px] ${styles.widgetTitle}`}
              onClick={() => toggleMenu('customers')}
            >
              Покупателям
              <span className="hidden max-[700px]:inline-block transition-transform duration-200">
                {openMenus.customers ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </h4>
            <div className={`${styles.menuList} ${openMenus.customers ? styles.open : ''}`}>
              <ul className={`${styles.menuList} ${openMenus.mainMenu ? styles.open : ''}`}>
                {SECONDARY_MENU_ITEMS.map((item) => (
                  <li key={item.name} className="max-[700px]:mb-2 last:max-[700px]:mb-0">
                    <Link href={item.url}>
                      <span className="font-semibold hover:text-[var(--theme-color)] transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Контакты */}
          <div className="widget-item">
            <h4
              className={`text-white text-[24px] mb-[20px] ${styles.widgetTitle}`}
              onClick={() => toggleMenu('contacts')}
            >
              Контакты
              <span className="hidden max-[700px]:inline-block transition-transform duration-200">
                {openMenus.contacts ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </h4>
            <div className={`${styles.menuList} ${openMenus.contacts ? styles.open : ''}`}>
              <ul className="text-[18px] leading-loose">
                <li>
                  <span>Адрес: г. Москва</span>
                </li>
                <li>
                  <span>Телефон:</span>{' '}
                  <Link
                    className="hover:text-[var(--theme-color)] transition-colors"
                    href="tel://0123456789"
                  >
                    +00 123 456 789
                  </Link>
                </li>
                <li>
                  <span>Email:</span>{' '}
                  <Link
                    className="hover:text-[var(--theme-color)] transition-colors"
                    href="mailto://demo@example.com"
                  >
                    demo@example.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
