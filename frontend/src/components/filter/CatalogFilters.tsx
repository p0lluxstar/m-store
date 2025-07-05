import Link from 'next/link';
import { JSX } from 'react';
import { RxCross2 } from 'react-icons/rx';

import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';


const CatalogFilters = (): JSX.Element => {
  return (
    <div className="flex-[0_0_auto] flex flex-col gap-[40px] w-1/4">
      <CategoryFilter />
      <PriceFilter />
      <div className="mt-[-20px] text-center">
        <Link href="/catalog" scroll={false}>
          <div className='flex justify-center items-center'>
            <RxCross2 />
            Сбросить все
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CatalogFilters;
