import { fireEvent, screen } from "@testing-library/react";
import {
  mockTechnologies,
  renderWithTheme,
  mockWindowOpen,
  getWindowOpenMock,
} from "../../test-utils";
import TechnologyButton from "./TechnologyButton";

describe("TechnologyButton", () => {
  const mockTechnology = mockTechnologies.tech_1();

  const mockProps = {
    technology: mockTechnology,
  };

  beforeEach(() => {
    mockWindowOpen();
    getWindowOpenMock().mockClear();
  });

  it("displays technology name", () => {
    renderWithTheme(<TechnologyButton {...mockProps} />);

    expect(screen.getByText("Technology 1")).toBeInTheDocument();
  });

  it("renders technology icon with correct attributes", () => {
    renderWithTheme(<TechnologyButton {...mockProps} />);

    const icon = screen.getByAltText("Technology 1 icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "tech1.svg");
    expect(icon).toHaveAttribute("alt", "Technology 1 icon");
  });

  it("opens technology URL when clicked", () => {
    renderWithTheme(<TechnologyButton {...mockProps} />);

    const button = screen.getByText("Technology 1").closest("div");
    fireEvent.click(button!);

    expect(getWindowOpenMock()).toHaveBeenCalledWith(
      "https://tech1.com",
      "_blank",
      "noopener,noreferrer"
    );
  });

  it("renders as clickable element", () => {
    renderWithTheme(<TechnologyButton {...mockProps} />);

    const button = screen.getByText("Technology 1").closest("div");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ cursor: "pointer" });
  });

  it("hides icon on error", () => {
    renderWithTheme(<TechnologyButton {...mockProps} />);

    const icon = screen.getByAltText("Technology 1 icon") as HTMLImageElement;
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
