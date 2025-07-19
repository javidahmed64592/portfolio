import {
  Pages,
  SocialLink,
  AppData,
  ProfileSummary,
  Technology,
  HomePageData,
  Project,
  ProfessionalExperience,
  AcademicExperience,
  ExperiencePageData,
  GitHubProject,
  ProjectsPageData,
} from "./types";

describe("Types", () => {
  describe("Pages enum", () => {
    it("should contain all expected page values", () => {
      expect(Pages.Home).toBe("Home");
      expect(Pages.Experience).toBe("Experience");
      expect(Pages.Projects).toBe("Projects");
    });
  });

  describe("SocialLink type", () => {
    it("should have correct structure", () => {
      const createSocialLink = (
        name: string,
        url: string,
        icon: string
      ): SocialLink => ({
        name,
        url,
        icon,
      });

      const result = createSocialLink(
        "LinkedIn",
        "https://linkedin.com",
        "linkedin.svg"
      );
      expect(result).toEqual({
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: "linkedin.svg",
      });
    });
  });

  describe("AppData type", () => {
    it("should have correct structure", () => {
      const createAppData = (
        appHeaderText: string,
        socialLinks: SocialLink[]
      ): AppData => ({
        appHeaderText,
        socialLinks,
      });

      const result = createAppData("My Portfolio", [
        { name: "GitHub", url: "https://github.com", icon: "github.svg" },
        { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin.svg" },
      ]);
      expect(result).toEqual({
        appHeaderText: "My Portfolio",
        socialLinks: [
          { name: "GitHub", url: "https://github.com", icon: "github.svg" },
          {
            name: "LinkedIn",
            url: "https://linkedin.com",
            icon: "linkedin.svg",
          },
        ],
      });
    });
  });

  describe("ProfileSummary type", () => {
    it("should have correct structure", () => {
      const createProfileSummary = (description: string[]): ProfileSummary => ({
        description,
      });

      const result = createProfileSummary(["Line 1", "Line 2", "Line 3"]);

      expect(result).toEqual({
        description: ["Line 1", "Line 2", "Line 3"],
      });
    });
  });

  describe("Technology type", () => {
    it("should have correct structure", () => {
      const createTechnology = (name: string, url: string): Technology => ({
        name,
        url,
      });

      const result = createTechnology("TypeScript", "https://typescript.org");
      expect(result).toEqual({
        name: "TypeScript",
        url: "https://typescript.org",
      });
    });
  });

  describe("HomePageData type", () => {
    it("should have correct structure", () => {
      const createHomePageData = (
        profileSummary: ProfileSummary,
        technologies: Technology[]
      ): HomePageData => ({
        profileSummary,
        technologies,
      });

      const result = createHomePageData({ description: ["I'm a developer"] }, [
        { name: "React", url: "https://reactjs.org" },
        {
          name: "TypeScript",
          url: "https://typescript.org",
        },
      ]);
      expect(result).toEqual({
        profileSummary: { description: ["I'm a developer"] },
        technologies: [
          { name: "React", url: "https://reactjs.org" },
          {
            name: "TypeScript",
            url: "https://typescript.org",
          },
        ],
      });
    });
  });

  describe("Project type", () => {
    it("should have correct structure", () => {
      const createProject = (title: string, description: string): Project => ({
        title,
        description,
      });

      const result = createProject("My App", "A great application");
      expect(result).toEqual({
        title: "My App",
        description: "A great application",
      });
    });
  });

  describe("ProfessionalExperience type", () => {
    it("should have correct structure", () => {
      const createProfessionalExperience = (
        company: string,
        position: string,
        startDate: string,
        endDate: string,
        projects: Project[]
      ): ProfessionalExperience => ({
        company,
        position,
        startDate,
        endDate,
        projects,
      });

      const result = createProfessionalExperience(
        "Tech Corp",
        "Software Developer",
        "2022-01-01",
        "2023-12-31",
        [
          { title: "Project 1", description: "Description 1" },
          { title: "Project 2", description: "Description 2" },
        ]
      );
      expect(result).toEqual({
        company: "Tech Corp",
        position: "Software Developer",
        startDate: "2022-01-01",
        endDate: "2023-12-31",
        projects: [
          { title: "Project 1", description: "Description 1" },
          { title: "Project 2", description: "Description 2" },
        ],
      });
    });
  });

  describe("AcademicExperience type", () => {
    it("should have correct structure", () => {
      const createAcademicExperience = (
        institution: string,
        degree: string,
        startDate: string,
        endDate: string,
        projects: Project[]
      ): AcademicExperience => ({
        institution,
        degree,
        startDate,
        endDate,
        projects,
      });

      const result = createAcademicExperience(
        "University of Tech",
        "Computer Science",
        "2018-09-01",
        "2022-06-30",
        [{ title: "Thesis Project", description: "My thesis work" }]
      );
      expect(result).toEqual({
        institution: "University of Tech",
        degree: "Computer Science",
        startDate: "2018-09-01",
        endDate: "2022-06-30",
        projects: [{ title: "Thesis Project", description: "My thesis work" }],
      });
    });
  });

  describe("ExperiencePageData type", () => {
    it("should have correct structure", () => {
      const createExperiencePageData = (
        professionalExperience: ProfessionalExperience[],
        academicExperience: AcademicExperience[]
      ): ExperiencePageData => ({
        professionalExperience,
        academicExperience,
      });

      const result = createExperiencePageData(
        [
          {
            company: "Tech Corp",
            position: "Developer",
            startDate: "2022-01-01",
            endDate: "2023-12-31",
            projects: [],
          },
        ],
        [
          {
            institution: "University",
            degree: "CS",
            startDate: "2018-09-01",
            endDate: "2022-06-30",
            projects: [],
          },
        ]
      );
      expect(result).toEqual({
        professionalExperience: [
          {
            company: "Tech Corp",
            position: "Developer",
            startDate: "2022-01-01",
            endDate: "2023-12-31",
            projects: [],
          },
        ],
        academicExperience: [
          {
            institution: "University",
            degree: "CS",
            startDate: "2018-09-01",
            endDate: "2022-06-30",
            projects: [],
          },
        ],
      });
    });
  });

  describe("GitHubProject type", () => {
    it("should have correct structure", () => {
      const createGitHubProject = (
        title: string,
        description: string,
        url: string
      ): GitHubProject => ({
        title,
        description,
        url,
      });

      const result = createGitHubProject(
        "Portfolio",
        "My portfolio site",
        "https://github.com/user/portfolio"
      );
      expect(result).toEqual({
        title: "Portfolio",
        description: "My portfolio site",
        url: "https://github.com/user/portfolio",
      });
    });
  });

  describe("ProjectsPageData type", () => {
    it("should have correct structure", () => {
      const createProjectsPageData = (
        projects: GitHubProject[]
      ): ProjectsPageData => ({
        projects,
      });

      const result = createProjectsPageData([
        {
          title: "Project 1",
          description: "Description 1",
          url: "https://github.com/user/project1",
        },
        {
          title: "Project 2",
          description: "Description 2",
          url: "https://github.com/user/project2",
        },
      ]);
      expect(result).toEqual({
        projects: [
          {
            title: "Project 1",
            description: "Description 1",
            url: "https://github.com/user/project1",
          },
          {
            title: "Project 2",
            description: "Description 2",
            url: "https://github.com/user/project2",
          },
        ],
      });
    });
  });
});
