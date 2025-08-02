import Image from 'next/image';
import { JSX } from 'react';

import { OUR_TEAM_ITEMS } from '@/constants';

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
        {OUR_TEAM_ITEMS.map((item, index) => (
          <div className="flex flex-col justify-center items-center" key={index}>
            <Image
              className="rounded-[50%] mb-[20px]"
              src={item.imgUrl || '/img/webp/our-team.webp'}
              alt="our team"
              width={270}
              height={270}
            />
            <h4 className="text-black font-bold text-[18px] text-center">{item.name}</h4>
            <p className='text-center'>{item.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
