'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { JSX, useEffect, useRef, useState } from 'react';

import { PRICE_FILTER_VALUE } from '@/constants';

const PriceFilter = (): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();
  const urlParams = useSearchParams();

  // Получаем текущие параметры из URL
  const currentMinPrice = Number(urlParams.get('minPrice')) || PRICE_FILTER_VALUE.min;
  const currentMaxPrice = Number(urlParams.get('maxPrice')) || PRICE_FILTER_VALUE.max;

  // Инициализируем состояние текущими значениями из URL
  const [minPrice, setMinPrice] = useState(currentMinPrice);
  const [maxPrice, setMaxPrice] = useState(currentMaxPrice);

  // Refs для хранения таймеров
  const minTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const maxTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Эффект для синхронизации состояния при изменении URL
  useEffect(() => {
    setMinPrice(currentMinPrice);
    setMaxPrice(currentMaxPrice);
  }, [currentMinPrice, currentMaxPrice]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Math.min(Number(e.target.value), maxPrice - 100);
    setMinPrice(value);

    // Очищаем предыдущий таймер
    if (minTimeoutRef.current) {
      clearTimeout(minTimeoutRef.current);
    }

    // Устанавливаем новый таймер
    minTimeoutRef.current = setTimeout(() => {
      updateUrlParams(value, maxPrice);
    }, 400);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Math.max(Number(e.target.value), minPrice + 100);
    setMaxPrice(value);

    // Очищаем предыдущий таймер
    if (maxTimeoutRef.current) {
      clearTimeout(maxTimeoutRef.current);
    }

    // Устанавливаем новый таймер
    maxTimeoutRef.current = setTimeout(() => {
      updateUrlParams(minPrice, value);
    }, 400);
  };

  const updateUrlParams = (min: number, max: number): void => {
    const params = new URLSearchParams(urlParams.toString());
    params.set('minPrice', min.toString());
    params.set('maxPrice', max.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const getPercent = (value: number): number =>
    Math.round(
      ((value - PRICE_FILTER_VALUE.min) / (PRICE_FILTER_VALUE.max - PRICE_FILTER_VALUE.min)) * 100
    );

  return (
    <div className="border-[2px] border-solid border-[#e1e1e1] px-[40px] py-[30px] rounded-[15px] max-[1000px]:px-[20px] max-[1000px]:py-[15px]">
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
          min={PRICE_FILTER_VALUE.min}
          max={PRICE_FILTER_VALUE.max}
          value={minPrice}
          onChange={handleMinChange}
          className="absolute w-full top-[14px] pointer-events-none appearance-none z-10"
        />
        <input
          type="range"
          min={PRICE_FILTER_VALUE.min}
          max={PRICE_FILTER_VALUE.max}
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute w-full top-[14px] pointer-events-none appearance-none z-10"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
