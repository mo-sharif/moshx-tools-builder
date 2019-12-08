import { Type } from "@angular/core";

export interface IProject {
	id?: string;
	title?: string;
	type?: string;
	uid?: string;
	profile?: string;
	slug?: string;
	UiComponents?: UiComponents;
	componentConfigs?: IComponentConfigs;
	[key: string]: any;
}

export interface UiComponents {
	projectViewToggle?: boolean;
	isUserLoggedIn?: boolean;
	isNewProject?: boolean;
	isProjectOwner?: boolean;
}

export interface IComponentConfigs {
	[key: string]: any,
}

export interface ISettings {
	placeholder: string,
	example: string,
	type: ISettings
}

export interface IProjectContainer {
	name: string;
	type: string;
}

export interface IProjectComponent {
	[key: string]: Type<any>;
}

export class Project implements IProject {
	constructor(
		public title?: string,
		public uid?: string,
		public type?: string,
		public UiComponents?: UiComponents,
		public httpConfigs?: IComponentConfigs
	) {}
}
