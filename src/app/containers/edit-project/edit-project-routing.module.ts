import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditProjectComponent } from "./edit-project.component";

const routes: Routes = [
	{
		path: "",
		component: EditProjectComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EditProjectRoutingModule {}
