import { useTheme, createPageStyles, createHeadingStyles, createTextStyles } from "../../theme";

export default function ProjectsPage() {
  const { theme } = useTheme();

  const pageStyles = createPageStyles(theme);
  const headingStyles = createHeadingStyles(theme, "secondary");
  const textStyles = createTextStyles(theme, "secondary");

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>Projects</h1>
      <p style={textStyles}>This is the Projects page</p>
    </div>
  );
}
