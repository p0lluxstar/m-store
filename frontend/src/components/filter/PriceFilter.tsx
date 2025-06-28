'use client';

import { JSX, useState } from 'react';

const MIN = 0;
const MAX = 10000;

const PriceFilter = (): JSX.Element => {
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(7000);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Math.min(Number(e.target.value), maxPrice - 100);
    setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Math.max(Number(e.target.value), minPrice + 100);
    setMaxPrice(value);
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
      <div className="relative h-8 mb-6">
        {/* Полоса фона */}
        <div className="absolute top-1/2 w-full h-1 bg-gray-300 rounded -translate-y-1/2" />
        {/* Активная полоса между значениями */}
        <div
          className="absolute top-1/2 h-1 bg-[var(--theme-color)] rounded -translate-y-1/2"
          style={{
            left: `${getPercent(minPrice)}%`,
            width: `${getPercent(maxPrice) - getPercent(minPrice)}%`,
          }}
        />
        {/* Левый ползунок */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={minPrice}
          onChange={handleMinChange}
          className="absolute w-full top-[14px] pointer-events-none appearance-none z-10"
          style={{ WebkitAppearance: 'none' }}
        />
        {/* Правый ползунок */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute w-full top-[14px] pointer-events-none appearance-none z-10"
          style={{ WebkitAppearance: 'none' }}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
