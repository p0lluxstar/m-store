import Image from 'next/image';
import { JSX } from 'react';

const ServiceInfo = ():JSX.Element => {
  return (
    <section className="flex divide-x divide-gray-200 bg-white rounded-lg shadow-sm overflow-hidden mb-[60px]">
      <div className="flex flex-col justify-center items-center w-1/3 p-6 group hover:bg-gray-50 transition-all">
        <Image
          src="/img/svg/delivery-truck.svg"
          alt="Доставка"
          width={60}
          height={60}
          className="mb-4 group-hover:-translate-y-1 transition-transform"
        />
        <h3 className="uppercase font-bold text-lg mb-2 text-gray-800">Бесплатная доставка</h3>
        <p className="text-center text-gray-500 text-sm px-4">
          При заказе от 2000 ₽ в пределах города
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-1/3 p-6 group hover:bg-gray-50 transition-all">
        <Image
          src="/img/svg/money-back.svg"
          alt="Гарантия"
          width={60}
          height={60}
          className="mb-4 group-hover:rotate-6 transition-transform"
        />
        <h3 className="uppercase font-bold text-lg mb-2 text-gray-800">Возврат денег</h3>
        <p className="text-center text-gray-500 text-sm px-4">Полный возврат в течение 14 дней</p>
      </div>
      <div className="flex flex-col justify-center items-center w-1/3 p-6 group hover:bg-gray-50 transition-all">
        <Image
          src="/img/svg/24-hours-help.svg"
          alt="Поддержка"
          width={60}
          height={60}
          className="mb-4 group-hover:scale-105 transition-transform"
        />
        <h3 className="uppercase font-bold text-lg mb-2 text-gray-800">Поддержка 24/7</h3>
        <p className="text-center text-gray-500 text-sm px-4">Помощь по телефону, чату и email</p>
      </div>
    </section>
  );
};

export default ServiceInfo;
