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
    mockProfessionalExperience.senior(),
    mockProfessionalExperience.junior(),
  ],
  academicExperience: [mockAcademicExperience.university()],
});

export const mockProjectsPageData = (): ProjectsPageData => ({
  projects: [mockGitHubProjects.portfolio(), mockGitHubProjects.ecommerce()],
});
