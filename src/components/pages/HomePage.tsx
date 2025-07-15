import { useTheme, createPageStyles, createHeadingStyles, createTextStyles } from "../../theme";

export default function HomePage() {
  const { theme } = useTheme();

  const pageStyles = createPageStyles(theme);
  const headingStyles = createHeadingStyles(theme);
  const textStyles = createTextStyles(theme);

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>Home</h1>
      <p style={textStyles}>This is the Home page</p>
    </div>
  );
}
