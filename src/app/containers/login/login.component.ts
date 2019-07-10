import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import {
	GetUserAuth,
	GoogleLogin,
	Logout,
	GithubLogin
} from "./../../store/actions/auth.actions";
import { IAppState } from "../../store/state/app.state";
import { listStagger } from "../../animations/list-stagger.animation";

import { selectLoggedInUser } from "../../store/selectors/auth.selectors";
import { Router } from "@angular/router";

@Component({
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
	animations: [listStagger]
})
export class LoginComponent implements OnInit {
	user$ = this._store.pipe(select(selectLoggedInUser));

	constructor(private _store: Store<IAppState>, private _route: Router) {}

	ngOnInit() {
	}

	googleLogin() {
		this._store.dispatch(new GoogleLogin());
	}

	githubLogin() {
		this._store.dispatch(new GithubLogin());
	}

	logout() {
		this._store.dispatch(new Logout());
	}
}
