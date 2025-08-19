import { JSX } from 'react';

import { PRODUCT_TAGS } from '@/constants';

import ProductsHitList from './ProductsHitList';

const ProductsHitSection = (): JSX.Element => {
  return (
    <section className="flex flex-col justify-center items-center mb-[60px]">
      <div className="flex flex-col justify-center items-center mb-[60px]">
        <h2 className="text-xl font-bold mb-[15px] leading-[1] text-[42px] text-center">Рекомендуемые товары</h2>
        <p className="text-gray-600 text-[22px] text-center">
          Популярные товары, которые выбирают наши покупатели
        </p>
      </div>
      <ProductsHitList
        fetchUrl={`${process.env.NEXT_PUBLIC_API_HOST}/products/tag/${PRODUCT_TAGS.HIT.id}`}
      />
    </section>
  );
};

export default ProductsHitSection;
