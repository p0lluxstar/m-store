'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX, useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { useAddToCartOrWishListFromProductItem } from '@/hooks/useAddToCartOrWishListFromProductItem';
import { useDelToCartOrWishListFromProductItem } from '@/hooks/useDelToCartOrWishListFromProductItem';
import { RootState } from '@/store';
import { setBreadcrumbsLinks } from '@/store/slices/breadcrumbsLinksSlice';
import { IProduct } from '@/types';

import ProductAddCartBtn from './ProductAddCartBtn';
import ProductImageSlider from './ProductImageSlider';
import ProductTags from './ProductTags';

interface Props {
  product: IProduct;
}

// Массив изображений продукта (можно заменить на данные из product.images если они есть)
// const productImages = [
//   {
//     id: '',
//     url: '/img/webp/product-item-page-big.webp',
//   },
//   { id: '', url: '/img/webp/product-item-page-small.webp' },
//   {
//     id: '',
//     url: '/img/webp/product-item-page-small.webp',
//   },
//   {
//     id: '',
//     url: '/img/webp/product-item-page-small.webp',
//   },
// ];

const ProductDetailsClient = ({ product }: Props): JSX.Element => {
  const { handleAddProduct } = useAddToCartOrWishListFromProductItem();
  const dispatch = useDispatch();

  const wishListItems = useSelector((state: RootState) => state.wishlistItems.items);
  const cartItems = useSelector((state: RootState) => state.cartItems.items);

  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { handleDelProduct } = useDelToCartOrWishListFromProductItem();

  const isInCart = (productId: string): boolean => {
    return cartItems.some((item) => item.id === productId);
  };

  const isInWishList = (productId: string): boolean => {
    return wishListItems.some((item) => item.id === productId);
  };

  const inCart = isInCart(product.id);
  const inWishList = isInWishList(product.id);

  useEffect(() => {
    if (product?.collection) {
      dispatch(
        setBreadcrumbsLinks([
          {
            label: product.collection.title,
            href: `/catalog/${product.collection.handle}`,
          },
          {
            label: product.title,
            href: product.id,
          },
        ])
      );
    }
  }, [product, dispatch]);

  const openSlider = (index: number): void => {
    setCurrentImageIndex(index);
    setIsSliderOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSlider = (): void => {
    setIsSliderOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="flex gap-[40px] relative max-[800px]:flex-col">
      {isSliderOpen && (
        <ProductImageSlider
          images={product.images}
          initialIndex={currentImageIndex}
          onClose={closeSlider}
        />
      )}

      <div className="flex flex-col gap-[20px] w-[50%] max-[800px]:w-[100%]">
        <div
          className="cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => openSlider(0)}
        >
          <Image
            className="rounded-[15px]"
            src={product.images[0]?.url || '/img/webp/product.webp'}
            alt="Main product"
            width={570}
            height={541}
            priority
          />
        </div>
        <div className="flex gap-[20px]">
          {product.images.slice(1).map((image, index) => (
            <div
              key={index}
              className="cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openSlider(index + 1)}
            >
              <Image
                className="rounded-[10px]"
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                width={127}
                height={127}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-[50%] max-[800px]:w-[100%]">
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
          <ProductAddCartBtn inCart={inCart} product={product} />
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
