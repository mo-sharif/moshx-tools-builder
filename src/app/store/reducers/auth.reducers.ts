import { EAuthActions } from "./../actions/auth.actions";
import { AuthActions } from "./../actions/auth.actions";
import { initialAuthState, IAuthState } from "./../state/auth.state";
import { User } from "../../models/user.interface";

const defaultUser = new User(null, 'GUEST');

export function authReducers(
	state = initialAuthState,
	action: AuthActions
): IAuthState {
	switch (action.type) {
		case EAuthActions.GetUserAuth: {
			return {
				...state,
				loading: false
			};
		}
		case EAuthActions.Authenticated: {
			return {
				...state,
				currentUser: action.payload,
				loading: false
			};
		}
		case EAuthActions.NotAuthenticated: {
			return {
				...state,
				currentUser: defaultUser,
				loading: false
			};
		}
		case EAuthActions.AuthError: {
			return {
				...state,
				currentUser: action.payload,
				loading: false
			};
		}
		case EAuthActions.GoogleLogin: {
			return {
				...state,
				loading: true
			};
		}
		case EAuthActions.Logout: {
			return {
				...state,
				loading: true
			};
		}
		default:
			return state;
	}
}
