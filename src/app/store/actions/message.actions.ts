import { Action } from "@ngrx/store";

export enum EMessageActions {
	SetSuccess = "[Message] Set Success Message",
	SetError = "[Message] Set Error Message",
	SetInfo = "[Message] Set Info Message",
	SetWarning = "[Message] Set Warning Message",
	SetLoading = "[Message] Set Loading Message"
}

export class SetSuccess implements Action {
	public readonly type = EMessageActions.SetSuccess;
	constructor(public payload?: string) {}
}
export class SetError implements Action {
	public readonly type = EMessageActions.SetError;
	constructor(public payload?: string) {}
}
export class SetInfo implements Action {
	public readonly type = EMessageActions.SetInfo;
	constructor(public payload?: string) {}
}
export class SetWarning implements Action {
	public readonly type = EMessageActions.SetWarning;
	constructor(public payload?: string) {}
}
export class SetLoading implements Action {
	public readonly type = EMessageActions.SetLoading;
	constructor(public payload?: string) {}
}

export type MessageActions =
	| SetError
	| SetInfo
	| SetLoading
	| SetSuccess
	| SetWarning;
