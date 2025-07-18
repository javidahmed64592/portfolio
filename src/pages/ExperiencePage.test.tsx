import { screen } from "@testing-library/react";
import {
  mockProfessionalExperience,
  mockAcademicExperience,
  renderWithTheme,
} from "../test-utils";
import ExperiencePage from "./ExperiencePage";

describe("ExperiencePage", () => {
  const professionalExperience = [mockProfessionalExperience.senior()];
  const academicExperience = [mockAcademicExperience.university()];

  const mockProps = {
    professionalExperience,
    academicExperience,
  };

  it("renders the main header with correct text", () => {
    renderWithTheme(<ExperiencePage {...mockProps} />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  it("renders Professional Experience section header", () => {
    renderWithTheme(<ExperiencePage {...mockProps} />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Professional Experience" })
    ).toBeInTheDocument();
  });

  it("renders Academic Experience section header", () => {
    renderWithTheme(<ExperiencePage {...mockProps} />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Academic Experience" })
    ).toBeInTheDocument();
  });

  it("renders all professional experience entries", () => {
    renderWithTheme(<ExperiencePage {...mockProps} />);

    // Check for company names and positions
    expect(screen.getByText("Tech Corp")).toBeInTheDocument();
    expect(screen.getByText("Senior Software Engineer")).toBeInTheDocument();
  });

  it("renders all academic experience entries", () => {
    renderWithTheme(<ExperiencePage {...mockProps} />);

    // Check for institution names and degrees
    expect(screen.getByText("University of Technology")).toBeInTheDocument();
    expect(
      screen.getByText("Bachelor of Computer Science")
    ).toBeInTheDocument();
  });

  it("renders professional experience projects", () => {
    renderWithTheme(<ExperiencePage {...mockProps} />);

    // Check for project titles and descriptions
    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.getByText("Project 1 description")).toBeInTheDocument();
  });

  it("renders academic experience projects", () => {
    renderWithTheme(<ExperiencePage {...mockProps} />);

    // Check for project titles and descriptions
    expect(screen.getByText("Capstone Project")).toBeInTheDocument();
    expect(
      screen.getByText("Machine learning application for data analysis")
    ).toBeInTheDocument();
  });

  it("has correct component structure", () => {
    const { container } = renderWithTheme(<ExperiencePage {...mockProps} />);

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toBeInTheDocument();
    expect(mainDiv.tagName).toBe("DIV");

    // Check that main header is an h1 element
    const header = screen.getByRole("heading", { level: 1 });
    expect(header.tagName).toBe("H1");

    // Check that section headers are h2 elements
    const sectionHeaders = screen.getAllByRole("heading", { level: 2 });
    expect(sectionHeaders).toHaveLength(2);
    sectionHeaders.forEach(header => {
      expect(header.tagName).toBe("H2");
    });
  });

  it("renders experience dates correctly", () => {
    renderWithTheme(<ExperiencePage {...mockProps} />);

    // Check for date ranges in professional experience
    expect(screen.getByText(/2022-01\s+-\s+Present/)).toBeInTheDocument();

    // Check for date ranges in academic experience
    expect(screen.getByText(/2018-09\s+-\s+2022-05/)).toBeInTheDocument();
  });
});
