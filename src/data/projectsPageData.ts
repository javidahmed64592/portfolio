import { imagePath } from "./commonData";

type GitHubProject = {
    title: string;
    description: string;
    url: string;
    image: string;
}

type ProjectsPageData = {
    projects: GitHubProject[];
};

export const projectsPageData: ProjectsPageData = {
    projects: [
        {
            title: "Portfolio Website",
            description: "A personal portfolio website showcasing my skills and projects.",
            url: "https://github.com/username/portfolio",
            image: imagePath("portfolio.png")
        },
        {
            title: "Project 2",
            description: "Description for project 2.",
            url: "https://github.com/username/project2",
            image: imagePath("project2.png")
        },
        {
            title: "Project 3",
            description: "Description for project 3.",
            url: "https://github.com/username/project3",
            image: imagePath("project3.png")
        }
    ]
};
