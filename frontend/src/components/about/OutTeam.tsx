import Image from 'next/image';
import { JSX } from 'react';

const OurTeam = (): JSX.Element => {
  return (
    <section className="mb-[60px]">
      <div className="flex flex-col justify-center items-center mb-[60px]">
        <h2 className="text-xl font-bold mb-2 text-[42px]">Наша команда</h2>
        <p className="text-gray-600 text-[22px]">
          Мы помогаем выбрать идеальный товар для ваших приключений
        </p>
      </div>
      <div className="flex justify-between gap-[10px]">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="rounded-[50%] mb-[20px]"
            src={'/img/webp/our-team.webp'}
            alt="out team"
            width={270}
            height={270}
          />
          <h4 className='text-black font-bold text-[18px]'>Иван Иванов</h4>
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
          <h4 className='text-black font-bold text-[18px]'>Иван Иванов</h4>
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
          <h4 className='text-black font-bold text-[18px]'>Иван Иванов</h4>
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
          <h4 className='text-black font-bold text-[18px]'>Иван Иванов</h4>
          <p>Директор</p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
