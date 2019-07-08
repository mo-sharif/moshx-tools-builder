import { Action } from "@ngrx/store";
import { IUser } from "../../models/user.interface";

export enum EAuthActions {
  GetUserAuth = "[Auth] Get User Auth State",
  Authenticated = "[Auth] Authenticated",
  NotAuthenticated = "[Auth] Not Authenticated",

  GoogleLogin = "[Auth] Google login attempt",
  Logout = "[Auth] Logout",
  AuthError = "[Auth] Login error",
  UpdateUser = "[Auth] Update User Profile",
  SaveUserProfile = "[Auth] Save User Profile",
	GetUserProfile = "[Profile] Get User Profile",
	GetUserProfileSuccess = "[Profile] Get User Profile Success"
}

// Get user state auth

export class GetUserAuth implements Action {
  public readonly type = EAuthActions.GetUserAuth;
  constructor(public payload?: IUser) {}
}

export class Authenticated implements Action {
  public readonly type = EAuthActions.Authenticated;
  constructor(public payload?: IUser) {}
}

export class NotAuthenticated implements Action {
  public readonly type = EAuthActions.NotAuthenticated;
  constructor(public payload?: any) {}
}

export class GoogleLogin implements Action {
  public readonly type = EAuthActions.GoogleLogin;
  constructor(public payload?: any) {}
}

export class Logout implements Action {
  public readonly type = EAuthActions.Logout;
  constructor(public payload?: any) {}
}

export class AuthError implements Action {
  public readonly type = EAuthActions.AuthError;
  constructor(public payload?: any) {}
}

export class UpdateUser implements Action {
  public readonly type = EAuthActions.UpdateUser;
  constructor(public payload: IUser) {}
}

export class SaveUserProfile implements Action {
  public readonly type = EAuthActions.SaveUserProfile;
  constructor(public payload: IUser) {}
}

export class GetUserProfile implements Action {
	public readonly type = EAuthActions.GetUserProfile;
}

export class GetUserProfileSuccess implements Action {
	public readonly type = EAuthActions.GetUserProfileSuccess;
	constructor(public payload: IUser) {}
}
export type AuthActions =
  | GetUserAuth
  | Authenticated
  | NotAuthenticated
  | GoogleLogin
  | Logout
  | AuthError
  | UpdateUser
  | SaveUserProfile
	| GetUserProfile
	| GetUserProfileSuccess;