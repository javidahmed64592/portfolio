import { CustomAppBar } from "./components/navigation";
import { useAppSelector } from "./store/hooks";
import { Pages } from "./data/appData";
import { HomePage, ExperiencePage, ProjectsPage, ContactPage } from "./components/pages";

function App() {
  const currentPage = useAppSelector((state) => state.page.currentPage);

  const renderPageContent = () => {
    switch (currentPage) {
      case Pages.Home:
        return <HomePage />;
      case Pages.Experience:
        return <ExperiencePage />;
      case Pages.Projects:
        return <ProjectsPage />;
      case Pages.Contact:
        return <ContactPage />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="App">
      <CustomAppBar />
      {renderPageContent()}
    </div>
  );
}

export default App;
