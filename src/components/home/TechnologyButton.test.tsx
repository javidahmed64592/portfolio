import { fireEvent, screen } from "@testing-library/react";
import {
  mockTechnologies,
  renderWithTheme,
  mockWindowOpen,
  getWindowOpenMock,
} from "../../test-utils";
import TechnologyButton from "./TechnologyButton";

describe("TechnologyButton", () => {
  const mockTechnology = mockTechnologies.react();

  const mockProps = {
    technology: mockTechnology,
  };

  beforeEach(() => {
    mockWindowOpen();
    getWindowOpenMock().mockClear();
  });

  it("displays technology name", () => {
    renderWithTheme(<TechnologyButton {...mockProps} />);

    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders technology icon with correct attributes", () => {
    renderWithTheme(<TechnologyButton {...mockProps} />);

    const icon = screen.getByAltText("React icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "https://example.com/react-icon.svg");
    expect(icon).toHaveAttribute("alt", "React icon");
  });

  it("opens technology URL when clicked", () => {
    renderWithTheme(<TechnologyButton {...mockProps} />);

    const button = screen.getByText("React").closest("div");
    fireEvent.click(button!);

    expect(getWindowOpenMock()).toHaveBeenCalledWith(
      "https://reactjs.org",
      "_blank",
      "noopener,noreferrer"
    );
  });

  it("renders as clickable element", () => {
    renderWithTheme(<TechnologyButton {...mockProps} />);

    const button = screen.getByText("React").closest("div");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ cursor: "pointer" });
  });

  it("hides icon on error", () => {
    renderWithTheme(<TechnologyButton {...mockProps} />);

    const icon = screen.getByAltText("React icon") as HTMLImageElement;
    fireEvent.error(icon);

    expect(icon.style.display).toBe("none");
  });

  it("applies correct styling structure", () => {
    const { container } = renderWithTheme(<TechnologyButton {...mockProps} />);

    const button = container.firstChild as HTMLElement;
    expect(button).toHaveStyle({
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    });
  });
});
