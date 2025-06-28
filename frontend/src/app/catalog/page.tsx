import { JSX } from 'react';

import CatalogFilters from '@/components/filter/CatalogFilters';
import CatalogSort from '@/components/filter/CatalogSort';
import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';
import ProductsList from '@/components/product/ProductsList';

export default function ShopPage(): JSX.Element {
  return (
    <MainWrapper>
      <PageHeaderArea />
      <div className="flex gap-[40px]">
        <CatalogFilters />
        <div>
          <CatalogSort />
          <ProductsList fetchUrl="http://localhost:4000/products" />
        </div>
      </div>
    </MainWrapper>
  );
}
