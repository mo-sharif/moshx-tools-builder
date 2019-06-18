import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, map, withLatestFrom, tap } from "rxjs/operators";

import { IAppState } from "../state/app.state";
import {
	EMessageActions,
	SetError,
	SetInfo,
	SetLoading,
	SetSuccess,
	SetWarning
} from "../actions/message.actions";

import { MessageService } from "../../services/message/message.service";
import { selectMessage } from "../selectors/message.selectors";

@Injectable()
export class MessageEffect {
	@Effect()
	getMessage$ = this._actions$.pipe(
		ofType<SetSuccess>(EMessageActions.SetSuccess),
		map(action => action.payload),
		withLatestFrom(this._store.pipe(select(selectMessage))),
		switchMap(message => {
			return of(this.messageService.setSuccess(message));
		})
	);

	constructor(
		private _actions$: Actions,
		private _store: Store<IAppState>,
		private messageService: MessageService
	) {}
}
