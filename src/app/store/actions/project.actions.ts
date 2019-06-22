import { Action } from "@ngrx/store";

import { IProject, IProjectContainer } from "../../models/project.interface";

export enum EProjectActions {
	GetProjects = "[Project] Get Projects",
	GetProjectsSuccess = "[Project] Get Projects Success",
	GetProject = "[Project] Get Project",
	GetProjectSuccess = "[Project] Get Project Success",
	NewProject = "[Project] New Project",
	EditProject = "[Project] Edit Project",
	GetContainers = "[Project] Get Containers"
}

export class GetProjects implements Action {
	public readonly type = EProjectActions.GetProjects;
}

export class GetProject implements Action {
	public readonly type = EProjectActions.GetProject;
}
export class GetProjectsSuccess implements Action {
	public readonly type = EProjectActions.GetProjectsSuccess;
	constructor(public payload: IProject[]) {}
}

export class GetProjectSuccess implements Action {
	public readonly type = EProjectActions.GetProjectSuccess;
	constructor(public payload: IProject[]) {}
}
export class NewProject implements Action {
	public readonly type = EProjectActions.NewProject;
	constructor(public payload: IProject) {}
}
export class GetContainers implements Action {
	public readonly type = EProjectActions.GetContainers;
	constructor(public payload: IProjectContainer[]) {}
}

export type ProjectActions =
	| GetProject
	| GetProjectSuccess
	| GetProjects
	| GetProjectsSuccess
    | NewProject
    | GetContainers;
