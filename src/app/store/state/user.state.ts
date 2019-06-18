import { IUser } from "../../models/user.interface";

export interface IUserState {
	users: IUser[];
	selectedUser: IUser;
	addedUser: IUser;
}

export const initialUserState: IUserState = {
	users: null,
	selectedUser: null,
	addedUser: null
};
