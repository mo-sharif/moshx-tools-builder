import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import {
	switchMap,
	withLatestFrom,
	map,
	catchError,
	tap,
	delay
} from "rxjs/operators";
import { of } from "rxjs";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { ProjectService } from "../../services/project/project.service";

import {
	EProfileActions,
	LoadProfile,
	LoadProfileSuccess
} from "../actions/profile.actions";

import { IProfile } from "src/app/models/profile.interface";

import { UserService } from "src/app/services/user/user.service";
import { Router } from "@angular/router";
import { ProfileService } from "./../../services/profile/profile.service";

@Injectable()
export class ProfileEffects {
	loadProfile$ = this._actions$.pipe(
		ofType<LoadProfile>(EProfileActions.LoadProfile),
		map(action => action.payload),
/* 		switchMap(route => {
			let profileName = route.replace('.', ' ')
			console.log(profileName)
			return this._profileService.loadProfile(profileName).pipe(
				switchMap((profile: IProfile) => {
					return of(new LoadProfileSuccess(profile));
				})
			);
		}) */
	);
	constructor(
		private _router: Router,
		private _actions$: Actions,
		private _profileService: ProfileService
	) {}
}
