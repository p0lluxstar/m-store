import { createSlice } from '@reduxjs/toolkit';

interface IToggleState {
  visible: boolean;
}

const initialState: IToggleState = {
  visible: false,
};

const toggleAsideProductSearch = createSlice({
  name: 'toggleAsideMainMenu',
  initialState,
  reducers: {
    toggleVisibilityAsideProductSearch(state) {
      state.visible = !state.visible;
      document.body.style.overflow = state.visible ? 'hidden' : 'auto';
    },
    setVisibleAsideProductSearch(state, action) {
      state.visible = action.payload;
    },
  },
});

export const { toggleVisibilityAsideProductSearch, setVisibleAsideProductSearch } =
  toggleAsideProductSearch.actions;
export const toggleAsideProductSearchReducer = toggleAsideProductSearch.reducer;
