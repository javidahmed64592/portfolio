import {
  mockAcademicExperience,
  mockAppData,
  mockExperiencePageData,
  mockGitHubProjects,
  mockHomePageData,
  mockProfessionalExperience,
  mockProfileSummary,
  mockProjects,
  mockProjectsPageData,
  mockSocialLinks,
  mockTechnologies,
} from "../test-utils";
import { Pages } from "./types";

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
      const result = mockSocialLinks.link_1();
      expect(result).toEqual({
        name: "Link 1",
        url: "https://link1.com",
        icon: "link1.svg",
      });
    });
  });

  describe("AppData type", () => {
    it("should have correct structure", () => {
      const result = mockAppData();
      expect(result).toEqual({
        appHeaderText: "Test Portfolio",
        socialLinks: [
          { name: "Link 1", url: "https://link1.com", icon: "link1.svg" },
          { name: "Link 2", url: "https://link2.com", icon: "link2.svg" },
          { name: "Link 3", url: "https://link3.com", icon: "link3.svg" },
        ],
      });
    });
  });

  describe("ProfileSummary type", () => {
    it("should have correct structure", () => {
      const result = mockProfileSummary();

      expect(result).toEqual({
        description: [
          "Profile summary line 1.",
          "Profile summary line 2.",
          "Profile summary line 3.",
        ],
      });
    });
  });

  describe("Technology type", () => {
    it("should have correct structure", () => {
      const result = mockTechnologies.tech_1();
      expect(result).toEqual({
        name: "Technology 1",
        url: "https://tech1.com",
      });
    });
  });

  describe("HomePageData type", () => {
    it("should have correct structure", () => {
      const result = mockHomePageData();
      expect(result).toEqual({
        profileSummary: {
          description: [
            "Profile summary line 1.",
            "Profile summary line 2.",
            "Profile summary line 3.",
          ],
        },
        technologies: [
          { name: "Technology 1", url: "https://tech1.com" },
          { name: "Technology 2", url: "https://tech2.com" },
          { name: "Technology 3", url: "https://tech3.com" },
          { name: "Technology 4", url: "https://tech4.com" },
        ],
      });
    });
  });

  describe("Project type", () => {
    it("should have correct structure", () => {
      const result = mockProjects.project_1();
      expect(result).toEqual({
        title: "Project 1",
        description: "Project 1 description",
      });
    });
  });

  describe("ProfessionalExperience type", () => {
    it("should have correct structure", () => {
      const result = mockProfessionalExperience.experience_1();
      expect(result).toEqual({
        company: "Professional Company 1",
        position: "Professional Position 1",
        startDate: "01/01/2020",
        endDate: "Present",
        projects: [
          { title: "Project 1", description: "Project 1 description" },
        ],
      });
    });
  });

  describe("AcademicExperience type", () => {
    it("should have correct structure", () => {
      const result = mockAcademicExperience.experience_1();
      expect(result).toEqual({
        institution: "Academic Institution 1",
        degree: "Academic Degree 1",
        startDate: "01/01/2018",
        endDate: "01/01/2022",
        projects: [
          { title: "Project 2", description: "Project 2 description" },
        ],
      });
    });
  });

  describe("ExperiencePageData type", () => {
    it("should have correct structure", () => {
      const result = mockExperiencePageData();
      expect(result).toEqual({
        professionalExperience: [
          {
            company: "Professional Company 1",
            position: "Professional Position 1",
            startDate: "01/01/2020",
            endDate: "Present",
            projects: [
              { title: "Project 1", description: "Project 1 description" },
            ],
          },
        ],
        academicExperience: [
          {
            institution: "Academic Institution 1",
            degree: "Academic Degree 1",
            startDate: "01/01/2018",
            endDate: "01/01/2022",
            projects: [
              { title: "Project 2", description: "Project 2 description" },
            ],
          },
        ],
      });
    });
  });

  describe("GitHubProject type", () => {
    it("should have correct structure", () => {
      const result = mockGitHubProjects.project_1();
      expect(result).toEqual({
        title: "GitHub Project 1",
        description: "GitHub Project 1 description",
        url: "https://project1.com",
      });
    });
  });

  describe("ProjectsPageData type", () => {
    it("should have correct structure", () => {
      const result = mockProjectsPageData();
      expect(result).toEqual({
        projects: [
          {
            title: "GitHub Project 1",
            description: "GitHub Project 1 description",
            url: "https://project1.com",
          },
          {
            title: "GitHub Project 2",
            description: "GitHub Project 2 description",
            url: "https://project2.com",
          },
        ],
      });
    });
  });
});
