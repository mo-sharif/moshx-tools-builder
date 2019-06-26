import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostsRoutingModule } from "./posts-routing.module";
import { PostsComponent } from "../../components/posts/posts.component";
import { PostsComponent as PostsComponentContainer } from "../../containers/posts/posts.component";

import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { EffectsModule } from "@ngrx/effects";
import { PostEffects } from "src/app/store/effects/post.effects";
import { PostService } from "src/app/services/post/post.service";

@NgModule({
	declarations: [PostsComponent, PostsComponentContainer],
	imports: [CommonModule, PostsRoutingModule, NgZorroAntdModule, EffectsModule.forFeature([PostEffects])],
	providers: [PostService]
})
export class PostsModule {}
