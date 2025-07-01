import { JSX } from 'react';

import ProductsListMainPage from './product/ProductsListMainPage';

const FeaturedItems = (): JSX.Element => {
  return (
    <section className="mb-[60px]">
      <div className="flex flex-col justify-center items-center mb-[60px]">
        <h2 className="text-xl font-bold mb-2 text-[42px]">Рекомендуемые товары</h2>
        <p className="text-gray-600 text-[22px]">
          Популярные товары, которые выбирают наши покупатели
        </p>
      </div>
      <ProductsListMainPage fetchUrl="http://localhost:4000/products" />
    </section>
  );
};

export default FeaturedItems;
