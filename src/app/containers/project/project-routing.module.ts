import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectComponent as ProjectContainer } from "./project.component";
import { AuthGuard } from "src/app/services/guard/guard.service";

const routes: Routes = [
	{
		path: "",
		component: ProjectContainer,
		canActivate: [AuthGuard],
		data: { breadcrumb: "Projects" }
	},
	{
		path: "projects/:id",
		loadChildren: '../edit-project/edit-project.module#EditProjectModule',
		data: { breadcrumb: "Edit" }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProjectRoutingModule {}
