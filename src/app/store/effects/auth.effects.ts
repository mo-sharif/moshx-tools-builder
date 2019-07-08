import { AuthService } from "../../services/auth/auth.service";
import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of } from "rxjs";
import {
	switchMap,
	map,
	catchError,
	tap,
	withLatestFrom
} from "rxjs/operators";
import { IAppState } from "../state/app.state";
import {
	EAuthActions,
	GetUserAuth,
	Authenticated,
	NotAuthenticated,
	GoogleLogin,
	Logout,
	AuthError,
	UpdateUser,
	SaveUserProfile
} from "../actions/auth.actions";
import { User, IUser } from "../../models/user.interface";
import { UserService } from "src/app/services/user/user.service";
import { AddUser, AddUserSuccess } from "../actions/user.actions";
import { ProfileService } from "src/app/services/profile/profile.service";

@Injectable()
export class AuthEffects {
	@Effect()
	getUserAuth$ = this._actions$.pipe(
		ofType<GetUserAuth>(EAuthActions.GetUserAuth),
		map(action => {
			action.payload;
		}),
		switchMap(() => this.authService.currentUserObservable),
		switchMap(authData => {
			if (authData == null) {
				return of(new NotAuthenticated())
			}
			let user = new User(
				authData.uid,
				authData.displayName,
				authData.photoURL
			);
			
			 return of(new SaveUserProfile(user), new Authenticated(user))
		}),
		catchError(err => {
			return [new AuthError({ error: err.message })];
		})
	);

	@Effect()
	googleLogin$ = this._actions$.pipe(
		ofType<GoogleLogin>(EAuthActions.GoogleLogin),
		map(action => {
			action.payload;
		}),
		switchMap(() => this.authService.googleLogin()),
		map(credential => {
			// Successful login
			return new GetUserAuth();
		}),
		catchError(err => of(new AuthError({ error: err.message })))
	);

	@Effect()
	logout$ = this._actions$.pipe(
		ofType<Logout>(EAuthActions.Logout),
		map(action => {
			action.payload;
		}),
		switchMap(() => {
			return of(this.authService.logout());
		}),
		map(() => {
			return new NotAuthenticated();
		}),
		catchError(err => of(new AuthError({ error: err.message })))
	);

	@Effect()
	saveUserProfile$ = this._actions$.pipe(
		ofType<Authenticated>(EAuthActions.Authenticated),
		map((action) => action.payload),
		switchMap((user: IUser) => {
			return this._profileService.getUserProfile(user.uid).pipe(
				switchMap((user: IUser) => {
					user.profileSlug = user.profile.replace(/ /g, '.');
					this._userService.addUser(user);
					return of(new UpdateUser(user))
				})
			)
		})
	);
	constructor(
		private authService: AuthService,
		private _actions$: Actions,
		private _store: Store<IAppState>,
		private _userService: UserService,
		private _profileService: ProfileService
	) {}
}
