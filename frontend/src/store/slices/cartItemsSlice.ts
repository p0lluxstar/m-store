import { createSlice } from '@reduxjs/toolkit';

import { ICartItem } from '@/types';

interface ICartItemsState {
  items: number;
}

function getInitialCartQuantity(): number {
  if (typeof window === 'undefined') return 0;

  try {
    const cartData = localStorage.getItem('cart');
    return cartData
      ? JSON.parse(cartData).reduce((sum: number, item: ICartItem) => sum + item.quantity, 0)
      : 0;
  } catch {
    return 0;
  }
}

const initialState: ICartItemsState = {
  items: getInitialCartQuantity(),
};

const cartItemsSlice = createSlice({
  name: 'cartItemsSlice',
  initialState,
  reducers: {
    addToCart(state) {
      state.items += 1;
      // state.items.push(action.payload);
      // localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = 0;
      // state.items = [];
      // localStorage.removeItem('cart');
    },
  },
});

export const cartItemsActions = cartItemsSlice.actions;
// export const { setCartItems, addToCartTemp } = cartItemsSlice.actions;
export const cartItemsReducer = cartItemsSlice.reducer;
