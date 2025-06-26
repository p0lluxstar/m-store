import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICartItem } from '@/types';

interface IWishLisItemsState {
  items: ICartItem[];
}

const initialState: IWishLisItemsState = {
  items:
    typeof window !== 'undefined' && localStorage.getItem('wishlist')
      ? JSON.parse(localStorage.getItem('wishlist') as string)
      : [],
};

const wishlistItemsSlice = createSlice({
  name: 'wishlistItemsSlice',
  initialState,
  reducers: {
    setWishlistItems(state, action: PayloadAction<ICartItem[]>) {
      state.items = action.payload;
    },

    addItemToWishlist(state, action: PayloadAction<ICartItem>) {
      state.items.push(action.payload);
      localStorage.setItem('wishlist', JSON.stringify(state.items));
    },

    delItemFromWishlist(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);

      localStorage.setItem('wishlist', JSON.stringify(state.items));
    },

    clearWishlist(state) {
      state.items = [];
      localStorage.removeItem('wishlist');
    },
  },
});

export const {
  setWishlistItems,
  addItemToWishlist,
  delItemFromWishlist,
  clearWishlist,
} = wishlistItemsSlice.actions;
export const wishlistReducer = wishlistItemsSlice.reducer;
