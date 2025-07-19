import { ExperiencePanel } from "../components/experience";
import { ProfessionalExperience, AcademicExperience } from "../data";
import { useTheme, createHeadingStyles } from "../theme";

interface ExperiencePageProps {
  professionalExperience: ProfessionalExperience[];
  academicExperience: AcademicExperience[];
}

export default function ExperiencePage({
  professionalExperience,
  academicExperience,
}: ExperiencePageProps) {
  const { theme } = useTheme();

  const headerStyles = {
    ...createHeadingStyles(theme, "background"),
    alignSelf: "flex-start",
    fontSize: theme.typography.fontSize.xxl,
    marginBottom: theme.spacing.lg,
    borderBottom: `2px solid ${theme.colors.primary}`,
    paddingBottom: theme.spacing.sm,
  };

  const mainContainerStyles = {
    width: "100%",
    margin: "0 auto",
  };

  const sectionsContainerStyles = {
    display: "flex",
    gap: theme.spacing.lg,
    alignItems: "flex-start",
    flexWrap: "wrap" as const,
  };

  const sectionStyles = {
    flex: 1,
    minWidth: "400px",
    marginBottom: theme.spacing.md,
  };

  return (
    <div>
      <div style={mainContainerStyles}>
        <div style={sectionsContainerStyles}>
          {/* Professional Experience Section */}
          <div style={sectionStyles}>
            <h1 style={headerStyles}>Professional Experience</h1>

            {professionalExperience.map((experience, index) => (
              <ExperiencePanel
                key={index}
                experience={experience}
                type="professional"
              />
            ))}
          </div>

          {/* Academic Experience Section */}
          <div style={sectionStyles}>
            <h1 style={headerStyles}>Academic Experience</h1>

            {academicExperience.map((experience, index) => (
              <ExperiencePanel
                key={index}
                experience={experience}
                type="academic"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
