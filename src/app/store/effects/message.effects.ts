import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import {
  switchMap,
  map,
  catchError
} from "rxjs/operators";

import { IAppState } from "../state/app.state";
import {
  EMessageActions,
  SetErrorMsg,
  SetSuccessMsg,
  MsgSent
} from "../actions/message.actions";

import { MessageService } from "../../services/message/message.service";

@Injectable()
export class MessageEffects {

  @Effect()
  SetSuccessMsg$ = this._actions$.pipe(
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

  @Effect()
  SetErrorMsg$ = this._actions$.pipe(
    ofType<SetErrorMsg>(EMessageActions.SetErrorMsg),
    map(action => action.payload),
    switchMap(message => {
      return this.messageService.setErrorMsg(message).pipe(
        switchMap(() => {
          return of(new MsgSent());
        })
      );
    }),
    catchError(err => of(this.messageService.setErrorMsg(err)))
  );

  constructor(
    private _actions$: Actions,
    private messageService: MessageService
  ) {}
}
