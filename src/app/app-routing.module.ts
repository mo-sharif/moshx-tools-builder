import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./services/guard/guard.service";

const routes: Routes = [
	{ path: "home", component: HomeComponent, data: { breadcrumb: "Home" } },
	{
		path: "home/not-allowed",
		loadChildren:
			"./containers/page-not-allowed/page-not-allowed.module#PageNotAllowedModule",
		data: { breadcrumb: "No Access!" }
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
		path: "home/login",
		loadChildren: "./containers/login/login.module#LoginModule",
		data: { breadcrumb: "Login" }
	},
	{
		path: "register",
		loadChildren: "./containers/register/register.module#RegisterModule",
		data: { breadcrumb: "Register" }
	},
	{
		path: "home/playground",
		loadChildren: "./containers/playground/playground.module#PlaygroundModule",
		data: { breadcrumb: "Playground" },
		canActivate: [AuthGuard]
	},
	{
		path: "home/new-project",
		loadChildren: "./containers/new-project/new-project.module#NewProjectModule",
		data: { breadcrumb: "New Project" },
		canActivate: [AuthGuard]
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
