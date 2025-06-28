import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import { FaRegHeart } from 'react-icons/fa6';
import { GrCart } from 'react-icons/gr';
import { useSelector } from 'react-redux';

import { useAddToCartOrWishListFromProductItem } from '@/app/hooks/useAddToCartOrWishListFromProductItem';
import { useDelToCartOrWishListFromProductItem } from '@/app/hooks/useDelToCartOrWishListFromProductItem';
import { RootState } from '@/store';
import { IProduct } from '@/types';

interface IProps {
  product: IProduct;
}

const ProductItem = ({ product }: IProps): JSX.Element => {
  const cartItems = useSelector((state: RootState) => state.cartItems.items);
  const wishListItems = useSelector((state: RootState) => state.wishlistItems.items);
  const price = product.variants?.[0]?.calculated_price?.calculated_amount;
  const { handleAddProduct } = useAddToCartOrWishListFromProductItem();
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
            className={`bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors ${inWishList ? '!bg-[var(--theme-color)] text-white' : ''}`}
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
          {inCart ? (
            <Link
              href={'/cart'}
              className={`bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors ${inCart ? '!bg-red-500 text-white' : ''}`}
              title="Перейти в корзину"
            >
              <GrCart />
            </Link>
          ) : (
            <button
              className={`bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors ${inCart ? '!bg-red-500 text-white' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleAddProduct(product, 'cart');
              }}
              title="Добавить в корзину"
            >
              <GrCart />
            </button>
          )}
        </div>
      </div>
      <Link className="text-[#666]" href={`/catalog/${product.handle}`}>
        {product.tags.map((tag) => {
          return <span key={tag.value}>{tag.value}</span>;
        })}
      </Link>
      <h3>
        <Link
          className="text-[#000] text-[18px] font-bold hover:text-[var(--theme-color)] transition-colors"
          href={`/catalog/${product.handle}/${product.id}`}
        >
          {product.title}
        </Link>
      </h3>
      <p className="text-[#666] text-[20px] font-medium">{price.toFixed(2)}₽</p>
    </div>
  );
};

export default ProductItem;
