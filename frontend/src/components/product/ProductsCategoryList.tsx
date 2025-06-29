'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { JSX, useMemo } from 'react';

import ProductsList from './ProductsList';

const ProductsCategoryList = (): JSX.Element => {
  const { category } = useParams() as { category: string };
  const searchParams = useSearchParams();

  const sortBy = searchParams.get('sortBy');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');

  const fetchUrl = useMemo(() => {
    const params = new URLSearchParams();

    params.set('handle', category);

    // Добавляем параметры, только если они есть
    if (sortBy) params.set('sortBy', sortBy);
    if (minPrice) params.set('minPrice', minPrice.toString());
    if (maxPrice) params.set('maxPrice', maxPrice.toString());

    return `http://localhost:4000/categories/products?${params.toString()}`;
  }, [category, sortBy, minPrice, maxPrice]);

  return <ProductsList fetchUrl={fetchUrl} />;
};

export default ProductsCategoryList;
