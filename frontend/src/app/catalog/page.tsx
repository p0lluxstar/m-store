import { JSX } from 'react';
import { Suspense } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import CatalogFilters from '@/components/filter/CatalogFilters';
import CatalogSort from '@/components/filter/CatalogSort';
import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';
import ProductsCatalog from '@/components/product/ProductsCatalog';
import { STORE_NAME } from '@/constants';

const title = 'Каталог';

export const metadata = {
  title: `${title} | ${STORE_NAME}`,
  description: 'Узнайте больше о нашей компании и команде.',
};

const pageLink = [{ label: title, href: '/catalog' }];

export default function ShopPage(): JSX.Element {
  return (
    <MainWrapper>
      <PageHeaderArea title={title} />
      <div className="mx-[auto] my-[0] max-w-[1200px]">
        <div className="px-[40px] max-[500px]:px-[20px]">
          <Breadcrumbs pageLink={pageLink} />
          <div className="flex gap-[40px] max-[900px]:flex-col">
            <CatalogFilters />
            <div className="w-[100%]">
              <Suspense fallback={<div>Загрузка сортировки...</div>}>
                <CatalogSort />
              </Suspense>
              <Suspense fallback={<div>Загрузка каталога...</div>}>
                <ProductsCatalog />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}
