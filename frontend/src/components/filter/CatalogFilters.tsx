import { JSX } from 'react';

import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

const CatalogFilters = (): JSX.Element => {
  return (
    <div className="flex-[0_0_auto] flex flex-col gap-[40px] w-1/4">
      <CategoryFilter />
      <PriceFilter />
    </div>
  );
};

export default CatalogFilters;
