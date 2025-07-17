import { useAppSelector } from "../../store/hooks";
import { selectTechnologies } from "../../store/selectors";
import { useTheme, createHeadingStyles } from "../../theme";
import { TechnologyButton } from "./";

export default function TechStack() {
  const { theme } = useTheme();
  const technologies = useAppSelector(selectTechnologies);

  const sectionTitleStyles = {
    ...createHeadingStyles(theme, "background"),
    fontSize: theme.typography.fontSize.lg,
    marginBottom: theme.spacing.md,
    alignSelf: "flex-start",
  };

  const techIconsContainerStyles = {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: theme.spacing.md,
    justifyContent: "center",
    marginBottom: theme.spacing.lg,
    width: "100%",
  };

  return (
    <div style={{ width: "100%" }}>
      <h2 style={sectionTitleStyles}>Technologies & Skills</h2>
      <div style={techIconsContainerStyles}>
        {technologies.map((tech) => (
          <TechnologyButton key={tech.name} technology={tech} />
        ))}
      </div>
    </div>
  );
}
