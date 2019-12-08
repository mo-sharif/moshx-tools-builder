import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewProjectContainer } from "./new-project.container";

const routes: Routes = [
	{
		path: "",
		component: NewProjectContainer
	},
	{
		path: ":id",
		loadChildren: "../edit-project/edit-project.module#EditProjectModule",
		data: { breadcrumb: "Edit" }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class NewProjectRoutingModule {}
