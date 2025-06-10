import { JSX } from 'react';

import MainWrapper from '@/components/main/MainWrapper';
import ProductCategories from '@/components/ProductCategories';
import ProductList from '@/components/ProductList';

export default function ShopPage(): JSX.Element {
  return (
    <MainWrapper>
      <ProductCategories />
      <ProductList />
    </MainWrapper>
  );
}
