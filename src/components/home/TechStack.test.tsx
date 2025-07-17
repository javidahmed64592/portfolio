import { render, screen } from "@testing-library/react";
import React from "react";
import { type Technology } from "../../data";
import { ThemeProvider } from "../../theme/ThemeProvider";
import TechStack from "./TechStack";

// Helper function to render TechStack with theme provider
const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe("TechStack", () => {
  const mockTechnologies: Technology[] = [
    {
      name: "React",
      url: "https://reactjs.org",
      icon: "https://example.com/react-icon.svg"
    },
    {
      name: "TypeScript",
      url: "https://typescriptlang.org",
      icon: "https://example.com/typescript-icon.svg"
    },
    {
      name: "Node.js",
      url: "https://nodejs.org",
      icon: "https://example.com/nodejs-icon.svg"
    }
  ];

  const mockProps = {
    technologies: mockTechnologies,
  };

  it("displays section title", () => {
    renderWithProviders(<TechStack {...mockProps} />);

    expect(screen.getByText("Technologies & Skills")).toBeInTheDocument();
  });

  it("renders section title as h2 heading", () => {
    renderWithProviders(<TechStack {...mockProps} />);

    const heading = screen.getByRole("heading", { level: 2, name: "Technologies & Skills" });
    expect(heading).toBeInTheDocument();
  });

  it("renders all technology buttons", () => {
    renderWithProviders(<TechStack {...mockProps} />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });

  it("renders with correct container structure", () => {
    const { container } = renderWithProviders(<TechStack {...mockProps} />);

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toBeInTheDocument();
    expect(mainDiv).toHaveStyle({ width: "100%" });
  });

  it("renders technologies container with correct styling", () => {
    renderWithProviders(<TechStack {...mockProps} />);

    const heading = screen.getByText("Technologies & Skills");
    const container = heading.nextElementSibling as HTMLElement;

    expect(container).toHaveStyle({
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    });
  });
});
