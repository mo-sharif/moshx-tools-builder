import { IUser } from "../../models/user.interface";

export interface IUserState {
	users: IUser[];
	selectedUser: IUser;
	addedUser: IUser;
	profile: string;
}

export const initialUserState: IUserState = {
	users: null,
	selectedUser: null,
	addedUser: null,
	profile: null,
};
