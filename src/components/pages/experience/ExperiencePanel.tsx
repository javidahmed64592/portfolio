import React from "react";
import { useTheme, createHeadingStyles, createTextStyles, createCardStyles } from "../../../theme";

type Project = {
  title: string;
  description: string;
};

type Experience = {
  company?: string;
  institution?: string;
  position?: string;
  degree?: string;
  startDate: string;
  endDate: string;
  projects: Project[];
};

interface ExperiencePanelProps {
  experience: Experience;
  type: "professional" | "academic";
}

export default function ExperiencePanel({ experience, type }: ExperiencePanelProps) {
  const { theme } = useTheme();

  const experienceItemStyles = {
    ...createCardStyles(theme, "secondary"),
    marginBottom: theme.spacing.lg,
    padding: theme.spacing.lg,
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
    ...createHeadingStyles(theme, "secondary"),
    fontSize: theme.typography.fontSize.lg,
    margin: 0,
  };

  const positionStyles = {
    ...createTextStyles(theme, "secondary"),
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.primary,
    margin: 0,
  };

  const dateRangeStyles = {
    ...createTextStyles(theme, "secondary"),
    fontSize: theme.typography.fontSize.sm,
    fontStyle: "italic",
    color: theme.colors.accent,
    margin: 0,
  };

  const projectsContainerStyles = {
    marginTop: theme.spacing.md,
  };

  const projectsHeaderStyles = {
    ...createHeadingStyles(theme, "secondary"),
    fontSize: theme.typography.fontSize.md,
    marginBottom: theme.spacing.sm,
  };

  const projectItemStyles = {
    ...createCardStyles(theme, "tertiary"),
    marginBottom: theme.spacing.sm,
    padding: theme.spacing.md,
    border: `1px solid ${theme.colors.border}`,
    borderLeft: `4px solid ${theme.colors.primary}`,
  };

  const projectTitleStyles = {
    ...createHeadingStyles(theme, "tertiary"),
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    marginBottom: theme.spacing.xs,
  };

  const projectDescriptionStyles = {
    ...createTextStyles(theme, "tertiary"),
    fontSize: theme.typography.fontSize.sm,
    lineHeight: 1.5,
    margin: 0,
  };

  const formatDateRange = (startDate: string, endDate: string) => {
    const formatDate = (dateStr: string) => {
      if (dateStr.toLowerCase() === "present") return "Present";
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
    };

    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  const getTitle = () => {
    if (type === "professional") {
      return experience.company || "";
    }
    return experience.institution || "";
  };

  const getSubtitle = () => {
    if (type === "professional") {
      return experience.position || "";
    }
    return experience.degree || "";
  };

  const getProjectsLabel = () => {
    return type === "professional" ? "Key Projects:" : "Notable Projects:";
  };

  return (
    <div style={experienceItemStyles}>
      <div style={experienceHeaderStyles}>
        <div>
          <h3 style={companyNameStyles}>{getTitle()}</h3>
          <p style={positionStyles}>{getSubtitle()}</p>
        </div>
        <p style={dateRangeStyles}>
          {formatDateRange(experience.startDate, experience.endDate)}
        </p>
      </div>

      {experience.projects.length > 0 && (
        <div style={projectsContainerStyles}>
          <h4 style={projectsHeaderStyles}>{getProjectsLabel()}</h4>
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
