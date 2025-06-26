import { useDispatch } from 'react-redux';

import { delItemFromCart } from '@/store/slices/cartItemsSlice';

export const useDelToCartFromWishlist = (): any => {
  const dispatch = useDispatch();

  const handleDelProduct = (productId: string): any => {
    dispatch(delItemFromCart(productId));
  };

  return { handleDelProduct };
};
