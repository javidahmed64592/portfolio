import { useState, useEffect } from "react";
import { CustomAppBar } from "./components/navigation";
import { HomePage, ExperiencePage, ProjectsPage } from "./components/pages";
import { SocialLinkButton } from "./components/pages/common";
import { Pages, getSocialLinks, type SocialLink } from "./data/appData";
import { useAppSelector } from "./store/hooks";
import { useTheme, createAppStyles, createPageStyles } from "./theme";

function App() {
  const currentPage = useAppSelector((state) => state.page.currentPage);
  const { theme } = useTheme();
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const socialLinksData = await getSocialLinks();
        setSocialLinks(socialLinksData);
      } catch (error) {
        console.error("Failed to load social links:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

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

  const socialLinksFooterStyles = {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: theme.spacing.sm,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "auto",
    paddingTop: theme.spacing.lg,
    borderTop: `1px solid ${theme.colors.border}`,
  };

  return (
    <div style={appStyles}>
      {/* Custom App Bar */}
      <CustomAppBar />

      {/* Page Content */}
      <div style={pageStyles}>
        {renderPageContent()}
      </div>

      {/* Social Links Footer */}
      {!loading && (
        <div style={socialLinksFooterStyles}>
          {socialLinks.map((link: SocialLink) => (
            <SocialLinkButton key={link.name} link={link} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
