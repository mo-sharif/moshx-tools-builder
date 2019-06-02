import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initialUserState } from './user.state';
import { IPostState, initialPostState } from './post.state';
import { initialConfigState, IConfigState } from './config.state';


export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  posts: IPostState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState,
  posts: initialPostState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
