import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { switchMap, map } from "rxjs/operators";
import { of } from "rxjs";
import {
	CloseDrawer,
	NavigateToRoute,
	EConfigActions,
	NavigateSuccess,
	StoreUrlSegments
} from "../actions/config.actions";
import { ROUTER_NAVIGATION, RouterNavigationAction } from "@ngrx/router-store";
import { Router } from "@angular/router";

@Injectable()
export class routerEffects {
	/* FINISH ME!! */
	@Effect()
	routeChange$ = this._actions$.pipe(
		ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
		switchMap((route) => {
			let profileName = route.payload.routerState.url.split('/')[1]
			let projectLifeCycle = route.payload.routerState.url.split('/')[2]
			let projectName = route.payload.routerState.url.split('/')[3]
			if (profileName && projectName) {
				return of(new StoreUrlSegments([profileName, projectLifeCycle, projectName]), new CloseDrawer())
			} else { 
				return of(new CloseDrawer())
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
		private _router: Router
	) {}
}
