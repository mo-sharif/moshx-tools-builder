import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { ICompState } from "../state/comp.state";
import {
	SendHttpRequest,
	ECompActions,
	SendHttpRequestSuccess
} from "../actions/comp.actions";
import { map, switchMap, catchError, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { SetErrorMsg } from "../actions/message.actions";
import { RequestService } from "src/app/services/comp/request.service";
import { selectProject } from "../selectors/project.selector";

@Injectable()
export class CompEffects {
	@Effect()
	sendHttpRequest$ = this._actions$.pipe(
		ofType<SendHttpRequest>(ECompActions.SendHttpRequest),
		map(action => action.payload),
		withLatestFrom(this._store.pipe(select(selectProject))),
		switchMap(([data, project]) => {
			if (project.componentConfigs && project.componentConfigs.httpPostUrl) {
				return this._requestService.sendPostRequest(
					project.componentConfigs.httpPostUrl,
					data
				);
			}
		}),
		switchMap(([a,res]) => {
            console.log(a)
            console.log(res)
			if (res) {
				return of(
					new SetErrorMsg(
						`Please configure a post url to perform a post request`
					)
				);
			}
		}),
		catchError(err => of(new SetErrorMsg(`${err}`)))
	);
	constructor(
		private _actions$: Actions,
		private _store: Store<ICompState>,
		private _requestService: RequestService
	) {}
}
