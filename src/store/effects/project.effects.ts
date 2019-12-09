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
	GetUserProjects,
	GetUserProjectsSuccess
} from "../actions/project.actions";
import { SetSuccessMsg, SetErrorMsg } from "../actions/message.actions";

import { Project } from "src/models/project.interface";
import {
	selectLoggedInUserUID,
	selectLoggedInUser
} from "../selectors/auth.selectors";
import { UpdateProfileSuccess } from "../actions/user.actions";
import { UserService } from "src/services/user/user.service";
import { NavigateToRoute } from "../actions/config.actions";

import { selectProject } from "../selectors/project.selector";
import { selectUrlSegment } from "../selectors/config.selector";

@Injectable()
export class ProjectEffects {
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
	updateProject$ = this._actions$.pipe(
		ofType<UpdateProject>(EProjectActions.UpdateProject),
		map(action => action.payload),
		withLatestFrom(this._store.pipe(select(selectProject))),
		switchMap(([project, selectProject]) => {
			let updatedProject = {
				...selectProject,
				[selectProject && selectProject.type]: { ...project }
			};
			this._projectService.updateProject(updatedProject);
			return of(new UpdateProjectSuccess(updatedProject));
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
					new NavigateToRoute([project.profile]),
					new DeleteProjectSuccess()
				];
			} else {
				new SetErrorMsg("You don't have permission to delete this project");
			}
		}),
		catchError(err => of(new SetErrorMsg(err)))
	);

	@Effect()
	getUserProjects$ = this._actions$.pipe(
		ofType<GetUserProjects>(EProjectActions.GetUserProjects),
		withLatestFrom(this._store.pipe(select(selectLoggedInUser))),
		switchMap(([action, user]) => {
			return this._projectService.getUserProjects(user).pipe(
				map(projects => new GetUserProjectsSuccess(projects)),
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
						console.log(project)
						if (!project) {
							return of(new SetErrorMsg(`Project not found`));
						}
						return of(
							new GetSelectedProjectSuccess(project),
							new UpdateUiComponents(project.uid)
						);
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
			this._userService.updateUserProfileFromProject(project);
			return [
				new UpdateProfileSuccess(project.uid),
				new NavigateToRoute([project.profile, "projects", selectProject.title])
			];
		}),
		catchError(err => {
			return of(new SetErrorMsg(`${err}`));
		})
	);

	/* 	
		Update Component UI for projects
		Here we are checking if a project
		has a user matches the current user's Id
	*/
	/*  
		- Dispatched from edit-project
		- a toggle between Live and Dev when editing or viewing a project
	*/
	@Effect()
	UpdateUiComponents$ = this._actions$.pipe(
		ofType<UpdateUiComponents>(EProjectActions.UpdateUiComponents),
		map(action => action.payload),
		withLatestFrom(this._store.pipe(select(selectLoggedInUserUID))),
		withLatestFrom(this._store.pipe(select(selectProject))),
		switchMap(([[projectUid, uid], selectProject]) => {
			let isProjectOwner = false;
			let projectViewToggle = false;
			let isNewProject = true;

			if (selectProject && selectProject.uid) {
				isProjectOwner = selectProject.uid == uid;
			}
			if (selectProject && selectProject.uid == "NOT_YET_ASSIGNED") {
				isProjectOwner = true;
			}
			if (projectUid === true) {
				projectViewToggle = true;
			}
			if (projectUid == uid) {
				isProjectOwner = true;
			}
			if (selectProject && selectProject.id) {
				isNewProject = false;
			}
			let UiComponents = {
				projectViewToggle,
				isUserLoggedIn: uid ? true : false,
				isNewProject,
				isProjectOwner
			};
			return of(new UpdateUiComponentsSuccess(UiComponents));
		})
	);

	constructor(
		private _actions$: Actions,
		private _store: Store<IAppState>,
		private _projectService: ProjectService,
		private _userService: UserService
	) {}
}
