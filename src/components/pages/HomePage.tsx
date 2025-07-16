import { useState, useEffect } from "react";
import { getHomePageData, type HomePageData, type Technology, type SocialLink } from "../../data/homePageData";
import { useTheme, createHeadingStyles, createTextStyles, createCardStyles } from "../../theme";
import { TechnologyButton, SocialLinkButton } from "./home";

export default function HomePage() {
  const { theme } = useTheme();
  const [homeData, setHomeData] = useState<HomePageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getHomePageData();
        setHomeData(data);
      } catch (error) {
        console.error("Failed to load home page data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!homeData) {
    return <div>Failed to load home page data</div>;
  }

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
      <h1 style={headerStyles}>{homeData.profileSummary.name} ({homeData.profileSummary.title})</h1>

      {/* Profile Summary */}
      <div style={profileSummaryStyles}>
        <p style={profileTextStyles}>
          {homeData.profileSummary.description.map((paragraph: string, index: number) => (
            <span key={index}>
              {paragraph}
              {index < homeData.profileSummary.description.length - 1 && <><br /><br /></>}
            </span>
          ))}
        </p>
      </div>

      {/* Technologies */}
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <h2 style={sectionTitleStyles}>Technologies & Skills</h2>
        <div style={techIconsContainerStyles}>
          {homeData.technologies.map((tech: Technology) => (
            <TechnologyButton key={tech.name} technology={tech} />
          ))}
        </div>
      </div>

      {/* Social Links Footer */}
      <div style={socialLinksFooterStyles}>
        {homeData.socialLinks.map((link: SocialLink) => (
          <SocialLinkButton key={link.name} link={link} />
        ))}
      </div>
    </div>
  );
}
