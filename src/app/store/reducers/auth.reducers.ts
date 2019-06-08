import { EAuthActions } from "./../actions/auth.actions";
import { AuthActions } from "./../actions/auth.actions";
import { initialAuthState, IAuthState } from "./../state/auth.state";

export const authReducers = (
	state = initialAuthState,
	action: AuthActions
): IAuthState => {
	switch (action.type) {
		case EAuthActions.GetUser: {
			return {
				...state,
				currentUser: action.payload,
				loading: false
			};
        }
        case EAuthActions.Authenticated: {
            return {
                ...state,
				currentUser: action.payload,
				loading: false
            }
		}
		case EAuthActions.NotAuthenticated: {
			return {
				...state,
				currentUser: action.payload,
				loading: false
			}
		}
		case EAuthActions.AuthError: {
			return {
				...state,
				currentUser: action.payload,
				loading: false
			}
		}
		case EAuthActions.GoogleLogin: {
			return {
				...state,
				currentUser: action.payload,
				loading: true
			}
		}
		case EAuthActions.Logout: {
			return {
				...state,
				currentUser: action.payload,
				loading: true
			}
		}
		default:
			return state;
	}
};