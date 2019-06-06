import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UsersComponent } from "./containers/users/users.component";
import { UserComponent } from "./containers/user/user.component";

import { PostsComponent } from "./containers/posts/posts.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { breadcrumb: "Home" } },
  { path: "users", component: UsersComponent, data: { breadcrumb: "Users" } },
  { path: "posts", component: PostsComponent, data: { breadcrumb: "Posts" }  },
  { path: "calendar", component: CalendarComponent, data: { breadcrumb: "Calendar" }  },
  { path: "settings", component: SettingsComponent, data: { breadcrumb: "Settings" }  },
  { path: "user/:id", component: UserComponent, data: { breadcrumb: "User" }  },
  { path: "", redirectTo: "/users", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
