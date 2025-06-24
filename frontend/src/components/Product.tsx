import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import { FaRegHeart } from 'react-icons/fa6';
import { GrCart } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { addItemToCart } from '@/store/slices/cartItemsSlice';
import { ICartItem, IProduct } from '@/types';

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps): JSX.Element => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cartItems.items);
  const price = product.variants?.[0]?.calculated_price?.calculated_amount;

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

    dispatch(addItemToCart(cartItem));

    // alert('Товар добавлен в корзину!');
  };

  const isInCart = (productId: string): boolean => {
    return cartItems.some((item) => item.id === productId);
  };

  const inCart = isInCart(product.id);

  return (
    <div className="relative group">
      <div className="relative">
        <Link href={`/catalog/${product.handle}/${product.id}`}>
          <Image
            className="rounded-[10px] mb-[10px] group-hover:opacity-90 transition-opacity"
            src={'/img/webp/product.webp'}
            alt="product"
            width={270}
            height={274}
          />
        </Link>
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              // Здесь добавьте логику для добавления в избранное
              console.log('Added to favorites', product.id);
            }}
            title="Добавить в избранное"
          >
            <FaRegHeart />
          </button>
          <button
            className={`bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors ${inCart ? '!bg-red-500 text-white' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart(product);
            }}
            title="Добавить в корзину"
          >
            <GrCart />
          </button>
        </div>
      </div>
      <Link className="text-[#666]" href={`/catalog/${product.handle}`}>
        {product.handle}
      </Link>
      <h3>
        <Link
          className="text-[#000] text-[18px] font-bold hover:text-[var(--theme-color)] transition-colors"
          href={`/catalog/${product.handle}/${product.id}`}
        >
          {product.title}
        </Link>
      </h3>
      <p className="text-[#666] text-[20px] font-medium">{price}₽</p>
      {/* {inCart ? (
        <span style={{ color: 'green', fontWeight: 'bold' }}>В корзине</span>
      ) : (
        <button onClick={() => handleAddToCart(product)}>В корзину</button>
      )} */}
    </div>
  );
};

export default Product;
