import { Type } from "@angular/core";

export interface IProject {
	title: string;
	type: string;
}

export interface IProjectContainer {
	name: string;
	type: Type<any>;
}

export interface IProjectComponent {
	[key: string]: Type<any>;
}
