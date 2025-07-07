import { JSX } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import CatalogFilters from '@/components/filter/CatalogFilters';
import CatalogSort from '@/components/filter/CatalogSort';
import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';
import ProductsCatalog from '@/components/product/ProductsCatalog';

export const metadata = {
  title: 'Категория товаров — M-Store',
  description: 'Страница категории товаров',
};

const pageLink = [{ label: 'Каталог', href: '/catalog' }];

const CategoryProductPage = (): JSX.Element => {
  return (
    <MainWrapper>
      <PageHeaderArea />
      <Breadcrumbs pageLink={pageLink} />
      <div className="flex gap-[40px]">
        <CatalogFilters />
        <div className="w-[100%]">
          <CatalogSort />
          <ProductsCatalog />
        </div>
      </div>
    </MainWrapper>
  );
};

export default CategoryProductPage;
