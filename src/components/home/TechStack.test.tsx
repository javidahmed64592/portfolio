import { screen } from "@testing-library/react";
import { createMockTechnologies, renderWithTheme } from "../../test-utils";
import TechStack from "./TechStack";

describe("TechStack", () => {
  const mockTechnologies = createMockTechnologies(3);

  const mockProps = {
    technologies: mockTechnologies,
  };

  it("displays section title", () => {
    renderWithTheme(<TechStack {...mockProps} />);

    expect(screen.getByText("Technologies & Skills")).toBeInTheDocument();
  });

  it("renders section title as h2 heading", () => {
    renderWithTheme(<TechStack {...mockProps} />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Technologies & Skills",
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders all technology buttons", () => {
    renderWithTheme(<TechStack {...mockProps} />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });

  it("renders with correct container structure", () => {
    const { container } = renderWithTheme(<TechStack {...mockProps} />);

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toBeInTheDocument();
    expect(mainDiv).toHaveStyle({ width: "100%" });
  });

  it("renders technologies container with correct styling", () => {
    renderWithTheme(<TechStack {...mockProps} />);

    const heading = screen.getByText("Technologies & Skills");
    const container = heading.nextElementSibling as HTMLElement;

    expect(container).toHaveStyle({
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    });
  });
});
