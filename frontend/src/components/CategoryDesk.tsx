import { JSX } from 'react';

import { useFetch } from '@/hooks/useFetch';
import { ICategory } from '@/types';

interface IProps {
  categoryHandle: string;
}

const CategoryDesk = ({ categoryHandle }: IProps): JSX.Element | null => {
  const url = `http://localhost:4000/categories/category?handle=${categoryHandle}`;
  const { data: category, loading, error } = useFetch<ICategory[]>(url);

  if (loading) return null;
  if (error) return <div>Error: {error}</div>;

  if (!category || !category.length || !category[0]?.description) {
    return null;
  }

  const description = category[0].description;

  return (
    <h3 className="bg-[#f5f5f5] rounded-[10px] p-[6px] text-[14px] mb-[20px]">{description}</h3>
  );
};

export default CategoryDesk;
