import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditProjectComponent } from "./edit-project.component";
import { AuthGuard } from "src/app/services/guard/guard.service";

const routes: Routes = [
	{
		path: "",
		component: EditProjectComponent,
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EditProjectRoutingModule {}
