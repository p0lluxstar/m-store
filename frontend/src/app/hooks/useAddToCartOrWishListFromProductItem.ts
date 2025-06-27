import { useDispatch } from 'react-redux';

import { addItemToCart } from '@/store/slices/cartItemsSlice';
import { addItemToWishlist } from '@/store/slices/wishLikstItemsSlice';
import { ICartItem, IProduct } from '@/types';

interface IUseAddToCartOrWishListFromProductItem {
  handleAddProduct: (product: IProduct, action: 'cart' | 'wishlist') => void;
}

export const useAddToCartOrWishListFromProductItem = (): IUseAddToCartOrWishListFromProductItem => {
  const dispatch = useDispatch();

  const handleAddProduct = (product: IProduct, action: 'cart' | 'wishlist'): void => {
    const price = product.variants?.[0]?.calculated_price?.calculated_amount;
    const variantId = product.variants?.[0]?.id;

    if (!price || !variantId) {
      alert('Цена или вариант товара недоступны');
      return;
    }

    const item: ICartItem = {
      id: product.id,
      variant_id: variantId,
      title: product.title,
      handle: product.handle,
      imagesUrl: product.images[0].url,
      quantity: 1,
      price,
    };

    if (action === 'cart') dispatch(addItemToCart(item));
    if (action === 'wishlist') dispatch(addItemToWishlist(item));
  };

  return { handleAddProduct };
};
