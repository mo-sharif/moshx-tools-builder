import { RouterReducerState } from "@ngrx/router-store";

import { IUserState, initialUserState } from "./user.state";
import { IPostState, initialPostState } from "./post.state";
import { initialConfigState, IConfigState } from "./config.state";
import { initialLoadingState, ILoadingState } from "./loading.state";

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  posts: IPostState;
  config: IConfigState;
  loading: ILoadingState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState,
  posts: initialPostState,
  loading: initialLoadingState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
