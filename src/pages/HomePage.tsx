import { ProfileSummaryDisplay, TechStack } from "../components/home";
import { ProfileSummary, Technology } from "../data";
import { createHeadingStyles, useTheme } from "../theme";

interface HomePageProps {
  profileSummary: ProfileSummary;
  technologies: Technology[];
}

export default function HomePage({
  profileSummary,
  technologies,
}: HomePageProps) {
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

      <ProfileSummaryDisplay profileSummary={profileSummary} />
      <TechStack technologies={technologies} />
    </div>
  );
}
