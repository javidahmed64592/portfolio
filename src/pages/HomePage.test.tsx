import { screen } from "@testing-library/react";
import {
  mockProfileSummary,
  createMockTechnologies,
  renderWithTheme,
} from "../test-utils";
import HomePage from "./HomePage";

describe("HomePage", () => {
  const profileSummary = mockProfileSummary();
  const technologies = createMockTechnologies(3);

  const mockProps = {
    profileSummary,
    technologies,
  };

  it("renders the main header with correct text", () => {
    renderWithTheme(<HomePage {...mockProps} />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(
      screen.getByText("Javid Ahmed (Software Developer)")
    ).toBeInTheDocument();
  });

  it("renders ProfileSummaryDisplay component", () => {
    renderWithTheme(<HomePage {...mockProps} />);

    // Check if profile summary content is rendered
    expect(screen.getByText(/Profile summary line 1./)).toBeInTheDocument();
    expect(screen.getByText(/Profile summary line 2./)).toBeInTheDocument();
    expect(screen.getByText(/Profile summary line 3./)).toBeInTheDocument();
  });

  it("renders TechStack component", () => {
    renderWithTheme(<HomePage {...mockProps} />);

    // Check if technologies are rendered by looking for technology names
    expect(screen.getByText("Technology 1")).toBeInTheDocument();
    expect(screen.getByText("Technology 2")).toBeInTheDocument();
    expect(screen.getByText("Technology 3")).toBeInTheDocument();
  });

  it("has correct component structure", () => {
    const { container } = renderWithTheme(<HomePage {...mockProps} />);

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toBeInTheDocument();
    expect(mainDiv.tagName).toBe("DIV");

    // Check that header is an h1 element
    const header = screen.getByRole("heading", { level: 1 });
    expect(header.tagName).toBe("H1");
  });
});
