import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";

import { IConfig } from "../../models/config.interface";
import { ConfigService } from "../../services/config/config.service";
import {
	EConfigActions,
	GetConfig,
	GetConfigSuccess
} from "../actions/config.actions";
import { SetSuccess } from "../actions/message.actions";

@Injectable()
export class ConfigEffects {
	@Effect()
	getConfig$ = this._actions$.pipe(
		ofType<GetConfig>(EConfigActions.GetConfig),
    // switchMap(() => this._configService.getConfig()),
    switchMap(() => {
      return of (new SetSuccess('Configs have been loaded'))
		})
/* 		switchMap((config: IConfig) => {
			return of(new GetConfigSuccess(config));
		}) */
	);

	constructor(
		private _configService: ConfigService,
		private _actions$: Actions
	) {}
}
