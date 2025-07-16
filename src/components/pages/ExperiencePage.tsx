import { useState, useEffect } from "react";
import { getExperiencePageData, type ExperiencePageData, type ProfessionalExperience, type AcademicExperience } from "../../data/experiencePageData";
import { useTheme, createHeadingStyles } from "../../theme";
import { ExperiencePanel } from "./experience";

export default function ExperiencePage() {
  const { theme } = useTheme();
  const [experienceData, setExperienceData] = useState<ExperiencePageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getExperiencePageData();
        setExperienceData(data);
      } catch (error) {
        console.error("Failed to load experience data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!experienceData) {
    return <div>Failed to load experience data</div>;
  }

  const headerStyles = {
    ...createHeadingStyles(theme, "background"),
    alignSelf: "flex-start",
    fontSize: theme.typography.fontSize.xxl,
    marginBottom: theme.spacing.md,
  };

  const mainContainerStyles = {
    width: "100%",
    margin: "0 auto",
  };

  const sectionsContainerStyles = {
    display: "flex",
    gap: theme.spacing.xl,
    alignItems: "flex-start",
    flexWrap: "wrap" as const,
  };

  const sectionStyles = {
    flex: 1,
    minWidth: "400px",
    marginBottom: theme.spacing.xl,
  };

  const sectionHeaderStyles = {
    ...createHeadingStyles(theme, "background"),
    fontSize: theme.typography.fontSize.xl,
    marginBottom: theme.spacing.lg,
    borderBottom: `2px solid ${theme.colors.primary}`,
    paddingBottom: theme.spacing.sm,
  };

  return (
    <div>
      {/* Header */}
      <h1 style={headerStyles}>Experience</h1>

      <div style={mainContainerStyles}>
        <div style={sectionsContainerStyles}>
          {/* Professional Experience Section */}
          <div style={sectionStyles}>
            <h2 style={sectionHeaderStyles}>Professional Experience</h2>

            {experienceData.professionalExperience.map((experience: ProfessionalExperience, index: number) => (
              <ExperiencePanel
                key={index}
                experience={experience}
                type="professional"
              />
            ))}
          </div>

          {/* Academic Experience Section */}
          <div style={sectionStyles}>
            <h2 style={sectionHeaderStyles}>Academic Experience</h2>

            {experienceData.academicExperience.map((experience: AcademicExperience, index: number) => (
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
