import { createSlice } from '@reduxjs/toolkit';

interface IToggleState {
  visible: boolean;
}

const initialState: IToggleState = {
  visible: true,
};

const toggleAsideCartSlice = createSlice({
  name: 'toggleAsideCartSlice',
  initialState,
  reducers: {
    toggleVisibility(state) {
      state.visible = !state.visible;
    },
    setVisible(state, action) {
      state.visible = action.payload;
    },
  },
});

export const { toggleVisibility, setVisible } = toggleAsideCartSlice.actions;
export const toggleAsideCartReducer = toggleAsideCartSlice.reducer;
