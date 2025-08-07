import Link from 'next/link';
import { JSX } from 'react';

import PageHeaderArea from '@/components/PageHeaderArea';

const NotFound = (): JSX.Element => {
  return (
    <>
      <PageHeaderArea title={'Ошибка 404'} />
      <div className="flex flex-col justify-center items-center py-[50px] px-[40px] max-[500px]:px-[20px]">
        <h1>404 - Страница не найдена</h1>
        <p className='text-center'>
          Попробуйте перейти на{' '}
          <Link className="underline hover:no-underline" href={'/'}>
            главную страницу
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
