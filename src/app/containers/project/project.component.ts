import { Component, OnInit } from "@angular/core";
import { IAppState } from "src/app/store/state/app.state";
import { Store, select } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { userProjects } from "../../store/selectors/project.selector";
import { LoadProfile } from "../../store/actions/project.actions";

@Component({
	templateUrl: "./project.component.html",
	styleUrls: ["./project.component.css"]
})
export class ProjectComponent implements OnInit {
	userProjects$ = this._store.pipe(select(userProjects));

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
