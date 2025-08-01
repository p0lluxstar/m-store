import Link from 'next/link';
import { JSX } from 'react';
import { Suspense } from 'react';
import { RxCross2 } from 'react-icons/rx';

import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

const CatalogFilters = (): JSX.Element => {
  return (
    <div className="flex-[0_0_auto] flex flex-col w-1/4 max-[900px]:w-[100%]">
      <div className="sticky flex flex-col gap-[40px] top-[20px]">
        <CategoryFilter />
        <Suspense fallback={<div>Загрузка фильтров...</div>}>
          <PriceFilter />
        </Suspense>
        <div className="mt-[-20px] text-center">
          <Link href="/catalog" scroll={false}>
            <div className="flex justify-center items-center">
              <RxCross2 />
              Сбросить все
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatalogFilters;
