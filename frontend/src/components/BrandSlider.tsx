'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { JSX, useEffect } from 'react';

import { BRAND_SLIDER_ITEMS } from '@/constants';

const BrandSlider = (): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  // Перезапуск автовоспроизведения при изменении API
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden mb-[60px]" ref={emblaRef}>
      <div className="flex">
        {BRAND_SLIDER_ITEMS.map((brand) => (
          <div className="flex-[0_0_20%] min-w-0 pl-4 max-[900px]:flex-[0_0_33%] max-[500px]:flex-[0_0_100%]" key={brand.id}>
            <div className="flex items-center justify-center h-24 p-4 bg-white">
              <Image
                src={brand.imgUrl || '/img/webp/brand-logo.jpg'}
                alt="brand-logo"
                width={241}
                height={99}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
