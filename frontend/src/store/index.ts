import { configureStore } from '@reduxjs/toolkit';

import { cartItemsReducer } from './slices/cartItemsSlice';
import { toggleReducer } from './slices/toggleSlice';

export const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
    toggle: toggleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
