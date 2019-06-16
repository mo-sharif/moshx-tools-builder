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
  tap,
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
import { selectLoggedInUser } from "../selectors/auth.selectors";

@Injectable()
export class AuthEffects {
  @Effect()
  getUserAuth$ = this._actions$.pipe(
    ofType<GetUserAuth>(EAuthActions.GetUserAuth),
    map(action => {
      action.payload;
    }),
    // withLatestFrom(this._store.pipe(select(selectLoggedInUser))),
    // map(() => this.authService.userFromStorage),
    switchMap(() => this.authService.currentUserObservable),
    switchMap(authData => {
      if (authData == null) {
        return of(new NotAuthenticated());
      }
      const user = new User(authData.uid, authData.displayName, authData.photoURL);
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

  constructor(
    private authService: AuthService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
