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
	SaveProjectSuccess
} from "../actions/project.actions";
import { SetSuccessMsg, SetErrorMsg } from "../actions/message.actions";
import { IProject } from "src/app/models/project.interface";
import { selectLoggedInUserUID } from "../selectors/auth.selectors";
import { EAuthActions, Authenticated } from "../actions/auth.actions";
import { UpdateUserProfileSuccess } from "../actions/user.actions";
import { UserService } from "src/app/services/user/user.service";

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
	// BROKEN!
	/* getUserProjects$ = this._actions$.pipe(
		ofType<Authenticated>(EAuthActions.Authenticated),
		withLatestFrom(this._store.pipe(select(selectLoggedInUserUID))),
		switchMap(id => {
			return this._projectService.getUserProjects(id[1]).pipe(
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
			return of(new UpdateUserProfileSuccess(project.user));
		})
	);

	constructor(
		private _actions$: Actions,
		private _store: Store<IAppState>,
		private _projectService: ProjectService,
		private _userService: UserService
	) {}
}
