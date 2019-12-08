import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state'; 
import { ICompState } from '../state/comp.state';

const selectComp = (state: IAppState) => state.comp;

export const selectSendRequestResults = createSelector(
    selectComp,
    (state: ICompState) => state.comp.sendRequestResults
);