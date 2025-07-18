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

    expect(screen.getByText("Link 1")).toBeInTheDocument();
    expect(screen.getByText("Link 2")).toBeInTheDocument();
    expect(screen.getByText("Link 3")).toBeInTheDocument();

    const link1 = screen.getByText("Link 1").closest("a");
    const link2 = screen.getByText("Link 2").closest("a");
    const link3 = screen.getByText("Link 3").closest("a");

    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
    expect(link3).toBeInTheDocument();

    expect(link1).toHaveAttribute("href", "https://link1.com");
    expect(link2).toHaveAttribute("href", "https://link2.com");
    expect(link3).toHaveAttribute("href", "https://link3.com");
  });

  it("renders footer with correct styling structure", () => {
    renderWithTheme(<Footer {...mockProps} />);

    const footerContainer = document.querySelector("div");
    expect(footerContainer).toBeInTheDocument();
    expect(footerContainer).toBeVisible();
  });
});
