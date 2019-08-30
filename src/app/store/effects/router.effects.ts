import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { switchMap, withLatestFrom, map, tap } from "rxjs/operators";
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
import { Router } from "@angular/router";
import { GetSelectedProjectFromRoute } from "../actions/project.actions";

@Injectable()
export class routerEffects {
	/* FINISH ME!! */
	@Effect()
	routeChange$ = this._actions$.pipe(
		ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
		switchMap((route) => {
			let profileName = route.payload.routerState.url.split('/')[1]
			let projectName = route.payload.routerState.url.split('/')[3]

			if (profileName && projectName) {
				return of(new GetSelectedProjectFromRoute([profileName, projectName]))
			} else { 
				return of()
			}
		})
	);

	@Effect()
	navigateToRoute$ = this._actions$.pipe(
		ofType<NavigateToRoute>(EConfigActions.NavigateToRoute),
		map(action => action.payload),
		map((routes) => {
			return routes.map((route) => {
				if (route) {
					return route.replace(/ /g, ".")
				}
			})
		}),
		map((routes: Array<string>) => {
			this._router.navigate(routes);
		}),
		switchMap(() => of(new NavigateSuccess()))
	);

	constructor(
		private _actions$: Actions,
		private _store: Store<IAppState>,
		private _router: Router
	) {}
}
