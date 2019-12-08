import { RouterReducerState } from "@ngrx/router-store";

import { IUserState, initialUserState } from "./user.state";
import { IPostState, initialPostState } from "./post.state";
import { initialConfigState, IConfigState } from "./config.state";
import { initialLoadingState, ILoadingState } from "./loading.state";
import { initialAuthState, IAuthState } from "./auth.state";
import { initialMessageState, IMessageState } from "./message.state";
import { initialProjectState, IProjectState } from "./project.state";
import { IProfileState, initialProfileState } from "./profile.state";
import { ICompState, initialCompState } from "./comp.state";

export interface IAppState {
	router?: RouterReducerState;
	users: IUserState;
	posts: IPostState;
	config: IConfigState;
	loading: ILoadingState;
	auth: IAuthState;
	message: IMessageState;
	projects: IProjectState;
	profile: IProfileState;
	comp: ICompState;
}

export const initialAppState: IAppState = {
	users: initialUserState,
	config: initialConfigState,
	posts: initialPostState,
	loading: initialLoadingState,
	auth: initialAuthState,
	message: initialMessageState,
	projects: initialProjectState,
	profile: initialProfileState,
	comp: initialCompState,
};

export function getInitialState(): IAppState {
	return initialAppState;
}
