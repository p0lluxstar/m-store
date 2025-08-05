'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { JSX, useCallback } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FiChevronLeft } from 'react-icons/fi';

import { MAIN_SLIDER_ITEMS } from '@/constants';

const MainSlider = (): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="w-full mx-auto relative mb-[60px] bg-[#ccc] bg-[url('/img/jpg/main-slider-bg.jpg')]">
      <div
        className="overflow-hidden relative max-w-[1200px] flex justify-center mx-[auto] my-[0]"
        ref={emblaRef}
      >
        <div className="flex ">
          {MAIN_SLIDER_ITEMS.map((slide) => (
            <div
              className=" flex-[0_0_100%] w-[100%] h-[500px] flex items-center justify-around text-3xl font-bold max-[1100px]:justify-center max-[1100px]:gap-[50px] max-[800px]:gap-[20px] max-[700px]:flex-col"
              key={slide.id}
            >
              <div className="w-[30%] uppercase text-white max-[700px]:w-[60%] max-[400px]:w-[45%]">
                <p className="text-[50px] mb-[20px] max-[700px]:text-[32px] max-[700px]:text-center">
                  {slide.title}
                </p>
                <p className="text-[16px] font-medium max-[700px]:text-center">
                  {slide.description}
                </p>
              </div>
              <Image
                className="max-[900px]:w-[300px]"
                src={slide.imgUrl}
                alt="Слайд 1"
                width={400}
                height={400}
              />
            </div>
          ))}
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
    </div>
  );
};

export default MainSlider;
