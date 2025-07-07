import { createSlice, PayloadAction } from '@reduxjs/toolkit';

enum EViewModeProductsList {
  Table = 'table',
  List = 'list',
}

interface IViewModeState {
  mode: EViewModeProductsList;
}

const initialState: IViewModeState = {
  mode:
    typeof window !== 'undefined' && localStorage.getItem('viewMode')
      ? (localStorage.getItem('viewMode') as EViewModeProductsList)
      : EViewModeProductsList.Table,
};

if (!localStorage.getItem('viewMode')) {
  localStorage.setItem('viewMode', EViewModeProductsList.Table);
}

// Использование в Redux slice
const viewModeSlice = createSlice({
  name: 'viewMode',
  initialState,
  reducers: {
    toggleViewMode(state) {
      state.mode =
        state.mode === EViewModeProductsList.Table
          ? EViewModeProductsList.List
          : EViewModeProductsList.Table;

      // Сохраняем в localStorage
      try {
        localStorage.setItem('viewMode', state.mode);
      } catch (error) {
        console.error('Error saving viewMode to localStorage:', error);
      }
    },
    // Редьюсер для явного установления режима
    setViewMode(state, action: PayloadAction<EViewModeProductsList>) {
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
