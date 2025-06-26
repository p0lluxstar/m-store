import { JSX } from 'react';

import MainWrapper from '@/components/main/MainWrapper';
import ProductDetails from '@/components/product/ProductDetails';

const ProductPage = (): JSX.Element => {
  return (
    <MainWrapper>
      <ProductDetails />
    </MainWrapper>
  );
};

export default ProductPage;
