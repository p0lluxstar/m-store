import { JSX } from 'react';

import BrandSlider from '@/components/BrandSlider';
import FeaturedItems from '@/components/FeaturedItems';
import MainWrapper from '@/components/main/MainWrapper';
import MainSlider from '@/components/MainSlider';
import ServiceInfo from '@/components/ServiceInfo';
import SpecialOffer from '@/components/SpecialOffer';

export default function HomePage(): JSX.Element {
  return (
    <MainWrapper>
      <MainSlider />
      <div className="mx-[auto] my-[0] px-[40px] max-[500px]:px-[20px] max-w-[1200px]">
        <ServiceInfo />
        <FeaturedItems />
        <SpecialOffer />
        <BrandSlider />
      </div>
    </MainWrapper>
  );
}
