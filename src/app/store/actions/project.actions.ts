import { Action } from "@ngrx/store";

import { IProject, IProjectContainer } from "../../models/project.interface";

export enum EProjectActions {
	GetProjects = "[Project] Get Projects",
	GetProjectsSuccess = "[Project] Get Projects Success",
	GetProject = "[Project] Get Project",
	GetProjectSuccess = "[Project] Get Project Success",
	NewProject = "[Project] New Project",
	EditProject = "[Project] Edit Project",
	SaveProject = "[Project] Save Project",
	SaveProjectSuccess = "[Project] Save Project Success",
    GetContainers = "[Project] Get Containers",
    GetUserProjects = "[Project] Get User Projects"
}

export class GetProjects implements Action {
	public readonly type = EProjectActions.GetProjects;
}

export class GetProject implements Action {
	public readonly type = EProjectActions.GetProject;
}
export class GetUserProjects implements Action {
    public readonly type = EProjectActions.GetUserProjects;
}
export class GetProjectsSuccess implements Action {
	public readonly type = EProjectActions.GetProjectsSuccess;
	constructor(public payload: IProject[]) {}
}

export class GetProjectSuccess implements Action {
	public readonly type = EProjectActions.GetProjectSuccess;
	constructor(public payload?: IProject[]) {}
}
export class NewProject implements Action {
	public readonly type = EProjectActions.NewProject;
	constructor(public payload: IProject) {}
}
export class SaveProject implements Action {
	public readonly type = EProjectActions.SaveProject;
	constructor(public payload: IProject) {}
}
export class SaveProjectSuccess implements Action {
	public readonly type = EProjectActions.SaveProjectSuccess;
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
    | GetContainers
    | SaveProject
    | SaveProjectSuccess
    | GetUserProjects;
