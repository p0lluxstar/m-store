'use client';

import { useRouter } from 'next/navigation';
import { JSX, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

const FormProductSearch = (): JSX.Element => {
  const [searchParam, setSearchParam] = useState('');

  const router = useRouter();

  const heandleProductSearch = (event: React.FormEvent): void => {
    event.preventDefault();

    if (searchParam.trim()) {
      router.push(`/catalog?searchParam=${encodeURIComponent(searchParam.trim())}`);
    }
  };

  return (
    <>
      <form className="relative">
        <input
          type="search"
          className="rounded-lg text-[#989898] text-sm h-11 leading-[2.75rem] w-96 pt-[5px] pr-[70px] pb-[5px] pl-[10px] border-2 border-solid border-[#e8e8e8] focus:outline-none max-[400px]:w-[300px]"
          placeholder="Поиск товара"
          onChange={(e) => setSearchParam(e.target.value)}
        />
        <button
          className="flex justify-center items-center w-16 bg-[var(--theme-color)] rounded-l-none rounded-r-[8px] absolute right-0 top-0 h-11 cursor-pointer hover:opacity-90"
          type="submit"
          onClick={heandleProductSearch}
        >
          <i className="text-white text-[30px]">
            <IoIosSearch />
          </i>
        </button>
      </form>
    </>
  );
};

export default FormProductSearch;
