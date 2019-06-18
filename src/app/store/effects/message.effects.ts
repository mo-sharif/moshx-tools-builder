import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of } from "rxjs";
import {
  switchMap,
  map,
  withLatestFrom,
  tap,
  catchError
} from "rxjs/operators";

import { IAppState } from "../state/app.state";
import {
  EMessageActions,
  SetErrorMsg,
  SetInfoMsg,
  SetLoadingMsg,
  SetSuccessMsg,
  SetWarningMsg,
  MsgSent
} from "../actions/message.actions";

import { MessageService } from "../../services/message/message.service";

@Injectable()
export class MessageEffects {
  @Effect()
  getMessage$ = this._actions$.pipe(
    ofType<SetSuccessMsg>(EMessageActions.SetSuccessMsg),
    map(action => action.payload),
    switchMap(message => {
      return this.messageService.setSuccessMsg(message).pipe(
        switchMap(() => {
          return of(new MsgSent());
        })
      );
    }),
    catchError(err => of(this.messageService.setErrorMsg(err)))
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<IAppState>,
    private messageService: MessageService
  ) {}
}
