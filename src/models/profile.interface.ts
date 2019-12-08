import { IProject } from "./project.interface";

export interface IProfile {
	name: string;
	user: string;
	projects: IProject[];
}