import { screen } from "@testing-library/react";
import {
  mockProfessionalExperience,
  mockAcademicExperience,
  renderWithTheme,
} from "../../test-utils";
import ExperiencePanel from "./ExperiencePanel";

describe("ExperiencePanel", () => {
  const professionalExperience = mockProfessionalExperience.experience_1();
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

      expect(screen.getByText("Professional Company 1")).toBeInTheDocument();
    });

    it("displays position", () => {
      renderWithTheme(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("Professional Position 1")).toBeInTheDocument();
    });

    it("displays date range", () => {
      renderWithTheme(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("01/01/2020 - Present")).toBeInTheDocument();
    });

    it("displays projects when available", () => {
      renderWithTheme(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("Project 1")).toBeInTheDocument();
      expect(screen.getByText("Project 1 description")).toBeInTheDocument();
    });

    it("handles experience with no projects", () => {
      const mockPropsNoProjects = {
        experience: professionalExperienceNoProjects,
        type: "professional" as const,
      };

      renderWithTheme(<ExperiencePanel {...mockPropsNoProjects} />);

      expect(screen.getByText("No Projects Company")).toBeInTheDocument();
      expect(screen.getByText("No Projects Position")).toBeInTheDocument();
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
