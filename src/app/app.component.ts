import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { IAppState } from "./store/state/app.state";
import {
	GetConfig,
	OpenDrawer,
	CloseDrawer,
} from "./store/actions/config.actions";
import { GetUserAuth, GoogleLogin, Logout, GithubLogin, FacebookLogin } from "./store/actions/auth.actions";

import { selectConfig } from "./store/selectors/config.selector";
import { selectLoggedInUser } from "./store/selectors/auth.selectors";
import { selectMessage } from "./store/selectors/message.selectors";
import { userProjects } from "./store/selectors/profile.selector";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
	configs$ = this._store.pipe(select(selectConfig));
	selectLoggedInUser$ = this._store.pipe(select(selectLoggedInUser));
	message$ = this._store.pipe(select(selectMessage));
	userProjects$ = this._store.pipe(select(userProjects));
	isCollapsed = true;
	
	constructor(private _store: Store<IAppState>) {}

	ngOnInit() {
		this._store.dispatch(new GetUserAuth());
	}
	ngAfterViewInit() {
		this._store.dispatch(new GetConfig());
	}
	openDrawer = () => {
		this._store.dispatch(new OpenDrawer());
	};

	closeDrawer = () => {
		this._store.dispatch(new CloseDrawer());
	};

	googleLogin() {
		this._store.dispatch(new GoogleLogin());
	}

	githubLogin() {
		this._store.dispatch(new GithubLogin());
	}

	facebookLogin() { 
		this._store.dispatch(new FacebookLogin());
	}

	logout() {
		this._store.dispatch(new Logout());
	}
}
