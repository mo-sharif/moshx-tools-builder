import { Action } from "@ngrx/store";
import { IUser } from "../../models/user.interface";

export enum EAuthActions {
  GetUserAuth = "[Auth] Get User Auth State",
  Authenticated = "[Auth] Authenticated",
  NotAuthenticated = "[Auth] Not Authenticated",

  GoogleLogin = "[Auth] Google login attempt",
  Logout = "[Auth] Logout",
  AuthError = "[Auth] Login error"
}

// Get user state auth

export class GetUserAuth implements Action {
  public readonly type = EAuthActions.GetUserAuth;
  constructor(public payload?: IUser) {}
}

export class Authenticated implements Action {
  public readonly type = EAuthActions.Authenticated;
  constructor(public payload?: any) {}
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

export type AuthActions =
  | GetUserAuth
  | Authenticated
  | NotAuthenticated
  | GoogleLogin
  | Logout
  | AuthError;