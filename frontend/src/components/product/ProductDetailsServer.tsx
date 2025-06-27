import { JSX } from 'react';

import { IProduct } from '@/types';

import ProductDetailsClient from './ProductDetailsClient';

interface IProps {
  params: { product: string };
}

export default async function ProductDetailsServer({ params }: IProps): Promise<JSX.Element> {
  const res = await fetch(`http://localhost:4000/products/${params.product}`);
  const product: IProduct = await res.json();

  return <ProductDetailsClient product={product} />;
}
