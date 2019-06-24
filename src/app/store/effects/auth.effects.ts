import { AuthService } from "../../services/auth/auth.service";
import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
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
				return of(new NotAuthenticated());
			}
			const user = new User(
				authData.uid,
				authData.displayName,
				authData.photoURL
			);
			return of(new Authenticated(user));
		}),
		catchError(err => {
			return of(new AuthError({ error: err.message }));
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
		switchMap(payload => {
			return of(this.authService.logout());
		}),
		map(authData => {
			return new NotAuthenticated();
		}),
		catchError(err => of(new AuthError({ error: err.message })))
	);

	constructor(private authService: AuthService, private _actions$: Actions) {}
}
