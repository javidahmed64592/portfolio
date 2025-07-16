import { useTheme, createPageStyles, createHeadingStyles, createTextStyles } from "../../theme";

export default function ContactPage() {
  const { theme } = useTheme();

  const pageStyles = createPageStyles(theme);
  const headingStyles = createHeadingStyles(theme, "tertiary");
  const textStyles = createTextStyles(theme, "tertiary");

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>Contact</h1>
      <p style={textStyles}>This is the Contact page</p>
    </div>
  );
}
