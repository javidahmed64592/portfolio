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
    ...createTextStyles(theme, "primary"),
    textDecoration: "none",
    padding: theme.spacing.sm,
    borderRadius: "4px",
    border: `1px solid ${theme.colors.text.onPrimary}`,
    transition: "all 0.2s ease",
    cursor: "pointer",
    display: "block",
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
