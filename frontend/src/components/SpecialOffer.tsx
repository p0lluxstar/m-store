import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

import { SPECIAL_OFFER } from '@/constants';

const SpecialOffer = (): JSX.Element => {
  return (
    <section className="mb-[60px]">
      <div className="flex gap-[30px] max-[800px]:flex-col-reverse">
        <div>
          <Link href="/">
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
            <p className="text-[20px] mb-[30px] uppercase text-[#595858]">{SPECIAL_OFFER.description}</p>
            <Link
              className="inline-block bg-[#eb3e32] text-white px-[50px] pt-[15px] pb-[20px] text-[24px] font-bold hover:opacity-90"
              href="/"
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
