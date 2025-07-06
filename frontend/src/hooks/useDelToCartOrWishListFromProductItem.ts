import { useDispatch } from 'react-redux';

import { delItemFromCart } from '@/store/slices/cartItemsSlice';
import { delItemFromWishlist } from '@/store/slices/wishLikstItemsSlice';

interface IUseDelToCartOrWishListFromProductItem {
  handleDelProduct: (productId: string, action: 'cart' | 'wishlist') => void;
}

export const useDelToCartOrWishListFromProductItem = (): IUseDelToCartOrWishListFromProductItem => {
  const dispatch = useDispatch();

  const handleDelProduct = (productId: string, action: 'cart' | 'wishlist'): void => {
    if (action === 'cart') dispatch(delItemFromCart(productId));
    if (action === 'wishlist') dispatch(delItemFromWishlist(productId));
  };

  return { handleDelProduct };
};
