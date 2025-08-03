import { JSX } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import CatalogFilters from '@/components/filter/CatalogFilters';
import CatalogSort from '@/components/filter/CatalogSort';
import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';
import ProductsCatalog from '@/components/product/ProductsCatalog';
import { STORE_NAME } from '@/constants';

const title = "Каталог"

export const metadata = {
  title: `${title} | ${STORE_NAME}`,
  description: 'Страница категории товаров',
};

const pageLink = [{ label: title, href: '/catalog' }];

const CategoryProductPage = (): JSX.Element => {
  return (
    <MainWrapper>
      <PageHeaderArea title={title}/>
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
};

export default CategoryProductPage;
