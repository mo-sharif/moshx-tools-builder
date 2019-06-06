import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UsersComponent } from "./containers/users/users.component";
import { UserComponent } from "./containers/user/user.component";

import { PostsComponent } from "./containers/posts/posts.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { HomeComponent } from "./components/home/home.component";
// TODO: https://ng.ant.design/components/breadcrumb/en
// Change to use children routes
const routes: Routes = [
  { path: "home", component: HomeComponent, data: { breadcrumb: "Home" } },
  { path: "home/users", component: UsersComponent, data: { breadcrumb: "Users" } },
  { path: "home/posts", component: PostsComponent, data: { breadcrumb: "Posts" }  },
  { path: "home/calendar", component: CalendarComponent, data: { breadcrumb: "Calendar" }  },
  { path: "home/settings", component: SettingsComponent, data: { breadcrumb: "Settings" }  },
  { path: "home/user/:id", component: UserComponent, data: { breadcrumb: "User" }  },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
