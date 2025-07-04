import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

const SpecialOffer = (): JSX.Element => {
  return (
    <section className="mb-[60px]">
      <div className="flex gap-[30px]">
        <div>
          <Link href="/">
            <Image src={'/img/webp/special-offer-1.webp'} alt="" width={570} height={700}></Image>
          </Link>
        </div>
        <div>
          <div className="mb-[40px]">
            <Link href="/">
              <Image src={'/img/webp/special-offer-2.webp'} alt="" width={570} height={350}></Image>
            </Link>
          </div>
          <div className="ml-[40px]">
            <h2 className="text-[50px] font-bold mb-[10px]">Спортивные сумки</h2>
            <p className="text-[20px] mb-[30px] uppercase text-[#595858]">
              Скидка до 30% на все спортивные сумки
            </p>
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
