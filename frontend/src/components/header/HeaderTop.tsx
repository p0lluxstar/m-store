import { JSX } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import styles from '../../styles/components/header/headerTop.module.scss';

const HeaderTop = (): JSX.Element => {
  return (
    <div className="bg-gray-200 py-2.5">
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <div className="flex justify-between">
          <div className={styles['header-top-start']}>
            <div className={styles['desc']}>
              <p>Бесплатный возврат и бесплатная доставка по всей России</p>
            </div>
          </div>
          <div className={styles['header-top-end']}>
            <div className={styles['header-info-items']}>
              <div className={styles['info-items']}>
                <ul className="flex gap-2.5">
                  <li className="flex pr-[15px] relative custom-before">
                    <i className="text-[var(--theme-color)] pr-[10px]">
                      <FaPhoneAlt />
                    </i>
                    <a href="tel://0123456789">+00 123 456 789</a>
                  </li>
                  <li className='flex'>
                    <i className="text-[var(--theme-color)] pr-[10px] text-xl">
                      <MdEmail />
                    </i>
                    <a href="mailto://demo@example.com">demo@example.com</a>
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
