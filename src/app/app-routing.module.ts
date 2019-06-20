import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SettingsComponent } from "./components/settings/settings.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { HomeComponent } from "./components/home/home.component";

import { RegisterComponent } from "./components/register/register.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { PageNotAllowedComponent } from "./components/page-not-allowed/page-not-allowed.component";

import { AuthGuard } from "./services/guard/guard.service";

// TODO: https://ng.ant.design/components/breadcrumb/en
// Change to use children routes

// TODO: Implement auth guards canActivate: [AuthGuard]
const routes: Routes = [
	{ path: "home", component: HomeComponent, data: { breadcrumb: "Home" } },
	{
		path: "home/not-allowed",
		component: PageNotAllowedComponent,
		data: { breadcrumb: "No Access!" }
	},
	{
		path: "home/users",
		loadChildren: "./containers/users/users.module#UsersModule",
		data: { breadcrumb: "Users" },
		canActivate: [AuthGuard],
	},
	{
		path: "home/posts",
		loadChildren: "./containers/posts/posts.module#PostsModule",
		data: { breadcrumb: "Posts" }
	},
	{
		path: "home/calendar",
		component: CalendarComponent,
		data: { breadcrumb: "Calendar" },
		canActivate: [AuthGuard]
	},
	{
		path: "home/settings",
		component: SettingsComponent,
		data: { breadcrumb: "Settings" },
		canActivate: [AuthGuard]
	},
	{
		path: "home/login",
		loadChildren: "./containers/login/login.module#LoginModule",
		data: { breadcrumb: "Login" }
	},
	{
		path: "register",
		component: RegisterComponent,
		data: { breadcrumb: "Register" }
	},
	{ path: "", redirectTo: "/home", pathMatch: "full" },
	{
		path: "**",
		component: PageNotFoundComponent,
		data: { breadcrumb: "Oops!" }
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
