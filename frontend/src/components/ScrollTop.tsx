'use client';

import { JSX, useEffect, useState } from 'react';
import { TbArrowBigUpLinesFilled } from 'react-icons/tb';

const ScrollTop = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      // Проверяем, если пользователь проскроллил больше 200px тогда появляется компонент
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="fixed bottom-[1em] right-[1em] bg-transparent text-[1.8rem] [transition:transform_0.2s_ease-in-out]">
      {isVisible && (
        <button
          aria-label="Scroll up"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // что бы прокручивалось плавно
          className="cursor-pointer border-none bg-transparent p-0"
        >
          <i aria-hidden="true" className="text-[#979797] hover:opacity-90">
            <TbArrowBigUpLinesFilled />
          </i>
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
