import { screen } from "@testing-library/react";
import {
  mockProfessionalExperience,
  mockAcademicExperience,
  renderWithTheme,
} from "../test-utils";
import ExperiencePage from "./ExperiencePage";

describe("ExperiencePage", () => {
  const professionalExperience = [mockProfessionalExperience.experience_1()];
  const academicExperience = [mockAcademicExperience.experience_1()];

  const mockProps = {
    professionalExperience,
    academicExperience,
  };

  it("renders Professional Experience section header", () => {
    renderWithTheme(<ExperiencePage {...mockProps} />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Professional Experience" })
    ).toBeInTheDocument();
  });

  it("renders Academic Experience section header", () => {
    renderWithTheme(<ExperiencePage {...mockProps} />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Academic Experience" })
    ).toBeInTheDocument();
  });

  it("renders all professional experience entries", () => {
    renderWithTheme(<ExperiencePage {...mockProps} />);

    // Check for company names and positions
    expect(screen.getByText("Professional Company 1")).toBeInTheDocument();
    expect(screen.getByText("Professional Position 1")).toBeInTheDocument();
  });

  it("renders all academic experience entries", () => {
    renderWithTheme(<ExperiencePage {...mockProps} />);

    // Check for institution names and degrees
    expect(screen.getByText("Academic Institution 1")).toBeInTheDocument();
    expect(screen.getByText("Academic Degree 1")).toBeInTheDocument();
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
    expect(screen.getByText("Project 2")).toBeInTheDocument();
    expect(screen.getByText("Project 2 description")).toBeInTheDocument();
  });

  it("has correct component structure", () => {
    const { container } = renderWithTheme(<ExperiencePage {...mockProps} />);

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toBeInTheDocument();
    expect(mainDiv.tagName).toBe("DIV");

    // Check that section headers are h1 elements
    const sectionHeaders = screen.getAllByRole("heading", { level: 1 });
    expect(sectionHeaders).toHaveLength(2);
    sectionHeaders.forEach(header => {
      expect(header.tagName).toBe("H1");
    });
  });

  it("renders experience dates correctly", () => {
    renderWithTheme(<ExperiencePage {...mockProps} />);

    // Check for date ranges in professional experience
    expect(screen.getByText(/01\/01\/2020\s+-\s+Present/)).toBeInTheDocument();

    // Check for date ranges in academic experience
    expect(
      screen.getByText(/01\/01\/2018\s+-\s+01\/01\/2022/)
    ).toBeInTheDocument();
  });
});
