import { EMessageActions } from "./../actions/message.actions";
import { MessageActions } from "./../actions/message.actions";
import { initialMessageState, IMessageState } from "./../state/message.state";

export function messageReducers(
	state = initialMessageState,
	action: MessageActions
): IMessageState {
	switch (action.type) {
		case EMessageActions.SetSuccess: {
			return {
				...state,
				message: action.payload
			};
		}
		case EMessageActions.SetError: {
			return {
				...state,
				message: action.payload
			};
		}
		case EMessageActions.SetInfo: {
			return {
				...state,
				message: action.payload
			};
		}
		case EMessageActions.SetWarning: {
			return {
				...state,
				message: action.payload
			};
		}
		case EMessageActions.SetLoading: {
			return {
				...state,
				message: action.payload
			};
		}
		default:
			return state;
	}
}
