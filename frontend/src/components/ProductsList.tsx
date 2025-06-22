'use client';
import { JSX } from 'react';

import { useFetch } from '@/app/hooks/useFetch';
import { IProduct } from '@/types';

import Product from './Product';

interface IProps {
  fetchUrl: string;
}

const ProductsList = ({ fetchUrl }: IProps): JSX.Element => {
  const { data: products, loading, error } = useFetch<IProduct[]>(fetchUrl);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {products.length > 0 ? (
        <div className='flex gap-[30px]'>
          {products.map((product: IProduct) => {
            return (
              <div key={product.id}>
                <Product product={product} />
              </div>
            );
          })}
        </div>
      ) : (
        <p>Товары не найдены</p>
      )}
    </>
  );
};

export default ProductsList;
