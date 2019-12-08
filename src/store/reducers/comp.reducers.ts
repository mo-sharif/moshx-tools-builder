import { initialCompState, ICompState } from "../state/comp.state";
import { CompActions, ECompActions } from "../actions/comp.actions";

export function compReducers(
	state = initialCompState,
	action: CompActions
): ICompState {
	switch (action.type) {
		case ECompActions.SendHttpRequest: {
			return {
				...state,
				sendRequest: action.payload
			};
		}
		case ECompActions.SendHttpRequestSuccess: {
			return {
				...state,
				// sendRequestResults: action.payload
			};
		}
		default:
			return state;
	}
}
