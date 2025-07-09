'use client';
import { usePathname } from 'next/navigation';
import { JSX, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFetch } from '@/hooks/useFetch';
import { RootState } from '@/store';
import { setBreadcrumbsLinks } from '@/store/slices/breadcrumbsLinksSlice';
import { setNumberProductsFound } from '@/store/slices/numberProductsFound';
import { IProduct } from '@/types';
import { EViewMode } from '@/types';

import styles from '../../styles/components/product/productList.module.css';
import Loader from '../Loader';

import ProductItem from './ProductItem';

interface IProps {
  fetchUrl: string;
}

const countItmes = 4;

const ProductsList = ({ fetchUrl }: IProps): JSX.Element => {
  const dispatch = useDispatch();
  const { data: products, loading, error } = useFetch<IProduct[]>(fetchUrl);
  const viewMode = useSelector((state: RootState) => state.toggleViewMode.mode);
  const [loadingMore, setLoadingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(countItmes);

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

  const handleLoadMore = (): void => {
    setLoadingMore(true);

    // Имитация задержки загрузки
    setTimeout(() => {
      setVisibleCount(visibleCount + countItmes);
      setLoadingMore(false);
    }, 500);
  };

  if (loading)
    return (
      <div>
        <Loader backgroundColor="#eb3e32" />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  // Получаем только видимые элементы
  const visibleProducts = products.slice(0, visibleCount);
  // Проверяем, есть ли еще элементы для загрузки
  const hasMoreProducts = visibleCount < products.length;

  return (
    <>
      {visibleProducts.length > 0 ? (
        <div
          className={`grid gap-4 ${viewMode === EViewMode.Table ? styles.tableMode : styles.listMode}`}
        >
          {visibleProducts.map((product: IProduct) => {
            return (
              <div
                className={`${viewMode === EViewMode.Table ? '' : styles.listItem}`}
                key={product.id}
              >
                <ProductItem product={product} />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="font-medium text-center">Товары не найдены</p>
      )}
      {hasMoreProducts && (
        <div className="flex justify-center mt-[40px]">
          <button
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="lock w-[120px] h-[50px] border-[1px] border-solid text-white bg-[#232324] text-[14px] p-[6px] text-center font-medium cursor-pointer hover:opacity-90"
          >
            {loadingMore ? <Loader backgroundColor="#ffffff" /> : 'Показать ещё'}
          </button>
        </div>
      )}
    </>
  );
};

export default ProductsList;
