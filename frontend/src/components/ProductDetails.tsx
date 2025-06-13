'use client';

import { useParams } from 'next/navigation';
import { JSX } from 'react';

import { useFetch } from '@/app/hooks/useFetch';

interface Product {
  id: string;
  title: string;
  description: string;
  variants?: Array<{
    prices: Array<{
      amount: number;
      currency_code: string;
    }>;
  }>;
}

const ProductDetails = (): JSX.Element => {
  const { product: productId } = useParams() as { product: string };

  const {
    data: product,
    loading,
    error,
  } = useFetch<Product[]>(`http://localhost:4000/products/${productId}`);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Цена: {product.variants?.[0]?.calculated_price?.calculated_amount}</p>
    </div>
  );
};

export default ProductDetails;
