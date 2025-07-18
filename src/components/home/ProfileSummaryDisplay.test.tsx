import { screen } from "@testing-library/react";
import { mockProfileSummary, renderWithTheme } from "../../test-utils";
import ProfileSummaryDisplay from "./ProfileSummaryDisplay";

describe("ProfileSummaryDisplay", () => {
  const profileSummary = mockProfileSummary();

  const mockProps = {
    profileSummary,
  };

  it("displays all profile description paragraphs", () => {
    renderWithTheme(<ProfileSummaryDisplay {...mockProps} />);

    expect(screen.getByText(/Profile summary line 1./)).toBeInTheDocument();
    expect(screen.getByText(/Profile summary line 2./)).toBeInTheDocument();
    expect(screen.getByText(/Profile summary line 3./)).toBeInTheDocument();
  });

  it("renders profile summary in a paragraph element", () => {
    renderWithTheme(<ProfileSummaryDisplay {...mockProps} />);

    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
  });

  it("renders with correct styling structure", () => {
    const { container } = renderWithTheme(
      <ProfileSummaryDisplay {...mockProps} />
    );

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toBeInTheDocument();
    expect(mainDiv.tagName).toBe("DIV");
  });
});
