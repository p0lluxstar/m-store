'use client';
import Link from 'next/link';
import { JSX } from 'react';

import { useFetch } from '@/app/hooks/useFetch';
import { IProduct } from '@/types';

const ProductList = (): JSX.Element => {
  const { data: products, loading, error } = useFetch<IProduct[]>('http://localhost:4000/products');

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>ProductList</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product: IProduct) => (
            <li key={product.id}>
              <h3>
                <Link href={`/shop/${product.handle}/${product.id}`}>{product.title}</Link>
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

export default ProductList;
