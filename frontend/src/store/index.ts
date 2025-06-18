import { configureStore } from '@reduxjs/toolkit';

import { cartItemsReducer } from './slices/cartItemsSlice';

export const store = configureStore({
  reducer: {
    cartItemCounter: cartItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
