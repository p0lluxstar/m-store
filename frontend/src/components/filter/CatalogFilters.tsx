import Link from 'next/link';
import { JSX } from 'react';
import { Suspense } from 'react';
import { RxCross2 } from 'react-icons/rx';

import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import TagFilter from './TagFilter';

const CatalogFilters = (): JSX.Element => {
  return (
    <div className="flex-[0_0_auto] flex flex-col w-1/4 max-[900px]:w-[100%]">
      <div className="flex flex-col gap-[40px] top-[20px]">
        <Suspense fallback={<div>Загрузка брэндов...</div>}>
          <CategoryFilter />
        </Suspense>
        <Suspense fallback={<div>Загрузка фильтров...</div>}>
          <PriceFilter />
          <TagFilter />
        </Suspense>
        <div className="mt-[-20px] text-center">
          <Link href="/catalog" scroll={false}>
            <div className="flex justify-center items-center">
              <RxCross2 />
              Сбросить фильтры
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatalogFilters;
