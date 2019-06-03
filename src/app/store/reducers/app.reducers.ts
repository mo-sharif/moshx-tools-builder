import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { configReducers } from './config.reducers';
import { userReducers } from './user.reducers';
import { postReducers } from './post.reducers';
import { loadingReducers } from './loading.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  posts: postReducers,
  config: configReducers,
  loading: loadingReducers
};
