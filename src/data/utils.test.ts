import {
  mockAppData,
  mockExperiencePageData,
  mockHomePageData,
  mockProjectsPageData,
} from "../test-utils";
import { Pages } from "./types";
import {
  dataPath,
  iconPath,
  getAppData,
  pages,
  getHomePageData,
  getExperiencePageData,
  getProjectsPageData,
} from "./utils";

// Mock fetch globally
global.fetch = jest.fn();

describe("Utils", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Path helper functions", () => {
    describe("dataPath", () => {
      it("should return correct data path with base URL", () => {
        expect(dataPath("test.json")).toContain("/assets/data/test.json");
      });
    });

    describe("iconPath", () => {
      it("should return correct icon path with base URL", () => {
        expect(iconPath("test.svg")).toContain("/assets/icons/test.svg");
      });
    });
  });

  describe("pages constant", () => {
    it("should contain all Pages enum values", () => {
      expect(pages).toEqual([Pages.Home, Pages.Experience, Pages.Projects]);
    });
  });

  describe("Data fetching functions", () => {
    describe("getAppData", () => {
      it("should fetch and process app data successfully", async () => {
        const mockData = mockAppData();

        (fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => mockData,
        });

        const result = await getAppData();

        expect(fetch).toHaveBeenCalledWith("/assets/data/appData.json");
        expect(result).toEqual({
          appHeaderText: mockData.appHeaderText,
          socialLinks: mockData.socialLinks.map(link => ({
            ...link,
            icon: iconPath(link.icon),
          })),
        });
      });

      it("should throw error when fetch fails", async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
          ok: false,
          statusText: "Not Found",
        });

        await expect(getAppData()).rejects.toThrow(
          "Failed to fetch /assets/data/appData.json: Not Found"
        );
      });
    });

    describe("getHomePageData", () => {
      it("should fetch and process home page data successfully", async () => {
        const mockData = mockHomePageData();

        (fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => mockData,
        });

        const result = await getHomePageData();

        expect(fetch).toHaveBeenCalledWith("/assets/data/homePageData.json");
        expect(result).toEqual({
          profileSummary: mockData.profileSummary,
          technologies: mockData.technologies,
        });
      });

      it("should throw error when fetch fails", async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
          ok: false,
          statusText: "Internal Server Error",
        });

        await expect(getHomePageData()).rejects.toThrow(
          "Failed to fetch /assets/data/homePageData.json: Internal Server Error"
        );
      });
    });

    describe("getExperiencePageData", () => {
      it("should fetch experience page data successfully", async () => {
        const mockData = mockExperiencePageData();

        (fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => mockData,
        });

        const result = await getExperiencePageData();

        expect(fetch).toHaveBeenCalledWith(
          "/assets/data/experiencePageData.json"
        );
        expect(result).toEqual(mockData);
      });

      it("should throw error when fetch fails", async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
          ok: false,
          statusText: "Forbidden",
        });

        await expect(getExperiencePageData()).rejects.toThrow(
          "Failed to fetch /assets/data/experiencePageData.json: Forbidden"
        );
      });
    });

    describe("getProjectsPageData", () => {
      it("should fetch and process projects page data successfully", async () => {
        const mockData = mockProjectsPageData();

        (fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => mockData,
        });

        await getProjectsPageData();

        expect(fetch).toHaveBeenCalledWith(
          "/assets/data/projectsPageData.json"
        );
      });

      it("should throw error when fetch fails", async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
          ok: false,
          statusText: "Bad Request",
        });

        await expect(getProjectsPageData()).rejects.toThrow(
          "Failed to fetch /assets/data/projectsPageData.json: Bad Request"
        );
      });
    });

    describe("Error handling", () => {
      it("should handle network errors", async () => {
        (fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

        await expect(getAppData()).rejects.toThrow("Network error");
      });

      it("should handle JSON parsing errors", async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
          ok: true,
          json: async () => {
            throw new Error("Invalid JSON");
          },
        });

        await expect(getAppData()).rejects.toThrow("Invalid JSON");
      });
    });
  });
});
