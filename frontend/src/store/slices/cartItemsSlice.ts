import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICartItem } from '@/types';

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

    addItemToCart(state, action: PayloadAction<ICartItem>) {
      const itemExists = state.items.some((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.items.push(action.payload);
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },

    delItemFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    decQuantityItem(state, action: PayloadAction<string>) {
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload && item.quantity) {
          // Уменьшаем quantity на 1, но не ниже 0
          const newQuantity = Math.max((item.quantity || 1) - 1, 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      state.items = updatedItems;
      localStorage.setItem('cart', JSON.stringify(updatedItems));
    },

    incQuantityItem(state, action: PayloadAction<string>) {
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload && item.quantity) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      state.items = updatedItems;
      localStorage.setItem('cart', JSON.stringify(updatedItems));
    },

    clearCart(state) {
      state.items = [];
      localStorage.removeItem('cart');
    },
  },
});

export const {
  setCartItems,
  addItemToCart,
  delItemFromCart,
  clearCart,
  decQuantityItem,
  incQuantityItem,
} = cartItemsSlice.actions;
export const cartItemsReducer = cartItemsSlice.reducer;
