export interface IMessageState {
    message: string;
    selectedMessage: string;
}

export const initialMessageState: IMessageState = {
    message: null,
    selectedMessage: null
}