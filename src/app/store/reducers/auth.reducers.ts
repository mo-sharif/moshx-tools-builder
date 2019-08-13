import { EAuthActions } from "./../actions/auth.actions";
import { AuthActions } from "./../actions/auth.actions";
import { initialAuthState, IAuthState, defaultUser } from "./../state/auth.state";

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
				currentUser: defaultUser,
				loading: false
			};
		}
		case EAuthActions.GoogleLogin: {
			return {
				...state,
				loading: true
			};
		}
		case EAuthActions.GithubLogin: {
			return {
				...state,
				loading: true
			};
		}
		case EAuthActions.FacebookLogin: { 
			return {
				...state,
				loading: true
			}
		}
		case EAuthActions.TwitterLogin: { 
			return {
				...state,
				loading: true
			}
		}
		case EAuthActions.AnonymousLogin: { 
			return {
				...state,
				loading: true
			}
		}
		case EAuthActions.EmailSignUp: { 
			return {
				...state,
				loading: true
			}
		}
		case EAuthActions.EmailSignUpSuccess: { 
			return {
				...state,
				loading: false
			}
		}
		case EAuthActions.EmailLogin: { 
			return { 
				...state,
				loading: true
			}
		}
		case EAuthActions.Logout: {
			return {
				...state,
				loading: true
			};
		}
		case EAuthActions.LogoutSuccess: {
			return {
				...state,
				loading: false
			};
		}
		case EAuthActions.SaveUserProfile: {
			return {
				...state,
				currentUser: action.payload
			};
		}
		case EAuthActions.GetUserProfile: {
			return {
				...state,
			}
		}
		case EAuthActions.GetUserProfileSuccess: {
			return {
				...state,
				currentUser: action.payload
			}
		}
		default:
			return state;
	}
}
