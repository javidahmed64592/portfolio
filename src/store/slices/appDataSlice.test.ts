import { mockAppData } from "../../test-utils";
import appDataReducer, { fetchAppData, clearError } from "./appDataSlice";

describe("appDataSlice", () => {
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };

  const mockData = mockAppData();

  describe("initial state", () => {
    it("should return the initial state when no action is provided", () => {
      const result = appDataReducer(undefined, { type: "unknown" });
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
      const result = appDataReducer(stateWithError, action);
      expect(result.error).toBeNull();
      expect(result.data).toBeNull();
      expect(result.loading).toBe(false);
    });
  });

  describe("fetchAppData async thunk reducers", () => {
    it("should handle pending state", () => {
      const action = { type: fetchAppData.pending.type };
      const result = appDataReducer(initialState, action);
      expect(result.loading).toBe(true);
      expect(result.error).toBeNull();
      expect(result.data).toBeNull();
    });

    it("should handle fulfilled state", () => {
      const action = {
        type: fetchAppData.fulfilled.type,
        payload: mockData,
      };
      const result = appDataReducer(
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
        type: fetchAppData.rejected.type,
        error: { message: errorMessage },
      };
      const result = appDataReducer(
        { data: null, loading: true, error: null },
        action
      );
      expect(result.loading).toBe(false);
      expect(result.error).toBe(errorMessage);
      expect(result.data).toBeNull();
    });

    it("should handle rejected state with default error message", () => {
      const action = {
        type: fetchAppData.rejected.type,
        error: {},
      };
      const result = appDataReducer(
        { data: null, loading: true, error: null },
        action
      );
      expect(result.loading).toBe(false);
      expect(result.error).toBe("Failed to fetch app data");
      expect(result.data).toBeNull();
    });
  });
});
