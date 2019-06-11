import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { IAppState } from "./store/state/app.state";
import { GetConfig } from "./store/actions/config.actions";
import { selectConfig } from "./store/selectors/config.selector";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
	title = "AngularX";
	isCollapsed = false;
	config$ = this._store.pipe(select(selectConfig));
	copyright = "AngularX ©2019 ❤️";
	constructor(private _store: Store<IAppState>) {}

	ngOnInit() {
		this._store.dispatch(new GetConfig());
		if (this.isCollapsed) { 
			
		} 
	}
}
