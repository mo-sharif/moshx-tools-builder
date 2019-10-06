import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ProfileService } from "../../services/profile/profile.service";
import { map, switchMap, withLatestFrom, catchError, refCount, publishReplay } from "rxjs/operators";
import { IProject } from "../../models/project.interface";
import {
	GetProfileFromRoute,
	GetProfileFromRouteSuccess,
	EProfileActions
} from "../actions/profile.actions";

import { UpdateUiComponents } from "../actions/project.actions";
import {
	GetUserProfile,
	EAuthActions,
	GetUserProfileSuccess
} from "../actions/auth.actions";
import { selectLoggedInUser } from "../selectors/auth.selectors";
import { AddUser, UpdateUser } from "../actions/user.actions";
import { SetErrorMsg } from "../actions/message.actions";

@Injectable()
export class ProfileEffects {
	@Effect()
	loadProfileFromRoute$ = this._actions$.pipe(
		ofType<GetProfileFromRoute>(EProfileActions.GetProfileFromRoute),
		map(action => action.payload),
		publishReplay(1),
        refCount(),
		switchMap(route => {
			let profileName = route.replace(".", " ");
			return this._profileService.loadProfile(profileName).pipe(
				switchMap((projects: IProject[]) => {
					return of(
						new GetProfileFromRouteSuccess(projects),
						new UpdateUiComponents(projects[0].uid)
					);
				})
			);
		})
	);

	/*  Responsible for Adding or updating user */
	@Effect()
	getUserProfile$ = this._actions$.pipe(
		ofType<GetUserProfile>(EAuthActions.GetUserProfile),
		withLatestFrom(this._store.pipe(select(selectLoggedInUser))),
		publishReplay(1),
        refCount(),
		switchMap(([action, userProfile]) => {
			return this._profileService.getUserProfile(userProfile.uid).pipe(
				switchMap(user => {
					if (typeof user === "undefined") {
						return of(new AddUser(userProfile));
					} else {
						if (user.profile) {
							user.profileSlug = user.profile.replace(/ /g, ".");
						}
						return of(new GetUserProfileSuccess(user), new UpdateUser(user));
					}
				}),
				catchError(err => {
					return of(new SetErrorMsg(`${err}`));
				})
			);
		})
	);

	constructor(
		private _actions$: Actions,
		private _store: Store<IAppState>,
		private _profileService: ProfileService
	) {}
}
