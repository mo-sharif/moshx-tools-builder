import { AuthService } from "../../services/auth/auth.service";
import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { of, from } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import {
	EAuthActions,
	GetUserAuth,
	Authenticated,
	NotAuthenticated,
	GoogleLogin,
	Logout,
	AuthError,
	GithubLogin,
	LogoutSuccess,
	FacebookLogin,
	TwitterLogin,
	AnonymousLogin,
	EmailLogin,
	EmailSignUp,
	EmailSignUpSuccess
} from "../actions/auth.actions";
import {
	User,
	IUser,
	ILoginData,
	IEmailSignUpData
} from "../../models/user.interface";

import { GetUserProfile } from "../actions/auth.actions";
import { GetSettings } from "../actions/config.actions";
import { SetErrorMsg } from "../actions/message.actions";
import {
	UpdateUiComponents,
	UpdateUiComponentsSuccess
} from "../actions/project.actions";

@Injectable()
export class AuthEffects {
	@Effect()
	getUserAuth$ = this._actions$.pipe(
		ofType<GetUserAuth>(EAuthActions.GetUserAuth),
		switchMap(() => this.authService.currentUserObservable),
		switchMap(authData => {
			if (authData == null) {
				return of(
					new NotAuthenticated(),
					new GetSettings(),
					new UpdateUiComponentsSuccess({ projectViewToggle: true, isUserLoggedIn: false, isNewProject: true })
				);
			}

			let displayName: string = null;
			if (!authData.displayName && authData.email) {
				displayName = authData.email.split("@")[0];
			}

			let user = new User(
				authData.uid,
				displayName,
				authData.email,
				authData.photoURL,
				authData.isAnonymous
			);
			return of(
				new Authenticated(user),
				new GetUserProfile(),
				new GetSettings(),
				new UpdateUiComponents(user.uid)
			);
		}),
		catchError(err => {
			return of(new AuthError({ error: err.message }));
		})
	);

	@Effect()
	googleLogin$ = this._actions$.pipe(
		ofType<GoogleLogin>(EAuthActions.GoogleLogin),
		switchMap(() => this.authService.googleLogin()),
		map(credential => new GetUserAuth()),
		catchError(err => of(new AuthError({ error: err.message })))
	);

	@Effect()
	facebookLogin$ = this._actions$.pipe(
		ofType<FacebookLogin>(EAuthActions.FacebookLogin),
		switchMap(() => this.authService.facebookLogin()),
		map(credential => new GetUserAuth()),
		catchError(err => of(new AuthError({ error: err.message })))
	);

	@Effect()
	twitterLogin$ = this._actions$.pipe(
		ofType<TwitterLogin>(EAuthActions.TwitterLogin),
		switchMap(() => this.authService.twitterLogin()),
		map(credential => new GetUserAuth()),
		catchError(err => of(new AuthError({ error: err.message })))
	);

	@Effect()
	githubLogin$ = this._actions$.pipe(
		ofType<GithubLogin>(EAuthActions.GithubLogin),
		switchMap(() => this.authService.githubLogin()),
		map(credential => new GetUserAuth()),
		catchError(err => of(new AuthError({ error: err.message })))
	);

	@Effect()
	anonymousLogin$ = this._actions$.pipe(
		ofType<AnonymousLogin>(EAuthActions.AnonymousLogin),
		switchMap(() => this.authService.anonymousLogin()),
		map(credential => new GetUserAuth()),
		catchError(err => of(new AuthError({ error: err.message })))
	);

	@Effect()
	emailLogin$ = this._actions$.pipe(
		ofType<EmailLogin>(EAuthActions.EmailLogin),
		map(action => action.payload),
		switchMap((loginData: ILoginData) =>
			from(this.authService.emailLogin(loginData)).pipe(
				switchMap((credential: IUser | any) => {
					return credential.message
						? of(
								new AuthError({ error: credential.message }),
								new SetErrorMsg(credential.message)
						  )
						: of(new GetUserAuth());
				}),
				catchError(err => of(new AuthError({ error: err.message })))
			)
		)
	);

	@Effect()
	emailSignUp$ = this._actions$.pipe(
		ofType<EmailSignUp>(EAuthActions.EmailSignUp),
		map(action => action.payload),
		switchMap((emailSignUpData: IEmailSignUpData) =>
			from(this.authService.emailSignUp(emailSignUpData)).pipe(
				switchMap((credential: any) => {
					return credential.message
						? of(
								new AuthError({ error: credential.message }),
								new SetErrorMsg(credential.message)
						  )
						: of(new EmailSignUpSuccess(credential), new GetUserAuth());
				}),
				catchError(err => of(new AuthError({ error: err.message })))
			)
		)
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
		switchMap(() => {
			return of(new LogoutSuccess());
		}),
		catchError(err => of(new AuthError({ error: err.message })))
	);

	constructor(private authService: AuthService, private _actions$: Actions) {}
}
