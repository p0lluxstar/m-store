import { JSX } from 'react';

import MainWrapper from '@/components/main/MainWrapper';
import ProductCategory from '@/components/ProductCategory';

export const metadata = {
  title: 'Категория товаров — M-Store',
  description: 'Страница категории товаров',
};

const CategoryProductPage = (): JSX.Element => {
  return (
    <MainWrapper>
      <ProductCategory />
    </MainWrapper>
  );
};

export default CategoryProductPage;
