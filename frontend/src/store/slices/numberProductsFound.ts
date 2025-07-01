import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface INumberProductsFound {
  quantity: number;
}

const initialState: INumberProductsFound = {
  quantity: 0,
};

const numberProductsFound = createSlice({
  name: 'numberProductsFound',
  initialState,
  reducers: {
    setNumberProductsFound(state, action: PayloadAction<number>) {
      state.quantity = action.payload;
    },
  },
});

export const { setNumberProductsFound } = numberProductsFound.actions;
export const numberProductsFoundReducer = numberProductsFound.reducer;
