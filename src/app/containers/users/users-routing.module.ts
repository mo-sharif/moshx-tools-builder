import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UserDetailsComponent } from "../../components/user-details/user-details.component";
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
