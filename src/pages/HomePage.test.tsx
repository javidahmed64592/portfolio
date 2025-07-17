import { render, screen } from "@testing-library/react";
import React from "react";
import { type ProfileSummary, type Technology } from "../data";
import { ThemeProvider } from "../theme/ThemeProvider";
import HomePage from "./HomePage";

// Helper function to render HomePage with theme provider
const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe("HomePage", () => {
  const mockProfileSummary: ProfileSummary = {
    description: [
      "I am a passionate software developer with experience in modern web technologies.",
      "I enjoy building user-friendly applications and solving complex problems.",
      "Always eager to learn new technologies and improve my skills."
    ]
  };

  const mockTechnologies: Technology[] = [
    {
      name: "React",
      url: "https://reactjs.org/",
      icon: "react-icon.svg"
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
      icon: "typescript-icon.svg"
    },
    {
      name: "Node.js",
      url: "https://nodejs.org/",
      icon: "nodejs-icon.svg"
    }
  ];

  const mockProps = {
    profileSummary: mockProfileSummary,
    technologies: mockTechnologies,
  };

  it("renders the main header with correct text", () => {
    renderWithProviders(<HomePage {...mockProps} />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Javid Ahmed (Software Developer)")).toBeInTheDocument();
  });

  it("renders ProfileSummaryDisplay component", () => {
    renderWithProviders(<HomePage {...mockProps} />);

    // Check if profile summary content is rendered
    expect(screen.getByText(/I am a passionate software developer/)).toBeInTheDocument();
    expect(screen.getByText(/I enjoy building user-friendly applications/)).toBeInTheDocument();
    expect(screen.getByText(/Always eager to learn new technologies/)).toBeInTheDocument();
  });

  it("renders TechStack component", () => {
    renderWithProviders(<HomePage {...mockProps} />);

    // Check if technologies are rendered by looking for technology names
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });

  it("has correct component structure", () => {
    const { container } = renderWithProviders(<HomePage {...mockProps} />);

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toBeInTheDocument();
    expect(mainDiv.tagName).toBe("DIV");

    // Check that header is an h1 element
    const header = screen.getByRole("heading", { level: 1 });
    expect(header.tagName).toBe("H1");
  });
});
