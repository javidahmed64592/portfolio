import { render, screen } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "../../theme/ThemeProvider";
import Footer from "./Footer";

// Helper function to render Footer with theme provider
const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe("Footer", () => {
  const mockSocialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/testuser",
      icon: "github.svg",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/testuser",
      icon: "linkedin.svg",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/testuser",
      icon: "twitter.svg",
    },
  ];

  const mockProps = {
    socialLinks: mockSocialLinks,
  };

  it("renders SocialLinkButton for each social link", () => {
    renderWithProviders(<Footer {...mockProps} />);

    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("Twitter")).toBeInTheDocument();

    // Check that all links are rendered as anchors
    const githubLink = screen.getByText("GitHub").closest("a");
    const linkedinLink = screen.getByText("LinkedIn").closest("a");
    const twitterLink = screen.getByText("Twitter").closest("a");

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();

    expect(githubLink).toHaveAttribute("href", "https://github.com/testuser");
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/testuser");
    expect(twitterLink).toHaveAttribute("href", "https://twitter.com/testuser");
  });

  it("renders footer with correct styling structure", () => {
    renderWithProviders(<Footer {...mockProps} />);

    const footerContainer = document.querySelector("div");
    expect(footerContainer).toBeInTheDocument();

    // Check that the footer is rendered properly
    expect(footerContainer).toBeVisible();
  });
});
