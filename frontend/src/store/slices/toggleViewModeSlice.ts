import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EViewMode } from '@/types';

interface IViewModeState {
  mode: EViewMode;
}

const initialState: IViewModeState = {
  mode:
    typeof window !== 'undefined' && localStorage.getItem('viewMode')
      ? (localStorage.getItem('viewMode') as EViewMode)
      : EViewMode.Table,
};

// if (!localStorage.getItem('viewMode')) {
//   localStorage.setItem('viewMode', EViewMode.Table);
// }

// Использование в Redux slice
const viewModeSlice = createSlice({
  name: 'viewMode',
  initialState,
  reducers: {
    toggleViewMode(state) {
      state.mode =
        state.mode === EViewMode.Table
          ? EViewMode.List
          : EViewMode.Table;

      // Сохраняем в localStorage
      try {
        localStorage.setItem('viewMode', state.mode);
      } catch (error) {
        console.error('Error saving viewMode to localStorage:', error);
      }
    },
    // Редьюсер для явного установления режима
    setViewMode(state, action: PayloadAction<EViewMode>) {
      state.mode = action.payload;
      try {
        localStorage.setItem('viewMode', action.payload);
      } catch (error) {
        console.error('Error saving viewMode to localStorage:', error);
      }
    },
  },
});

export const { toggleViewMode } = viewModeSlice.actions;
export const toggleViewModeReducer = viewModeSlice.reducer;
