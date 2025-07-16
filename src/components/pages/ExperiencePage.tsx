import { experiencePageData } from "../../data/experiencePageData";
import { useTheme, createHeadingStyles } from "../../theme";
import { ExperiencePanel } from "./experience";

export default function ExperiencePage() {
  const { theme } = useTheme();

  const headerStyles = {
    ...createHeadingStyles(theme, "background"),
    alignSelf: "flex-start",
    fontSize: theme.typography.fontSize.xxl,
    marginBottom: theme.spacing.md,
  };

  const sectionStyles = {
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    marginBottom: theme.spacing.xl,
  };

  const sectionHeaderStyles = {
    ...createHeadingStyles(theme, "background"),
    fontSize: theme.typography.fontSize.xl,
    marginBottom: theme.spacing.lg,
    borderBottom: `2px solid ${theme.colors.primary}`,
    paddingBottom: theme.spacing.sm,
  };

  return (
    <div>
      {/* Header */}
      <h1 style={headerStyles}>Experience</h1>

      {/* Professional Experience Section */}
      <div style={sectionStyles}>
        <h2 style={sectionHeaderStyles}>Professional Experience</h2>

        {experiencePageData.professionalExperience.map((experience, index) => (
          <ExperiencePanel
            key={index}
            experience={experience}
            type="professional"
          />
        ))}
      </div>

      {/* Academic Experience Section */}
      <div style={sectionStyles}>
        <h2 style={sectionHeaderStyles}>Academic Experience</h2>

        {experiencePageData.academicExperience.map((experience, index) => (
          <ExperiencePanel
            key={index}
            experience={experience}
            type="academic"
          />
        ))}
      </div>
    </div>
  );
}
