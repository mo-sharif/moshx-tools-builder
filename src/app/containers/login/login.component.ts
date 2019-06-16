import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import {
	GetUserAuth,
	GoogleLogin,
	Logout
} from "./../../store/actions/auth.actions";
import { IUser } from "../../models/user.interface";
import { IAppState } from "../../store/state/app.state";
import { listStagger } from "../../animations/list-stagger.animation";

import { selectLoggedInUser } from "../../store/selectors/auth.selectors";
import { Router } from "@angular/router";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
	animations: [listStagger]
})
export class LoginComponent implements OnInit {
	user$ = this._store.pipe(select(selectLoggedInUser));

	constructor(private _store: Store<IAppState>, private _route: Router) {}

	ngOnInit() {
		this._store.dispatch(new GetUserAuth());
	}

	googleLogin() {
		this._store.dispatch(new GoogleLogin());
	}

	logout() {
		this._store.dispatch(new Logout());
	}
}
