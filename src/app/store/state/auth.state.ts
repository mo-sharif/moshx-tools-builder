import { IUser } from '../../models/user.interface';

export interface IAuthState { 
    currentUser: IUser;
}

export const initialAuthState: IAuthState = {
    currentUser: {
        uid: null,
        displayName: 'Guest'
    }
}