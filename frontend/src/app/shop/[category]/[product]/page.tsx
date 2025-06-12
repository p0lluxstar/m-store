import { JSX } from 'react';

import MainWrapper from '@/components/main/MainWrapper';
import Product from '@/components/Product';

const ProductPage = (): JSX.Element => {
  return (
    <MainWrapper>
      <Product />
    </MainWrapper>
  );
};

export default ProductPage;
