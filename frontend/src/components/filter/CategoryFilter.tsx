'use client';

import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { JSX } from 'react';

import { useLoadCategories } from '@/hooks/useLoadCategories';
import { ICategory } from '@/types';

import Loader from '../Loader';

const CategoryFilter = (): JSX.Element => {
  const params = useParams();
  const categorySlug = params?.category;
  const { loading, error, categories } = useLoadCategories();
  const urlParams = useSearchParams();
  const searchParam = urlParams.get('searchParam');

  return (
    <div className="border-[2px] border-solid border-[#e1e1e1] px-[40px] py-[30px] rounded-[15px] max-[1000px]:px-[20px] max-[1000px]:py-[15px]">
      <h3 className="text-[#535353] text-[22px] font-medium [border-bottom:2px_solid_#e1e1e1] pb-[15px] mb-[15px]">
        Бренд
      </h3>
      {loading ? (
        <Loader backgroundColor="#eb3e32" />
      ) : (
        <>
          {categories.length > 0 ? (
            <ul>
              <li className="mb-[5px] text-[18px] font-medium text-[#8a8a8a] hover:text-[#555]">
                <Link
                  href={`/catalog`}
                  scroll={false}
                  className={`${!searchParam && !params.category ? 'font-medium text-[#000] pointer-events-none' : ''}`}
                >
                  Все
                </Link>
              </li>
              {categories.map((category: ICategory) => (
                <li
                  className="mb-[5px] text-[18px] font-medium text-[#8a8a8a] hover:text-[#555]"
                  key={category.id}
                >
                  <Link
                    href={`/catalog/${category.handle}`}
                    scroll={false}
                    className={`${category.handle === categorySlug ? 'font-medium text-[#000] pointer-events-none' : ''}`}
                    onClick={(e) => {
                      if (category.handle === categorySlug) {
                        e.preventDefault(); // Блокируем переход
                      }
                    }}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>Категории не найдены</p>
          )}
        </>
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default CategoryFilter;
