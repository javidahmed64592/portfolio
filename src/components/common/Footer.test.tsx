import { screen } from "@testing-library/react";
import { createMockSocialLinks, renderWithTheme } from "../../test-utils";
import Footer from "./Footer";

describe("Footer", () => {
  const mockSocialLinks = createMockSocialLinks(3);

  const mockProps = {
    socialLinks: mockSocialLinks,
  };

  it("renders SocialLinkButton for each social link", () => {
    renderWithTheme(<Footer {...mockProps} />);

    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("Twitter")).toBeInTheDocument();

    const githubLink = screen.getByText("GitHub").closest("a");
    const linkedinLink = screen.getByText("LinkedIn").closest("a");
    const twitterLink = screen.getByText("Twitter").closest("a");

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();

    expect(githubLink).toHaveAttribute("href", "https://github.com/testuser");
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://linkedin.com/in/testuser"
    );
    expect(twitterLink).toHaveAttribute("href", "https://twitter.com/testuser");
  });

  it("renders footer with correct styling structure", () => {
    renderWithTheme(<Footer {...mockProps} />);

    const footerContainer = document.querySelector("div");
    expect(footerContainer).toBeInTheDocument();
    expect(footerContainer).toBeVisible();
  });
});
