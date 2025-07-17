import { useAppSelector } from "../../store/hooks";
import { selectProfileSummary, selectTechnologies } from "../../store/selectors";
import { useTheme, createHeadingStyles, createTextStyles, createCardStyles } from "../../theme";
import { TechnologyButton } from "./home";

export default function HomePage() {
  const { theme } = useTheme();
  const profileSummary = useAppSelector(selectProfileSummary);
  const technologies = useAppSelector(selectTechnologies);

  // Return early if data is not loaded yet
  if (!profileSummary) {
    return null;
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

  return (
    <div>
      {/* Header */}
      <h1 style={headerStyles}>{profileSummary.name} ({profileSummary.title})</h1>

      {/* Profile Summary */}
      <div style={profileSummaryStyles}>
        <p style={profileTextStyles}>
          {profileSummary.description.map((paragraph: string, index: number) => (
            <span key={index}>
              {paragraph}
              {index < profileSummary.description.length - 1 && <><br /><br /></>}
            </span>
          ))}
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
    </div>
  );
}
