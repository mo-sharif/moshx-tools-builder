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
import { SetLoading } from "../actions/loading.actions";
import { PostService } from "../../services/post/post.service";
import { IPost } from "../../models/post.interface";
import { selectPostList } from "../selectors/post.selector";

import { SetSuccessMsg } from "../actions/message.actions";

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
    tap(() => new SetLoading(true)),
    switchMap(() => this._postService.getPosts()),
    switchMap((postHttp: IPost[]) => [
      new GetPostsSuccess(postHttp),
      new SetLoading(false),
      new SetSuccessMsg("Posts Loaded Successfully!")
    ])
  );

  constructor(
    private _postService: PostService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
