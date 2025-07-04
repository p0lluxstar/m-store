import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

const OurCompany = (): JSX.Element => {
  return (
    <div className="flex gap-[20px] mb-[60px]">
      <div className="flex w-[50%]">
        <Image src={'/img/webp/our-company.webp'} alt="out company" width={570} height={368} />
      </div>
      <div className="flex-col w-[50%]">
        <h4 className="text-[#444141] font-bold text-[60px] mb-[20px]">Наша компания</h4>
        <p className="text=[#3a3a3a] text-[20px] mb-[20px]">
          Мы — команда профессионалов, объединенных стремлением создавать качественные решения для
          наших клиентов. С 2010 года мы помогаем бизнесу достигать целей, используя инновационные
          технологии и индивидуальный подход. Наши ценности: надежность, прозрачность и постоянное
          развитие. Доверьте нам ваши задачи — и мы превратим их в успех!
        </p>
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
