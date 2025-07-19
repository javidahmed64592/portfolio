import { type SocialLink } from "../../data/types";
import { useTheme, createFooterStyles } from "../../theme";
import SocialLinkButton from "./SocialLinkButton";

interface FooterProps {
  socialLinks: SocialLink[];
}

export default function Footer({ socialLinks }: FooterProps) {
  const { theme } = useTheme();

  const footerStyles = createFooterStyles(theme);

  return (
    <div style={footerStyles}>
      {socialLinks.map(link => (
        <SocialLinkButton key={link.name} link={link} />
      ))}
    </div>
  );
}
