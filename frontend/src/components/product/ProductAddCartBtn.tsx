import Link from 'next/link';
import { JSX } from 'react';

import { useAddToCartOrWishListFromProductItem } from '@/hooks/useAddToCartOrWishListFromProductItem';
import { IProduct } from '@/types';

interface IProps {
  inCart: boolean;
  product: IProduct;
}

const ProductAddCartBtn = ({ inCart, product }: IProps): JSX.Element => {
  const { handleAddProduct } = useAddToCartOrWishListFromProductItem();
  return (
    <>
      {inCart ? (
        <Link
          className="block w-[120px] border-[1px] border-solid text-white bg-[var(--theme-color)] text-[14px] p-[6px] text-center font-medium cursor-pointer hover:opacity-90"
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
    </>
  );
};

export default ProductAddCartBtn;
