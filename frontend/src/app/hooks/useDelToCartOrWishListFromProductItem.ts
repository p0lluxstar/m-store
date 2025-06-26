import { useDispatch } from 'react-redux';

import { delItemFromCart } from '@/store/slices/cartItemsSlice';
import { delItemFromWishlist } from '@/store/slices/wishLikstItemsSlice';

export const useDelToCartOrWishListFromProductItem = (): any => {
  const dispatch = useDispatch();

  const handleDelProduct = (productId: string, action: 'cart' | 'wishlist'): any => {

    if (action === 'cart') dispatch(delItemFromCart(productId));
    if (action === 'wishlist') dispatch(delItemFromWishlist(productId));
  };

  return { handleDelProduct };
};
