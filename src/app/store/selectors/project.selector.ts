import { createSelector } from "@ngrx/store";

import { IAppState } from "../state/app.state";
import { IProjectState } from "../state/project.state";

const selectProjects = (state: IAppState) => state.projects;

export const userProjects = createSelector(
	selectProjects,
	(state: IProjectState) => state.projects
);

export const selectUserProjects = createSelector(
	selectProjects,
	(state:IProjectState) => state.newProject
)
export const selectSelectedProject = createSelector(
	selectProjects,
	(state: IProjectState) => state.selectedProject
);

export const selectContainers = createSelector(
	selectProjects,
	(state: IProjectState) => state.container
);

export const selectNewProject = createSelector(
	selectProjects,
	(state: IProjectState) => state.newProject
);

export const selectProfile = createSelector(
	selectProjects,
	(state: IProjectState) => state.profile
);

export const selectedProject = createSelector(
	selectProjects,
	(state: IProjectState) => state.selectedProject
);
