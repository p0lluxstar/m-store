import Image from 'next/image';
import { JSX } from 'react';

interface IProps {
  title: string;
}

const PageHeaderArea = ({ title }: IProps): JSX.Element => {
  return (
    <div className="relative">
      <h2 className="absolute text-[60px] text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-[1000px]:text-[48px] max-[800px]:text-[36px] max-[600px]:text-[24px]">
        {title.toUpperCase()}
      </h2>
      <Image
        className="mb-[40px] w-full h-auto"
        src={'/header-page/1.jpg'}
        alt="page header area"
        width={1920}
        height={390}
      />
    </div>
  );
};

export default PageHeaderArea;
