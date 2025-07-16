import { dataPath, imagePath } from "./commonData";

export type GitHubProject = {
    title: string;
    description: string;
    url: string;
    image: string;
}

export type ProjectsPageData = {
    projects: GitHubProject[];
};

let projectsPageData: ProjectsPageData | null = null;

export const getProjectsPageData = async (): Promise<ProjectsPageData> => {
    if (projectsPageData) {
        return projectsPageData;
    }

    const response = await fetch(dataPath("projectsPageData.json"));
    const rawData = await response.json();

    // Process the data to add full paths for images
    projectsPageData = {
        ...rawData,
        projects: rawData.projects.map((project: GitHubProject) => ({
            ...project,
            image: imagePath(project.image)
        }))
    };

    return projectsPageData!;
};
