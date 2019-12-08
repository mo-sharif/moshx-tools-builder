import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { switchMap, withLatestFrom, map } from "rxjs/operators";
import { of } from "rxjs";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../state/app.state";

import {
  EConfigActions,
  OpenDrawer,
  CloseDrawer,
  DrawerStatus,
  GetSettings,
  GetSettingsSuccess
} from "../actions/config.actions";
import { selectConfig } from "../selectors/config.selector";
import { ConfigService } from "src/services/config/config.service";

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

  @Effect()
  getSetting$ = this._actions$.pipe(
    ofType<GetSettings>(EConfigActions.GetSettings),
    switchMap(user => {
      return this._configService.getSettings();
    }),
    map(([payload, action]) => {
      let components = payload.containers.map(component => {
        return { name: `${component}`, type: `${component}Component` };
      });
      return components;
    }),
    switchMap(res => {
      return of(new GetSettingsSuccess(res));
    })
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<IAppState>,
    private _configService: ConfigService
  ) {}
}
