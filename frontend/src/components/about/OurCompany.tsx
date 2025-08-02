import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

import { OUR_COMPANY } from '@/constants';

const OurCompany = (): JSX.Element => {
  return (
    <div className="flex gap-[20px] mb-[60px] max-[900px]:flex-col">
      <div className="w-[50%] max-[900px]:w-full overflow-hidden rounded-[здесь_нужный_радиус]">
        <Image
          className="w-full h-auto object-contain"
          src={OUR_COMPANY.imgUrl || '/img/webp/our-company.webp'}
          alt="our company"
          width={570}
          height={368}
        />
      </div>
      <div className="flex-col w-[50%] max-[900px]:w-full">
        <h4 className="text-[#444141] font-bold text-[60px] mb-[20px] leading-none">
          Наша компания
        </h4>
        <p className="text-[#3a3a3a] text-[20px] mb-[20px]">{OUR_COMPANY.description}</p>
        <Link
          className="inline-block bg-[#eb3e32] text-white px-[50px] pt-[15px] pb-[20px] text-[24px] font-bold hover:opacity-90"
          href={'/contact'}
        >
          Контакты
        </Link>
      </div>
    </div>
  );
};

export default OurCompany;
