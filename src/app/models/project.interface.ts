import { Type } from "@angular/core";

export interface IProject {
	id?: string;
	title: string;
	type: string;
	uid: string;
	profile?: string;
	slug?: string;
	UiComponents: UiComponents;
	componentConfigs: IComponentConfigs;
}

export interface UiComponents {
	isNewProject?: boolean;
	isUserLoggedIn?: boolean;
}

export interface IComponentConfigs {
	httpRequestUrl: string,
	collectionUrl: string,
}

export interface ISettings {
	placeholder: string,
	example: string,
	type: ISettings
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
