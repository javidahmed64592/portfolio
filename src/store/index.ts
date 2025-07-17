import { configureStore } from "@reduxjs/toolkit";
import appDataReducer from "./slices/appDataSlice";
import experiencePageDataReducer from "./slices/experiencePageDataSlice";
import homePageDataReducer from "./slices/homePageDataSlice";
import pageReducer from "./slices/pageSlice";
import projectsPageDataReducer from "./slices/projectsPageDataSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    appData: appDataReducer,
    homePageData: homePageDataReducer,
    experiencePageData: experiencePageDataReducer,
    projectsPageData: projectsPageDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
