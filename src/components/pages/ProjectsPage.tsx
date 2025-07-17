import { useAppSelector } from "../../store/hooks";
import { selectProjects } from "../../store/selectors";
import { useTheme, createHeadingStyles } from "../../theme";
import { ProjectCard } from "./projects";

export default function ProjectsPage() {
  const { theme } = useTheme();
  const projects = useAppSelector(selectProjects);

  const headerStyles = {
    ...createHeadingStyles(theme, "background"),
    alignSelf: "flex-start",
    fontSize: theme.typography.fontSize.xxl,
    marginBottom: theme.spacing.md,
  };

  const gridContainerStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: theme.spacing.lg,
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  return (
    <div>
      {/* Header */}
      <h1 style={headerStyles}>Projects</h1>

      {/* Projects Grid */}
      <div style={gridContainerStyles}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
