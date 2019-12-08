import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IAuthState } from '../state/auth.state';

const selectAuthState = (state: IAppState) => state.auth;

export const selectLoggedInUser = createSelector(
    selectAuthState,
    (state: IAuthState) => state.currentUser
);

export const selectLoggedInUserUID = createSelector(
    selectAuthState,
    (state: IAuthState) => state.currentUser.uid
);