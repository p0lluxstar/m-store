import { JSX } from 'react';

import BrandSlider from '@/components/BrandSlider';
import MainWrapper from '@/components/main/MainWrapper';
import MainSlider from '@/components/MainSlider';
import ProductsHitSection from '@/components/product/ProductsHitSection';
import ServiceInfo from '@/components/ServiceInfo';
import SpecialOffer from '@/components/SpecialOffer';

export default function HomePage(): JSX.Element {
  return (
    <MainWrapper>
        <MainSlider />
        <div className="mx-[auto] my-[0] max-w-[1200px]">
          <div className="px-[40px] max-[500px]:px-[20px]">
            <ServiceInfo />
            <ProductsHitSection />
            <SpecialOffer />
            <BrandSlider />
          </div>
        </div>
    </MainWrapper>
  );
}
