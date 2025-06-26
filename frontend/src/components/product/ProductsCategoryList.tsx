'use client';

import { useParams } from 'next/navigation';
import { JSX } from 'react';

import ProductsList from './ProductsList';

const ProductsCategoryList = (): JSX.Element => {
  const { category } = useParams() as { category: string };

  return <ProductsList fetchUrl={`http://localhost:4000/categories/products?handle=${category}`} />;
};

export default ProductsCategoryList;
