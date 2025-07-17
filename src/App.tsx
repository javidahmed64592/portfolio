import React, { useEffect, useState } from "react";
import { CustomAppBar, Footer } from "./components/common";
import { pages, Pages } from "./data";
import { HomePage, ExperiencePage, ProjectsPage } from "./pages";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { selectAcademicExperience, selectAllDataLoading, selectAppHeaderText, selectProfessionalExperience, selectProfileSummary, selectProjects, selectSocialLinks, selectTechnologies } from "./store/selectors";
import { fetchAppData } from "./store/slices/appDataSlice";
import { fetchExperiencePageData } from "./store/slices/experiencePageDataSlice";
import { fetchHomePageData } from "./store/slices/homePageDataSlice";
import { fetchProjectsPageData } from "./store/slices/projectsPageDataSlice";
import { useTheme, createAppStyles, createPageStyles } from "./theme";

function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  // Common selectors
  const currentPage = useAppSelector((state) => state.page.currentPage);
  const allDataLoading = useAppSelector(selectAllDataLoading);
  const appHeaderText = useAppSelector(selectAppHeaderText);
  const socialLinks = useAppSelector(selectSocialLinks);

  // Home page selectors
  const profileSummary = useAppSelector(selectProfileSummary);
  const technologies = useAppSelector(selectTechnologies);

  // Experience page selectors
  const professionalExperience = useAppSelector(selectProfessionalExperience);
  const academicExperience = useAppSelector(selectAcademicExperience);

  // Projects page selectors
  const projects = useAppSelector(selectProjects);

  // State for rendered page content
  const [pageContent, setPageContent] = useState<React.JSX.Element | null>(null);

  useEffect(() => {
    dispatch(fetchAppData());
    dispatch(fetchHomePageData());
    dispatch(fetchExperiencePageData());
    dispatch(fetchProjectsPageData());
  }, [dispatch]);

  // Update page content when loading state or page changes
  useEffect(() => {
    if (allDataLoading) {
      setPageContent(
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: theme.typography.fontSize.lg,
          color: theme.colors.text.onBackground
        }}>
          Loading...
        </div>
      );
      return;
    }

    let content: React.JSX.Element;
    switch (currentPage) {
      case Pages.Home:
        content = <HomePage profileSummary={profileSummary} technologies={technologies} />;
        break;
      case Pages.Experience:
        content = <ExperiencePage professionalExperience={professionalExperience} academicExperience={academicExperience} />;
        break;
      case Pages.Projects:
        content = <ProjectsPage projects={projects} />;
        break;
      default:
        content = <div>Page not found</div>;
        break;
    }

    setPageContent(content);
  }, [allDataLoading, currentPage, theme, profileSummary, technologies, professionalExperience, academicExperience, projects]);

  const appStyles = createAppStyles(theme);
  const pageStyles = createPageStyles(theme);

  return (
    <div style={appStyles}>
      {/* Custom App Bar */}
      <CustomAppBar appHeaderText={appHeaderText} pages={pages} />

      {/* Page Content */}
      <div style={pageStyles}>
        {pageContent}
      </div>

      {/* Footer */}
      <Footer socialLinks={socialLinks} />
    </div>
  );
}

export default App;
