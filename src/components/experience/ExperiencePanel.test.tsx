import { render, screen } from "@testing-library/react";
import React from "react";
import { type ProfessionalExperience, type AcademicExperience } from "../../data";
import { ThemeProvider } from "../../theme/ThemeProvider";
import ExperiencePanel from "./ExperiencePanel";

// Helper function to render ExperiencePanel with theme provider
const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe("ExperiencePanel", () => {
  const mockProfessionalExperience: ProfessionalExperience = {
    company: "Tech Corp",
    position: "Senior Software Engineer",
    startDate: "Jan 2022",
    endDate: "Present",
    projects: [
      {
        title: "Project Alpha",
        description: "Developed a web application using React and TypeScript"
      },
      {
        title: "Project Beta",
        description: "Built a mobile app with React Native and Node.js backend"
      }
    ]
  };

  const mockAcademicExperience: AcademicExperience = {
    institution: "University of Technology",
    degree: "Bachelor of Computer Science",
    startDate: "Sep 2018",
    endDate: "May 2022",
    projects: [
      {
        title: "Capstone Project",
        description: "Machine learning application for data analysis"
      }
    ]
  };

  const mockProfessionalExperienceNoProjects: ProfessionalExperience = {
    company: "StartUp Inc",
    position: "Junior Developer",
    startDate: "Jun 2021",
    endDate: "Dec 2021",
    projects: []
  };

  describe("Professional Experience", () => {
    const mockProps = {
      experience: mockProfessionalExperience,
      type: "professional" as const,
    };

    it("displays company and position", () => {
      renderWithProviders(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("Tech Corp")).toBeInTheDocument();
      expect(screen.getByText("Senior Software Engineer")).toBeInTheDocument();
    });

    it("displays date range", () => {
      renderWithProviders(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("Jan 2022 - Present")).toBeInTheDocument();
    });

    it("renders projects section when projects exist", () => {
      renderWithProviders(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("Projects")).toBeInTheDocument();
      expect(screen.getByText("Project Alpha")).toBeInTheDocument();
      expect(screen.getByText("Developed a web application using React and TypeScript")).toBeInTheDocument();
      expect(screen.getByText("Project Beta")).toBeInTheDocument();
      expect(screen.getByText("Built a mobile app with React Native and Node.js backend")).toBeInTheDocument();
    });

    it("does not render projects section when no projects exist", () => {
      const mockPropsNoProjects = {
        experience: mockProfessionalExperienceNoProjects,
        type: "professional" as const,
      };

      renderWithProviders(<ExperiencePanel {...mockPropsNoProjects} />);

      expect(screen.queryByText("Projects")).not.toBeInTheDocument();
    });
  });

  describe("Academic Experience", () => {
    const mockProps = {
      experience: mockAcademicExperience,
      type: "academic" as const,
    };

    it("displays institution and degree", () => {
      renderWithProviders(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("University of Technology")).toBeInTheDocument();
      expect(screen.getByText("Bachelor of Computer Science")).toBeInTheDocument();
    });

    it("displays date range", () => {
      renderWithProviders(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("Sep 2018 - May 2022")).toBeInTheDocument();
    });

    it("renders academic projects", () => {
      renderWithProviders(<ExperiencePanel {...mockProps} />);

      expect(screen.getByText("Projects")).toBeInTheDocument();
      expect(screen.getByText("Capstone Project")).toBeInTheDocument();
      expect(screen.getByText("Machine learning application for data analysis")).toBeInTheDocument();
    });
  });
});
