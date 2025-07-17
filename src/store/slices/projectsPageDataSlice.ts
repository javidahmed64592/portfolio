import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getProjectsPageData, type ProjectsPageData } from "../../data/projectsPageData";

interface ProjectsPageDataState {
  data: ProjectsPageData | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProjectsPageDataState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchProjectsPageData = createAsyncThunk(
  "projectsPageData/fetchProjectsPageData",
  async () => {
    const data = await getProjectsPageData();
    return data;
  }
);

const projectsPageDataSlice = createSlice({
  name: "projectsPageData",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectsPageData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectsPageData.fulfilled, (state, action: PayloadAction<ProjectsPageData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProjectsPageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch projects page data";
      });
  },
});

export const { clearError } = projectsPageDataSlice.actions;
export default projectsPageDataSlice.reducer;
