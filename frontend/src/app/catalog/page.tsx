import { JSX } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import CatalogFilters from '@/components/filter/CatalogFilters';
import CatalogSort from '@/components/filter/CatalogSort';
import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';
import ProductsCatalog from '@/components/product/ProductsCatalog';

export const metadata = {
  title: 'Каталог — M-Store',
  description: 'Узнайте больше о нашей компании и команде.',
};

const pageLink = [{ label: 'Каталог', href: '/catalog' }];

export default function ShopPage(): JSX.Element {
  return (
    <MainWrapper>
      <PageHeaderArea />
      <div className="mx-[auto] my-[0] px-[40px] max-[500px]:px-[20px] max-w-[1200px]">
        <Breadcrumbs pageLink={pageLink} />
        <div className="flex gap-[40px] max-[900px]:flex-col">
          <CatalogFilters />
          <div className="w-[100%]">
            <CatalogSort />
            <ProductsCatalog />
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}
