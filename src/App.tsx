import { useEffect } from "react";
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

  useEffect(() => {
    dispatch(fetchAppData());
    dispatch(fetchHomePageData());
    dispatch(fetchExperiencePageData());
    dispatch(fetchProjectsPageData());
  }, [dispatch]);

  const renderPageContent = () => {
    if (allDataLoading) {
      return (
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
    }

    switch (currentPage) {
      case Pages.Home:
        return <HomePage profileSummary={profileSummary} technologies={technologies} />;
      case Pages.Experience:
        return <ExperiencePage professionalExperience={professionalExperience} academicExperience={academicExperience} />;
      case Pages.Projects:
        return <ProjectsPage projects={projects} />;
      default:
        return <div>Page not found</div>;
    }
  };

  const appStyles = createAppStyles(theme);
  const pageStyles = createPageStyles(theme);

  return (
    <div style={appStyles}>
      {/* Custom App Bar */}
      <CustomAppBar appHeaderText={appHeaderText} pages={pages} />

      {/* Page Content */}
      <div style={pageStyles}>
        {renderPageContent()}
      </div>

      {/* Footer */}
      <Footer socialLinks={socialLinks} />
    </div>
  );
}

export default App;
