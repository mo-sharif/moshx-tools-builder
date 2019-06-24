import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { switchMap, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../state/app.state";

import {
	EConfigActions,
	OpenDrawer,
	CloseDrawer,
	DrawerStatus
} from "../actions/config.actions";
import { selectConfig } from "../selectors/config.selector";

@Injectable()
export class ConfigEffects {
	@Effect()
	openDrawer$ = this._actions$.pipe(
		ofType<OpenDrawer>(EConfigActions.OpenDrawer),
		withLatestFrom(this._store.pipe(select(selectConfig))),
		switchMap(res => {
			res[1].isCollapsed = true;
			return of(new DrawerStatus(res[1]));
		})
	);

	@Effect()
	closeDrawer$ = this._actions$.pipe(
		ofType<CloseDrawer>(EConfigActions.CloseDrawer),
		withLatestFrom(this._store.pipe(select(selectConfig))),
		switchMap(res => {
			res[1].isCollapsed = false;
			return of(new DrawerStatus(res[1]));
		})
	);

	constructor(private _actions$: Actions, private _store: Store<IAppState>) {}
}
