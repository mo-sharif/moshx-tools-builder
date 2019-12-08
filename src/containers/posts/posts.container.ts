import { GetPosts } from "../../store/actions/post.actions";

import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { IAppState } from "../../store/state/app.state";
import { selectPostList } from '../../store/selectors/post.selector';
import { selectLoading } from '../../store/selectors/loading.selector';
import { Router } from "@angular/router";

@Component({
  templateUrl: "./posts.container.html",
  styleUrls: ["./posts.container.css"],
})
export class PostsContainer implements OnInit {
  posts$ = this._store.pipe(select(selectPostList));
  loading$ = this._store.pipe(select(selectLoading));

  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit() {
    this._store.dispatch(new GetPosts());
  }

  navigateToPost(id: number) {
    this._router.navigate(["post", id]);
  }
}
