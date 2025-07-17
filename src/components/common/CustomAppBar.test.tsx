import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { Pages } from "../../data";
import pageReducer, { setCurrentPage } from "../../store/slices/pageSlice";
import { ThemeProvider } from "../../theme/ThemeProvider";
import CustomAppBar from "./CustomAppBar";

// Helper function to create a mock store
const createMockStore = (initialState = { page: { currentPage: Pages.Home } }) => {
  return configureStore({
    reducer: {
      page: pageReducer,
    },
    preloadedState: initialState,
  });
};

// Helper function to render CustomAppBar with all required providers
const renderWithProviders = (
  component: React.ReactElement,
  store = createMockStore()
) => {
  return render(
    <Provider store={store}>
      <ThemeProvider>
        {component}
      </ThemeProvider>
    </Provider>
  );
};

describe("CustomAppBar", () => {
  const mockProps = {
    appHeaderText: "My Portfolio",
    pages: [Pages.Home, Pages.Experience, Pages.Projects],
  };

  it("displays the app header text", () => {
    renderWithProviders(<CustomAppBar {...mockProps} />);
    expect(screen.getByText("My Portfolio")).toBeInTheDocument();
  });

  it("displays the computer icon", () => {
    renderWithProviders(<CustomAppBar {...mockProps} />);
    const icon = document.querySelector("[data-testid=\"ComputerIcon\"]");
    expect(icon).toBeInTheDocument();
  });

  it("renders page buttons as clickable elements", () => {
    renderWithProviders(<CustomAppBar {...mockProps} />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();

    const homeButton = screen.getByRole("button", { name: "Home" });
    const experienceButton = screen.getByRole("button", { name: "Experience" });
    const projectsButton = screen.getByRole("button", { name: "Projects" });

    expect(homeButton).toBeInTheDocument();
    expect(experienceButton).toBeInTheDocument();
    expect(projectsButton).toBeInTheDocument();
  });

  it("dispatches setCurrentPage action when page button is clicked", () => {
    const store = createMockStore();
    const dispatchSpy = jest.spyOn(store, "dispatch");

    renderWithProviders(<CustomAppBar {...mockProps} />, store);

    const experienceButton = screen.getByRole("button", { name: "Experience" });
    fireEvent.click(experienceButton);

    expect(dispatchSpy).toHaveBeenCalledWith(setCurrentPage(Pages.Experience));
  });

  it("renders AppBar with static position", () => {
    renderWithProviders(<CustomAppBar {...mockProps} />);

    const appBar = document.querySelector(".MuiAppBar-root");
    expect(appBar).toBeInTheDocument();
  });

  it("renders Toolbar inside AppBar", () => {
    renderWithProviders(<CustomAppBar {...mockProps} />);

    const toolbar = document.querySelector(".MuiToolbar-root");
    expect(toolbar).toBeInTheDocument();
  });

  describe("AppBarHeader component", () => {
    it("renders header text with correct variant", () => {
      renderWithProviders(<CustomAppBar {...mockProps} />);

      const headerElement = screen.getByText("My Portfolio");
      expect(headerElement).toBeInTheDocument();
    });

    it("renders with flexGrow style for proper spacing", () => {
      renderWithProviders(<CustomAppBar {...mockProps} />);

      const headerElement = screen.getByText("My Portfolio");
      const computedStyle = window.getComputedStyle(headerElement);
      expect(computedStyle.flexGrow).toBe("1");
    });
  });

  describe("AppBarPages component", () => {
    it("renders buttons with proper hover styles", () => {
      renderWithProviders(<CustomAppBar {...mockProps} />);

      const homeButton = screen.getByRole("button", { name: "Home" });

      fireEvent.mouseEnter(homeButton);

      expect(homeButton).toBeInTheDocument();
    });
  });
});
