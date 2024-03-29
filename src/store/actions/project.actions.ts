import { Action } from "@ngrx/store";
import { IProject, IProjectContainer, UiComponents } from "../../models/project.interface";

export enum EProjectActions {
	GetProjects = "[Project] Get Projects",
	GetProject = "[Project] Get Project",
	GetSelectedProject = "[Project] Get Selected Project From Route",
	GetSelectedProjectSuccess = "[Project] Get Selected Project From Route Success",
	GetProjectSuccess = "[Project] Get Project Success",
	NewProject = "[Project] New Project",
	NewProjectSuccess = "[Project] New Project Success",
	EditProject = "[Project] Edit Project",
	SaveProject = "[Project] Save Project",
	SaveProjectSuccess = "[Project] Save Project Success",
	UpdateProject = "[Project] Update Project",
	UpdateProjectSuccess = "[Project] Update Project Success",
	DeleteProject = "[Project] Delete Project",
	DeleteProjectSuccess = "[Project] Delete Project Success",
    GetContainers = "[Project] Get Containers",
	GetUserProjects = "[Project] Get User Projects",
	GetUserProjectsSuccess = "[Project] Get User Projects Success",
	UpdateUiComponents = "[Project] Update UI Components",
	UpdateUiComponentsSuccess = "[Project] Update UI Components Success",
}

export class GetProjects implements Action {
	public readonly type = EProjectActions.GetProjects;
}

export class GetProject implements Action {
	public readonly type = EProjectActions.GetProject;
}
export class GetSelectedProject implements Action {
	public readonly type = EProjectActions.GetSelectedProject;
}
export class GetSelectedProjectSuccess implements Action {
	public readonly type = EProjectActions.GetSelectedProjectSuccess;
	constructor(public payload: IProject) {}
}
export class GetUserProjects implements Action {
    public readonly type = EProjectActions.GetUserProjects;
}

export class GetUserProjectsSuccess implements Action {
	public readonly type = EProjectActions.GetUserProjectsSuccess;
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
export class NewProjectSuccess implements Action {
	public readonly type = EProjectActions.NewProjectSuccess;
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
	constructor(public payload: IProject) {}
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

export class UpdateUiComponents implements Action {
	public readonly type = EProjectActions.UpdateUiComponents;
	constructor(public payload: IProject['uid'] | boolean) {}
}

export class UpdateUiComponentsSuccess implements Action {
	public readonly type = EProjectActions.UpdateUiComponentsSuccess;
	constructor(public payload: UiComponents) {}
}

export type ProjectActions =
	| GetProject
	| GetProjectSuccess
	| GetProjects
	| GetSelectedProject
	| GetSelectedProjectSuccess
	| NewProject
	| NewProjectSuccess
	| GetContainers
	| SaveProject
	| SaveProjectSuccess
	| UpdateProject
	| UpdateProjectSuccess
	| DeleteProject
	| DeleteProjectSuccess
	| GetUserProjects
	| GetUserProjectsSuccess
	| UpdateUiComponents
	| UpdateUiComponentsSuccess;
