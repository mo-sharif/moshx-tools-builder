import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UserComponent } from "../user/user.component";
import { AuthGuard } from "../../services/guard/guard.service";

const routes: Routes = [
	{
		path: "",
		component: UsersComponent
	},
	{
		path: "add-user",
		loadChildren: "../add-user/add-user.module#AddUserModule",
		data: { breadcrumb: "Add User" },
		canActivate: [AuthGuard]
	},
	{
		path: "/users/user/:id",
		component: UserComponent,
		data: { breadcrumb: "User" }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsersRoutingModule {}
