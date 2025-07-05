'use client';
import { JSX } from 'react';
import { useDispatch } from 'react-redux';

import { useFetch } from '@/hooks/useFetch';
import { setNumberProductsFound } from '@/store/slices/numberProductsFound';
import { IProduct } from '@/types';

import Loader from '../Loader';

import ProductItem from './ProductItem';

interface IProps {
  fetchUrl: string;
}

const ProductsList = ({ fetchUrl }: IProps): JSX.Element => {
  const dispatch = useDispatch();
  const { data: products, loading, error } = useFetch<IProduct[]>(fetchUrl);

  if (loading)
    return (
      <div>
        <Loader backgroundColor="#eb3e32" />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  dispatch(setNumberProductsFound(products.length));

  return (
    <>
      {products.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {products.map((product: IProduct) => {
            return (
              <div key={product.id}>
                <ProductItem product={product} />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="font-medium text-center">Товары не найдены</p>
      )}
    </>
  );
};

export default ProductsList;
