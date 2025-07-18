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
export const mockSocialLinks = {
  github: (): SocialLink => ({
    name: "GitHub",
    url: "https://github.com/testuser",
    icon: "github.svg",
  }),

  linkedin: (): SocialLink => ({
    name: "LinkedIn",
    url: "https://linkedin.com/in/testuser",
    icon: "linkedin.svg",
  }),

  twitter: (): SocialLink => ({
    name: "Twitter",
    url: "https://twitter.com/testuser",
    icon: "twitter.svg",
  }),
};

export const mockTechnologies = {
  react: (): Technology => ({
    name: "React",
    url: "https://reactjs.org",
    icon: "https://example.com/react-icon.svg",
  }),

  typescript: (): Technology => ({
    name: "TypeScript",
    url: "https://typescriptlang.org",
    icon: "https://example.com/typescript-icon.svg",
  }),

  nodejs: (): Technology => ({
    name: "Node.js",
    url: "https://nodejs.org",
    icon: "https://example.com/nodejs-icon.svg",
  }),

  javascript: (): Technology => ({
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "https://example.com/javascript-icon.svg",
  }),
};

export const mockProjects = {
  basic: (): Project => ({
    title: "Test Project",
    description: "A test project description",
  }),

  detailed: (): Project => ({
    title: "Advanced Web Application",
    description:
      "Developed a complex web application using React and TypeScript with advanced features",
  }),
};

export const mockGitHubProjects = {
  portfolio: (): GitHubProject => ({
    title: "React Portfolio",
    description: "A modern portfolio website built with React and TypeScript",
    url: "https://github.com/testuser/react-portfolio",
    image: "https://example.com/portfolio-image.jpg",
  }),

  ecommerce: (): GitHubProject => ({
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with Node.js backend",
    url: "https://github.com/testuser/ecommerce-platform",
    image: "https://example.com/ecommerce-image.jpg",
  }),
};

// Complex data builders
export const mockProfileSummary = (): ProfileSummary => ({
  description: [
    "I am a passionate software developer with experience in modern web technologies.",
    "I enjoy building user-friendly applications and solving complex problems.",
    "Always eager to learn new technologies and improve my skills.",
  ],
});

export const mockProfessionalExperience = {
  senior: (): ProfessionalExperience => ({
    company: "Tech Corp",
    position: "Senior Software Engineer",
    startDate: "2022-01",
    endDate: "Present",
    projects: [
      mockProjects.detailed(),
      {
        title: "Project Beta",
        description: "Built a mobile app with React Native and Node.js backend",
      },
    ],
  }),

  junior: (): ProfessionalExperience => ({
    company: "StartUp Inc",
    position: "Junior Developer",
    startDate: "2021-06",
    endDate: "2021-12",
    projects: [mockProjects.basic()],
  }),

  noProjects: (): ProfessionalExperience => ({
    company: "Test Company",
    position: "Software Engineer",
    startDate: "2023-01",
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
    projects: [mockProjects.basic()],
  }),
};

// Full page data builders
export const mockAppData = (): AppData => ({
  appHeaderText: "Test Portfolio",
  socialLinks: [mockSocialLinks.github(), mockSocialLinks.linkedin()],
});

export const mockHomePageData = (): HomePageData => ({
  profileSummary: mockProfileSummary(),
  technologies: [
    mockTechnologies.react(),
    mockTechnologies.typescript(),
    mockTechnologies.nodejs(),
  ],
});

export const mockExperiencePageData = (): ExperiencePageData => ({
  professionalExperience: [
    mockProfessionalExperience.senior(),
    mockProfessionalExperience.junior(),
  ],
  academicExperience: [mockAcademicExperience.university()],
});

export const mockProjectsPageData = (): ProjectsPageData => ({
  projects: [mockGitHubProjects.portfolio(), mockGitHubProjects.ecommerce()],
});

// Configurable builders for custom scenarios
export const createMockAppData = (
  overrides: Partial<AppData> = {}
): AppData => ({
  ...mockAppData(),
  ...overrides,
});

export const createMockHomePageData = (
  overrides: Partial<HomePageData> = {}
): HomePageData => ({
  ...mockHomePageData(),
  ...overrides,
});

export const createMockExperiencePageData = (
  overrides: Partial<ExperiencePageData> = {}
): ExperiencePageData => ({
  ...mockExperiencePageData(),
  ...overrides,
});

export const createMockProjectsPageData = (
  overrides: Partial<ProjectsPageData> = {}
): ProjectsPageData => ({
  ...mockProjectsPageData(),
  ...overrides,
});

export const createMockTechnology = (
  overrides: Partial<Technology> = {}
): Technology => ({
  ...mockTechnologies.react(),
  ...overrides,
});

export const createMockSocialLink = (
  overrides: Partial<SocialLink> = {}
): SocialLink => ({
  ...mockSocialLinks.github(),
  ...overrides,
});

export const createMockGitHubProject = (
  overrides: Partial<GitHubProject> = {}
): GitHubProject => ({
  ...mockGitHubProjects.portfolio(),
  ...overrides,
});

export const createMockProfessionalExperience = (
  overrides: Partial<ProfessionalExperience> = {}
): ProfessionalExperience => ({
  ...mockProfessionalExperience.senior(),
  ...overrides,
});

export const createMockAcademicExperience = (
  overrides: Partial<AcademicExperience> = {}
): AcademicExperience => ({
  ...mockAcademicExperience.university(),
  ...overrides,
});

// Array builders for common scenarios
export const createMockTechnologies = (count: number = 3): Technology[] => {
  const technologies = [
    mockTechnologies.react(),
    mockTechnologies.typescript(),
    mockTechnologies.nodejs(),
    mockTechnologies.javascript(),
  ];
  return technologies.slice(0, count);
};

export const createMockSocialLinks = (count: number = 2): SocialLink[] => {
  const links = [
    mockSocialLinks.github(),
    mockSocialLinks.linkedin(),
    mockSocialLinks.twitter(),
  ];
  return links.slice(0, count);
};

export const createMockProjects = (count: number = 2): Project[] => {
  const projects = [
    mockProjects.detailed(),
    mockProjects.basic(),
    {
      title: "Mobile Application",
      description: "Cross-platform mobile app with React Native",
    },
  ];
  return projects.slice(0, count);
};
