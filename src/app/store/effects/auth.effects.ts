import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, map, withLatestFrom, delay, catchError } from "rxjs/operators";
import { Observable } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

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
import { User } from '../../models/user.interface'; 
import { selectCurrentUser } from '../selectors/auth.selectors';

@Injectable()
export class AuthEffects {
    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EAuthActions.GetUser),
        map(action => {action.payload; console.log(action)}),
        withLatestFrom(this._store.pipe(select(selectCurrentUser))),
        switchMap(payload => this.afAuth.authState),
        delay(200),
        map(authData => {
            console.log(authData)
            if (authData) {
                const user = new User(authData.uid, authData.displayName);
                return new Authenticated(user);
            } else {
                return new NotAuthenticated();
            }
        }),
        catchError(err => of(new AuthError()))
    )

	constructor(
		private afAuth: AngularFireAuth,
		private _actions$: Actions,
		private _store: Store<IAppState>
	) {}
}
