'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { JSX, useMemo } from 'react';

import ProductsList from './ProductsList';

const ProductsCatalog = (): JSX.Element => {
  const { category } = useParams() as { category: string };
  const urlParams = useSearchParams();

  const sortBy = urlParams.get('sortBy');
  const minPrice = urlParams.get('minPrice');
  const maxPrice = urlParams.get('maxPrice');
  const searchParam = urlParams.get('searchParam');

  const fetchUrl = useMemo(() => {
    const params = new URLSearchParams();

    // Устанавливаем параметры, если они есть
    if (category) params.set('handle', category); // set() возвращает void, поэтому не нужно присваивать
    if (sortBy) params.set('sortBy', sortBy);
    if (minPrice) params.set('minPrice', minPrice.toString());
    if (maxPrice) params.set('maxPrice', maxPrice.toString());
    if (searchParam) params.set('searchParam', searchParam);

    // Если есть категория, используем URL с категорией, иначе общий URL
    return category
      ? `${process.env.NEXT_PUBLIC_API_HOST}/categories/products?${params.toString()}`
      : `${process.env.NEXT_PUBLIC_API_HOST}/products?${params.toString()}`;
  }, [category, sortBy, minPrice, maxPrice, searchParam]);

  return <ProductsList fetchUrl={fetchUrl} />;
};

export default ProductsCatalog;
