import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { type Technology } from "../../data";
import { ThemeProvider } from "../../theme/ThemeProvider";
import TechnologyButton from "./TechnologyButton";

// Helper function to render TechnologyButton with theme provider
const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

// Mock window.open
const mockWindowOpen = jest.fn();
Object.defineProperty(window, "open", {
  value: mockWindowOpen,
  writable: true,
});

describe("TechnologyButton", () => {
  const mockTechnology: Technology = {
    name: "React",
    url: "https://reactjs.org",
    icon: "https://example.com/react-icon.svg"
  };

  const mockProps = {
    technology: mockTechnology,
  };

  beforeEach(() => {
    mockWindowOpen.mockClear();
  });

  it("displays technology name", () => {
    renderWithProviders(<TechnologyButton {...mockProps} />);

    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders technology icon with correct attributes", () => {
    renderWithProviders(<TechnologyButton {...mockProps} />);

    const icon = screen.getByAltText("React icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "https://example.com/react-icon.svg");
    expect(icon).toHaveAttribute("alt", "React icon");
  });

  it("opens technology URL when clicked", () => {
    renderWithProviders(<TechnologyButton {...mockProps} />);

    const button = screen.getByText("React").closest("div");
    fireEvent.click(button!);

    expect(mockWindowOpen).toHaveBeenCalledWith(
      "https://reactjs.org",
      "_blank",
      "noopener,noreferrer"
    );
  });

  it("renders as clickable element", () => {
    renderWithProviders(<TechnologyButton {...mockProps} />);

    const button = screen.getByText("React").closest("div");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ cursor: "pointer" });
  });

  it("hides icon on error", () => {
    renderWithProviders(<TechnologyButton {...mockProps} />);

    const icon = screen.getByAltText("React icon") as HTMLImageElement;
    fireEvent.error(icon);

    expect(icon.style.display).toBe("none");
  });

  it("applies correct styling structure", () => {
    const { container } = renderWithProviders(<TechnologyButton {...mockProps} />);

    const button = container.firstChild as HTMLElement;
    expect(button).toHaveStyle({
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    });
  });
});
