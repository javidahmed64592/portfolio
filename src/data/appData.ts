import { dataPath } from "./commonData";

export enum Pages {
  Home = "Home",
  Experience = "Experience",
  Projects = "Projects",
}

export type AppData = {
  appHeaderText: string;
};

let appData: AppData | null = null;

export const getAppData = async (): Promise<AppData> => {
  if (appData) {
    return appData;
  }

  const response = await fetch(dataPath("appData.json"));
  appData = await response.json();
  return appData!;
};

export const pages = Object.values(Pages);

export const getAppHeaderText = async (): Promise<string> => {
  const data = await getAppData();
  return data.appHeaderText;
};
