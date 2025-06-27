'use client';

import Image from 'next/image';
import { JSX } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { useAddToCartOrWishListFromProductItem } from '@/app/hooks/useAddToCartOrWishListFromProductItem';
import { useDelToCartOrWishListFromProductItem } from '@/app/hooks/useDelToCartOrWishListFromProductItem';
import { RootState } from '@/store';
import { IProduct } from '@/types';

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
        <p className="text-[30px] font-bold text-black">
          {product.variants?.[0]?.calculated_price?.calculated_amount.toFixed(2)}₽
        </p>
        <p className="[border-bottom:1px_solid_#c8c8c8] my-[20px]"></p>
        <p className="text-[18px] mb-[15px]">{product.description}</p>
        <div className="flex gap-[10px]">
          {inCart ? (
            <button
              className="w-[150px] border-[1px] border-solid border-[#8a8a8a] text-[14px] p-[6px] cursor-pointer hover:opacity-90"
              onClick={(e) => {
                e.preventDefault();
                handleDelProduct(product.id, 'cart');
              }}
            >
              Удалить из корзины
            </button>
          ) : (
            <button
              className="w-[150px] border-[1px] border-solid text-white bg-[var(--theme-color)] text-[14px] p-[6px] cursor-pointer hover:opacity-90"
              onClick={(e) => {
                e.preventDefault();
                handleAddProduct(product, 'cart');
              }}
            >
              Добавить в корзину
            </button>
          )}
          <button
            className={`bg-gray-500 p-2 rounded-[5px] text-white cursor-pointer hover:opacity-90 transition-colors ${inWishList ? '!bg-[var(--theme-color)] text-white' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              if (inWishList) {
                handleDelProduct(product.id, 'wishlist');
              } else {
                handleAddProduct(product, 'wishlist');
              }
            }}
          >
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsClient;
