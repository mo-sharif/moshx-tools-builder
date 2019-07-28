import { AuthService } from "../../services/auth/auth.service";
import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of, from } from "rxjs";
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
import { UserService } from "src/app/services/user/user.service";
import { AddUser, AddUserSuccess } from "../actions/user.actions";
import { ProfileService } from "src/app/services/profile/profile.service";
import { GetUserProfile } from "../actions/auth.actions";
import { GetSettings } from "../actions/config.actions";
import { SetSuccessMsg, SetErrorMsg } from "../actions/message.actions";

@Injectable()
export class AuthEffects {
	@Effect()
	getUserAuth$ = this._actions$.pipe(
		ofType<GetUserAuth>(EAuthActions.GetUserAuth),
		switchMap(() => this.authService.currentUserObservable),
		switchMap(authData => {
			if (authData == null) {
				return of(new NotAuthenticated());
			}
			let user = new User(
				authData.uid,
				authData.displayName,
				authData.email,
				authData.photoURL,
				authData.isAnonymous
			);

			return of(
				new Authenticated(user),
				new GetUserProfile(),
				new GetSettings()
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
				switchMap((credential: any) => {
					console.log(credential.message);
					return credential.message
						? of(new AuthError({ error: credential.message }), new SetErrorMsg(credential.message))
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
		map((emailSignUpData: IEmailSignUpData) => {
			from(this.authService.emailSignUp(emailSignUpData)).pipe(
				switchMap((credential: IUser) => of(new EmailSignUpSuccess(credential)))
			);
		}),
		switchMap(credential => {
			return of(new GetUserAuth());
		})
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

	@Effect()
	saveUserProfile$ = this._actions$.pipe(
		ofType<Authenticated>(EAuthActions.Authenticated),
		map(action => action.payload),
		switchMap((user: IUser) => {
			if (user && user.profile) {
				user.profileSlug = user.profile.replace(/ /g, ".");
			}
			if (user && user.email && !user.displayName) {
				user.displayName = user.email.split("@")[0];
			}
			this._userService.addUser(user);

			return of(new AddUserSuccess(user));
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
