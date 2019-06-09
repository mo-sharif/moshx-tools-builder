import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostsRoutingModule } from "./posts-routing.module";
import { PostsComponent } from "../../components/posts/posts.component";
import { PostsComponent as PostsComponentContainer } from "../../containers/posts/posts.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";

@NgModule({
	declarations: [PostsComponent, PostsComponentContainer],
	imports: [CommonModule, PostsRoutingModule, NgZorroAntdModule],
	providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class PostsModule {}
