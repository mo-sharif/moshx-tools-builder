import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IProfileState } from "../state/profile.state";

const selectProfile = (state: IAppState) => state.profile;

export const selectedProfile = createSelector(
	selectProfile,
	(state: IProfileState) => state.projects
);

export const userProjects = createSelector(
	selectProfile,
	(state: IProfileState) => state.projects
);

export const selectFirstProject = createSelector(
	selectProfile,
	(state: IProfileState) => state.projects[0]
);
