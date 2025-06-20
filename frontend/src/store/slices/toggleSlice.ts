import { createSlice } from '@reduxjs/toolkit';

interface IToggleState {
  visible: boolean;
}

const initialState: IToggleState = {
  visible: false,
};

const toggleSlice = createSlice({
  name: 'toggle',
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

export const { toggleVisibility, setVisible } = toggleSlice.actions;
export const toggleReducer = toggleSlice.reducer;
