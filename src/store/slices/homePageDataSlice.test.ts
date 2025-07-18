import { HomePageData } from "../../data";
import homePageDataReducer, {
  fetchHomePageData,
  clearError,
} from "./homePageDataSlice";

describe("homePageDataSlice", () => {
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };

  const mockHomePageData: HomePageData = {
    profileSummary: {
      description: ["Test description line 1", "Test description line 2"],
    },
    technologies: [
      {
        name: "React",
        url: "https://reactjs.org",
        icon: "react.svg",
      },
    ],
  };

  describe("initial state", () => {
    it("should return the initial state when no action is provided", () => {
      const result = homePageDataReducer(undefined, { type: "unknown" });
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
      const result = homePageDataReducer(stateWithError, action);
      expect(result.error).toBeNull();
      expect(result.data).toBeNull();
      expect(result.loading).toBe(false);
    });
  });

  describe("fetchHomePageData async thunk reducers", () => {
    it("should handle pending state", () => {
      const action = { type: fetchHomePageData.pending.type };
      const result = homePageDataReducer(initialState, action);
      expect(result.loading).toBe(true);
      expect(result.error).toBeNull();
      expect(result.data).toBeNull();
    });

    it("should handle fulfilled state", () => {
      const action = {
        type: fetchHomePageData.fulfilled.type,
        payload: mockHomePageData,
      };
      const result = homePageDataReducer(
        { data: null, loading: true, error: null },
        action
      );
      expect(result.loading).toBe(false);
      expect(result.error).toBeNull();
      expect(result.data).toEqual(mockHomePageData);
    });

    it("should handle rejected state with error message", () => {
      const errorMessage = "Network error";
      const action = {
        type: fetchHomePageData.rejected.type,
        error: { message: errorMessage },
      };
      const result = homePageDataReducer(
        { data: null, loading: true, error: null },
        action
      );
      expect(result.loading).toBe(false);
      expect(result.error).toBe(errorMessage);
      expect(result.data).toBeNull();
    });

    it("should handle rejected state with default error message", () => {
      const action = {
        type: fetchHomePageData.rejected.type,
        error: {},
      };
      const result = homePageDataReducer(
        { data: null, loading: true, error: null },
        action
      );
      expect(result.loading).toBe(false);
      expect(result.error).toBe("Failed to fetch home page data");
      expect(result.data).toBeNull();
    });
  });
});
