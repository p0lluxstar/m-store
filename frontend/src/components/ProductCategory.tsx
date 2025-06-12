'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { JSX } from 'react';

import { useFetch } from '@/app/hooks/useFetch';
import { IProduct } from '@/types';

const ProductCategory = (): JSX.Element => {
  const { category } = useParams() as { category: string };
  const {
    data: products,
    loading,
    error,
  } = useFetch<IProduct[]>(`http://localhost:4000/categories/products?handle=${category}`);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>ProductCategories</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product: IProduct) => (
            <li key={product.id}>
              <h3>
                <Link href={`${category}/${product.id}`}>{product.title}</Link>
              </h3>
              <p>{product.description}</p>
              <p>Цена: {product.variants?.[0]?.calculated_price?.calculated_amount}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Товары не найдены</p>
      )}
    </div>
  );
};

export default ProductCategory;
