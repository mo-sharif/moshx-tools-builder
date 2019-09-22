import { IProject } from "src/app/models/project.interface";

export interface IProfileState {
	projects: IProject[],
}

export const initialProfileState: IProfileState = {
	projects: []
};
