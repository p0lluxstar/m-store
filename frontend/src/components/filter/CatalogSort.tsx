'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { JSX } from 'react';
import { FaTableList } from 'react-icons/fa6';
import { FaTableCells } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { toggleViewMode } from '@/store/slices/toggleViewModeSlice';
import { EViewMode } from '@/types';

const CatalogSort = (): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const numberProductsFound = useSelector((state: RootState) => state.numberProductsFound.quantity);
  const currentViewMode = useSelector((state: RootState) => state.toggleViewMode.mode);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selected = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    params.set('sortBy', selected);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleViweModeChange = (): void => {
    dispatch(toggleViewMode());
  };

  return (
    <div className="flex justify-between items-center border-[2px] border-solid border-[#e1e1e1] mb-[40px] rounded-[5px] px-[30px] py-[10px]">
      <div>
        <p className="font-medium text-[#6c6c6c]">
          <span>Товаров найдено:</span>
          <span className="text-[18px] text-[var(--theme-color)] ml-[5px]">
            {numberProductsFound}
          </span>
        </p>
      </div>
      <div className="flex gap-[8px] text-[22px] ">
        <button
          className={`${currentViewMode === EViewMode.Table ? 'text-[var(--theme-color)]' : 'text-[#c1c1c1] cursor-pointer'}`}
          onClick={handleViweModeChange}
          disabled={currentViewMode === EViewMode.Table}
        >
          <FaTableCells />
        </button>
        <button
          className={`${currentViewMode === 'list' ? 'text-[var(--theme-color)]' : 'text-[#c1c1c1] cursor-pointer'}`}
          onClick={handleViweModeChange}
          disabled={currentViewMode === EViewMode.List}
        >
          <FaTableList />
        </button>
      </div>
      <div className="flex gap-2 items-center font-medium text-[#6c6c6c]">
        <span>Сортировка:</span>
        <select
          onChange={handleSortChange}
          className="border-[1px] border-solid border-[#ccc] p-1 rounded text-black focus:border-[1px] focus:border-solid focus:border-[#ccc]"
        >
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
