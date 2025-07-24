import { useDispatch } from 'react-redux';

import { addItemToCart } from '@/store/slices/cartItemsSlice';
import { ICartItem } from '@/types';

interface IUseAddToCartFromWishlist {
  handleAddProduct: (product: ICartItem) => void;
}

export const useAddToCartFromWishlist = (): IUseAddToCartFromWishlist => {
  const dispatch = useDispatch();

  const handleAddProduct = (product: ICartItem): void => {
    const price = product.price;
    const variantId = product.variant_id;

    if (!price || !variantId) {
      alert('Цена или вариант товара недоступны');
      return;
    }

    const item: ICartItem = {
      id: product.id,
      variant_id: variantId,
      title: product.title,
      handle: product.handle,
      imagesUrl: product.imagesUrl,
      quantity: 1,
      price,
    };

    dispatch(addItemToCart(item));
  };

  return { handleAddProduct };
};
