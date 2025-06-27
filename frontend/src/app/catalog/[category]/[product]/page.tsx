import { Metadata } from 'next';
import { JSX } from 'react';

import MainWrapper from '@/components/main/MainWrapper';
import PageHeaderArea from '@/components/PageHeaderArea';
import ProductDetailsServer from '@/components/product/ProductDetailsServer';
import { IProduct } from '@/types';

interface IParams {
  params: { product: string };
}

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
      <ProductDetailsServer params={params} />
    </MainWrapper>
  );
};

export default ProductPage;
