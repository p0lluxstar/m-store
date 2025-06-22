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
      <ServiceInfo />
      <FeaturedItems />
      <SpecialOffer />
      <BrandSlider />
    </MainWrapper>
  );
}
