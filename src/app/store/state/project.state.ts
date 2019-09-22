import {
	IProject,
	IProjectContainer,
	UiComponents,
	IComponentConfigs
} from "../../models/project.interface";

export interface IProjectState {
	project: IProject;
	selectProject: IProject;
	container: IProjectContainer[];
	UiComponents: UiComponents;
	updateProject: IComponentConfigs;
}

export const initialProjectState: IProjectState = {
	project: null,
	selectProject: null,
	container: [],
	UiComponents: {
		showProjectSaveMenu: true,
		isUserLoggedIn: false,
		isNewProject: true
	},
	updateProject: null
};
