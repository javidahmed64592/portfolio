import { useTheme, createPageStyles, createHeadingStyles, createTextStyles } from "../../theme";

export default function HomePage() {
  const { theme } = useTheme();

  const pageStyles = createPageStyles(theme);
  const headingStyles = createHeadingStyles(theme, "primary");
  const textStyles = createTextStyles(theme, "primary");

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>Home</h1>
      <p style={textStyles}>This is the Home page</p>
    </div>
  );
}
