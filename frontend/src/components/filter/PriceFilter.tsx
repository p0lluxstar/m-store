'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { JSX, useEffect, useState } from 'react';

const MIN = 0;
const MAX = 10000;

const PriceFilter = (): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();
  const urlParams = useSearchParams();

  // Получаем текущие параметры из URL
  const currentMinPrice = Number(urlParams.get('minPrice')) || MIN;
  const currentMaxPrice = Number(urlParams.get('maxPrice')) || MAX;

  // Инициализируем состояние текущими значениями из URL
  const [minPrice, setMinPrice] = useState(currentMinPrice);
  const [maxPrice, setMaxPrice] = useState(currentMaxPrice);

  // Эффект для синхронизации состояния при изменении URL
  useEffect(() => {
    setMinPrice(currentMinPrice);
    setMaxPrice(currentMaxPrice);
  }, [currentMinPrice, currentMaxPrice]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Math.min(Number(e.target.value), maxPrice - 100);
    setMinPrice(value);
    updateUrlParams(value, maxPrice);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Math.max(Number(e.target.value), minPrice + 100);
    setMaxPrice(value);
    updateUrlParams(minPrice, value);
  };

  const updateUrlParams = (min: number, max: number): void => {
    const params = new URLSearchParams(urlParams.toString());
    params.set('minPrice', min.toString());
    params.set('maxPrice', max.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const getPercent = (value: number): number => Math.round(((value - MIN) / (MAX - MIN)) * 100);

  return (
    <div className="border-[2px] border-solid border-[#e1e1e1] px-[40px] py-[30px] rounded-[15px]">
      <h3 className="text-[#535353] text-[22px] font-medium [border-bottom:2px_solid_#e1e1e1] pb-[15px] mb-[15px]">
        Фильтр по цене
      </h3>
      <div className="flex justify-between text-sm text-gray-700">
        <span>
          <strong>{minPrice} ₽</strong>
        </span>
        <span>
          <strong>{maxPrice} ₽</strong>
        </span>
      </div>
      <div className="relative h-8">
        <div className="absolute top-1/2 w-full h-1 bg-gray-300 rounded -translate-y-1/2" />
        <div
          className="absolute top-1/2 h-1 bg-[var(--theme-color)] rounded -translate-y-1/2"
          style={{
            left: `${getPercent(minPrice)}%`,
            width: `${getPercent(maxPrice) - getPercent(minPrice)}%`,
          }}
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={minPrice}
          onChange={handleMinChange}
          className="absolute w-full top-[14px] pointer-events-none appearance-none z-10"
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute w-full top-[14px] pointer-events-none appearance-none z-10"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
