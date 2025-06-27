import { useDispatch } from 'react-redux';

import { delItemFromCart } from '@/store/slices/cartItemsSlice';

interface IUseDelToCartFromWishlist {
  handleDelProduct: (productId: string) => void;
}

export const useDelToCartFromWishlist = (): IUseDelToCartFromWishlist => {
  const dispatch = useDispatch();

  const handleDelProduct = (productId: string): void => {
    dispatch(delItemFromCart(productId));
  };

  return { handleDelProduct };
};
