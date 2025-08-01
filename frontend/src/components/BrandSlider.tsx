'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { JSX, useEffect } from 'react';

const BrandSlider = (): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  // Бренды для карусели
  const brands = [
    { id: 1, name: 'Nike', logo: '/logos/nike.svg' },
    { id: 2, name: 'Adidas', logo: '/logos/adidas.svg' },
    { id: 3, name: 'Puma', logo: '/logos/puma.svg' },
    { id: 4, name: 'Reebok', logo: '/logos/reebok.svg' },
    { id: 5, name: 'Under Armour', logo: '/logos/under-armour.svg' },
    { id: 6, name: 'New Balance', logo: '/logos/new-balance.svg' },
  ];

  // Перезапуск автовоспроизведения при изменении API
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden mb-[60px]" ref={emblaRef}>
      <div className="flex">
        {brands.map((brand) => (
          <div className="flex-[0_0_20%] min-w-0 pl-4 max-[900px]:flex-[0_0_33%]" key={brand.id}>
            <div className="flex items-center justify-center h-24 p-4 bg-white">
              <Image src={'/img/webp/brand-logo.jpg'} alt="brand-logo" width={241} height={99} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
