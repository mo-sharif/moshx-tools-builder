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
  GetProject,
  GetProjectSuccess,
  SaveProjectSuccess
} from "../actions/project.actions";
import { SetSuccessMsg } from "../actions/message.actions";
import { IProject } from "src/app/models/project.interface";

@Injectable()
export class ConfigEffects {
  @Effect()
  openDrawer$ = this._actions$.pipe(
    ofType<SaveProject>(EProjectActions.SaveProject),
    map(action => action.payload),
    switchMap((project: IProject) => {
      this.projectService.addProject(project);
      new SaveProjectSuccess(project);
      return of(new SetSuccessMsg("Project Added Successfully"));
    }),
    // catchError(err => of(new GetUsersError({ error: err.message })))
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<IAppState>,
    private projectService: ProjectService
  ) {}
}
