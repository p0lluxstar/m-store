import Image from 'next/image';
import { JSX } from 'react';

import styles from '../styles/components/serviceInfo.module.css';

const ServiceInfo = (): JSX.Element => {
  return (
    <section className="flex bg-white overflow-hidden mb-[60px] max-[700px]:flex-col">
      <div
        className="flex flex-col justify-center items-center w-1/3 p-6 group hover:bg-gray-50 transition-all [border-left:2px_solid_#e5e7eb73]
[border-bottom:2px_solid_#e5e7eb73] rounded-tl-[0] rounded-br-[0] rounded-tr-[0px] rounded-bl-[13px] max-[700px]:w-[100%] max-[700px]:border-none"
      >
        <Image
          src="/img/svg/delivery-truck.svg"
          alt="Доставка"
          width={60}
          height={60}
          className={`mb-4 group-hover:-translate-y-1 transition-transform ${styles.serviceImg}`}
        />
        <h3 className="uppercase font-bold text-lg mb-2 text-gray-800 text-center max-[700px]:text-[36px] max-[500px]:text-[30px]">
          Бесплатная доставка
        </h3>
        <p className="text-center text-gray-500 text-sm px-4 max-[700px]:text-[20px] max-[500px]:text-[18px]">
          При заказе от 2000 ₽ в пределах города
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-1/3 p-6 group hover:bg-gray-50 transition-all [border-right:2px_solid_#e5e7eb73] [border-bottom:2px_solid_#e5e7eb73] [border-left:2px_solid_#e5e7eb73] max-[700px]:w-[100%] max-[700px]:border-none">
        <Image
          src="/img/svg/money-back.svg"
          alt="Гарантия"
          width={60}
          height={60}
          className={`mb-4 group-hover:rotate-6 transition-transform ${styles.serviceImg}`}
        />
        <h3 className="uppercase font-bold text-lg mb-2 text-gray-800 text-center max-[700px]:text-[36px] max-[500px]:text-[30px]">
          Возврат денег
        </h3>
        <p className="text-center text-gray-500 text-sm px-4 max-[700px]:text-[20px]">
          Полный возврат в течение 14 дней
        </p>
      </div>
      <div
        className="flex flex-col justify-center items-center w-1/3 p-6 group hover:bg-gray-50 transition-all [border-right:2px_solid_#e5e7eb73]
[border-bottom:2px_solid_#e5e7eb73] rounded-tl-[0] rounded-br-[13px] rounded-tr-[0px] max-[700px]:w-[100%] max-[700px]:border-none"
      >
        <Image
          src="/img/svg/24-hours-help.svg"
          alt="Поддержка"
          width={60}
          height={60}
          className={`mb-4 group-hover:scale-105 transition-transform ${styles.serviceImg}`}
        />
        <h3 className="uppercase font-bold text-lg mb-2 text-gray-800 text-center max-[700px]:text-[36px] max-[500px]:text-[30px]">
          Поддержка 24/7
        </h3>
        <p className="text-center text-gray-500 text-sm px-4 max-[700px]:text-[20px]">
          Помощь по телефону, чату и email
        </p>
      </div>
    </section>
  );
};

export default ServiceInfo;
