import { Technology } from "../../../data";
import { useTheme, createCardStyles, createTextStyles } from "../../../theme";

interface TechnologyButtonProps {
  technology: Technology;
}

export default function TechnologyButton({ technology }: TechnologyButtonProps) {
  const { theme } = useTheme();

  const handleClick = () => {
    window.open(technology.url, "_blank", "noopener,noreferrer");
  };

  const techIconStyles = {
    ...createCardStyles(theme, "secondary"),
    padding: theme.spacing.sm,
    minWidth: "80px",
    textAlign: "center" as const,
    cursor: "pointer",
    transition: "transform 0.2s ease",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: theme.spacing.xs,
  };

  const iconStyles = {
    width: "32px",
    height: "32px",
    objectFit: "contain" as const,
  };

  return (
    <div style={techIconStyles} onClick={handleClick}>
      <img
        src={technology.icon}
        alt={`${technology.name} icon`}
        style={iconStyles}
        onError={(e) => {
          // Hide the image if it fails to load
          e.currentTarget.style.display = "none";
        }}
      />
      <span style={createTextStyles(theme, "secondary")}>{technology.name}</span>
    </div>
  );
}
