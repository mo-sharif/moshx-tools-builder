import { EUserActions } from "./../actions/user.actions";
import { UserActions } from "../actions/user.actions";
import { initialUserState, IUserState } from "../state/user.state";

export function userReducers(
	state = initialUserState,
	action: UserActions
): IUserState {
	switch (action.type) {
		case EUserActions.GetUsersSuccess: {
			return {
				...state,
				users: action.payload
			};
		}
		case EUserActions.GetUserSuccess: {
			return {
				...state,
				selectedUser: action.payload
			};
		}
		case EUserActions.AddUser: {
			return {
				...state,
				addedUser: action.payload
			};
		}
		case EUserActions.AddUserSuccess: {
			return {
				...state,
				addedUser: action.payload
			};
		}
		case EUserActions.UpdateUser: {
			return {
				...state,
				addedUser: action.payload
			};
		}
		case EUserActions.UpdateUserSuccess: {
			return {
				...state,
				addedUser: action.payload
			};
		}
		case EUserActions.UpdateProfile: {
			return {
				...state,
				profile: action.payload
			};
		}
		case EUserActions.UpdateProfileSuccess: {
			return {
				...state,
				selectedUser: action.payload
			};
		}

		default:
			return state;
	}
}
