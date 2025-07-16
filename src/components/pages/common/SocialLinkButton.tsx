import { useTheme, createTextStyles } from "../../../theme";

interface SocialLinkButtonProps {
  link: {
    name: string;
    url: string;
  };
}

export default function SocialLinkButton({ link }: SocialLinkButtonProps) {
  const { theme } = useTheme();

  const socialLinkStyles = {
    ...createTextStyles(theme, "background"),
    textDecoration: "none",
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: "4px",
    border: `1px solid ${theme.colors.border}`,
    backgroundColor: "transparent",
    transition: "all 0.2s ease",
    cursor: "pointer",
    display: "inline-block",
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      style={socialLinkStyles}
    >
      {link.name}
    </a>
  );
}
