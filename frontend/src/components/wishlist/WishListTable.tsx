'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import { useAddToCartFromWishlist } from '@/app/hooks/useAddToCartFromWishlist';
import { RootState } from '@/store';
import { delItemFromWishlist, clearWishlist } from '@/store/slices/wishLikstItemsSlice';

import EmptyState from '../EmptyState';

const WishListTable = (): JSX.Element => {
  const dispatch = useDispatch();
  const wishListItems = useSelector((state: RootState) => state.wishlistItems.items);
  const cartItems = useSelector((state: RootState) => state.cartItems.items);
  const { handleAddProduct } = useAddToCartFromWishlist();

  const handleClearCart = (): void => {
    dispatch(clearWishlist());
  };

  const handleDelItemFromWishList = (productId: string): void => {
    dispatch(delItemFromWishlist(productId));
  };

  const isInCart = (productId: string): boolean => {
    return cartItems.some((item) => item.id === productId);
  };

  if (wishListItems.length === 0) {
    return (
      <EmptyState
        title="В избранном пока ничего нет"
        subtitle="Добавьте товары из каталога"
        linkText="Перейти в каталог"
        linkUrl="/catalog"
      />
    );
  }

  return (
    <table className="mb-[30px]">
      <thead className="table-header-group bg-[#F7F7F7]">
        <tr>
          <th className="min-w-[30px] py-[12px]">&nbsp;</th>
          <th className="min-w-[110px] py-[12px]">&nbsp;</th>
          <th className="w-[800px] py-[12px] text-left">Товар</th>
          <th className="w-[300px] py-[12px] text-left">Категория</th>
          <th className="w-[150px] py-[12px]">Цена</th>
          <th className="w-[350px] py-[12px]"></th>
        </tr>
      </thead>
      <tbody>
        {wishListItems.map((item) => (
          <tr className="h-[150px] [border-bottom:1px_solid_#e8e8e8]" key={item.id}>
            <td>
              <button
                className="text-[20px] hover:cursor-pointer hover:opacity-80"
                onClick={() => handleDelItemFromWishList(item.id)}
                title='Удалить товар из избранных'
              >
                <RiDeleteBinLine />
              </button>
            </td>
            <td>
              <Image
                src={'/img/webp/aside-cart-img-product.webp'}
                alt="product img"
                width={90}
                height={110}
              />
            </td>
            <td className="text-[18px] font-medium">
              <Link
                className="hover:text-[var(--theme-color)] transition-colors"
                href={`/catalog/${item.handle}/${item.id}`}
              >
                {item.title}
              </Link>
            </td>
            <td className="text-[18px] font-medium">
              <span>{item.handle}</span>
            </td>
            <td className="text-center text-[18px] font-medium">{item.price.toFixed(2)}₽</td>
            <td className="text-right text-[18px] font-medium">
              {isInCart(item.id) ? (
                <Link
                  className="inline-block w-[120px] border-[1px] border-solid text-white bg-[var(--theme-color)] text-[14px] p-[6px] text-center font-medium cursor-pointer hover:opacity-90"
                  href={'/cart'}
                >
                  В корзине
                </Link>
              ) : (
                <button
                  className="w-[120px] bg-[#8a8a8a] border-[1px] border-solid border-[#8a8a8a] text-white text-[14px] p-[6px] cursor-pointer text-center font-medium hover:opacity-90"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddProduct(item);
                  }}
                >
                  Купить
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="h-[100px]">
          <td className="text-right" colSpan={6}>
            <button
              type="button"
              className="min-w-[180px] h-[50px] font-medium border-[1px] border-solid border-[#e8e8e8] rounded-[8px] [box-shadow:none] cursor-pointer text-[#333131] hover:text-white hover:bg-[#333131] transition-colors"
              onClick={handleClearCart}
            >
              Очистить избранные
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default WishListTable;
