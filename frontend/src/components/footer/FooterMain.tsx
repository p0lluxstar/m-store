import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaVk } from 'react-icons/fa';

import { MAIN_MENU_ITEMS } from '@/constants';

const FooterMain = (): JSX.Element => {
  return (
    <div className="py-24 text-[var(--white-ca)]">
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <div className="flex">
          <div className="flex-none w-1/4 px-4">
            <div className="widget-item">
              <div className="about-widget-wrap">
                <div className="mb-[20px]">
                  <Link href="/">
                    <Image src={'/img/png/logo-bg-white.png'} alt="Logo" width={170} height={50} />
                  </Link>
                </div>
                <p className="mb-[30px] text-[18px] leading-loose">
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
          </div>
          <div className="flex-none w-1/4 px-4">
            <div className="widget-item widget-services-item">
              <h4 className="text-white text-[24px] mb-[20px]">Главное меню</h4>
              <ul className='leading-loose'>
                {MAIN_MENU_ITEMS.map((item): JSX.Element => {
                  return (
                    <li key={item.name}>
                      <Link href={item.url}>
                        <span className="font-semibold hover:text-[var(--theme-color)] transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex-none w-1/4 px-4">
            <div className="widget-item widget-account-item">
              <h4 className="text-white text-[24px] mb-[20px]">Покупателям</h4>
            </div>
          </div>
          <div className="flex-none w-1/4 px-4">
            <div className="widget-item">
              <h4 className="text-white text-[24px] mb-[20px]">Контакты</h4>
              <div>
                <ul className='text-[18px] leading-loose'>
                  <li>
                    <span>Адрес: г. Москва</span>
                  </li>
                  <li>
                    <span>Телефон:</span> <Link className='hover:text-[var(--theme-color)] transition-colors' href="tel://0123456789">+00 123 456 789</Link>
                  </li>
                  <li>
                    <span>Email:</span> <Link className='hover:text-[var(--theme-color)] transition-colors' href="mailto://demo@example.com">demo@example.com</Link>
                  </li>
                  <li>
                    <Link className='hover:text-[var(--theme-color)] transition-colors' target="_blank" href="https://www.hasthemes.com">
                      demo@example.com
                    </Link>
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

export default FooterMain;
