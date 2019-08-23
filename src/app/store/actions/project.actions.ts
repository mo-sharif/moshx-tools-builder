import { Action } from "@ngrx/store";

import { IProject, IProjectContainer, UiComponents } from "../../models/project.interface";

export enum EProjectActions {
	GetProjects = "[Project] Get Projects",
	GetProjectsSuccess = "[Project] Get Projects Success",
	GetProject = "[Project] Get Project",
	GetSelectedProjectFromRoute = "[Project] Get Selected Project From Route",
	GetSelectedProjectFromRouteSuccess = "[Project] Get Selected Project From Route Success",
	GetProjectSuccess = "[Project] Get Project Success",
	NewProject = "[Project] New Project",
	EditProject = "[Project] Edit Project",
	SaveProject = "[Project] Save Project",
	SaveProjectSuccess = "[Project] Save Project Success",
	UpdateProject = "[Project] Update Project",
	UpdateProjectSuccess = "[Project] Update Project Success",
	DeleteProject = "[Project] Delete Project",
	DeleteProjectSuccess = "[Project] Delete Project Success",
    GetContainers = "[Project] Get Containers",
	GetUserProjects = "[Project] Get User Projects",
	GetProfileFromRoute = "[Profile] Get Profile From Route",
	GetProfileFromRouteSuccess = "[Profile] Get Profile From Route Success",
	UpdateUiComponents = "[Project] Update UI Components",
	UpdateUiComponentsSuccess = "[Project] Update UI Components Success"
}

export class GetProjects implements Action {
	public readonly type = EProjectActions.GetProjects;
}

export class GetProject implements Action {
	public readonly type = EProjectActions.GetProject;
}
export class GetSelectedProjectFromRoute implements Action {
	public readonly type = EProjectActions.GetSelectedProjectFromRoute;
	constructor(public payload: string[]) {}
}
export class GetSelectedProjectFromRouteSuccess implements Action {
	public readonly type = EProjectActions.GetSelectedProjectFromRouteSuccess;
	constructor(public payload: IProject) {}
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
	constructor(public payload: IProject) {}
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
export class UpdateProject implements Action {
	public readonly type = EProjectActions.UpdateProject;
	constructor(public payload: IProject['ComponentSettings']) {}
}
export class UpdateProjectSuccess implements Action {
	public readonly type = EProjectActions.UpdateProjectSuccess;
	constructor(public payload: IProject) {}
}
export class DeleteProject implements Action {
	public readonly type = EProjectActions.DeleteProject;
	constructor(public payload: IProject) {}
}
export class DeleteProjectSuccess implements Action {
	public readonly type = EProjectActions.DeleteProjectSuccess;
}
export class GetContainers implements Action {
	public readonly type = EProjectActions.GetContainers;
	constructor(public payload: IProjectContainer[]) {}
}

export class GetProfileFromRoute implements Action {
	public readonly type = EProjectActions.GetProfileFromRoute;
	constructor(public payload: string) {}
}

export class GetProfileFromRouteSuccess implements Action {
	public readonly type = EProjectActions.GetProfileFromRouteSuccess;
	constructor(public payload: IProject[]) {}
}

export class UpdateUiComponents implements Action {
	public readonly type = EProjectActions.UpdateUiComponents;
	constructor(public payload: IProject['uid']) {}
}

export class UpdateUiComponentsSuccess implements Action {
	public readonly type = EProjectActions.UpdateUiComponentsSuccess;
	constructor(public payload: UiComponents) {}
}


export type ProjectActions =
	| GetProject
	| GetProjectSuccess
	| GetProjects
	| GetSelectedProjectFromRoute
	| GetSelectedProjectFromRouteSuccess
	| GetProjectsSuccess
	| NewProject
	| GetContainers
	| SaveProject
	| SaveProjectSuccess
	| UpdateProject
	| UpdateProjectSuccess
	| DeleteProject
	| DeleteProjectSuccess
	| GetUserProjects
	| GetProfileFromRoute
	| GetProfileFromRouteSuccess
	| UpdateUiComponents
	| UpdateUiComponentsSuccess;
