import { EauthActions } from './../actions/auth.actions';
import { AuthActions } from './../actions/auth.actions';
import { initialAuthState, IAuthState } from './../state/auth.state';
import { Action } from 'rxjs/internal/scheduler/Action';

export const authReducers = (
    state = initialAuthState,
    action: AuthActions
): IAuthState => {
    switch (action.type) { 
        case EauthActions.GET_USER: { 
            return {
                ...state,
                currentUser: action.payload,
            };
        }
    }
}

//TODO THIS IS NOT DONE YET!