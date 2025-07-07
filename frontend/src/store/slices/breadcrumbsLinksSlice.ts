import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBreadcrumbLink {
  label: string;
  href: string;
}

interface IBreadcrumbsLinksState {
  subLinks: IBreadcrumbLink[];
}

const initialState: IBreadcrumbsLinksState = {
  subLinks: [],
};

const breadcrumbsLinksSlice = createSlice({
  name: 'breadcrumbsCartSlice',
  initialState,
  reducers: {
    setBreadcrumbsLinks(state, action: PayloadAction<IBreadcrumbLink[]>) {
      state.subLinks = action.payload;
    },
  },
});

export const { setBreadcrumbsLinks } = breadcrumbsLinksSlice.actions;
export const breadcrumbsLinksReducer = breadcrumbsLinksSlice.reducer;
