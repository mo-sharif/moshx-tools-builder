import {
	IProject,
	IProjectContainer,
	UiComponents,
	IComponentConfigs
} from "../../models/project.interface";
import { IUser } from "src/app/models/user.interface";

export interface IProjectState {
	project: IProject;
	projects: IProject[];
	selectProject: IProject;
	container: IProjectContainer[];
	profile: IUser;
	UiComponents: UiComponents;
	updateProject: IComponentConfigs;
}

export const initialProjectState: IProjectState = {
	project: null,
	projects: [],
	selectProject: null,
	container: [],
	profile: null,
	UiComponents: { isNewProject: true, isUserLoggedIn: false },
	updateProject: null
};
