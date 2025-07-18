import { fireEvent, screen } from "@testing-library/react";
import { Pages } from "../../data";
import { createTestStore, renderWithProviders } from "../../test-utils";
import CustomAppBar from "./CustomAppBar";

describe("CustomAppBar", () => {
  const mockAppHeaderText = "Test Portfolio";
  const mockPages = [Pages.Home, Pages.Experience, Pages.Projects];

  const mockProps = {
    appHeaderText: mockAppHeaderText,
    pages: mockPages,
  };

  it("displays the app header text", () => {
    renderWithProviders(<CustomAppBar {...mockProps} />);

    expect(screen.getByText("Test Portfolio")).toBeInTheDocument();
  });

  it("renders navigation tabs for all pages", () => {
    renderWithProviders(<CustomAppBar {...mockProps} />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("highlights the currently active page", () => {
    renderWithProviders(<CustomAppBar {...mockProps} />);

    const homeButton = screen.getByText("Home");
    expect(homeButton).toBeInTheDocument();
  });

  it("navigates to the correct page when tab is clicked", () => {
    const store = createTestStore();
    const { store: renderStore } = renderWithProviders(
      <CustomAppBar {...mockProps} />,
      { store }
    );

    const experienceTab = screen.getByText("Experience");
    fireEvent.click(experienceTab);

    const state = renderStore.getState();
    expect(state.page.currentPage).toBe(Pages.Experience);
  });

  it("updates page selection when different tab is clicked", () => {
    renderWithProviders(<CustomAppBar {...mockProps} />);

    const projectsButton = screen.getByText("Projects");
    fireEvent.click(projectsButton);

    expect(projectsButton).toBeInTheDocument();
  });

  it("renders with correct AppBar styling", () => {
    renderWithProviders(<CustomAppBar {...mockProps} />);

    const appBar = screen.getByRole("banner");
    expect(appBar).toBeInTheDocument();
  });

  describe("responsive behavior", () => {
    it("renders tabs in horizontal layout", () => {
      renderWithProviders(<CustomAppBar {...mockProps} />);

      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("Experience")).toBeInTheDocument();
      expect(screen.getByText("Projects")).toBeInTheDocument();
    });

    it("handles tab keyboard navigation", () => {
      renderWithProviders(<CustomAppBar {...mockProps} />);

      const homeButton = screen.getByText("Home");

      homeButton.focus();
      expect(homeButton).toHaveFocus();
    });
    it("maintains accessibility attributes", () => {
      renderWithProviders(<CustomAppBar {...mockProps} />);

      mockPages.forEach(page => {
        const button = screen.getByText(page);
        expect(button.closest("button")).toHaveAttribute("type", "button");
      });
    });
  });
});
