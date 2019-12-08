import { Action } from "@ngrx/store";

export enum ELoadingActions {
  SetLoading = "[Loading] Set Loading",
  GetLoadingSuccess = "[Loading] Get Loading Success"
}

export class SetLoading implements Action {
  public readonly type = ELoadingActions.SetLoading;
  constructor(public payload: Boolean) {}
}

export class GetLoadingSuccess implements Action {
  public readonly type = ELoadingActions.GetLoadingSuccess;
  constructor(public payload: Boolean) {}
}

export type LoadingActions = SetLoading | GetLoadingSuccess;
