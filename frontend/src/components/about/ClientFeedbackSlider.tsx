'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { JSX, useCallback, useEffect } from 'react';

const ClientFeedbackSlider = (): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 60000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const feedbacks = [
    {
      id: 1,
      client: 'Петр Петров',
      text: 'Швы прочные, ткань плотная и водоотталкивающая — даже в ливень вещи внутри остались сухими. Куча карманов (даже для ноутбука и бутылки с водой), все молнии работают плавно',
      avatar: '',
    },
    {
      id: 2,
      client: 'Петр Петров',
      text: 'Швы прочные, ткань плотная и водоотталкивающая — даже в ливень вещи внутри остались сухими. Куча карманов (даже для ноутбука и бутылки с водой), все молнии работают плавно',
    },
    {
      id: 3,
      client: 'Петр Петров',
      text: 'Швы прочные, ткань плотная и водоотталкивающая — даже в ливень вещи внутри остались сухими. Куча карманов (даже для ноутбука и бутылки с водой), все молнии работают плавно',
    },
    {
      id: 4,
      client: 'Петр Петров',
      text: 'Швы прочные, ткань плотная и водоотталкивающая — даже в ливень вещи внутри остались сухими. Куча карманов (даже для ноутбука и бутылки с водой), все молнии работают плавно',
    },
    {
      id: 5,
      client: 'Петр Петров',
      text: 'Швы прочные, ткань плотная и водоотталкивающая — даже в ливень вещи внутри остались сухими. Куча карманов (даже для ноутбука и бутылки с водой), все молнии работают плавно',
    },
  ];

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
            {feedbacks.map((feedback) => (
              <div className="flex-[0_0_32%] mx-[10px]" key={feedback.id}>
                <div className="flex flex-col p-[10px] bg-[#F2F8FD] rounded-[10px]">
                  <p className="italic font-medium mb-[10px]  bg-[url('/img/webp/feedback.webp')] bg-no-repeat pl-[40px]">
                    {feedback.text}
                  </p>
                  <div className="flex gap-[10px] pl-[40px]">
                    <Image
                      src={`/img/webp/avatar.png`}
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
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={scrollPrev}
            className="bg-[#f0f0f0] p-2 rounded-full shadow-md hover:bg-gray-100 transition hover:cursor-pointer"
            aria-label="Previous slide"
          ></button>
          <button
            onClick={scrollNext}
            className="bg-[#f0f0f0] p-2 rounded-full shadow-md hover:bg-gray-100 transition hover:cursor-pointer"
            aria-label="Next slide"
          ></button>
        </div>
      </div>
    </>
  );
};

export default ClientFeedbackSlider;
