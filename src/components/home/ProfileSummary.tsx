import { useAppSelector } from "../../store/hooks";
import { selectProfileSummary } from "../../store/selectors";
import { useTheme, createTextStyles, createCardStyles } from "../../theme";

export default function ProfileSummary() {
  const { theme } = useTheme();
  const profileSummary = useAppSelector(selectProfileSummary);

  if (!profileSummary) {
    return null;
  }

  const profileSummaryStyles = {
    ...createCardStyles(theme, "secondary"),
    width: "100%",
    maxWidth: "800px",
    textAlign: "left" as const,
    marginBottom: theme.spacing.lg,
  };

  const profileTextStyles = {
    ...createTextStyles(theme, "tertiary"),
    lineHeight: 1.6,
    fontSize: theme.typography.fontSize.md,
  };

  return (
    <div style={profileSummaryStyles}>
    <p style={profileTextStyles}>
        {profileSummary.description.map((paragraph: string, index: number) => (
        <span key={index}>
            {paragraph}
            {index < profileSummary.description.length - 1 && <><br /><br /></>}
        </span>
        ))}
    </p>
    </div>
  );
}
