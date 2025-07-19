import { fireEvent, screen } from "@testing-library/react";
import {
  mockGitHubProjects,
  renderWithTheme,
  mockWindowOpen,
} from "../../test-utils";
import ProjectCard from "./ProjectCard";

describe("ProjectCard", () => {
  const mockProject = mockGitHubProjects.project_1();

  const mockProps = {
    project: mockProject,
  };

  let windowOpenMock: jest.MockedFunction<typeof window.open>;

  beforeEach(() => {
    windowOpenMock = mockWindowOpen();
  });

  it("displays project title", () => {
    renderWithTheme(<ProjectCard {...mockProps} />);

    expect(screen.getByText("GitHub Project 1")).toBeInTheDocument();
  });

  it("displays project description", () => {
    renderWithTheme(<ProjectCard {...mockProps} />);

    expect(
      screen.getByText("GitHub Project 1 description")
    ).toBeInTheDocument();
  });

  it("renders view project link with correct attributes", () => {
    renderWithTheme(<ProjectCard {...mockProps} />);

    const link = screen.getByRole("link", { name: "View Project" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://project1.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  describe("Interactions", () => {
    it("opens project URL when card is clicked", () => {
      renderWithTheme(<ProjectCard {...mockProps} />);

      const card = screen.getByText("GitHub Project 1").closest("div");
      fireEvent.click(card!);

      expect(windowOpenMock).toHaveBeenCalledWith(
        "https://project1.com",
        "_blank",
        "noopener,noreferrer"
      );
    });

    it("does not open project URL when link is clicked", () => {
      renderWithTheme(<ProjectCard {...mockProps} />);

      const link = screen.getByRole("link", { name: "View Project" });
      fireEvent.click(link);

      // Link should handle navigation itself, not trigger card click
      expect(windowOpenMock).not.toHaveBeenCalled();
    });

    it("applies hover effects on mouse enter", () => {
      renderWithTheme(<ProjectCard {...mockProps} />);

      const card = screen
        .getByText("GitHub Project 1")
        .closest("div") as HTMLElement;
      fireEvent.mouseEnter(card);

      expect(card.style.transform).toBe("translateY(-4px)");
      expect(card.style.boxShadow).toBe("0 4px 12px rgba(0, 0, 0, 0.2)");
    });

    it("removes hover effects on mouse leave", () => {
      renderWithTheme(<ProjectCard {...mockProps} />);

      const card = screen
        .getByText("GitHub Project 1")
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
      renderWithTheme(<ProjectCard {...mockProps} />);

      const titleHeading = screen.getByRole("heading", {
        level: 3,
        name: "GitHub Project 1",
      });
      expect(titleHeading).toBeInTheDocument();
    });

    it("renders main container as clickable element", () => {
      renderWithTheme(<ProjectCard {...mockProps} />);

      const card = screen.getByText("GitHub Project 1").closest("div");
      expect(card).toBeInTheDocument();
      expect(card).toHaveStyle({ cursor: "pointer" });
    });

    it("applies correct styling structure", () => {
      const { container } = renderWithTheme(<ProjectCard {...mockProps} />);

      const card = container.firstChild as HTMLElement;
      expect(card).toHaveStyle({
        display: "flex",
        flexDirection: "column",
        height: "100%",
      });
    });
  });
});
