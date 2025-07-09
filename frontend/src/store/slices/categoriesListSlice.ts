// store/slices/categoriesListSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICategory } from '@/types';

interface CategoriesListState {
  categories: ICategory[];
}

const initialState: CategoriesListState = {
  categories: [],
};

const categoriesListSlice = createSlice({
  name: 'categoriesListSlice',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<ICategory[]>) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesListSlice.actions;
export const categoriesListReducer = categoriesListSlice.reducer;
