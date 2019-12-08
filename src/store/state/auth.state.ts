import { IUser } from "../../models/user.interface";

export interface IAuthState {
  currentUser: IUser;
  loading?: boolean;
}

export const initialAuthState: IAuthState = {
  currentUser: {
    uid: null,
    displayName: "Guest",
    email: "you@awesome.com"
  },
  loading: false
};

export const defaultUser: IUser = {
	uid: null,
  displayName: "Guest",
  email: "you@awesome.com"
};