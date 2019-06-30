import { Action } from "@ngrx/store";

import { IUser } from "../../models/user.interface";

export enum EUserActions {
  GetUsers = "[User] Get Users",
  GetUsersSuccess = "[User] Get Users Success",
  GetUser = "[User] Get User",
  GetUserSuccess = "[User] Get User Success",
  GetUsersError = "[User] Get Users Error",
  AddUser = "[User] Add User",
  AddUserSuccess = "[User] Add User Success",
  UpdateUserProfile = "[User] Update User Profile Name",
  UpdateUserProfileSuccess = "[User] Update Profile Name Success"
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: number) {}
}

export class GetUsersError implements Action {
  public readonly type = EUserActions.GetUsersError;
  constructor(public payload: any) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: IUser) {}
}

export class AddUser implements Action {
  public readonly type = EUserActions.AddUser;
  constructor(public payload: IUser) {}
}

export class AddUserSuccess implements Action {
  public readonly type = EUserActions.AddUserSuccess;
  constructor(public payload: IUser) {}
}

export class UpdateUserProfile implements Action {
  public readonly type = EUserActions.UpdateUserProfile;
  constructor(public payload?: IUser['profile']) {}
}

export class UpdateUserProfileSuccess implements Action {
  public readonly type = EUserActions.UpdateUserProfileSuccess;
  constructor(public payload: any) {}
}

export type UserActions =
  | GetUsers
  | GetUsersSuccess
  | GetUser
  | GetUserSuccess
  | GetUsersError
  | AddUser
  | AddUserSuccess
  | UpdateUserProfile
  | UpdateUserProfileSuccess;
