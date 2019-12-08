import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersContainer } from "./users.container";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { AuthGuard } from "../../services/guard/guard.service";

const routes: Routes = [
	{
		path: "",
		component: UsersContainer
	},
	{
		path: "add-user",
		loadChildren: "../add-user/add-user.module#AddUserModule",
		data: { breadcrumb: "Add User" },
		canActivate: [AuthGuard]
	},
	{
		path: ":id",
		component: UserDetailsComponent,
		data: { breadcrumb: "User" },
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsersRoutingModule {}
