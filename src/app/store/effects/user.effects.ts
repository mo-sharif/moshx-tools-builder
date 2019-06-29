import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of, from } from "rxjs";
import {
  switchMap,
  map,
  withLatestFrom,
  tap,
  catchError
} from "rxjs/operators";

import { IAppState } from "../state/app.state";
import {
  GetUsersSuccess,
  EUserActions,
  GetUserSuccess,
  GetUser,
  GetUsers,
  GetUsersError,
  AddUser,
  AddUserSuccess,
  UpdateUserProfile,
  UpdateUserProfileSuccess
} from "../actions/user.actions";
import { UserService } from "../../services/user/user.service";
import { IUser } from "../../models/user.interface";
import { selectUserList } from "../selectors/user.selector";

import { SetSuccessMsg } from "../actions/message.actions";
import { SetLoading } from "../actions/loading.actions";
import { selectLoggedInUser } from "../selectors/auth.selectors";
import { EProjectActions, SaveProjectSuccess } from "../actions/project.actions";

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      this._userService.getUser(id);
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    }),
    catchError(err => of(new GetUsersError({ error: err.message })))
  );

  @Effect()
  addUser$ = this._actions$.pipe(
    ofType<AddUser>(EUserActions.AddUser),
    map(action => action.payload),
    switchMap((user: IUser) => {
      this._userService.addUser(user);
      new AddUserSuccess(user);
      return of(new SetSuccessMsg("User Added Successfully"));
    }),
    catchError(err => of(new GetUsersError({ error: err.message })))
  );
  @Effect()
  getUsers$ = this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => {
      return this._userService.getUserList().pipe(
        switchMap((users: IUser[]) => [
          new GetUsersSuccess(users),
          new SetSuccessMsg("Users Loaded Successfully!"),
          new SetLoading(false)
        ]),
        catchError(err => of(new GetUsersError({ error: err.message })))
      );
    })
  );
 // FINISH ME
	@Effect()
	updateUserProfile$ = this._actions$.pipe(
    ofType<SaveProjectSuccess>(EProjectActions.SaveProjectSuccess),
    map(action => action.payload),
    tap((project) => {
      console.log(project) 
      // this._userService.updateUser(project);
      // return of(new UpdateUserProfileSuccess(user[1]))
    })
    )
  
  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
