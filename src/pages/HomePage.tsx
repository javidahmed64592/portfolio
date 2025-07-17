import { ProfileSummary, TechStack } from "../components/home";
import { useAppSelector } from "../store/hooks";
import { selectProfileSummary, selectTechnologies } from "../store/selectors";
import { createHeadingStyles, useTheme } from "../theme";

export default function HomePage() {
  const { theme } = useTheme();
  const profileSummary = useAppSelector(selectProfileSummary);
  const technologies = useAppSelector(selectTechnologies);

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

      <ProfileSummary profileSummary={profileSummary} />
      <TechStack technologies={technologies} />
    </div>
  );
}
