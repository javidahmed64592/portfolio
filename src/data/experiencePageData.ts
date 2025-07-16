import { dataPath } from "./commonData";

export type Project = {
    title: string;
    description: string;
};

export type ProfessionalExperience = {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    projects: Project[];
};

export type AcademicExperience = {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
    projects: Project[];
};

export type ExperiencePageData = {
    professionalExperience: ProfessionalExperience[];
    academicExperience: AcademicExperience[];
};

let experiencePageData: ExperiencePageData | null = null;

export const getExperiencePageData = async (): Promise<ExperiencePageData> => {
    if (experiencePageData) {
        return experiencePageData;
    }

    const response = await fetch(dataPath("experiencePageData.json"));
    experiencePageData = await response.json();
    return experiencePageData!;
};
