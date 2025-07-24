import { JSX } from 'react';

import { IProduct } from '@/types';

import ProductDetailsClient from './ProductDetailsClient';

interface IParams {
  params: Promise<{ product: string }>;
}

export default async function ProductDetailsServer({ params }: IParams): Promise<JSX.Element> {
  const { product } = await params;
  const res = await fetch(`http://localhost:4000/products/${product}`);
  const productData: IProduct = await res.json();

  return <ProductDetailsClient product={productData} />;
}
