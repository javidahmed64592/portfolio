import { CustomAppBar } from "./components/navigation";
import { HomePage, ExperiencePage, ProjectsPage } from "./components/pages";
import SocialLinksFooter from "./components/pages/common/SocialLinksFooter";
import { Pages } from "./data/appData";
import { useAppSelector } from "./store/hooks";
import { useTheme, createAppStyles, createPageStyles } from "./theme";

function App() {
  const currentPage = useAppSelector((state) => state.page.currentPage);
  const { theme } = useTheme();

  const renderPageContent = () => {
    switch (currentPage) {
      case Pages.Home:
        return <HomePage />;
      case Pages.Experience:
        return <ExperiencePage />;
      case Pages.Projects:
        return <ProjectsPage />;
      default:
        return <div>Page not found</div>;
    }
  };

  const appStyles = createAppStyles(theme);
  const pageStyles = createPageStyles(theme);

  return (
    <div style={appStyles}>
      {/* Custom App Bar */}
      <CustomAppBar />

      {/* Page Content */}
      <div style={pageStyles}>
        {renderPageContent()}
      </div>

      {/* Social Links Footer */}
      <SocialLinksFooter />
    </div>
  );
}

export default App;
