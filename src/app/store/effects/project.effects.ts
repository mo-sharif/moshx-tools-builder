import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import {
	switchMap,
	withLatestFrom,
	map,
	catchError,
	tap,
	delay,
	takeWhile
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
	GetUserProjects,
	GetSelectedProjectFromRoute,
	GetSelectedProjectFromRouteSuccess,
	NewProject
} from "../actions/project.actions";
import {
	SetSuccessMsg,
	SetErrorMsg,
	SetInfoMsg
} from "../actions/message.actions";

import { IProject } from "src/app/models/project.interface";
import {
	selectLoggedInUserUID,
	selectLoggedInUser
} from "../selectors/auth.selectors";
import { UpdateUserProfileSuccess, AddUser } from "../actions/user.actions";
import { UserService } from "src/app/services/user/user.service";
import { Router } from "@angular/router";
import { NavigateToRoute } from "../actions/config.actions";
import { ProfileService } from "src/app/services/profile/profile.service";
import { IUser } from "src/app/models/user.interface";
import {
	EAuthActions,
	GetUserProfileSuccess,
	GetUserProfile,
	Authenticated
} from "../actions/auth.actions";
import { selectedProject } from "../selectors/project.selector";

@Injectable()
export class ProjectEffects {
	@Effect()
	saveProject$ = this._actions$.pipe(
		ofType<SaveProject>(EProjectActions.SaveProject),
		map(action => action.payload),
		withLatestFrom(this._store.pipe(select(selectedProject))),
		switchMap(([project, selectedProject]) => {
			project.slug = project.title.replace(/ /g, ".");
			if (selectedProject) {
				this._projectService.updateProject(project);
			} else {
				this._projectService.addProject(project);
			}
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
			return of(new NavigateToRoute([project.profile]));
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
				.pipe(
					switchMap((profile: any) => [new GetProfileFromRouteSuccess(profile)])
				);
		})
	);

	@Effect()
	getUserProfile$ = this._actions$.pipe(
		ofType<GetUserProfile>(EAuthActions.GetUserProfile),
		withLatestFrom(this._store.pipe(select(selectLoggedInUserUID))),
		switchMap(([action, userId]) => {
			return this._profileService.getUserProfile(userId).pipe(
				switchMap((user: IUser) => {
					if (user && user.profile && !user.profileSlug) {
						user.profileSlug = user.profile.replace(/ /g, ".");
					}
					// this._userService.addUser(user);
					return of(new GetUserProfileSuccess(user), new AddUser(user));
				})
			);
		})
	);

	@Effect({dispatch: false})
	getUserProjects$ = this._actions$.pipe(
		ofType<GetUserProfileSuccess>(EAuthActions.GetUserProfileSuccess),
		withLatestFrom(this._store.pipe(select(selectLoggedInUser))),
		switchMap(([action, user]) => {
			return this._projectService.getUserProjects(user).pipe(
				catchError(err => {
					return of(new SetErrorMsg(err));
				})
			);
		})
	);

  /* 
  This effect handles logic between creating a new project 
  or editing an viewing and editing an existing project 
  */
	@Effect()
	GetSelectedProjectFromRoute$ = this._actions$.pipe(
		ofType<GetSelectedProjectFromRoute>(
			EProjectActions.GetSelectedProjectFromRoute
		),
		withLatestFrom(this._store.pipe(select(selectLoggedInUser))),
		switchMap(([action, user]) => {
			let route = action.payload;
			return this._projectService.GetSelectedProjectFromRoute(user, route).pipe(
				switchMap(([project]) => {
					if (project) {
						return of(new GetSelectedProjectFromRouteSuccess(project));
					} else {
						return of(new NewProject({
              title: "NEW PROJECT",
              type: action.payload,
              user: "NOT YET ASSIGNED"
            }));
					}
				}),
				catchError(err => {
					return of(new SetErrorMsg(err));
				})
			);
		})
	);

  /* 
  On saving a new project
  Update project name
  */
	@Effect()
	updateUserProfile$ = this._actions$.pipe(
		ofType<SaveProjectSuccess>(EProjectActions.SaveProjectSuccess),
		map(action => action.payload),
		switchMap((project: IProject) => {
			this._userService.updateProjectName(project);
			return [
				new UpdateUserProfileSuccess(project.user),
				new NavigateToRoute([project.profile])
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
