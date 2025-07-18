import { render, screen } from "@testing-library/react";
import React from "react";
import { type ProfessionalExperience, type AcademicExperience } from "../data";
import { ThemeProvider } from "../theme/ThemeProvider";
import ExperiencePage from "./ExperiencePage";

// Helper function to render ExperiencePage with theme provider
const renderWithProviders = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe("ExperiencePage", () => {
  const mockProfessionalExperience: ProfessionalExperience[] = [
    {
      company: "Tech Corp",
      position: "Senior Software Developer",
      startDate: "2022-01",
      endDate: "Present",
      projects: [
        {
          title: "E-commerce Platform",
          description:
            "Built a scalable e-commerce platform using React and Node.js",
        },
        {
          title: "Mobile App",
          description: "Developed a React Native mobile application",
        },
      ],
    },
  ];

  const mockAcademicExperience: AcademicExperience[] = [
    {
      institution: "University of Technology",
      degree: "Master of Computer Science",
      startDate: "2018-09",
      endDate: "2020-05",
      projects: [
        {
          title: "Machine Learning Research",
          description:
            "Conducted research on neural networks and deep learning algorithms",
        },
        {
          title: "Thesis Project",
          description: "Developed an AI-powered recommendation system",
        },
      ],
    },
  ];

  const mockProps = {
    professionalExperience: mockProfessionalExperience,
    academicExperience: mockAcademicExperience,
  };

  it("renders the main header with correct text", () => {
    renderWithProviders(<ExperiencePage {...mockProps} />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  it("renders Professional Experience section header", () => {
    renderWithProviders(<ExperiencePage {...mockProps} />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Professional Experience" })
    ).toBeInTheDocument();
  });

  it("renders Academic Experience section header", () => {
    renderWithProviders(<ExperiencePage {...mockProps} />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Academic Experience" })
    ).toBeInTheDocument();
  });

  it("renders all professional experience entries", () => {
    renderWithProviders(<ExperiencePage {...mockProps} />);

    // Check for company names and positions
    expect(screen.getByText("Tech Corp")).toBeInTheDocument();
    expect(screen.getByText("Senior Software Developer")).toBeInTheDocument();
  });

  it("renders all academic experience entries", () => {
    renderWithProviders(<ExperiencePage {...mockProps} />);

    // Check for institution names and degrees
    expect(screen.getByText("University of Technology")).toBeInTheDocument();
    expect(screen.getByText("Master of Computer Science")).toBeInTheDocument();
  });

  it("renders professional experience projects", () => {
    renderWithProviders(<ExperiencePage {...mockProps} />);

    // Check for project titles and descriptions
    expect(screen.getByText("E-commerce Platform")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Built a scalable e-commerce platform using React and Node.js"
      )
    ).toBeInTheDocument();
  });

  it("renders academic experience projects", () => {
    renderWithProviders(<ExperiencePage {...mockProps} />);

    // Check for project titles and descriptions
    expect(screen.getByText("Machine Learning Research")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Conducted research on neural networks and deep learning algorithms"
      )
    ).toBeInTheDocument();
  });

  it("has correct component structure", () => {
    const { container } = renderWithProviders(
      <ExperiencePage {...mockProps} />
    );

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
    renderWithProviders(<ExperiencePage {...mockProps} />);

    // Check for date ranges in professional experience
    expect(screen.getByText(/2022-01\s+-\s+Present/)).toBeInTheDocument();

    // Check for date ranges in academic experience
    expect(screen.getByText(/2018-09\s+-\s+2020-05/)).toBeInTheDocument();
  });
});
