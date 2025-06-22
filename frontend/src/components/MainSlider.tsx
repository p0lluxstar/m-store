'use client';

import useEmblaCarousel from 'embla-carousel-react';
import React, { JSX, useCallback } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FiChevronLeft } from 'react-icons/fi';

const MainSlider = (): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const slides = [
    {
      id: 1,
      imgUrl: '/img/webp/main-slider/1.webp',
      text: 'Слайд 1',
    },
    {
      id: 2,
      imgUrl: '/img/webp/main-slider/1.webp',
      text: 'Слайд 2',
    },
    {
      id: 3,
      imgUrl: '/img/webp/main-slider/1.webp',
      text: 'Слайд 3',
    },
  ];

  return (
    <div className="w-full mx-auto relative mb-[60px]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div
              className=" flex-[0_0_100%] w-[1920px] h-[500px] flex items-center justify-center bg-[url('/img/webp/main-slider/1.webp')] text-3xl font-bold"
              key={slide.id}
            >
              <p>{slide.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 absolute right-[20px] bottom-[20px]">
        <button
          onClick={scrollPrev}
          className="flex items-center justify-center border-[1px] border-solid border-[#fff] rounded-[50%] w-[40px] h-[40px] text-[white] !text-[22px] cursor-pointer hover:opacity-90"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={scrollNext}
          className="flex items-center justify-center border-[1px] border-solid border-[#fff] rounded-[50%] w-[40px] h-[40px] text-[white] !text-[22px] cursor-pointer hover:opacity-90"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MainSlider;
