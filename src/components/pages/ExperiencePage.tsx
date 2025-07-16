import { useTheme, createHeadingStyles, createTextStyles } from "../../theme";

export default function ExperiencePage() {
  const { theme } = useTheme();

  const headingStyles = createHeadingStyles(theme, "background");
  const textStyles = createTextStyles(theme, "background");

  return (
    <div>
      <h1 style={headingStyles}>Experience</h1>
      <p style={textStyles}>This is the Experience page</p>
    </div>
  );
}
