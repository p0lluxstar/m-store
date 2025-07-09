import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { setCategories } from '@/store/slices/categoriesListSlice';
import { ICategory } from '@/types';

export const useLoadCategories = (): any => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categoriesList.categories);
  const [loading, setLoading] = useState(categories.length === 0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      try {
        const res = await fetch('http://localhost:4000/categories');
        if (!res.ok) throw new Error('Ошибка при загрузке категорий');
        const data: ICategory[] = await res.json();
        dispatch(setCategories(data));
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (categories.length === 0) {
      fetchCategories();
    } else {
      setLoading(false);
    }
  }, [dispatch, categories.length]);

  return { loading, error, categories };
};
