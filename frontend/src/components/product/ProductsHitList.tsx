'use client';
import { JSX } from 'react';

import { useFetch } from '@/hooks/useFetch';
import { IProduct } from '@/types';

import Loader from '../Loader';

import ProductItem from './ProductItem';

interface IProps {
  fetchUrl: string;
}

const ProductsHitList = ({ fetchUrl }: IProps): JSX.Element => {
  const { data: products, loading, error } = useFetch<IProduct[] | []>(fetchUrl);

  if (loading)
    return (
      <div>
        <Loader backgroundColor="#eb3e32" />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {products.length > 0 ? (
        <div className="grid grid-cols-4 gap-10 w-[100%] max-[900px]:grid-cols-3 max-[700px]:grid-cols-2 max-[500px]:grid-cols-1">
          {products.map((product: IProduct) => {
            return (
              <div key={product.id}>
                <ProductItem product={product} isViewModeLocked={true} />
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

export default ProductsHitList;
