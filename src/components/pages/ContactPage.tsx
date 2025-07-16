import { useTheme, createHeadingStyles, createTextStyles } from "../../theme";

export default function ContactPage() {
  const { theme } = useTheme();

  const headingStyles = createHeadingStyles(theme, "background");
  const textStyles = createTextStyles(theme, "background");

  return (
    <div>
      <h1 style={headingStyles}>Contact</h1>
      <p style={textStyles}>This is the Contact page</p>
    </div>
  );
}
