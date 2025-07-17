import { AppData, ExperiencePageData, GitHubProject, HomePageData, ProjectsPageData, SocialLink, Technology, Pages } from "./types";

// Common
const baseUrl = process.env.PUBLIC_URL || "";
const assetsDir = `${baseUrl}/assets`;
const dataDir = `${assetsDir}/data`;
const iconDir = `${assetsDir}/icons`;
const imageDir = `${assetsDir}/images`;

export const dataPath = (data: string) => `${dataDir}/${data}`;
export const iconPath = (icon: string) => `${iconDir}/${icon}`;
export const imagePath = (image: string) => `${imageDir}/${image}`;

// App data
export const getAppData = async (): Promise<AppData> => {
  const response = await fetch(dataPath("appData.json"));
  const rawData = await response.json();

  // Process the data to add full paths for icons
  return {
    ...rawData,
    socialLinks: rawData.socialLinks.map((link: SocialLink) => ({
      ...link,
      icon: iconPath(link.icon)
    }))
  };
};

export const pages: Pages[] = Object.values(Pages);

// Home page data
export const getHomePageData = async (): Promise<HomePageData> => {
  const response = await fetch(dataPath("homePageData.json"));
  const rawData = await response.json();

  // Process the data to add full paths for icons
  return {
    ...rawData,
    technologies: rawData.technologies.map((tech: Technology) => ({
      ...tech,
      icon: iconPath(tech.icon)
    }))
  };
};

// Experience page data
export const getExperiencePageData = async (): Promise<ExperiencePageData> => {
    const response = await fetch(dataPath("experiencePageData.json"));
    return await response.json();
};

// Projects page data
export const getProjectsPageData = async (): Promise<ProjectsPageData> => {
    const response = await fetch(dataPath("projectsPageData.json"));
    const rawData = await response.json();

    // Process the data to add full paths for images
    return {
        ...rawData,
        projects: rawData.projects.map((project: GitHubProject) => ({
            ...project,
            image: imagePath(project.image)
        }))
    };
};
