import { JSX } from 'react';

import MainWrapper from '@/components/main/MainWrapper';
import ProductsCategoryList from '@/components/ProductsCategoryList';

export const metadata = {
  title: 'Категория товаров — M-Store',
  description: 'Страница категории товаров',
};

const CategoryProductPage = (): JSX.Element => {
  return (
    <MainWrapper>
      <ProductsCategoryList />
    </MainWrapper>
  );
};

export default CategoryProductPage;
