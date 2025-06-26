import Image from 'next/image';
import { JSX } from 'react';

const PageHeaderArea = (): JSX.Element => {
  return (
    <div>
      <Image
        className="mb-[60px]"
        src={'/img/webp/page-header-area.webp'}
        alt="page header area"
        width={1920}
        height={390}
      />
    </div>
  );
};

export default PageHeaderArea;
