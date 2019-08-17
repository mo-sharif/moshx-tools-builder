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
  GetProfileFromRouteSuccess,
  GetProfileFromRoute,
  GetSelectedProjectFromRoute,
  GetSelectedProjectFromRouteSuccess,
  NewProject,
  DeleteProject,
  DeleteProjectSuccess,
  UpdateUiComponents,
  UpdateUiComponentsSuccess
} from "../actions/project.actions";
import { SetSuccessMsg, SetErrorMsg } from "../actions/message.actions";

import { IProject } from "src/app/models/project.interface";
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
import { selectedProject, userProjects } from "../selectors/project.selector";

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
		project.id = selectedProject.id;
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
  deleteProject$ = this._actions$.pipe(
	ofType<DeleteProject>(EProjectActions.DeleteProject),
	map(action => action.payload),
	withLatestFrom(this._store.pipe(select(selectLoggedInUserUID))),
	switchMap(([project, selectLoggedInUserUID]) => {
	  if (selectLoggedInUserUID == project.userID) {
		this._projectService.deleteProject(project);
		return [
		  new SetSuccessMsg("Project Deleted Successfully!"),
		  new DeleteProjectSuccess(),
		  new NavigateToRoute(["home"])
		];
	  } else {
		new SetErrorMsg("You don't have permission to delete this project");
	  }
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
		  switchMap((projects: IProject[]) => [
			new GetProfileFromRouteSuccess(projects),
			new UpdateUiComponents(projects)
		  ])
		);
	})
  );

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
		  return of(new SetErrorMsg(err));
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
		  return of(new SetErrorMsg(err));
		})
	  );
	})
  );

  /* 
  This effect handles logic between creating a new project 
  or editing an existing project 
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
			return of(
			  new NewProject({
				title: "NEW PROJECT",
				type: action.payload,
				userID: "NOT YET ASSIGNED",
				UiComponents: null
			  })
			);
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
	  this._userService.updateUserFromProjectName(project);
	  return [
		new UpdateProfileSuccess(project.userID),
		new NavigateToRoute([project.profile])
	  ];
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
	switchMap(([projects, userID]) => {
	  let isNewProject = {
		isNewProject: projects[0].userID == userID
	  };
	  return of(new UpdateUiComponentsSuccess(isNewProject));
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
