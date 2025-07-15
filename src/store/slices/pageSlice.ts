import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pages } from "../../data/appData";

interface PageState {
  currentPage: Pages;
}

const initialState: PageState = {
  currentPage: Pages.Home,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<Pages>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = pageSlice.actions;
export default pageSlice.reducer;
