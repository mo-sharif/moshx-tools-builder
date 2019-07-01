import { IProfile } from "../../models/profile.interface";

export interface IProfileState {
	profile: IProfile;
}

export const initialProfileState: IProfileState = {
	profile: null
};
