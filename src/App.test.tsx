import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import appDataReducer from "./store/slices/appDataSlice";
import experiencePageDataReducer from "./store/slices/experiencePageDataSlice";
import homePageDataReducer from "./store/slices/homePageDataSlice";
import pageReducer from "./store/slices/pageSlice";
import projectsPageDataReducer from "./store/slices/projectsPageDataSlice";
import { ThemeProvider } from "./theme/ThemeProvider";

// Create a test store
const createTestStore = () => {
  return configureStore({
    reducer: {
      page: pageReducer,
      appData: appDataReducer,
      homePageData: homePageDataReducer,
      experiencePageData: experiencePageDataReducer,
      projectsPageData: projectsPageDataReducer,
    },
  });
};

// Helper function to render App with providers
const renderWithProviders = (component: React.ReactElement) => {
  const store = createTestStore();
  return render(
    <Provider store={store}>
      <ThemeProvider>{component}</ThemeProvider>
    </Provider>
  );
};

test("renders App component without crashing", () => {
  renderWithProviders(<App />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
