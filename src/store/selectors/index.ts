import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

// App Data Selectors
export const selectAppData = (state: RootState) => state.appData.data;
export const selectAppDataLoading = (state: RootState) => state.appData.loading;
export const selectAppDataError = (state: RootState) => state.appData.error;

export const selectAppHeaderText = createSelector(
  [selectAppData],
  (appData) => appData?.appHeaderText || "Portfolio"
);

export const selectSocialLinks = createSelector(
  [selectAppData],
  (appData) => appData?.socialLinks || []
);

// Home Page Data Selectors
export const selectHomePageData = (state: RootState) => state.homePageData.data;
export const selectHomePageDataLoading = (state: RootState) => state.homePageData.loading;
export const selectHomePageDataError = (state: RootState) => state.homePageData.error;

export const selectProfileSummary = createSelector(
  [selectHomePageData],
  (homePageData) => homePageData?.profileSummary || null
);

export const selectTechnologies = createSelector(
  [selectHomePageData],
  (homePageData) => homePageData?.technologies || []
);

// Experience Page Data Selectors
export const selectExperiencePageData = (state: RootState) => state.experiencePageData.data;
export const selectExperiencePageDataLoading = (state: RootState) => state.experiencePageData.loading;
export const selectExperiencePageDataError = (state: RootState) => state.experiencePageData.error;

export const selectProfessionalExperience = createSelector(
  [selectExperiencePageData],
  (experiencePageData) => experiencePageData?.professionalExperience || []
);

export const selectAcademicExperience = createSelector(
  [selectExperiencePageData],
  (experiencePageData) => experiencePageData?.academicExperience || []
);

// Projects Page Data Selectors
export const selectProjectsPageData = (state: RootState) => state.projectsPageData.data;
export const selectProjectsPageDataLoading = (state: RootState) => state.projectsPageData.loading;
export const selectProjectsPageDataError = (state: RootState) => state.projectsPageData.error;

export const selectProjects = createSelector(
  [selectProjectsPageData],
  (projectsPageData) => projectsPageData?.projects || []
);

// Combined loading state for all data
export const selectAllDataLoading = createSelector(
  [selectAppDataLoading, selectHomePageDataLoading, selectExperiencePageDataLoading, selectProjectsPageDataLoading],
  (appDataLoading, homePageDataLoading, experiencePageDataLoading, projectsPageDataLoading) =>
    appDataLoading || homePageDataLoading || experiencePageDataLoading || projectsPageDataLoading
);

// Combined error state for all data
export const selectAllDataErrors = createSelector(
  [selectAppDataError, selectHomePageDataError, selectExperiencePageDataError, selectProjectsPageDataError],
  (appDataError, homePageDataError, experiencePageDataError, projectsPageDataError) => {
    const errors = [appDataError, homePageDataError, experiencePageDataError, projectsPageDataError].filter(Boolean);
    return errors.length > 0 ? errors : null;
  }
);
