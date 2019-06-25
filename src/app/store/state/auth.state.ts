import { IUser } from "../../models/user.interface";

export interface IAuthState {
  currentUser: IUser;
  loading?: boolean;
}

export const initialAuthState: IAuthState = {
  currentUser: {
    uid: null,
    displayName: "Guest"
  },
  loading: false
};

export const defaultUser: IUser = {
	uid: null,
	displayName: "Guest"
};