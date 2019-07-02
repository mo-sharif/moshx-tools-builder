import { Type } from "@angular/core";

export interface IProject {
	id?: string
	title: string;
	type: string;
	user:string;
	profile?: string;
}

export interface IProfile {
	name: string;
	user: string;
	projects: IProject[];
}

export interface IProjectContainer {
	name: string;
	type: Type<any>;
}

export interface IProjectComponent {
	[key: string]: Type<any>;
}
