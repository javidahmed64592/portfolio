import { mockExperiencePageData } from "../../test-utils";
import experiencePageDataReducer, {
  fetchExperiencePageData,
  clearError,
} from "./experiencePageDataSlice";

describe("experiencePageDataSlice", () => {
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };

  const mockData = mockExperiencePageData();

  describe("initial state", () => {
    it("should return the initial state when no action is provided", () => {
      const result = experiencePageDataReducer(undefined, { type: "unknown" });
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
      const result = experiencePageDataReducer(stateWithError, action);
      expect(result.error).toBeNull();
      expect(result.data).toBeNull();
      expect(result.loading).toBe(false);
    });
  });

  describe("fetchExperiencePageData async thunk reducers", () => {
    it("should handle pending state", () => {
      const action = { type: fetchExperiencePageData.pending.type };
      const result = experiencePageDataReducer(initialState, action);
      expect(result.loading).toBe(true);
      expect(result.error).toBeNull();
      expect(result.data).toBeNull();
    });

    it("should handle fulfilled state", () => {
      const action = {
        type: fetchExperiencePageData.fulfilled.type,
        payload: mockData,
      };
      const result = experiencePageDataReducer(
        { data: null, loading: true, error: null },
        action
      );
      expect(result.loading).toBe(false);
      expect(result.error).toBeNull();
      expect(result.data).toEqual(mockData);
    });

    it("should handle rejected state with error message", () => {
      const errorMessage = "Network error";
      const action = {
        type: fetchExperiencePageData.rejected.type,
        error: { message: errorMessage },
      };
      const result = experiencePageDataReducer(
        { data: null, loading: true, error: null },
        action
      );
      expect(result.loading).toBe(false);
      expect(result.error).toBe(errorMessage);
      expect(result.data).toBeNull();
    });

    it("should handle rejected state with default error message", () => {
      const action = {
        type: fetchExperiencePageData.rejected.type,
        error: {},
      };
      const result = experiencePageDataReducer(
        { data: null, loading: true, error: null },
        action
      );
      expect(result.loading).toBe(false);
      expect(result.error).toBe("Failed to fetch experience page data");
      expect(result.data).toBeNull();
    });
  });
});
