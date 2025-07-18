import { configureStore } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import appDataReducer from "../store/slices/appDataSlice";
import experiencePageDataReducer from "../store/slices/experiencePageDataSlice";
import homePageDataReducer from "../store/slices/homePageDataSlice";
import pageReducer from "../store/slices/pageSlice";
import projectsPageDataReducer from "../store/slices/projectsPageDataSlice";
import { ThemeProvider } from "../theme/ThemeProvider";

/**
 * Centralized test utilities for consistent testing setup across the application
 */

// Create a test store with all reducers
export const createTestStore = () => {
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

// Custom render function that includes all necessary providers
interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  store?: ReturnType<typeof createTestStore>;
}

export const renderWithProviders = (
  ui: ReactElement,
  options: CustomRenderOptions = {}
) => {
  const { store = createTestStore(), ...renderOptions } = options;

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <Provider store={store}>
        <ThemeProvider>{children}</ThemeProvider>
      </Provider>
    );
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

// Theme-only wrapper for components that don't need Redux
export const renderWithTheme = (
  ui: ReactElement,
  options: RenderOptions = {}
) => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

// Mock window.open for tests that need it
export const mockWindowOpen = () => {
  const mockOpen = jest.fn();
  Object.defineProperty(window, "open", {
    value: mockOpen,
    writable: true,
  });
  return mockOpen;
};

// Cleanup function for window.open mock
export const cleanupWindowOpen = () => {
  if (jest.isMockFunction(window.open)) {
    (window.open as jest.MockedFunction<typeof window.open>).mockClear();
  }
};

// Helper to get mock function for window.open
export const getWindowOpenMock = () => {
  return window.open as jest.MockedFunction<typeof window.open>;
};

// Common test utilities for async thunks
export const createAsyncThunkAction = (
  type: string,
  payload?: unknown,
  error?: unknown
) => {
  if (error) {
    return {
      type: `${type}/rejected`,
      error: typeof error === "string" ? { message: error } : error,
    };
  }

  if (payload !== undefined) {
    return {
      type: `${type}/fulfilled`,
      payload,
    };
  }

  return {
    type: `${type}/pending`,
  };
};

// Helper for testing slice states
export const createInitialSliceState = () => ({
  data: null,
  loading: false,
  error: null,
});

// Helper for testing error states
export const createErrorSliceState = (errorMessage: string = "Test error") => ({
  data: null,
  loading: false,
  error: errorMessage,
});

// Helper for testing loading states
export const createLoadingSliceState = () => ({
  data: null,
  loading: true,
  error: null,
});

// Helper for testing success states
export const createSuccessSliceState = (data: unknown) => ({
  data,
  loading: false,
  error: null,
});
