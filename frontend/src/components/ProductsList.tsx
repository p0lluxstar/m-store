'use client';
import Link from 'next/link';
import { JSX } from 'react';

import { useFetch } from '@/app/hooks/useFetch';
import { IProduct } from '@/types';
import { addToCart } from '@/utils/addToCart';

interface IProps {
  fetchUrl: string;
}

const ProductsList = ({ fetchUrl }: IProps): JSX.Element => {
  const { data: products, loading, error } = useFetch<IProduct[]>(fetchUrl);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleAddToCart = (product: IProduct): void => {
    const price = product.variants?.[0]?.calculated_price?.calculated_amount;

    if (!price) return alert('Цена недоступна');

    addToCart({
      id: product.id,
      title: product.title,
      price,
      quantity: 1,
    });

    alert('Товар добавлен в корзину!');
  };

  return (
    <div>
      <h1>ProductList</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product: IProduct) => (
            <li key={product.id}>
              <h3>
                <Link href={`/shop/${product.handle}/${product.id}`}>{product.title}</Link>
              </h3>
              <p>{product.description}</p>
              <p>Цена: {product.variants?.[0]?.calculated_price?.calculated_amount}</p>
              <button onClick={() => handleAddToCart(product)}>В корзину</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Товары не найдены</p>
      )}
    </div>
  );
};

export default ProductsList;
