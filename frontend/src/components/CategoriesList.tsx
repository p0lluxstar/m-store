'use client';

import Link from 'next/link';
import { JSX } from 'react';

import { useFetch } from '@/app/hooks/useFetch';
import { ICategory } from '@/types';


const CategoriesList = (): JSX.Element => {
  const {
    data: categories,
    loading,
    error,
  } = useFetch<ICategory[]>('http://localhost:4000/categories');

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>CategoriesList</h1>
      {categories.length > 0 ? (
        <ul>
          {categories.map((category:ICategory) => (
            <li key={category.id}>
              <Link href={`/catalog/${category.handle}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Категории не найдены</p>
      )}
    </div>
  );
};

export default CategoriesList;
