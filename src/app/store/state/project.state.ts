import { IProject, IProjectContainer, UiComponents } from "../../models/project.interface";
import { IUser } from "src/app/models/user.interface";

export interface IProjectState {
	projects: any;
	newProject: IProject;
	selectedProject: IProject;
	container: IProjectContainer[];
	profile: IUser;
	UiComponents: UiComponents;
}

export const initialProjectState: IProjectState = {
	projects: [],
	newProject: null,
	selectedProject: null,
	container: [],
	profile: null,
	UiComponents: null,
};