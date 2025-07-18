import {
  AppData,
  HomePageData,
  ExperiencePageData,
  ProjectsPageData,
  SocialLink,
  Technology,
  ProfileSummary,
  ProfessionalExperience,
  AcademicExperience,
  Project,
  GitHubProject,
} from "../data";

/**
 * Centralized mock data factory for consistent test data across the application
 */

// Base mock data builders
export const mockTechnologies = {
  tech_1: (): Technology => ({
    name: "Technology 1",
    url: "https://tech1.com",
    icon: "tech1.svg",
  }),

  tech_2: (): Technology => ({
    name: "Technology 2",
    url: "https://tech2.com",
    icon: "tech2.svg",
  }),

  tech_3: (): Technology => ({
    name: "Technology 3",
    url: "https://tech3.com",
    icon: "tech3.svg",
  }),

  tech_4: (): Technology => ({
    name: "Technology 4",
    url: "https://tech4.com",
    icon: "tech4.svg",
  }),
};

export const mockSocialLinks = {
  link_1: (): SocialLink => ({
    name: "Link 1",
    url: "https://link1.com",
    icon: "link1.svg",
  }),

  link_2: (): SocialLink => ({
    name: "Link 2",
    url: "https://link2.com",
    icon: "link2.svg",
  }),

  link_3: (): SocialLink => ({
    name: "Link 3",
    url: "https://link3.com",
    icon: "link3.svg",
  }),
};

export const mockProjects = {
  project_1: (): Project => ({
    title: "Project 1",
    description: "Project 1 description",
  }),

  project_2: (): Project => ({
    title: "Project 2",
    description: "Project 2 description",
  }),
};

export const mockGitHubProjects = {
  project_1: (): GitHubProject => ({
    title: "GitHub Project 1",
    description: "GitHub Project 1 description",
    url: "https://project1.com",
    image: "project1.jpg",
  }),

  project_2: (): GitHubProject => ({
    title: "GitHub Project 2",
    description: "GitHub Project 2 description",
    url: "https://project2.com",
    image: "project2.jpg",
  }),
};

// Complex data builders
export const mockProfileSummary = (): ProfileSummary => ({
  description: [
    "Profile summary line 1.",
    "Profile summary line 2.",
    "Profile summary line 3.",
  ],
});

export const mockProfessionalExperience = {
  experience_1: (): ProfessionalExperience => ({
    company: "Professional Company 1",
    position: "Professional Position 1",
    startDate: "01/01/2020",
    endDate: "Present",
    projects: [mockProjects.project_1()],
  }),

  experience_2: (): ProfessionalExperience => ({
    company: "Professional Company 2",
    position: "Professional Position 2",
    startDate: "01/01/2019",
    endDate: "12/31/2021",
    projects: [mockProjects.project_2()],
  }),

  noProjects: (): ProfessionalExperience => ({
    company: "No Projects Company",
    position: "No Projects Position",
    startDate: "01/01/2020",
    endDate: "Present",
    projects: [],
  }),
};

export const mockAcademicExperience = {
  university: (): AcademicExperience => ({
    institution: "University of Technology",
    degree: "Bachelor of Computer Science",
    startDate: "2018-09",
    endDate: "2022-05",
    projects: [
      {
        title: "Capstone Project",
        description: "Machine learning application for data analysis",
      },
    ],
  }),

  college: (): AcademicExperience => ({
    institution: "Tech College",
    degree: "Associate Degree in Software Development",
    startDate: "2016-09",
    endDate: "2018-05",
    projects: [mockProjects.project_1()],
  }),
};

// Array builders for common scenarios
export const createMockTechnologies = (count: number = 3): Technology[] => {
  const technologies = [
    mockTechnologies.tech_1(),
    mockTechnologies.tech_2(),
    mockTechnologies.tech_3(),
    mockTechnologies.tech_4(),
  ];
  return technologies.slice(0, count);
};

export const createMockSocialLinks = (count: number = 2): SocialLink[] => {
  const links = [
    mockSocialLinks.link_1(),
    mockSocialLinks.link_2(),
    mockSocialLinks.link_3(),
  ];
  return links.slice(0, count);
};

// Full page data builders
export const mockAppData = (): AppData => ({
  appHeaderText: "Test Portfolio",
  socialLinks: createMockSocialLinks(3),
});

export const mockHomePageData = (): HomePageData => ({
  profileSummary: mockProfileSummary(),
  technologies: createMockTechnologies(4),
});

export const mockExperiencePageData = (): ExperiencePageData => ({
  professionalExperience: [
    mockProfessionalExperience.experience_1(),
    mockProfessionalExperience.experience_2(),
  ],
  academicExperience: [mockAcademicExperience.university()],
});

export const mockProjectsPageData = (): ProjectsPageData => ({
  projects: [mockGitHubProjects.project_1(), mockGitHubProjects.project_2()],
});
