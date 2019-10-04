import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Store } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ProfileService } from "../../services/profile/profile.service";
import { map, switchMap } from "rxjs/operators";
import { IProject } from "../../models/project.interface";
import {
	GetProfileFromRoute,
	GetProfileFromRouteSuccess,
	EProfileActions
} from "../actions/profile.actions";

import { UpdateUiComponents } from "../actions/project.actions";

@Injectable()
export class ProfileEffects {
	@Effect()
	loadProfileFromRoute$ = this._actions$.pipe(
		ofType<GetProfileFromRoute>(EProfileActions.GetProfileFromRoute),
		map(action => action.payload),
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

	constructor(
		private _actions$: Actions,
		private _store: Store<IAppState>,
		private _profileService: ProfileService
	) {}
}
