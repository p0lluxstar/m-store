'use client';
import { usePathname } from 'next/navigation';
import { JSX, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useFetch } from '@/hooks/useFetch';
import { setBreadcrumbsLinks } from '@/store/slices/breadcrumbsLinksSlice';
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

  function useUrlSegments(): string[] {
    const pathname = usePathname();
    return pathname.split('/').filter(Boolean);
  }

  const segments = useUrlSegments();

  useEffect(() => {
    if (products && products.length > 0) {
      dispatch(setNumberProductsFound(products.length));

      if (segments.length > 1) {
        dispatch(
          setBreadcrumbsLinks([
            { label: products[0].collection.title, href: products[0].collection.handle },
          ])
        );
      } else {
        dispatch(setBreadcrumbsLinks([]));
      }
    }
  }, [products, dispatch]);

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
