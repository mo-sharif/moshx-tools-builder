import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UserComponent } from "../user/user.component";

const routes: Routes = [
	{
		path: "",
    component: UsersComponent
  },
  {
    path: ":id",
    component: UserComponent,
    data: { breadcrumb: "User" }
  }

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsersRoutingModule {}
