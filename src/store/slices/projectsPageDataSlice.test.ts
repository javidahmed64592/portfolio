import { ProjectsPageData } from "../../data";
import projectsPageDataReducer, {
  fetchProjectsPageData,
  clearError,
} from "./projectsPageDataSlice";

describe("projectsPageDataSlice", () => {
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };

  const mockProjectsPageData: ProjectsPageData = {
    projects: [
      {
        title: "Test Project",
        description: "Test project description",
        url: "https://github.com/test/project",
        image: "project.png",
      },
    ],
  };

  describe("initial state", () => {
    it("should return the initial state when no action is provided", () => {
      const result = projectsPageDataReducer(undefined, { type: "unknown" });
      expect(result).toEqual(initialState);
    });
  });

  describe("clearError action", () => {
    it("should clear the error", () => {
      const stateWithError = {
        data: null,
        loading: false,
        error: "Some error message",
      };
      const action = clearError();
      const result = projectsPageDataReducer(stateWithError, action);
      expect(result.error).toBeNull();
      expect(result.data).toBeNull();
      expect(result.loading).toBe(false);
    });
  });

  describe("fetchProjectsPageData async thunk reducers", () => {
    it("should handle pending state", () => {
      const action = { type: fetchProjectsPageData.pending.type };
      const result = projectsPageDataReducer(initialState, action);
      expect(result.loading).toBe(true);
      expect(result.error).toBeNull();
      expect(result.data).toBeNull();
    });

    it("should handle fulfilled state", () => {
      const action = {
        type: fetchProjectsPageData.fulfilled.type,
        payload: mockProjectsPageData,
      };
      const result = projectsPageDataReducer(
        { data: null, loading: true, error: null },
        action
      );
      expect(result.loading).toBe(false);
      expect(result.error).toBeNull();
      expect(result.data).toEqual(mockProjectsPageData);
    });

    it("should handle rejected state with error message", () => {
      const errorMessage = "Network error";
      const action = {
        type: fetchProjectsPageData.rejected.type,
        error: { message: errorMessage },
      };
      const result = projectsPageDataReducer(
        { data: null, loading: true, error: null },
        action
      );
      expect(result.loading).toBe(false);
      expect(result.error).toBe(errorMessage);
      expect(result.data).toBeNull();
    });

    it("should handle rejected state with default error message", () => {
      const action = {
        type: fetchProjectsPageData.rejected.type,
        error: {},
      };
      const result = projectsPageDataReducer(
        { data: null, loading: true, error: null },
        action
      );
      expect(result.loading).toBe(false);
      expect(result.error).toBe("Failed to fetch projects page data");
      expect(result.data).toBeNull();
    });
  });
});
