import { LoadingActions, ELoadingActions } from "../actions/loading.actions";
import { initialLoadingState, ILoadingState } from "./../state/loading.state";

export function loadingReducers(
	state = initialLoadingState,
	action: LoadingActions
): ILoadingState {
	switch (action.type) {
		case ELoadingActions.SetLoading: {
			return {
				...state,
				loading: action.payload
			};
		}
		case ELoadingActions.GetLoadingSuccess: {
			return {
				...state,
				loading: action.payload
			};
		}
		default:
			return state;
	}
}
