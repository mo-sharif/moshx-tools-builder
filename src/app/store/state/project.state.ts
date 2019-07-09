import { IProject, IProjectContainer } from "../../models/project.interface";
import { IUser } from "src/app/models/user.interface";

export interface IProjectState {
	projects: any;
	newProject: IProject;
	selectedProject: IProject;
	container: IProjectContainer[];
	profile: IUser
}

export const initialProjectState: IProjectState = {
	projects: [],
	newProject: null,
	selectedProject: null,
	container: [
		{
			name: "Form",
			type: "FormComponent"
		},
		{
			name: "Table",
			type: "TableComponent"
		},
		{
			name: "Calendar",
			type: "CalendarComponent"
		}
	],
	profile: null
};