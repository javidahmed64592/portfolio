import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getHomePageData, type HomePageData } from "../../data";

interface HomePageDataState {
  data: HomePageData | null;
  loading: boolean;
  error: string | null;
}

const initialState: HomePageDataState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchHomePageData = createAsyncThunk(
  "homePageData/fetchHomePageData",
  async () => {
    const data = await getHomePageData();
    return data;
  }
);

const homePageDataSlice = createSlice({
  name: "homePageData",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomePageData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomePageData.fulfilled, (state, action: PayloadAction<HomePageData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHomePageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch home page data";
      });
  },
});

export const { clearError } = homePageDataSlice.actions;
export default homePageDataSlice.reducer;
