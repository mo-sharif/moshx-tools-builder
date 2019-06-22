import { IProject, IProjectContainer } from "../../models/project.interface";
import { TableComponent } from "src/app/components/ant-design/table/table.component";
import { FormComponent } from "src/app/components/ant-design/form/form.component";

export interface IProjectState {
	projects: IProject[];
	newProject: IProject;
	selectedProject: IProject;
	container: IProjectContainer[];
}

export const initialProjectState: IProjectState = {
	projects: null,
	newProject: null,
	selectedProject: null,
	container: [
		{
			name: "Form",
			type: FormComponent
		},
		{
			name: "Table",
			type: TableComponent
		}
	]
};
