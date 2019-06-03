import { Action } from "@ngrx/store";

export enum ELoadingActions {
  GetLoading = "[Loading] Get Loading",
  GetLoadingSuccess = "[Loading] Get Loading Success"
}

export class GetLoading implements Action {
  public readonly type = ELoadingActions.GetLoading;
  constructor(public payload: Boolean) {}
}

export class GetLoadingSuccess implements Action {
  public readonly type = ELoadingActions.GetLoadingSuccess;
  constructor(public payload: Boolean) {}
}

export type LoadingActions = GetLoading | GetLoadingSuccess;
