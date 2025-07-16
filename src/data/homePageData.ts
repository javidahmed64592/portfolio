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

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export type HomePageData = {
  profileSummary: ProfileSummary;
  technologies: Technology[];
  socialLinks: SocialLink[];
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
    })),
    socialLinks: rawData.socialLinks.map((link: SocialLink) => ({
      ...link,
      icon: iconPath(link.icon)
    }))
  };

  return homePageData!;
};
