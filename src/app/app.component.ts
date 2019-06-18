import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { IAppState } from "./store/state/app.state";
import { GetConfig } from "./store/actions/config.actions";
import { GetUserAuth } from "./store/actions/auth.actions";
import { selectConfig } from "./store/selectors/config.selector";
import { selectLoggedInUser } from "./store/selectors/auth.selectors";
import { selectMessage } from "./store/selectors/message.selectors";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
	configs$ = this._store.pipe(select(selectConfig));
	loggedInUser$ = this._store.pipe(select(selectLoggedInUser));
	message$ = this._store.pipe(select(selectMessage));

	isCollapsed = true;
	constructor(
		private _store: Store<IAppState>
	) {}


	ngOnInit() {
		this._store.dispatch(new GetConfig());
		this._store.dispatch(new GetUserAuth());
		this.message$.subscribe((message) => {console.log(message)})
	}
}
