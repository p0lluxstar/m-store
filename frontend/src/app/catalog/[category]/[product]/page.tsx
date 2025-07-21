import { Metadata } from 'next';
import { JSX } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';
import ProductDetailsServer from '@/components/product/ProductDetailsServer';
import { IProduct } from '@/types';

interface IParams {
  params: { product: string };
}

const pageLink = [{ label: 'Каталог', href: '/catalog' }];

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const res = await fetch(`http://localhost:4000/products/${params.product}`);
  const product: IProduct = await res.json();

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
    },
  };
}

const ProductPage = ({ params }: IParams): JSX.Element => {
  return (
    <MainWrapper>
      <PageHeaderArea />
      <div className="mx-[auto] my-[0] px-[40px] max-[500px]:px-[20px] max-w-[1200px]">
        <Breadcrumbs pageLink={pageLink} />
        <ProductDetailsServer params={params} />
      </div>
    </MainWrapper>
  );
};

export default ProductPage;
