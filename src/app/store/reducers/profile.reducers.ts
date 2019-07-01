import { EProfileActions, ProfileActions } from "./../actions/profile.actions";
import { initialProfileState, IProfileState } from "./../state/profile.state";

export function profileReducer(
	state = initialProfileState,
	action: ProfileActions
): IProfileState {
	switch (action.type) {
		case EProfileActions.LoadProfile: {
			return {
				...state
			};
		}
		case EProfileActions.LoadProfileSuccess: {
			return {
				...state,
				profile: action.payload
			};
		}
		default:
			return state;
	}
}
