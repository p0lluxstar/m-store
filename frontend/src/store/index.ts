import { configureStore } from '@reduxjs/toolkit';

import { cartItemsReducer } from './slices/cartItemsSlice';
import { numberProductsFoundReducer } from './slices/numberProductsFound';
import { toggleAsideCartReducer } from './slices/toggleAsideCartSlice';
import { wishlistReducer } from './slices/wishLikstItemsSlice';

export const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
    toggle: toggleAsideCartReducer,
    wishlistItems: wishlistReducer,
    numberProductsFound: numberProductsFoundReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
