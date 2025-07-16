import { useTheme, createCardStyles, createTextStyles } from "../../../theme";

interface TechnologyButtonProps {
  technology: {
    name: string;
  };
}

export default function TechnologyButton({ technology }: TechnologyButtonProps) {
  const { theme } = useTheme();

  const techIconStyles = {
    ...createCardStyles(theme, "secondary"),
    padding: theme.spacing.sm,
    minWidth: "80px",
    textAlign: "center" as const,
    cursor: "pointer",
    transition: "transform 0.2s ease",
  };

  return (
    <div style={techIconStyles}>
      <span style={createTextStyles(theme, "secondary")}>{technology.name}</span>
    </div>
  );
}
