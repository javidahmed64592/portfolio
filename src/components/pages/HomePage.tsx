import { homePageData } from "../../data/homePageData";
import { useTheme, createHeadingStyles, createTextStyles, createCardStyles } from "../../theme";
import { TechnologyButton, SocialLinkButton } from "./home";

export default function HomePage() {
  const { theme } = useTheme();

  const headerStyles = {
    ...createHeadingStyles(theme, "background"),
    alignSelf: "flex-start",
    fontSize: theme.typography.fontSize.xxl,
    marginBottom: theme.spacing.md,
  };

  const profileSummaryStyles = {
    ...createCardStyles(theme, "secondary"),
    width: "100%",
    maxWidth: "800px",
    textAlign: "left" as const,
    marginBottom: theme.spacing.lg,
  };

  const profileTextStyles = {
    ...createTextStyles(theme, "tertiary"),
    lineHeight: 1.6,
    fontSize: theme.typography.fontSize.md,
  };

  const sectionTitleStyles = {
    ...createHeadingStyles(theme, "background"),
    fontSize: theme.typography.fontSize.lg,
    marginBottom: theme.spacing.md,
    alignSelf: "flex-start",
  };

  const techIconsContainerStyles = {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: theme.spacing.md,
    justifyContent: "center",
    marginBottom: theme.spacing.lg,
    width: "100%",
    maxWidth: "600px",
  };

  const socialLinksFooterStyles = {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: theme.spacing.sm,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "auto",
    paddingTop: theme.spacing.lg,
    borderTop: `1px solid ${theme.colors.border}`,
  };

  return (
    <div>
      {/* Header */}
      <h1 style={headerStyles}>{homePageData.profileSummary.name} ({homePageData.profileSummary.title})</h1>

      {/* Profile Summary */}
      <div style={profileSummaryStyles}>
        <p style={profileTextStyles}>
          {homePageData.profileSummary.description.split("\n").map((paragraph, index) => (
            <span key={index}>
              {paragraph}
              {index < homePageData.profileSummary.description.split("\n").length - 1 && <><br /><br /></>}
            </span>
          ))}
        </p>
      </div>

      {/* Technologies */}
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <h2 style={sectionTitleStyles}>Technologies & Skills</h2>
        <div style={techIconsContainerStyles}>
          {homePageData.technologies.map((tech) => (
            <TechnologyButton key={tech.name} technology={tech} />
          ))}
        </div>
      </div>

      {/* Social Links Footer */}
      <div style={socialLinksFooterStyles}>
        {homePageData.socialLinks.map((link) => (
          <SocialLinkButton key={link.name} link={link} />
        ))}
      </div>
    </div>
  );
}
