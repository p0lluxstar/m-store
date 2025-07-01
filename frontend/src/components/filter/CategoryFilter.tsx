'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { JSX } from 'react';

import { useFetch } from '@/app/hooks/useFetch';
import { ICategory } from '@/types';

import Loader from '../Loader';

const CategoryFilter = (): JSX.Element => {
  const params = useParams();
  const categorySlug = params?.category;

  const {
    data: categories,
    loading,
    error,
  } = useFetch<ICategory[]>('http://localhost:4000/categories');

  if (loading)
    return (
      <div>
        <Loader backgroundColor="#eb3e32" />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="border-[2px] border-solid border-[#e1e1e1] px-[40px] py-[30px] rounded-[15px]">
      <h3 className="text-[#535353] text-[22px] font-medium [border-bottom:2px_solid_#e1e1e1] pb-[15px] mb-[15px]">
        Категории
      </h3>
      {categories.length > 0 ? (
        <ul>
          {categories.map((category: ICategory) => (
            <li
              className="mb-[5px] text-[18px] font-medium text-[#8a8a8a] hover:text-[#555]"
              key={category.id}
            >
              <Link
                href={`/catalog/${category.handle}`}
                className={`${category.handle === categorySlug ? 'font-medium text-[#000]' : ''}`}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Категории не найдены</p>
      )}
    </div>
  );
};

export default CategoryFilter;
