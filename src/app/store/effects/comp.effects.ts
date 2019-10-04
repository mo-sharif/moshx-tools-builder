import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { ICompState } from "../state/comp.state";
import {
	SendHttpRequest,
	ECompActions,
	SendHttpRequestSuccess
} from "../actions/comp.actions";
import { map, switchMap, catchError, withLatestFrom, finalize } from "rxjs/operators";
import { of } from "rxjs";
import { SetErrorMsg, SetSuccessMsg } from "../actions/message.actions";
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
				return this._requestService
					.sendPostRequest(project.componentConfigs.httpPostUrl, data)
					.pipe(
						catchError((err) => {
                            if(err.status == 200) {
                                return of(new SendHttpRequestSuccess(), new SetSuccessMsg(`Form submitted successfully, response was: ${err.error.text}`))
                            }
                            return of(new SetErrorMsg(err.error.text))
                        })
					);
			} else {
                return of(new SetErrorMsg(`Please provide Post URL in save menu to submit form`))
            }
		})
	);
	constructor(
		private _actions$: Actions,
		private _store: Store<ICompState>,
		private _requestService: RequestService
	) {}
}
