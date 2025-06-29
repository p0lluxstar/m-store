'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { JSX } from 'react';

const CatalogSort = (): JSX.Element => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selected = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    params.set('sortBy', selected);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex justify-between items-center border-[2px] border-solid border-[#e1e1e1] mb-[40px] rounded-[5px] px-[30px] py-[10px]">
      <div>
        <span>Товаров найдено:</span>
      </div>
      <div className="flex gap-2 items-center">
        <span>Сортировка:</span>
        <select onChange={handleSortChange} className="border p-1 rounded">
          <option value="title_asc">По названию (А-Я)</option>
          <option value="title_desc">По названию (Я-А)</option>
          <option value="price_asc">Сначала недорогие</option>
          <option value="price_desc">Сначала дорогие</option>
        </select>
      </div>
    </div>
  );
};

export default CatalogSort;
