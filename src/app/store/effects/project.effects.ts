import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { switchMap, withLatestFrom, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { ProjectService } from "../../services/project/project.service";

import {
	EProjectActions,
	SaveProject,
	SaveProjectSuccess,
	GetSelectedProject,
	GetSelectedProjectSuccess,
	NewProject,
	DeleteProject,
	DeleteProjectSuccess,
	UpdateUiComponents,
	UpdateUiComponentsSuccess,
	UpdateProject,
	UpdateProjectSuccess,
	NewProjectSuccess,
	UpdateProjectView
} from "../actions/project.actions";
import { SetSuccessMsg, SetErrorMsg } from "../actions/message.actions";

import { IProject, Project } from "src/app/models/project.interface";
import {
	selectLoggedInUserUID,
	selectLoggedInUser
} from "../selectors/auth.selectors";
import {
	UpdateProfileSuccess,
	AddUser,
	UpdateUser
} from "../actions/user.actions";
import { UserService } from "src/app/services/user/user.service";
import { NavigateToRoute } from "../actions/config.actions";
import { ProfileService } from "src/app/services/profile/profile.service";
import {
	EAuthActions,
	GetUserProfileSuccess,
	GetUserProfile
} from "../actions/auth.actions";
import { selectProject } from "../selectors/project.selector";
import { selectUrlSegment } from "../selectors/config.selector";

@Injectable()
export class ProjectEffects {
	@Effect()
	saveProject$ = this._actions$.pipe(
		ofType<SaveProject>(EProjectActions.SaveProject),
		map(action => action.payload),
		withLatestFrom(this._store.pipe(select(selectProject))),
		withLatestFrom(this._store.pipe(select(selectLoggedInUser))),
		switchMap(([[project, selectProject], user]) => {
			if (!project.profile) {
				project.profile = user.profile;
			}
			if (!project.id) {
				project.id = selectProject.id;
			}
			if (!project.slug) {
				project.slug = project.title.replace(/ /g, ".");
			}
			if (!project.uid) {
				project.uid = user.uid;
			}
			this._projectService.addAndUpdateProject(project);
			return [
				new SetSuccessMsg(`${project.title} Saved Successfully`),
				new SaveProjectSuccess(project)
			];
		}),
		catchError(err => of(new SetErrorMsg(`${err}`)))
	);

	@Effect()
	newProject$ = this._actions$.pipe(
		ofType<NewProject>(EProjectActions.NewProject),
		map(action => action.payload),
		withLatestFrom(this._store.pipe(select(selectLoggedInUserUID))),
		switchMap(([project, selectLoggedInUserUID]) => {
			return of(
				new UpdateUiComponents(selectLoggedInUserUID),
				new NewProjectSuccess(project)
			);
		})
	);
	@Effect()
	updateProject$ = this._actions$.pipe(
		ofType<UpdateProject>(EProjectActions.UpdateProject),
		map(action => action.payload),
		withLatestFrom(this._store.pipe(select(selectProject))),
		switchMap(([project, selectProject]) => {
			this._projectService.updateProject({
				...selectProject,
				[selectProject.type]: { ...project }
			});
			return of(new UpdateProjectSuccess(project[project.type]));
		}),
		catchError(err => of(new SetErrorMsg(`${err}`)))
	);

	@Effect()
	deleteProject$ = this._actions$.pipe(
		ofType<DeleteProject>(EProjectActions.DeleteProject),
		map(action => action.payload),
		withLatestFrom(this._store.pipe(select(selectLoggedInUserUID))),
		switchMap(([project, selectLoggedInUserUID]) => {
			if (selectLoggedInUserUID == project.uid) {
				this._projectService.deleteProject(project);
				return [
					new SetSuccessMsg(`${project.title} Deleted Successfully!`),
					new DeleteProjectSuccess(),
					new NavigateToRoute([project.profile])
				];
			} else {
				new SetErrorMsg("You don't have permission to delete this project");
			}
		}),
		catchError(err => of(new SetErrorMsg(err)))
	);

	/*  Responsible for Adding or updating user */
	@Effect()
	getUserProfile$ = this._actions$.pipe(
		ofType<GetUserProfile>(EAuthActions.GetUserProfile),
		withLatestFrom(this._store.pipe(select(selectLoggedInUser))),
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

	@Effect({ dispatch: false })
	getUserProjects$ = this._actions$.pipe(
		ofType<GetUserProfileSuccess>(EAuthActions.GetUserProfileSuccess),
		withLatestFrom(this._store.pipe(select(selectLoggedInUser))),
		switchMap(([action, user]) => {
			return this._projectService.getUserProjects(user).pipe(
				catchError(err => {
					return of(new SetErrorMsg(`${err}`));
				})
			);
		})
	);

	/* 
  This effect handles logic between creating a new project 
  or editing an existing project 
  Can handle these cases:
  - Logged out User creating New Project
  - Logged in User creating New Project
  - Logged in User editing Existing Project
  - Logged in User viewing unowned Projects
  */
	@Effect()
	GetSelectedProject$ = this._actions$.pipe(
		ofType<GetSelectedProject>(EProjectActions.GetSelectedProject),
		withLatestFrom(this._store.pipe(select(selectUrlSegment))),
		withLatestFrom(this._store.pipe(select(selectLoggedInUserUID))),
		switchMap(([[action, selectUrlSegment], selectLoggedInUserUID]) => {
			if (selectUrlSegment[1] == "new-project") {
				let type = selectUrlSegment[2];
				let project = new Project("New Project", "NOT_YET_ASSIGNED", type);
				return of(
					new NewProject(project),
					new UpdateUiComponents(selectLoggedInUserUID)
				);
			}
			if (
				selectUrlSegment[1] == "edit-project" ||
				selectUrlSegment[1] == "projects"
			) {
				return this._projectService.GetSelectedProject(selectUrlSegment).pipe(
					switchMap(([project]) => {
						if (project) {
							return of(
								new GetSelectedProjectSuccess(project),
								new UpdateUiComponents(project.uid)
							);
						}
						return of(new SetErrorMsg(`Project not found`));
					}),
					catchError(err => {
						return of(new SetErrorMsg(`${err}`));
					})
				);
			}
			return of(new UpdateUiComponents(selectLoggedInUserUID));
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
		withLatestFrom(this._store.pipe(select(selectProject))),
		switchMap(([project, selectProject]) => {
			this._userService.updateUserFromProjectName(project);
			return [
				new UpdateProfileSuccess(project.uid),
				new NavigateToRoute([project.profile, "projects", selectProject.title])
			];
		}),
		catchError(err => {
			return of(new SetErrorMsg(`${err}`));
		})
	);

	/* Update Component UI for projects
	Here we are checking if a project
	has a user matches the current user's Id
	*/
	@Effect()
	UpdateUiComponents$ = this._actions$.pipe(
		ofType<UpdateUiComponents>(EProjectActions.UpdateUiComponents),
		map(action => action.payload),
		withLatestFrom(this._store.pipe(select(selectLoggedInUserUID))),
		switchMap(([projectUid, uid]) => {
			let UiComponents = {
				showProjectSaveMenu: projectUid == uid,
				isUserLoggedIn: uid ? true : false,
				isNewProject: !projectUid || !uid
			};
			return of(new UpdateUiComponentsSuccess(UiComponents));
		})
	);

	/*  
		- Dispatched from edit-project
		- a toggle between Live and Dev when editing or viewing a project
	*/
	@Effect()
	UpdateProjectView$ = this._actions$.pipe(
		ofType<UpdateProjectView>(EProjectActions.UpdateProjectView),
		map(action => action.payload),
		withLatestFrom(this._store.pipe(select(selectLoggedInUserUID))),
		switchMap(([isAdmin, uid]) => {
			let UiComponents = {
				showProjectSaveMenu: isAdmin,
				isUserLoggedIn: uid ? true : false,
				isNewProject: !uid
			};
			return of(new UpdateUiComponentsSuccess(UiComponents));
		})
	);

	constructor(
		private _actions$: Actions,
		private _store: Store<IAppState>,
		private _projectService: ProjectService,
		private _userService: UserService,
		private _profileService: ProfileService
	) {}
}
