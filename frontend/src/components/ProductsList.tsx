'use client';
import Link from 'next/link';
import { JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFetch } from '@/app/hooks/useFetch';
import { RootState } from '@/store';
import { addToCart } from '@/store/slices/cartItemsSlice';
import { ICartItem, IProduct } from '@/types';

interface IProps {
  fetchUrl: string;
}

const ProductsList = ({ fetchUrl }: IProps): JSX.Element => {
  const dispatch = useDispatch();
  const { data: products, loading, error } = useFetch<IProduct[]>(fetchUrl);
  const cartItems = useSelector((state: RootState) => state.cartItems.items);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleAddToCart = (product: IProduct): void => {
    const price = product.variants?.[0]?.calculated_price?.calculated_amount;
    const variantId = product.variants?.[0]?.id;

    if (!price || !variantId) {
      return alert('Цена или вариант товара недоступны');
    }

    const cartItem: ICartItem = {
      id: product.id,
      variant_id: variantId,
      title: product.title,
      handle: product.handle,
      imagesUrl: product.images[0].url,
      quantity: 1,
      price,
    };

    dispatch(addToCart(cartItem));

    // alert('Товар добавлен в корзину!');
  };

  const isInCart = (productId: string): boolean => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <div>
      <h1>ProductList</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product: IProduct) => {
            const inCart = isInCart(product.id);
            const price = product.variants?.[0]?.calculated_price?.calculated_amount;
            return (
              <li key={product.id}>
                <h3>
                  <Link href={`/catalog/${product.handle}/${product.id}`}>{product.title}</Link>
                </h3>
                <p>{product.description}</p>
                <p>Цена: {price}</p>
                {inCart ? (
                  <span style={{ color: 'green', fontWeight: 'bold' }}>В корзине</span>
                ) : (
                  <button onClick={() => handleAddToCart(product)}>В корзину</button>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Товары не найдены</p>
      )}
    </div>
  );
};

export default ProductsList;
