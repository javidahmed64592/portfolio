import { ProfileSummary, TechStack } from "../components/home";
import { createHeadingStyles, useTheme } from "../theme";

export default function HomePage() {
  const { theme } = useTheme();

  const headerStyles = {
      ...createHeadingStyles(theme, "background"),
      alignSelf: "flex-start",
      fontSize: theme.typography.fontSize.xxl,
      marginBottom: theme.spacing.md,
    };

  return (
    <div>
      {/* Header */}
      <h1 style={headerStyles}>Javid Ahmed (Software Developer)</h1>

      <ProfileSummary />
      <TechStack />
    </div>
  );
}
