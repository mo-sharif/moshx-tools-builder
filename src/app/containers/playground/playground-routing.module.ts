import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlaygroundComponent } from "./playground.component";

const routes: Routes = [
	{
		path: "",
		component: PlaygroundComponent
	},
	{
		path: "new-project",
    loadChildren: "../new-project/new-project.module#NewProjectModule",
    data: { breadcrumb: "New project" }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PlaygroundRoutingModule {}
