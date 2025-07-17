import { type ProfileSummary } from "../../data/types";
import { useTheme, createTextStyles, createCardStyles } from "../../theme";

interface ProfileSummaryProps {
  profileSummary: ProfileSummary;
}

export default function ProfileSummaryDisplay({ profileSummary }: ProfileSummaryProps) {
  const { theme } = useTheme();

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
