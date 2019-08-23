import { Type } from "@angular/core";

export interface IProject {
	id?: string;
	title: string;
	type: string;
	uid: string;
	profile?: string;
	slug?: string;
	UiComponents: UiComponents;
	ComponentSettings: IComponentSettings;
}

export interface UiComponents {
	isNewProject: boolean;
}

export interface IComponentSettings {
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
