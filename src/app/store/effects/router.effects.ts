import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { switchMap, tap, withLatestFrom, map } from "rxjs/operators";
import { of } from "rxjs";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../state/app.state";

import {
	CloseDrawer,
	NavigateToRoute,
	EConfigActions,
	NavigateSuccess
} from "../actions/config.actions";
import { ROUTER_NAVIGATION, RouterNavigationAction } from "@ngrx/router-store";
import { selectIsCollapsed } from "../selectors/config.selector";
import { Router } from "@angular/router";
import { LoadProfile } from "../actions/project.actions";

@Injectable()
export class routerEffects {
	@Effect()
	routeChange$ = this._actions$.pipe(
		ofType(ROUTER_NAVIGATION),
		withLatestFrom(this._store.pipe(select(selectIsCollapsed))),
		switchMap(() => of(new CloseDrawer()))
	);

	@Effect({ dispatch: false })
	navigateToRoute$ = this._actions$.pipe(
		ofType<NavigateToRoute>(EConfigActions.NavigateToRoute),
		map(action => action.payload),
		tap((route: string) => {
			this._router.navigate([route]);
		})
		/* 		tap(() => {
			of(new NavigateSuccess("Navigate to route success"));
		}) */
	);

	constructor(
		private _actions$: Actions,
		private _store: Store<IAppState>,
		private _router: Router
	) {}
}
