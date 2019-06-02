import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './containers/users/users.component';
import { UserComponent } from './containers/user/user.component';

import { PostsComponent } from './containers/posts/posts.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
