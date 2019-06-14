import { AuthService } from "../../services/auth.service";
import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of, from } from "rxjs";
import {
	switchMap,
	map,
	withLatestFrom,
	delay,
	catchError
} from "rxjs/operators";
import { Observable } from "rxjs";
import { IAppState } from "../state/app.state";
import {
	EAuthActions,
	GetUserAuth,
	Authenticated,
	NotAuthenticated,
	GoogleLogin,
	Logout,
	AuthError
} from "../actions/auth.actions";
import { User } from "../../models/user.interface";
import { selectCurrentUser } from "../selectors/auth.selectors";
// TODO Auth Guards
// https://medium.com/@lemmusm/angular-firebase-authentication-with-localstorage-74d00a3e35db
@Injectable()
export class AuthEffects {
	@Effect()
	getUserAuth$ = this._actions$.pipe(
		ofType<GetUserAuth>(EAuthActions.GetUserAuth),
		map(action => {
			action.payload;
		}),
		withLatestFrom(this._store.pipe(select(selectCurrentUser))),
		map(() => this.authService.currentUser),
		switchMap(authData => {
			if (authData) {
				const user = new User(authData.uid, authData.displayName);
				localStorage.setItem('user', JSON.stringify(user));
				return of(new Authenticated(user));
			} else {
				return of(new NotAuthenticated());
			}
		}),
		catchError(err => {
			return of(new AuthError({error: err.message}));
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
    catchError(err => of(new AuthError({error: err.message})))
	);

	@Effect()
	logout$ = this._actions$.pipe(
		ofType<Logout>(EAuthActions.Logout),
		map(action => {
			action.payload;
		}),
		switchMap(payload => {
			return of(this.authService.signOut());
		}),
		map(authData => {
			return new NotAuthenticated();
		}),
		catchError(err => of(new AuthError({error: err.message})))
	);

	constructor(
		private authService: AuthService,
		private _actions$: Actions,
		private _store: Store<IAppState>
	) {}
}
