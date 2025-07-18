import { screen } from "@testing-library/react";
import { mockGitHubProjects, renderWithTheme } from "../test-utils";
import ProjectsPage from "./ProjectsPage";

describe("ProjectsPage", () => {
  const mockProjects = [
    mockGitHubProjects.portfolio(),
    mockGitHubProjects.ecommerce(),
  ];

  const mockProps = {
    projects: mockProjects,
  };

  it("renders the main header with correct text", () => {
    renderWithTheme(<ProjectsPage {...mockProps} />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("renders all project titles", () => {
    renderWithTheme(<ProjectsPage {...mockProps} />);

    expect(screen.getByText("React Portfolio")).toBeInTheDocument();
    expect(screen.getByText("E-commerce Platform")).toBeInTheDocument();
  });

  it("renders all project descriptions", () => {
    renderWithTheme(<ProjectsPage {...mockProps} />);

    expect(
      screen.getByText(
        /A modern portfolio website built with React and TypeScript/
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Full-stack e-commerce solution with Node.js backend/)
    ).toBeInTheDocument();
  });

  it("renders ProjectCard components for all projects", () => {
    renderWithTheme(<ProjectsPage {...mockProps} />);

    // Check that all project titles are rendered (ProjectCard should render titles)
    mockProjects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it("has correct component structure", () => {
    const { container } = renderWithTheme(<ProjectsPage {...mockProps} />);

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toBeInTheDocument();
    expect(mainDiv.tagName).toBe("DIV");

    // Check that header is an h1 element
    const header = screen.getByRole("heading", { level: 1 });
    expect(header.tagName).toBe("H1");
  });

  it("renders grid container for projects", () => {
    const { container } = renderWithTheme(<ProjectsPage {...mockProps} />);

    // The projects should be in a grid container
    const gridContainer = container.querySelector("div > div:last-child");
    expect(gridContainer).toBeInTheDocument();
  });
});
