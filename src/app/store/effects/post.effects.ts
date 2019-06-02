import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, map, withLatestFrom, tap } from "rxjs/operators";

import { IAppState } from "../state/app.state";
import {
  EPostActions,
  GetPosts,
  GetPostsSuccess,
  GetPost,
  GetPostSuccess
} from "../actions/post.actions";
import { PostService } from "../../services/post.service";
import { IPostHttp } from "../../models/http-models/post-http.interface";
import { IPost } from "../../models/post.interface";
import { selectPostList } from "../selectors/post.selector";

@Injectable()
export class PostEffects {
  @Effect()
  getPost$ = this._actions$.pipe(
    ofType<GetPost>(EPostActions.GetPost),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectPostList))),
    switchMap(([id, posts]) => {
      const selectedPost = posts.filter(post => post.id === +id)[0];
      return of(new GetPostSuccess(selectedPost));
    })
  );
  @Effect()
  getPosts$ = this._actions$.pipe(
    ofType<GetPosts>(EPostActions.GetPosts),
    switchMap(() => this._postService.getPosts()),
    switchMap((postHttp: IPost[]) => of(new GetPostsSuccess(postHttp)))
  );

  constructor(
    private _postService: PostService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
