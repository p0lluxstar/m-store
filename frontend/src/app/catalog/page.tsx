import { JSX } from 'react';

import CatalogFilters from '@/components/filter/CatalogFilters';
import CatalogSort from '@/components/filter/CatalogSort';
import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';
import ProductsCatalog from '@/components/product/ProductsCatalog';

export default function ShopPage(): JSX.Element {
  return (
    <MainWrapper>
      <PageHeaderArea />
      <div className="flex gap-[40px]">
        <CatalogFilters />
        <div className="w-[100%]">
          <CatalogSort />
          <ProductsCatalog />
        </div>
      </div>
    </MainWrapper>
  );
}
