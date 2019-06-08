import { RouterReducerState } from "@ngrx/router-store";

import { IUserState, initialUserState } from "./user.state";
import { IPostState, initialPostState } from "./post.state";
import { initialConfigState, IConfigState } from "./config.state";
import { initialLoadingState, ILoadingState } from "./loading.state";
import { initialAuthState, IAuthState } from "./auth.state";

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  posts: IPostState;
  config: IConfigState;
  loading: ILoadingState;
  auth: IAuthState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState,
  posts: initialPostState,
  loading: initialLoadingState,
  auth: initialAuthState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
