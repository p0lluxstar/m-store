import { configureStore } from '@reduxjs/toolkit';

import { breadcrumbsLinksReducer } from './slices/breadcrumbsLinksSlice';
import { cartItemsReducer } from './slices/cartItemsSlice';
import { categoriesListReducer } from './slices/categoriesListSlice';
import { numberProductsFoundReducer } from './slices/numberProductsFound';
import { toggleAsideCartReducer } from './slices/toggleAsideCartSlice';
import { toggleAsideMainMenuReducer } from './slices/toggleAsideMainMenu';
import { toggleAsideProductSearchReducer } from './slices/toggleAsideProductSearch';
import { toggleViewModeReducer } from './slices/toggleViewModeSlice';
import { wishlistReducer } from './slices/wishLikstItemsSlice';

export const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
    toggleAsideCart: toggleAsideCartReducer,
    wishlistItems: wishlistReducer,
    numberProductsFound: numberProductsFoundReducer,
    breadcrumbsLinks: breadcrumbsLinksReducer,
    toggleViewMode: toggleViewModeReducer,
    categoriesList: categoriesListReducer,
    toggleAsideMainMenu: toggleAsideMainMenuReducer,
    toggleAsideProductSearch: toggleAsideProductSearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
