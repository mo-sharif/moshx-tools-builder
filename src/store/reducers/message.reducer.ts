import { EMessageActions } from "../actions/message.actions";
import { MessageActions } from "../actions/message.actions";
import { initialMessageState, IMessageState } from "../state/message.state";

export function messageReducers(
	state = initialMessageState,
	action: MessageActions
): IMessageState {
	switch (action.type) {
		case EMessageActions.SetSuccessMsg: {
			return {
				...state,
				message: action.payload
			};
		}
		case EMessageActions.SetErrorMsg: {
			return {
				...state,
				message: action.payload
			};
		}
		case EMessageActions.SetInfoMsg: {
			return {
				...state,
				message: action.payload
			};
		}
		case EMessageActions.SetWarningMsg: {
			return {
				...state,
				message: action.payload
			};
		}
		case EMessageActions.SetLoadingMsg: {
			return {
				...state,
				message: action.payload
			};
		}
		case EMessageActions.MsgSent: {
			return {
				...state
			};
		}
		default:
			return state;
	}
}
