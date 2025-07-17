import { render, screen } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "../../theme/ThemeProvider";
import SocialLinkButton from "./SocialLinkButton";

// Helper function to render SocialLinkButton with theme provider
const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe("SocialLinkButton", () => {
  const mockLink = {
    name: "GitHub",
    url: "https://github.com/testuser",
    icon: "github.svg",
  };

  const mockProps = {
    link: mockLink,
  };

  it("displays the link name", () => {
    renderWithProviders(<SocialLinkButton {...mockProps} />);
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });

  it("renders as an anchor element with correct href", () => {
    renderWithProviders(<SocialLinkButton {...mockProps} />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://github.com/testuser");
  });

  it("opens link in new tab with correct security attributes", () => {
    renderWithProviders(<SocialLinkButton {...mockProps} />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("applies correct styling", () => {
    renderWithProviders(<SocialLinkButton {...mockProps} />);

    const linkElement = screen.getByRole("link");

    // Check that it has inline styles applied
    expect(linkElement).toHaveStyle({
      textDecoration: "none",
      cursor: "pointer",
      display: "inline-block",
    });
  });

  it("maintains accessibility by providing clickable text", () => {
    renderWithProviders(<SocialLinkButton {...mockProps} />);

    const linkElement = screen.getByRole("link", { name: "GitHub" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toBeVisible();
  });
});
