import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostsRoutingModule } from "./posts-routing.module";
import { PostsComponent } from "./posts/posts.component";
import { PostsContainer } from "./posts.container";

import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { EffectsModule } from "@ngrx/effects";
import { PostEffects } from "src/store/effects/post.effects";
import { PostService } from "src/services/post/post.service";

@NgModule({
	declarations: [PostsComponent, PostsContainer],
	imports: [CommonModule, PostsRoutingModule, NgZorroAntdModule, EffectsModule.forFeature([PostEffects])],
	providers: [PostService]
})
export class PostsModule {}
