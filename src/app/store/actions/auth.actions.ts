import { Action } from "@ngrx/store";
import { IUser } from "../../models/user.interface";

export enum EauthActions {
  GET_USER = "[Auth] GET user",
  AUTHENTICATED = "[Auth] Authenticated",
  NOT_AUTHENTICATED = "[Auth] Not Authenticated",

  GOOGLE_LOGIN = "[Auth] Google login attempt",
  LOGOUT = "[Auth] Logout",
  AUTH_ERROR = "[Auth] Login error"
}

// Get user state auth

export class GetUser implements Action {
  public readonly type = EauthActions.GET_USER;
  constructor(public payload?: IUser) {}
}

export class Authenticated implements Action {
  public readonly type = EauthActions.AUTHENTICATED;
  constructor(public payload?: any) {}
}

export class NotAuthenticated implements Action {
  public readonly type = EauthActions.NOT_AUTHENTICATED;
  constructor(public payload?: any) {}
}

export class GoogleLogin implements Action {
  public readonly type = EauthActions.GOOGLE_LOGIN;
  constructor(public payload?: any) {}
}

export class Logout implements Action {
  public readonly type = EauthActions.LOGOUT;
  constructor(public payload?: any) {}
}

export type AuthActions =
  | GetUser
  | Authenticated
  | NotAuthenticated
  | GoogleLogin
  | Logout;