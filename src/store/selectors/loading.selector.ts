import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { ILoadingState } from "../state/loading.state";

const loadingState = (state: IAppState) => state.loading;

export const selectLoading = createSelector(
  loadingState,
  (state: ILoadingState) => state.loading
);
