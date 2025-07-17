import React from "react";
import { type GitHubProject } from "../../data";
import { useTheme, createHeadingStyles, createTextStyles, createCardStyles, createButtonStyles } from "../../theme";

interface ProjectCardProps {
  project: GitHubProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { theme } = useTheme();

  const cardStyles = {
    ...createCardStyles(theme, "secondary"),
    display: "flex",
    flexDirection: "column" as const,
    height: "100%",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  };

  const cardImageStyles = {
    width: "100%",
    height: "200px",
    objectFit: "cover" as const,
    borderRadius: "4px",
    marginBottom: theme.spacing.md,
    backgroundColor: theme.colors.tertiary,
  };

  const cardTitleStyles = {
    ...createHeadingStyles(theme, "secondary"),
    fontSize: theme.typography.fontSize.lg,
    marginBottom: theme.spacing.sm,
  };

  const cardDescriptionStyles = {
    ...createTextStyles(theme, "secondary"),
    flex: 1,
    marginBottom: theme.spacing.md,
    lineHeight: 1.6,
  };

  const cardButtonStyles = {
    ...createButtonStyles(theme, "primary"),
    alignSelf: "flex-start",
    textDecoration: "none",
    display: "inline-block",
    marginTop: "auto",
  };

  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
  };

  return (
    <div
      style={cardStyles}
      onClick={() => handleCardClick(project.url)}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
    >
      <img
        src={project.image}
        alt={project.title}
        style={cardImageStyles}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      <h3 style={cardTitleStyles}>{project.title}</h3>

      <p style={cardDescriptionStyles}>{project.description}</p>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={cardButtonStyles}
        onClick={(e) => e.stopPropagation()}
      >
        View Project
      </a>
    </div>
  );
}
