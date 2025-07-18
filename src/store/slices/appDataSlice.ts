import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getAppData, type AppData } from "../../data";

interface AppDataState {
  data: AppData | null;
  loading: boolean;
  error: string | null;
}

const initialState: AppDataState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchAppData = createAsyncThunk(
  "appData/fetchAppData",
  async () => {
    const data = await getAppData();
    return data;
  }
);

const appDataSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAppData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAppData.fulfilled,
        (state, action: PayloadAction<AppData>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchAppData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch app data";
      });
  },
});

export const { clearError } = appDataSlice.actions;
export default appDataSlice.reducer;
