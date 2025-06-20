import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICartItem } from '@/types';
import { addToCartLS } from '@/utils/addToCartLS';

interface ICartItemsState {
  items: ICartItem[];
}

const initialState: ICartItemsState = {
  items:
    typeof window !== 'undefined' && localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart') as string)
      : [],
};

const cartItemsSlice = createSlice({
  name: 'cartItemsSlice',
  initialState,
  reducers: {
    setCartItems(state, action: PayloadAction<ICartItem[]>) {
      state.items = action.payload;
    },
    addToCart(state, action: PayloadAction<ICartItem>) {
      state.items.push(action.payload);
      addToCartLS(action.payload);
    },
    clearCart(state) {
      state.items = [];
      localStorage.removeItem('cart');
    },
  },
});

export const { setCartItems, addToCart, clearCart } = cartItemsSlice.actions;
export const cartItemsReducer = cartItemsSlice.reducer;
