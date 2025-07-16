import { technologies, socialLinks } from "../../data/homePageData";
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

  const socialLinksContainerStyles = {
    ...createCardStyles(theme, "primary"),
    width: "100%",
    maxWidth: "400px",
    textAlign: "center" as const,
  };

  const socialLinksGridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.md,
  };

  return (
    <div>
      {/* Header */}
      <h1 style={headerStyles}>Javid Ahmed (Software Developer)</h1>

      {/* Profile Summary */}
      <div style={profileSummaryStyles}>
        <p style={profileTextStyles}>
          I am a passionate software developer with experience in building modern web applications
          and solutions. I enjoy working with cutting-edge technologies and am always eager to learn
          new skills and tackle challenging problems. My goal is to create efficient, scalable, and
          user-friendly applications that make a positive impact.
        </p>
        <p style={profileTextStyles}>
          I have experience in full-stack development, with a focus on React, TypeScript, and modern
          web technologies. I'm comfortable working in both frontend and backend environments and
          enjoy collaborating with teams to deliver high-quality software solutions.
        </p>
      </div>

      {/* Technologies */}
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <h2 style={sectionTitleStyles}>Technologies & Skills</h2>
        <div style={techIconsContainerStyles}>
          {technologies.map((tech) => (
            <TechnologyButton key={tech.name} technology={tech} />
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div style={socialLinksContainerStyles}>
        <h2 style={{ ...createHeadingStyles(theme, "primary"), fontSize: theme.typography.fontSize.lg }}>
          Connect With Me
        </h2>
        <div style={socialLinksGridStyles}>
          {socialLinks.map((link) => (
            <SocialLinkButton key={link.name} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
