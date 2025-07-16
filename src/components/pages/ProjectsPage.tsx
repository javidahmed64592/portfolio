import { useState, useEffect } from "react";
import { getProjectsPageData, type GitHubProject, type ProjectsPageData } from "../../data/projectsPageData";
import { useTheme, createHeadingStyles } from "../../theme";
import { ProjectCard } from "./projects";

export default function ProjectsPage() {
  const { theme } = useTheme();
  const [projectsData, setProjectsData] = useState<ProjectsPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getProjectsPageData();
        setProjectsData(data);
      } catch (error) {
        console.error("Failed to load projects data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!projectsData) {
    return <div>Failed to load projects data</div>;
  }

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
        {projectsData.projects.map((project: GitHubProject, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
