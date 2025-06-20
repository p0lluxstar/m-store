import { JSX } from 'react';

import CategoriesList from '@/components/CategoriesList';
import MainWrapper from '@/components/main/MainWrapper';
import ProductsList from '@/components/ProductsList';

export default function ShopPage(): JSX.Element {
  return (
    <MainWrapper>
      <CategoriesList />
      <ProductsList fetchUrl="http://localhost:4000/products" />
    </MainWrapper>
  );
}
