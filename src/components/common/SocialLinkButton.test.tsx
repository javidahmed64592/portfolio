import { screen } from "@testing-library/react";
import { mockSocialLinks, renderWithTheme } from "../../test-utils";
import SocialLinkButton from "./SocialLinkButton";

describe("SocialLinkButton", () => {
  const mockLink = mockSocialLinks.link_1();

  const mockProps = {
    link: mockLink,
  };

  it("displays the link name", () => {
    renderWithTheme(<SocialLinkButton {...mockProps} />);
    expect(screen.getByText("Link 1")).toBeInTheDocument();
  });

  it("renders as an anchor element with correct href", () => {
    renderWithTheme(<SocialLinkButton {...mockProps} />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://link1.com");
  });

  it("opens link in new tab with correct security attributes", () => {
    renderWithTheme(<SocialLinkButton {...mockProps} />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("applies correct styling", () => {
    renderWithTheme(<SocialLinkButton {...mockProps} />);

    const linkElement = screen.getByRole("link");

    expect(linkElement).toHaveStyle({
      textDecoration: "none",
      cursor: "pointer",
      display: "inline-block",
    });
  });

  it("maintains accessibility by providing clickable text", () => {
    renderWithTheme(<SocialLinkButton {...mockProps} />);

    const linkElement = screen.getByRole("link", { name: "Link 1" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toBeVisible();
  });
});
