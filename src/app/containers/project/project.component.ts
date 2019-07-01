import { Component, OnInit } from "@angular/core";
import { IAppState } from "src/app/store/state/app.state";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { LoadProfile } from "../../store/actions/profile.actions";

@Component({
	templateUrl: "./project.component.html",
	styleUrls: ["./project.component.css"]
})
export class ProjectComponent implements OnInit {
	constructor(
		private _store: Store<IAppState>,
		private _route: ActivatedRoute
	) {}

	ngOnInit() {
		this._route.params.subscribe(params =>
			this._store.dispatch(new LoadProfile(params.id))
		);
	}
}
