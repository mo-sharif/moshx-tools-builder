import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { configReducers } from './config.reducers';
import { userReducers } from './user.reducers';
import { postReducers } from './post.reducers';
import { loadingReducers } from './loading.reducers';
import { authReducers } from './auth.reducers';
import { messageReducers } from './message.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  posts: postReducers,
  config: configReducers,
  loading: loadingReducers,
  auth: authReducers,
  message: messageReducers
};
