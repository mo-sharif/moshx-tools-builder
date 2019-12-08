import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./services/guard/guard.service";
import { PageNotAllowedComponent } from "./components/page-not-allowed/page-not-allowed.component";

const routes: Routes = [
	{ path: "home", component: HomeComponent, data: { breadcrumb: "Home" } },
	{
		path: "home/not-allowed",
		component: PageNotAllowedComponent,
		data: { breadcrumb: "No Access!" }
	},
	{
		path: ":id",
		loadChildren:
			"./containers/project/project.module#ProjectModule",
		data: { breadcrumb: "Projects" }
	},
	{
		path: "home/users",
		loadChildren: "./containers/users/users.module#UsersModule",
		data: { breadcrumb: "Users" },
		canActivate: [AuthGuard]
	},
	{
		path: "home/posts",
		loadChildren: "./containers/posts/posts.module#PostsModule",
		data: { breadcrumb: "Posts" }
	},
	{
		path: "home/account",
		loadChildren: "./containers/account/account.module#AccountModule",
		data: { breadcrumb: "Account" }
	},
	{
		path: "home/new-project",
		loadChildren: "./containers/new-project/new-project.module#NewProjectModule",
		data: { breadcrumb: "New Project" }
	},
	{ path: "", redirectTo: "/home", pathMatch: "full" },
	{
		path: "**",
		loadChildren:
			"./containers/page-not-found/page-not-found.module#PageNotFoundModule",
		data: { breadcrumb: "Oops!" }
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
