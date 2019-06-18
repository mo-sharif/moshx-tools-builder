import { Action } from "@ngrx/store";

export enum EMessageActions {
	SetSuccessMsg = "[Message] Set Success Message",
	SetErrorMsg = "[Message] Set Error Message",
	SetInfoMsg = "[Message] Set Info Message",
	SetWarningMsg = "[Message] Set Warning Message",
	SetLoadingMsg = "[Message] Set Loading Message",
	MsgSent =  "[Message] Message Sent"
}

export class SetSuccessMsg implements Action {
	public readonly type = EMessageActions.SetSuccessMsg;
	constructor(public payload?: string) {}
}
export class SetErrorMsg implements Action {
	public readonly type = EMessageActions.SetErrorMsg;
	constructor(public payload?: string) {}
}
export class SetInfoMsg implements Action {
	public readonly type = EMessageActions.SetInfoMsg;
	constructor(public payload?: string) {}
}
export class SetWarningMsg implements Action {
	public readonly type = EMessageActions.SetWarningMsg;
	constructor(public payload?: string) {}
}
export class SetLoadingMsg implements Action {
	public readonly type = EMessageActions.SetLoadingMsg;
	constructor(public payload?: string) {}
}

export class MsgSent implements Action {
	public readonly type = EMessageActions.MsgSent;
}

export type MessageActions =
	| SetErrorMsg
	| SetInfoMsg
	| SetLoadingMsg
	| SetSuccessMsg
	| SetWarningMsg
	| MsgSent;
