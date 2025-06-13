import { JSX } from 'react';

import MainWrapper from '@/components/main/MainWrapper';
import ProductsList from '@/components/ProductsList';

export default function HomePage(): JSX.Element {
  return (
    <MainWrapper>
      <ProductsList fetchUrl="http://localhost:4000/products" />
    </MainWrapper>
  );
}
