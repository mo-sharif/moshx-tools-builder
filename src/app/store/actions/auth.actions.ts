import { Action } from "@ngrx/store";
import { IUser } from "../../models/user.interface";

export enum EAuthActions {
  GetUserAuth = "[Auth] Get User Auth State",
  Authenticated = "[Auth] Authenticated",
  NotAuthenticated = "[Auth] Not Authenticated",

  EmailLogin = "[Auth] Email Login Attempt",
  GoogleLogin = "[Auth] Google Login Attempt",
  GithubLogin = "[Auth] Github Login Attempt",
  FacebookLogin = "[Auth] Facebook Login Attempt",
  TwitterLogin = "[Auth] Twitter Login Attempt",
  AnonymousLogin = "[Auth] Anonymous Login Attempt",

  Logout = "[Auth] Logout",
  LogoutSuccess = "[Auth] Logout Success",
  AuthError = "[Auth] Login error",
  UpdateUser = "[Auth] Update User Profile",
  SaveUserProfile = "[Auth] Save User Profile",
	GetUserProfile = "[Profile] Get User Profile",
	GetUserProfileSuccess = "[Profile] Get User Profile Success"
}

// Get user state auth

export class GetUserAuth implements Action {
  public readonly type = EAuthActions.GetUserAuth;
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
}
export class GithubLogin implements Action {
  public readonly type = EAuthActions.GithubLogin;
}
export class FacebookLogin implements Action {
  public readonly type = EAuthActions.FacebookLogin
}
export class TwitterLogin implements Action { 
  public readonly type = EAuthActions.TwitterLogin
}
export class AnonymousLogin implements Action { 
  public readonly type = EAuthActions.AnonymousLogin
}
export class EmailLogin implements Action { 
  public readonly type = EAuthActions.EmailLogin
  constructor(public payload: any){}
}

export class Logout implements Action {
  public readonly type = EAuthActions.Logout;
  constructor(public payload?: any) {}
}

export class LogoutSuccess implements Action {
  public readonly type = EAuthActions.LogoutSuccess;
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
  | GithubLogin
  | FacebookLogin
  | TwitterLogin
  | AnonymousLogin
  | EmailLogin
  | Logout
  | AuthError
  | UpdateUser
  | SaveUserProfile
	| GetUserProfile
  | GetUserProfileSuccess
  | LogoutSuccess;