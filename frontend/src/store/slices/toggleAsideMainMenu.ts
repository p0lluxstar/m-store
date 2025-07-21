import { createSlice } from '@reduxjs/toolkit';

interface IToggleState {
  visible: boolean;
}

const initialState: IToggleState = {
  visible: false,
};

const toggleAsideMainMenu = createSlice({
  name: 'toggleAsideMainMenu',
  initialState,
  reducers: {
    toggleVisibilityAsideMainMenu(state) {
      state.visible = !state.visible;
      document.body.style.overflow = state.visible ? 'hidden' : 'auto';
    },
    setVisibleAsideMainMenu(state, action) {
      state.visible = action.payload;
    },
  },
});

export const { toggleVisibilityAsideMainMenu, setVisibleAsideMainMenu } =
  toggleAsideMainMenu.actions;
export const toggleAsideMainMenuReducer = toggleAsideMainMenu.reducer;
