import { render, screen } from "@testing-library/react";
import React from "react";
import { type ProfileSummary } from "../../data";
import { ThemeProvider } from "../../theme/ThemeProvider";
import ProfileSummaryDisplay from "./ProfileSummaryDisplay";

// Helper function to render ProfileSummaryDisplay with theme provider
const renderWithProviders = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe("ProfileSummaryDisplay", () => {
  const mockProfileSummary: ProfileSummary = {
    description: [
      "I am a passionate software developer with experience in modern web technologies.",
      "I enjoy building user-friendly applications and solving complex problems.",
      "Always eager to learn new technologies and improve my skills.",
    ],
  };

  const mockProps = {
    profileSummary: mockProfileSummary,
  };

  it("displays all profile description paragraphs", () => {
    renderWithProviders(<ProfileSummaryDisplay {...mockProps} />);

    expect(
      screen.getByText(/I am a passionate software developer/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/I enjoy building user-friendly applications/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Always eager to learn new technologies/)
    ).toBeInTheDocument();
  });

  it("renders profile summary in a paragraph element", () => {
    renderWithProviders(<ProfileSummaryDisplay {...mockProps} />);

    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
  });

  it("renders with correct styling structure", () => {
    const { container } = renderWithProviders(
      <ProfileSummaryDisplay {...mockProps} />
    );

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toBeInTheDocument();
    expect(mainDiv.tagName).toBe("DIV");
  });
});
