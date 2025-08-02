'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { JSX, useCallback, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { CLIENT_FEEDBACK_ITEMS } from '@/constants';


const ClientFeedbackSlider = (): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 60000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <>
      <div className="flex flex-col justify-center items-center mb-[60px]">
        <h2 className="text-xl font-bold mb-2 text-[42px]">Отзывы клиентов</h2>
        <p className="text-gray-600 text-[22px]">Реальные мнения тех, кто уже выбрал наши товары</p>
      </div>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {CLIENT_FEEDBACK_ITEMS.map((feedback) => (
              <div
                className="flex-[0_0_32%] mx-[10px] min-h-[220px] max-[900px]:flex-[0_0_48%] max-[600px]:flex-[0_0_100%]"
                key={feedback.id}
              >
                <div className="flex flex-col justify-between min-h-[220px] p-[10px] bg-[#F2F8FD] rounded-[10px]">
                  <p className="italic font-medium mb-[10px] bg-[url('/img/webp/feedback.webp')] bg-no-repeat pl-[40px]">
                    {feedback.text}
                  </p>
                  <div className="flex gap-[10px] pl-[40px]">
                    <Image
                      src={feedback.imgUrl || `/img/webp/avatar.png`}
                      alt="avatar"
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                    <p className="flex items-center font-bold text-[var(--theme-color)]">
                      {feedback.client}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={scrollPrev}
            className="bg-[#f0f0f0] p-[2px] text-[#cccccc] rounded-full shadow-md hover:bg-gray-100 transition hover:cursor-pointer"
            aria-label="Previous slide"
          >
            <MdChevronLeft />
          </button>
          <button
            onClick={scrollNext}
            className="bg-[#f0f0f0] p-[2px] text-[#cccccc] rounded-full shadow-md hover:bg-gray-100 transition hover:cursor-pointer"
            aria-label="Next slide"
          >
            <MdChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default ClientFeedbackSlider;
