import { Type } from "@angular/core";

export interface IProject {
	id?: string;
	title: string;
	type: string;
	userID: string;
	profile?: string;
	slug?: string;
	UiComponents: UiComponents[];
}

export interface UiComponents {
	isNewProject: boolean;
}
export interface IProfile {
	name: string;
	user: string;
	projects: IProject[];
}

export interface IProjectContainer {
	name: string;
	type: string;
}

export interface IProjectComponent {
	[key: string]: Type<any>;
}
