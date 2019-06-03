import { GetPosts } from "./../../store/actions/post.actions";

import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { IAppState } from "../../store/state/app.state";
import { selectPostList } from '../../store/selectors/post.selector';
import { Router } from "@angular/router";

@Component({
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts$ = this._store.pipe(select(selectPostList));

  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit() {
    this._store.dispatch(new GetPosts());
  }

  navigateToPost(id: number) {
    this._router.navigate(["post", id]);
  }
}