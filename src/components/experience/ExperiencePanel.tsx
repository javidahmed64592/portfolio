import { type ProfessionalExperience, type AcademicExperience } from "../../data";
import { useTheme, createHeadingStyles, createTextStyles, createCardStyles } from "../../theme";

type Experience = ProfessionalExperience | AcademicExperience;

interface ExperiencePanelProps {
  experience: Experience;
  type: "professional" | "academic";
}

export default function ExperiencePanel({ experience, type }: ExperiencePanelProps) {
  const { theme } = useTheme();

  const experienceItemStyles = {
    ...createCardStyles(theme, "primary"),
    marginBottom: theme.spacing.lg,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.primary,
    border: `2px solid ${theme.colors.accent}`,
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  };

  const experienceHeaderStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: theme.spacing.md,
    flexWrap: "wrap" as const,
    gap: theme.spacing.sm,
  };

  const companyNameStyles = {
    ...createHeadingStyles(theme, "primary"),
    fontSize: theme.typography.fontSize.lg,
    margin: 0,
    color: theme.colors.text.onPrimary,
  };

  const positionStyles = {
    ...createHeadingStyles(theme, "primary"),
    fontSize: theme.typography.fontSize.lg,
    margin: 0,
    color: theme.colors.text.onPrimary,
    fontWeight: theme.typography.fontWeight.normal,
  };

  const dateRangeStyles = {
    ...createTextStyles(theme, "primary"),
    fontSize: theme.typography.fontSize.md,
    fontStyle: "italic",
    color: theme.colors.text.onPrimary,
    margin: 0,
  };

  const projectsContainerStyles = {
    marginTop: theme.spacing.md,
  };

  const projectsHeaderStyles = {
    ...createHeadingStyles(theme, "primary"),
    fontSize: theme.typography.fontSize.md,
    marginBottom: theme.spacing.sm,
    color: theme.colors.text.onPrimary,
  };

  const projectItemStyles = {
    ...createCardStyles(theme, "secondary"),
    marginBottom: theme.spacing.sm,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.secondary,
    border: `1px solid ${theme.colors.border}`,
    borderLeft: `4px solid ${theme.colors.accent}`,
    borderRadius: "8px",
  };

  const projectTitleStyles = {
    ...createHeadingStyles(theme, "secondary"),
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    marginBottom: theme.spacing.xs,
    color: theme.colors.text.onSecondary,
  };

  const projectDescriptionStyles = {
    ...createTextStyles(theme, "secondary"),
    fontSize: theme.typography.fontSize.sm,
    lineHeight: 1.5,
    margin: 0,
    color: theme.colors.text.onSecondary,
  };

  const getTitle = () => {
    if (type === "professional") {
      return (experience as ProfessionalExperience).company || "";
    }
    return (experience as AcademicExperience).institution || "";
  };

  const getSubtitle = () => {
    if (type === "professional") {
      return (experience as ProfessionalExperience).position || "";
    }
    return (experience as AcademicExperience).degree || "";
  };

  return (
    <div style={experienceItemStyles}>
      <div style={experienceHeaderStyles}>
        <div>
          <h3 style={companyNameStyles}>{getTitle()}</h3>
          <h3 style={positionStyles}>{getSubtitle()}</h3>
        </div>
        <p style={dateRangeStyles}>
          {experience.startDate} - {experience.endDate}
        </p>
      </div>

      {experience.projects.length > 0 && (
        <div style={projectsContainerStyles}>
          <h4 style={projectsHeaderStyles}>Projects</h4>
          {experience.projects.map((project, projectIndex) => (
            <div key={projectIndex} style={projectItemStyles}>
              <h5 style={projectTitleStyles}>{project.title}</h5>
              <p style={projectDescriptionStyles}>{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
