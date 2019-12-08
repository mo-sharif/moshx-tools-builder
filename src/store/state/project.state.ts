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
	userProjects: IProject[]
}

export const initialProjectState: IProjectState = {
	project: null,
	selectProject: null,
	userProjects: null,
	container: [],
	UiComponents: {
		isProjectOwner: false,
		projectViewToggle: false,
		isUserLoggedIn: false,
		isNewProject: true
	},
	updateProject: null
};
