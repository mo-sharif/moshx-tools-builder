import { Action } from "@ngrx/store";

export enum ECompActions {
	SendHttpRequest = "[Comp] Send Http Request",
	SendHttpRequestSuccess = "[Comp] Send Http Request Success"
}

export class SendHttpRequest implements Action {
	public readonly type = ECompActions.SendHttpRequest;
	constructor(public payload: any) {}
}

export class SendHttpRequestSuccess implements Action {
	public readonly type = ECompActions.SendHttpRequestSuccess;
	constructor(public payload: any) {}
}

export type CompActions = SendHttpRequest | SendHttpRequestSuccess;
