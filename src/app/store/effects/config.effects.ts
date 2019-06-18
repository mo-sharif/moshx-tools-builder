import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";

import { IConfig } from "../../models/config.interface";
import {
	EConfigActions,
	GetConfig,
	GetConfigSuccess
} from "../actions/config.actions";
import { SetSuccessMsg } from "../actions/message.actions";

@Injectable()
export class ConfigEffects {
/* 	@Effect()
	getConfig$ = this._actions$.pipe(
		ofType<GetConfig>(EConfigActions.GetConfig),
    switchMap(() => this._configService.getConfig()),
		switchMap((config: IConfig) => {
			return of(new GetConfigSuccess(config));
		})
	); */

	constructor(
		private _actions$: Actions
	) {}
}
