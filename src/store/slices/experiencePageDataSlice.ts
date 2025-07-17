import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getExperiencePageData, type ExperiencePageData } from "../../data/experiencePageData";

interface ExperiencePageDataState {
  data: ExperiencePageData | null;
  loading: boolean;
  error: string | null;
}

const initialState: ExperiencePageDataState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchExperiencePageData = createAsyncThunk(
  "experiencePageData/fetchExperiencePageData",
  async () => {
    const data = await getExperiencePageData();
    return data;
  }
);

const experiencePageDataSlice = createSlice({
  name: "experiencePageData",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperiencePageData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExperiencePageData.fulfilled, (state, action: PayloadAction<ExperiencePageData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchExperiencePageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch experience page data";
      });
  },
});

export const { clearError } = experiencePageDataSlice.actions;
export default experiencePageDataSlice.reducer;
