import { type SocialLink } from "../../data/types";
import { useTheme } from "../../theme";
import SocialLinkButton from "./SocialLinkButton";

interface FooterProps {
  socialLinks: SocialLink[];
}

export default function Footer({ socialLinks }: FooterProps) {
  const { theme } = useTheme();

  const footerStyles = {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: theme.spacing.sm,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "auto",
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderTop: `1px solid ${theme.colors.border}`,
  };

  return (
    <div style={footerStyles}>
      {socialLinks.map(link => (
        <SocialLinkButton key={link.name} link={link} />
      ))}
    </div>
  );
}
