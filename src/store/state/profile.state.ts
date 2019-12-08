import { IProject } from "src/models/project.interface";

export interface IProfileState {
	projects: IProject[],
}

export const initialProfileState: IProfileState = {
	projects: []
};
