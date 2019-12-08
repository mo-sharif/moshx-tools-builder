import { initialProfileState, IProfileState } from "../state/profile.state";
import { ProfileActions, EProfileActions } from "../actions/profile.actions";

export function profileReducers(
	state = initialProfileState,
	action: ProfileActions
): IProfileState {
	switch (action.type) {
		case EProfileActions.GetProfileFromRoute: {
			return {
				...state
			};
		}
		case EProfileActions.GetProfileFromRouteSuccess: {
			return {
				...state,
				projects: action.payload
			};
		}
		default:
			return state;
	}
}
