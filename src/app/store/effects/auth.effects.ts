import { AuthService } from '../../services/auth.service';
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
  GetUser,
  Authenticated,
  NotAuthenticated,
  GoogleLogin,
  Logout,
  AuthError
} from "../actions/auth.actions";
import { User } from "../../models/user.interface";
import { selectCurrentUser } from "../selectors/auth.selectors";

@Injectable()
export class AuthEffects {
  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EAuthActions.GetUser),
    map(action => {
      action.payload;
    }),
    withLatestFrom(this._store.pipe(select(selectCurrentUser))),
    switchMap(payload => this.authService.authState()),
    delay(200),
    map(authData => {
      if (authData) {
        const user = new User(authData.uid, authData.displayName);
        return new Authenticated(user);
      } else {
        // CHANGE ME: Use initial state instead
        const user = new User(null, "Guest");
        return new NotAuthenticated(user);
      }
    }),
    catchError(err => of(new AuthError()))
  );

  @Effect()
  googleLogin$ = this._actions$.pipe(
    ofType<GoogleLogin>(EAuthActions.GoogleLogin),
    map(action => {
      action.payload;
    }),
    switchMap(payload => {
			// CHANGE ME: this action can't be dispatched
			return this.authService.googleLoginPromise();
      // return from();
    })
  );

  @Effect()
  logout$ = this._actions$.pipe(
    ofType<Logout>(EAuthActions.Logout),
    map(action => {
      action.payload;
    }),
    switchMap(payload => {
      return from(this.authService.signOut());
    }),
    map(authData => {
      return new NotAuthenticated();
    }),
    catchError(err => of(new AuthError()))
  );

  constructor(
    private authService: AuthService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
