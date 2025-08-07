'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { JSX, useMemo } from 'react';

import CategoryDesk from '../CategoryDesk';

import ProductsList from './ProductsList';

const ProductsCatalog = (): JSX.Element => {
  const { category } = useParams() as { category: string };
  const urlParams = useSearchParams();

  const sortBy = urlParams.get('sortBy');
  const minPrice = urlParams.get('minPrice');
  const maxPrice = urlParams.get('maxPrice');
  const searchParam = urlParams.get('searchParam');
  const tag = urlParams.getAll('tag');

  const fetchUrl = useMemo(() => {
    const params = new URLSearchParams();

    // Устанавливаем параметры, если они есть
    if (category) params.set('handle', category);
    if (sortBy) params.set('sortBy', sortBy);
    if (minPrice) params.set('minPrice', minPrice.toString());
    if (maxPrice) params.set('maxPrice', maxPrice.toString());
    if (searchParam) params.set('searchParam', searchParam);

    // Добавляем все теги (если API поддерживает `?tag=tag1&tag=tag2`)
    tag.forEach((t) => params.append('tag', t));

    // Если есть категория, используем URL с категорией, иначе общий URL
    return category
      ? `${process.env.NEXT_PUBLIC_API_HOST}/categories/products?${params.toString()}`
      : `${process.env.NEXT_PUBLIC_API_HOST}/products?${params.toString()}`;
  }, [category, sortBy, minPrice, maxPrice, searchParam, tag]);

  return (
    <>
      <CategoryDesk categoryHandle={category} />
      {searchParam && (
        <p className="bg-[#f5f5f5] rounded-[10px] p-[6px] text-[14px] mb-[20px]">
          Результаты поиска: <span>{searchParam}</span>
        </p>
      )}
      <ProductsList fetchUrl={fetchUrl} />
    </>
  );
};

export default ProductsCatalog;
