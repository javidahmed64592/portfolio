import { dataPath, iconPath } from "./commonData";

export enum Pages {
  Home = "Home",
  Experience = "Experience",
  Projects = "Projects",
}

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export type AppData = {
  appHeaderText: string;
  socialLinks: SocialLink[];
};

let appData: AppData | null = null;

export const getAppData = async (): Promise<AppData> => {
  if (appData) {
    return appData;
  }

  const response = await fetch(dataPath("appData.json"));
  const rawData = await response.json();

  // Process the data to add full paths for icons
  appData = {
    ...rawData,
    socialLinks: rawData.socialLinks.map((link: SocialLink) => ({
      ...link,
      icon: iconPath(link.icon)
    }))
  };

  return appData!;
};

export const pages = Object.values(Pages);
