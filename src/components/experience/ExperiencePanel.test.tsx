import { screen } from "@testing-library/react";
import {
  mockProfessionalExperience,
  mockAcademicExperience,
  renderWithTheme,
} from "../../test-utils";
import ExperiencePanel from "./ExperiencePanel";

describe("ExperiencePanel", () => {
  const professionalExperience = mockProfessionalExperience.senior();
  const academicExperience = mockAcademicExperience.university();
  const professionalExperienceNoProjects =
    mockProfessionalExperience.noProjects();

  describe("Professional Experience", () => {
    const mockProps = {
      experience: professionalExperience,
      type: "professional" as const,
    };

    it("displays company name", () => {
      renderWithTheme(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("Tech Corp")).toBeInTheDocument();
    });

    it("displays position", () => {
      renderWithTheme(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("Senior Software Engineer")).toBeInTheDocument();
    });

    it("displays date range", () => {
      renderWithTheme(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("2022-01 - Present")).toBeInTheDocument();
    });

    it("displays projects when available", () => {
      renderWithTheme(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("Advanced Web Application")).toBeInTheDocument();
      expect(
        screen.getByText(
          "Developed a complex web application using React and TypeScript with advanced features"
        )
      ).toBeInTheDocument();
    });

    it("handles experience with no projects", () => {
      const mockPropsNoProjects = {
        experience: professionalExperienceNoProjects,
        type: "professional" as const,
      };

      renderWithTheme(<ExperiencePanel {...mockPropsNoProjects} />);

      expect(screen.getByText("Test Company")).toBeInTheDocument();
      expect(screen.getByText("Software Engineer")).toBeInTheDocument();
      expect(screen.queryByText("Projects")).not.toBeInTheDocument();
    });
  });

  describe("Academic Experience", () => {
    const mockProps = {
      experience: academicExperience,
      type: "academic" as const,
    };

    it("displays institution name", () => {
      renderWithTheme(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("University of Technology")).toBeInTheDocument();
    });

    it("displays degree", () => {
      renderWithTheme(<ExperiencePanel {...mockProps} />);

      expect(
        screen.getByText("Bachelor of Computer Science")
      ).toBeInTheDocument();
    });

    it("displays date range", () => {
      renderWithTheme(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("2018-09 - 2022-05")).toBeInTheDocument();
    });

    it("displays academic projects", () => {
      renderWithTheme(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("Capstone Project")).toBeInTheDocument();
      expect(
        screen.getByText("Machine learning application for data analysis")
      ).toBeInTheDocument();
    });
  });
});
