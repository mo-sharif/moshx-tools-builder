import { IProject } from "src/models/project.interface";
import { Action } from "@ngrx/store";

export enum EProfileActions {
	GetProfileFromRoute = "[Profile] Get Profile From Route",
	GetProfileFromRouteSuccess = "[Profile] Get Profile From Route Success"
}

export class GetProfileFromRoute implements Action {
	public readonly type = EProfileActions.GetProfileFromRoute;
	constructor(public payload: string) {}
}

export class GetProfileFromRouteSuccess implements Action {
	public readonly type = EProfileActions.GetProfileFromRouteSuccess;
	constructor(public payload: IProject[]) {}
}

export type ProfileActions = GetProfileFromRoute | GetProfileFromRouteSuccess;
