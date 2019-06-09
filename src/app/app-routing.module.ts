import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UsersComponent } from "./containers/users/users.component";
import { UserComponent } from "./containers/user/user.component";

// import { PostsComponent } from "./containers/posts/posts.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { HomeComponent } from "./components/home/home.component";

import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./containers/login/login.component";
// TODO: https://ng.ant.design/components/breadcrumb/en
// Change to use children routes

// TODO: Implement auth guards canActivate: [AuthGuard]
const routes: Routes = [
	{ path: "home", component: HomeComponent, data: { breadcrumb: "Home" } },
	{
		path: "home/users",
		component: UsersComponent,
		data: { breadcrumb: "Users" }
	},
	{
		path: "home/posts",
		loadChildren: () => import('./containers/posts/posts.module').then(mod => mod.PostsModule),
		data: { breadcrumb: "Posts" }
	},
	{
		path: "home/calendar",
		component: CalendarComponent,
		data: { breadcrumb: "Calendar" }
	},
	{
		path: "home/settings",
		component: SettingsComponent,
		data: { breadcrumb: "Settings" }
	},
	{
		path: "home/user/:id",
		component: UserComponent,
		data: { breadcrumb: "User" }
	},
	{ path: "home/login", component: LoginComponent, data: { breadcrumb: "Login" } },
	{
		path: "register",
		component: RegisterComponent,
		data: { breadcrumb: "Register" }
	},
	{ path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
