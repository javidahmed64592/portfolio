// App data types
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

// Home page types
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

// Experience page types
export type Project = {
    title: string;
    description: string;
};

export type ProfessionalExperience = {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    projects: Project[];
};

export type AcademicExperience = {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
    projects: Project[];
};

export type ExperiencePageData = {
    professionalExperience: ProfessionalExperience[];
    academicExperience: AcademicExperience[];
};

// Projects page types
export type GitHubProject = {
    title: string;
    description: string;
    url: string;
    image: string;
}

export type ProjectsPageData = {
    projects: GitHubProject[];
};
