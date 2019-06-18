import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IMessageState } from '../state/message.state';

const message = (state: IAppState) => state.message;

export const selectMessage = createSelector(
    message,
    (state: IMessageState) => state.message
)