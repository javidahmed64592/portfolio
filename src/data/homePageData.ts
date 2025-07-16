import { dataPath, iconPath } from "./commonData";

export type ProfileSummary = {
  name: string;
  title: string;
  description: string[];
};

export type Technology = {
  name: string;
  url: string;
  icon: string;
};

export type HomePageData = {
  profileSummary: ProfileSummary;
  technologies: Technology[];
};

let homePageData: HomePageData | null = null;

export const getHomePageData = async (): Promise<HomePageData> => {
  if (homePageData) {
    return homePageData;
  }

  const response = await fetch(dataPath("homePageData.json"));
  const rawData = await response.json();

  // Process the data to add full paths for icons
  homePageData = {
    ...rawData,
    technologies: rawData.technologies.map((tech: Technology) => ({
      ...tech,
      icon: iconPath(tech.icon)
    }))
  };

  return homePageData!;
};
