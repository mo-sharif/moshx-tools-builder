import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of } from "rxjs";
import {
	switchMap,
	map,
	withLatestFrom,
	catchError,
	publishReplay,
	refCount
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
	UpdateUser,
	UpdateUserSuccess
} from "../actions/user.actions";
import { UserService } from "../../services/user/user.service";
import { IUser } from "../../models/user.interface";
import { selectUserList } from "../selectors/user.selector";

import { SetLoading } from "../actions/loading.actions";


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
			return of(new AddUserSuccess(user));
		}),
		catchError(err => of(new GetUsersError({ error: err.message })))
  );
	
  @Effect()
	updateUser$ = this._actions$.pipe(
		ofType<UpdateUser>(EUserActions.UpdateUser),
		map(action => action.payload),
		switchMap((user: IUser) => {
			this._userService.updateUser(user);
			return of(new UpdateUserSuccess(user));
		}),
		catchError(err => of(new GetUsersError({ error: err.message })))
  );

	@Effect()
	getUsers$ = this._actions$.pipe(
		ofType<GetUsers>(EUserActions.GetUsers),
		switchMap(() => {
			return this._userService.getUserList().pipe(
				publishReplay(1),
				refCount(),
				switchMap((users: IUser[]) => [
					new GetUsersSuccess(users),
					new SetLoading(false)
				]),
				catchError(err => of(new GetUsersError({ error: err.message })))
			);
		})
	);

	constructor(
		private _userService: UserService,
		private _actions$: Actions,
		private _store: Store<IAppState>
	) {}
}
