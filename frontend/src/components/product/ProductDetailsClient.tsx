'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { useAddToCartOrWishListFromProductItem } from '@/app/hooks/useAddToCartOrWishListFromProductItem';
import { useDelToCartOrWishListFromProductItem } from '@/app/hooks/useDelToCartOrWishListFromProductItem';
import { RootState } from '@/store';
import { IProduct } from '@/types';

import ProductTags from './ProductTags';

interface Props {
  product: IProduct;
}

const ProductDetailsClient = ({ product }: Props): JSX.Element => {
  const { handleAddProduct } = useAddToCartOrWishListFromProductItem();

  const wishListItems = useSelector((state: RootState) => state.wishlistItems.items);
  const cartItems = useSelector((state: RootState) => state.cartItems.items);

  const { handleDelProduct } = useDelToCartOrWishListFromProductItem();

  const isInCart = (productId: string): boolean => {
    return cartItems.some((item) => item.id === productId);
  };

  const isInWishList = (productId: string): boolean => {
    return wishListItems.some((item) => item.id === productId);
  };

  const inCart = isInCart(product.id);
  const inWishList = isInWishList(product.id);

  return (
    <div className="flex gap-[40px]">
      <div className="flex flex-col gap-[20px] w-[50%]">
        <div>
          <Image
            className="rounded-[15px]"
            src={'/img/webp/product-item-page-big.webp'}
            alt=""
            width={570}
            height={541}
          />
        </div>
        <div className="flex gap-[20px]">
          <Image
            className="rounded-[10px]"
            src={'/img/webp/product-item-page-small.webp'}
            alt=""
            width={127}
            height={127}
          />
          <Image
            className="rounded-[10px]"
            src={'/img/webp/product-item-page-small.webp'}
            alt=""
            width={127}
            height={127}
          />
          <Image
            className="rounded-[10px]"
            src={'/img/webp/product-item-page-small.webp'}
            alt=""
            width={127}
            height={127}
          />
        </div>
      </div>
      <div className="w-[50%]">
        <h3 className="text-[36px] font-medium text-black">{product.title}</h3>
        <div className="text-[30px] font-bold text-black">
          {product.variants?.[0]?.calculated_price?.calculated_amount.toFixed(2)}₽
        </div>
        <div className="[border-bottom:1px_solid_#c8c8c8] my-[20px]"></div>
        {product.tags.length > 0 && (
          <div className="flex gap-[10px] mb-[10px]">
            <ProductTags tags={product.tags} />
          </div>
        )}

        <div className="text-[18px] mb-[15px]">{product.description}</div>
        <div>
          <span className="font-medium">Артикул</span>: {product.id.slice(-6)}
        </div>
        <div className="mb-[20px]">
          <span className="font-medium">Категория</span>:{' '}
          <Link href={`/catalog/${product.collection.handle}`}>
            <span>{product.collection.title}</span>
          </Link>
        </div>
        <div className="flex gap-[10px]">
          {inCart ? (
            <Link
              className="w-[120px] border-[1px] border-solid text-white bg-[var(--theme-color)] text-[14px] p-[6px] text-center font-medium cursor-pointer hover:opacity-90"
              href={'/cart'}
              title="Перейти в корзину"
            >
              В корзине
            </Link>
          ) : (
            <button
              className="w-[120px] bg-[#8a8a8a] border-[1px] border-solid border-[#8a8a8a] text-white text-[14px] p-[6px] cursor-pointer text-center font-medium hover:opacity-90"
              onClick={(e) => {
                e.preventDefault();
                handleAddProduct(product, 'cart');
              }}
              title="Добавить в корзину"
            >
              Купить
            </button>
          )}
          <button
            className={`bg-[#8A8A8A] p-2 text-white cursor-pointer hover:opacity-90 transition-colors ${inWishList ? '!bg-[var(--theme-color)] text-white' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              if (inWishList) {
                handleDelProduct(product.id, 'wishlist');
              } else {
                handleAddProduct(product, 'wishlist');
              }
            }}
            title={inWishList ? 'Удалить из избранного' : 'Добавить в избранное'}
          >
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsClient;
