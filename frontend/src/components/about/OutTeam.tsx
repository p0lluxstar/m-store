import Image from 'next/image';
import { JSX } from 'react';

const OurTeam = (): JSX.Element => {
  return (
    <section className="mb-[60px]">
      <div className="flex flex-col justify-center items-center mb-[60px]">
        <h2 className="text-xl font-bold mb-2 text-[42px] leading-none text-center">
          Наша команда
        </h2>
        <p className="text-gray-600 text-[22px] text-center">
          Мы помогаем выбрать идеальный товар для ваших приключений
        </p>
      </div>
      <div className="grid grid-cols-4 gap-[10px] max-[700px]:grid-cols-2 max-[500px]:grid-cols-1">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-[50%] mb-[20px]"
            src={'/img/webp/our-team.webp'}
            alt="out team"
            width={270}
            height={270}
          />
          <h4 className="text-black font-bold text-[18px]">Иван Иванов</h4>
          <p>Директор</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-[50%] mb-[20px]"
            src={'/img/webp/our-team.webp'}
            alt="out team"
            width={270}
            height={270}
          />
          <h4 className="text-black font-bold text-[18px]">Иван Иванов</h4>
          <p>Директор</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-[50%] mb-[20px]"
            src={'/img/webp/our-team.webp'}
            alt="out team"
            width={270}
            height={270}
          />
          <h4 className="text-black font-bold text-[18px]">Иван Иванов</h4>
          <p>Директор</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-[50%] mb-[20px]"
            src={'/img/webp/our-team.webp'}
            alt="out team"
            width={270}
            height={270}
          />
          <h4 className="text-black font-bold text-[18px]">Иван Иванов</h4>
          <p>Директор</p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
