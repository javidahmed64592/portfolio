import { render, screen } from "@testing-library/react";
import React from "react";
import { type GitHubProject } from "../data";
import { ThemeProvider } from "../theme/ThemeProvider";
import ProjectsPage from "./ProjectsPage";

// Helper function to render ProjectsPage with theme provider
const renderWithProviders = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe("ProjectsPage", () => {
  const mockProjects: GitHubProject[] = [
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React and TypeScript showcasing my projects and experience.",
      url: "https://github.com/user/portfolio",
      image: "portfolio-screenshot.png",
    },
    {
      title: "E-commerce API",
      description:
        "RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB.",
      url: "https://github.com/user/ecommerce-api",
      image: "ecommerce-api-screenshot.png",
    },
  ];

  const mockProps = {
    projects: mockProjects,
  };

  it("renders the main header with correct text", () => {
    renderWithProviders(<ProjectsPage {...mockProps} />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("renders all project titles", () => {
    renderWithProviders(<ProjectsPage {...mockProps} />);

    expect(screen.getByText("Portfolio Website")).toBeInTheDocument();
    expect(screen.getByText("E-commerce API")).toBeInTheDocument();
  });

  it("renders all project descriptions", () => {
    renderWithProviders(<ProjectsPage {...mockProps} />);

    expect(
      screen.getByText(/A responsive portfolio website built with React/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/RESTful API for an e-commerce platform/)
    ).toBeInTheDocument();
  });

  it("renders ProjectCard components for all projects", () => {
    renderWithProviders(<ProjectsPage {...mockProps} />);

    // Check that all project titles are rendered (ProjectCard should render titles)
    mockProjects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it("has correct component structure", () => {
    const { container } = renderWithProviders(<ProjectsPage {...mockProps} />);

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toBeInTheDocument();
    expect(mainDiv.tagName).toBe("DIV");

    // Check that header is an h1 element
    const header = screen.getByRole("heading", { level: 1 });
    expect(header.tagName).toBe("H1");
  });

  it("renders grid container for projects", () => {
    const { container } = renderWithProviders(<ProjectsPage {...mockProps} />);

    // The projects should be in a grid container
    const gridContainer = container.querySelector("div > div:last-child");
    expect(gridContainer).toBeInTheDocument();
  });
});
