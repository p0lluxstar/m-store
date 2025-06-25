import { useSelector } from 'react-redux';

import { RootState } from '@/store';

export const useTotalCartItems = (): number => {
  return useSelector((state: RootState) => {
    return state.cartItems.items.reduce((total, item) => total + item.quantity, 0);
  });
};
