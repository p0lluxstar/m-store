import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

import { SPECIAL_OFFER } from '@/constants';

const SpecialOffer = (): JSX.Element => {
  return (
    <section className="mb-[60px]">
      <div className="flex flex-col justify-center items-center mb-[60px]">
        <h2 className="text-xl font-bold mb-2 text-[42px] text-center">Акции и скидки</h2>
        <p className="text-gray-600 text-[22px] text-center">
          Специальные предложения, скидки и эксклюзивные бонусы
        </p>
      </div>
      <div className="flex gap-[30px] max-[800px]:flex-col-reverse">
        <div>
          <Link href={SPECIAL_OFFER.link}>
            <Image
              className="max-[800px]:w-[100%]"
              src={SPECIAL_OFFER.imgsUrl[0] || '/img/webp/special-offer-1.webp'}
              alt=""
              width={570}
              height={700}
            ></Image>
          </Link>
        </div>
        <div>
          <div className="mb-[40px]">
            <Link href={SPECIAL_OFFER.link}>
              <Image
                className="max-[800px]:w-[100%]"
                src={SPECIAL_OFFER.imgsUrl[1] || '/img/webp/special-offer-2.webp'}
                alt=""
                width={570}
                height={350}
              ></Image>
            </Link>
          </div>
          <div className="ml-[40px] max-[800px]:ml-[0px]">
            <h2 className="text-[50px] font-bold mb-[10px]">{SPECIAL_OFFER.title}</h2>
            <p className="text-[20px] mb-[30px] uppercase text-[#595858]">
              {SPECIAL_OFFER.description}
            </p>
            <Link
              className="inline-block bg-[#eb3e32] text-white px-[50px] pt-[15px] pb-[20px] text-[24px] font-bold hover:opacity-90"
              href={SPECIAL_OFFER.link}
            >
              Перейти
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
