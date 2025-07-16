import { useState, useEffect } from "react";
import { getSocialLinks, type SocialLink } from "../../../data/appData";
import { useTheme } from "../../../theme";
import SocialLinkButton from "./SocialLinkButton";

export default function SocialLinksFooter() {
  const { theme } = useTheme();
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const socialLinksData = await getSocialLinks();
        setSocialLinks(socialLinksData);
      } catch (error) {
        console.error("Failed to load social links:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const socialLinksFooterStyles = {
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

  if (loading) {
    return null; // Don't render anything while loading
  }

  return (
    <div style={socialLinksFooterStyles}>
      {socialLinks.map((link: SocialLink) => (
        <SocialLinkButton key={link.name} link={link} />
      ))}
    </div>
  );
}
