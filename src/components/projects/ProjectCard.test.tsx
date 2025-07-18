import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { type GitHubProject } from "../../data";
import { ThemeProvider } from "../../theme/ThemeProvider";
import ProjectCard from "./ProjectCard";

// Helper function to render ProjectCard with theme provider
const renderWithProviders = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

// Mock window.open
const mockWindowOpen = jest.fn();
Object.defineProperty(window, "open", {
  value: mockWindowOpen,
  writable: true,
});

describe("ProjectCard", () => {
  const mockProject: GitHubProject = {
    title: "React Portfolio",
    description: "A modern portfolio website built with React and TypeScript",
    url: "https://github.com/user/react-portfolio",
    image: "https://example.com/portfolio-image.jpg",
  };

  const mockProps = {
    project: mockProject,
  };

  beforeEach(() => {
    mockWindowOpen.mockClear();
  });

  it("displays project title", () => {
    renderWithProviders(<ProjectCard {...mockProps} />);

    expect(screen.getByText("React Portfolio")).toBeInTheDocument();
  });

  it("displays project description", () => {
    renderWithProviders(<ProjectCard {...mockProps} />);

    expect(
      screen.getByText(
        "A modern portfolio website built with React and TypeScript"
      )
    ).toBeInTheDocument();
  });

  it("renders project image with correct attributes", () => {
    renderWithProviders(<ProjectCard {...mockProps} />);

    const image = screen.getByAltText("React Portfolio");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://example.com/portfolio-image.jpg"
    );
    expect(image).toHaveAttribute("alt", "React Portfolio");
  });

  it("renders view project link with correct attributes", () => {
    renderWithProviders(<ProjectCard {...mockProps} />);

    const link = screen.getByRole("link", { name: "View Project" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/user/react-portfolio"
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  describe("Interactions", () => {
    it("opens project URL when card is clicked", () => {
      renderWithProviders(<ProjectCard {...mockProps} />);

      const card = screen.getByText("React Portfolio").closest("div");
      fireEvent.click(card!);

      expect(mockWindowOpen).toHaveBeenCalledWith(
        "https://github.com/user/react-portfolio",
        "_blank",
        "noopener,noreferrer"
      );
    });

    it("does not open project URL when link is clicked", () => {
      renderWithProviders(<ProjectCard {...mockProps} />);

      const link = screen.getByRole("link", { name: "View Project" });
      fireEvent.click(link);

      // Link should handle navigation itself, not trigger card click
      expect(mockWindowOpen).not.toHaveBeenCalled();
    });

    it("applies hover effects on mouse enter", () => {
      renderWithProviders(<ProjectCard {...mockProps} />);

      const card = screen
        .getByText("React Portfolio")
        .closest("div") as HTMLElement;
      fireEvent.mouseEnter(card);

      expect(card.style.transform).toBe("translateY(-4px)");
      expect(card.style.boxShadow).toBe("0 4px 12px rgba(0, 0, 0, 0.2)");
    });

    it("removes hover effects on mouse leave", () => {
      renderWithProviders(<ProjectCard {...mockProps} />);

      const card = screen
        .getByText("React Portfolio")
        .closest("div") as HTMLElement;

      // First hover to apply effects
      fireEvent.mouseEnter(card);
      expect(card.style.transform).toBe("translateY(-4px)");

      // Then leave to remove effects
      fireEvent.mouseLeave(card);
      expect(card.style.transform).toBe("translateY(0)");
      expect(card.style.boxShadow).toBe("0 2px 4px rgba(0, 0, 0, 0.1)");
    });
  });

  describe("Component Structure", () => {
    it("renders with correct heading hierarchy", () => {
      renderWithProviders(<ProjectCard {...mockProps} />);

      const titleHeading = screen.getByRole("heading", {
        level: 3,
        name: "React Portfolio",
      });
      expect(titleHeading).toBeInTheDocument();
    });

    it("renders main container as clickable element", () => {
      renderWithProviders(<ProjectCard {...mockProps} />);

      const card = screen.getByText("React Portfolio").closest("div");
      expect(card).toBeInTheDocument();
      expect(card).toHaveStyle({ cursor: "pointer" });
    });

    it("applies correct styling structure", () => {
      const { container } = renderWithProviders(<ProjectCard {...mockProps} />);

      const card = container.firstChild as HTMLElement;
      expect(card).toHaveStyle({
        display: "flex",
        flexDirection: "column",
        height: "100%",
      });
    });
  });

  describe("Image Handling", () => {
    it("hides image on error", () => {
      renderWithProviders(<ProjectCard {...mockProps} />);

      const image = screen.getByAltText("React Portfolio") as HTMLImageElement;
      fireEvent.error(image);

      expect(image.style.display).toBe("none");
    });

    it("renders image with correct styles", () => {
      renderWithProviders(<ProjectCard {...mockProps} />);

      const image = screen.getByAltText("React Portfolio");
      expect(image).toHaveStyle({
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "4px",
      });
    });
  });
});
