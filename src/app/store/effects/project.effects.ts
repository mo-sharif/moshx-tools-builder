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
	EProjectActions,
	SaveProject,
	GetProjectSuccess,
	SaveProjectSuccess,
	GetProfileFromRouteSuccess,
	GetProfileFromRoute,
	GetUserProfile,
	GetUserProfileSuccess,
} from "../actions/project.actions";
import {
	SetSuccessMsg,
	SetErrorMsg,
	SetInfoMsg
} from "../actions/message.actions";

import { IProject } from "src/app/models/project.interface";
import { selectLoggedInUserUID, selectLoggedInUser } from "../selectors/auth.selectors";
import { UpdateUserProfileSuccess } from "../actions/user.actions";
import { UserService } from "src/app/services/user/user.service";
import { Router } from "@angular/router";
import { NavigateToRoute } from "../actions/config.actions";
import { ProfileService } from "src/app/services/profile/profile.service";
import { IProfile } from "src/app/models/project.interface";
import { IUser } from "src/app/models/user.interface";

@Injectable()
export class ProjectEffects {
	@Effect()
	saveProject$ = this._actions$.pipe(
		ofType<SaveProject>(EProjectActions.SaveProject),
		map(action => action.payload),
		switchMap((project: IProject) => {
			this._projectService.addProject(project);
			return [
				new SetSuccessMsg("Project Saved Successfully"),
				new SaveProjectSuccess(project)
			];
		}),
		catchError(err => of(new SetErrorMsg(err)))
	);

	@Effect()
	navigateToProfile$ = this._actions$.pipe(
		ofType<SaveProject>(EProjectActions.SaveProject),
		map(action => action.payload),
		switchMap((project: IProject) => {
			let profileSlug = project.profile.replace(/ /g, ".");
			return of(new NavigateToRoute(profileSlug));
		})
	);

	@Effect()
	loadProfileFromRoute$ = this._actions$.pipe(
		ofType<GetProfileFromRoute>(EProjectActions.GetProfileFromRoute),
		map(action => action.payload),
		switchMap(route => {
			let profileName = route.replace(".", " ");
			return this._profileService
				.loadProfile(profileName)
				.pipe(switchMap((profile: any) => [new GetProfileFromRouteSuccess(profile)]));
		})
	);

	@Effect()
	getUserProfile$ = this._actions$.pipe(
		ofType<GetUserProfile>(EProjectActions.GetUserProfile),
		withLatestFrom(this._store.pipe(select(selectLoggedInUser))),
		switchMap((res) => {
			console.log(res)
			return this._profileService.getUserProfile(res).pipe(
				switchMap((user: IUser) => {
					return of(new GetUserProfileSuccess(user));
				})
			);
		})
	);
	@Effect()
/* 	getUserProjects$ = this._actions$.pipe(
		ofType<Authenticated>(EAuthActions.Authenticated),
		withLatestFrom(this._store.pipe(select(selectLoggedInUser))),
		switchMap(([action, user]) => {
			return this._projectService.getUserProjects(user).pipe(
				switchMap(res => [
					new GetProjectSuccess(res),
					new SetSuccessMsg("Projects are loaded")
				]),
				catchError(err => {
					return of(new SetErrorMsg(err));
				})
			);
		})
	); */
	@Effect()
	updateUserProfile$ = this._actions$.pipe(
		ofType<SaveProjectSuccess>(EProjectActions.SaveProjectSuccess),
		map(action => action.payload),
		switchMap((project: IProject) => {
			this._userService.updateUser(project);
			let profileRoute = project.profile.replace(" ", ".");
			return [
				new UpdateUserProfileSuccess(project.user),
				new NavigateToRoute(profileRoute)
			];
		})
	);

	constructor(
		private _actions$: Actions,
		private _store: Store<IAppState>,
		private _projectService: ProjectService,
		private _userService: UserService,
		private _router: Router,
		private _profileService: ProfileService
	) {}
}
