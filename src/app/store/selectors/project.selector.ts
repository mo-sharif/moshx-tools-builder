import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IProjectState } from "../state/project.state";

const selectProjects = (state: IAppState) => state.projects;

export const selectContainers = createSelector(
	selectProjects,
	(state: IProjectState) => state.container
);

export const selectProject = createSelector(
	selectProjects,
	(state: IProjectState) => state.selectProject
);

export const selectUiComponents = createSelector(
	selectProjects,
	(state: IProjectState) => state.UiComponents
)
