import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditProjectContainer } from "./edit-project.container";
import { AuthGuard } from "src/services/guard/guard.service";

const routes: Routes = [
	{
		path: "",
		component: EditProjectContainer,
		// canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EditProjectRoutingModule {}
