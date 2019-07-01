import { Action } from "@ngrx/store";
import { IProfile } from "../../models/profile.interface";

export enum EProfileActions {
	LoadProfile = "[Profile] Load User Profile",
	LoadProfileSuccess = "[Profile] Load User Profile Success"
}

export class LoadProfile implements Action {
	public readonly type = EProfileActions.LoadProfile;
	constructor(public payload: string) {}
}

export class LoadProfileSuccess implements Action {
	public readonly type = EProfileActions.LoadProfileSuccess;
	constructor(public payload: IProfile) {}
}

export type ProfileActions = LoadProfile | LoadProfileSuccess;
