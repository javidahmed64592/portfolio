import { Pages } from "../../data";
import pageReducer, { setCurrentPage } from "./pageSlice";

describe("pageSlice", () => {
  const initialState = {
    currentPage: Pages.Home,
  };

  describe("initial state", () => {
    it("should return the initial state when no action is provided", () => {
      const result = pageReducer(undefined, { type: "unknown" });
      expect(result).toEqual(initialState);
    });
  });

  describe("setCurrentPage", () => {
    it("should set the current page to Home", () => {
      const action = setCurrentPage(Pages.Home);
      const result = pageReducer(initialState, action);
      expect(result.currentPage).toBe(Pages.Home);
    });

    it("should set the current page to Experience", () => {
      const action = setCurrentPage(Pages.Experience);
      const result = pageReducer(initialState, action);
      expect(result.currentPage).toBe(Pages.Experience);
    });

    it("should set the current page to Projects", () => {
      const action = setCurrentPage(Pages.Projects);
      const result = pageReducer(initialState, action);
      expect(result.currentPage).toBe(Pages.Projects);
    });
  });
});
