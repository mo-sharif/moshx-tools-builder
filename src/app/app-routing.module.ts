import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UsersComponent } from "./containers/users/users.component";
import { UserComponent } from "./containers/user/user.component";

import { PostsComponent } from "./containers/posts/posts.component";
import { SettingsComponent } from "./components/settings/settings.component";

const routes: Routes = [
  { path: "users", component: UsersComponent, data: { breadcrumb: "Users" } },
  { path: "posts", component: PostsComponent, data: { breadcrumb: "Posts" }  },
  { path: "settings", component: SettingsComponent, data: { breadcrumb: "Settings" }  },
  { path: "user/:id", component: UserComponent, data: { breadcrumb: "User" }  },
  { path: "", redirectTo: "/users", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
