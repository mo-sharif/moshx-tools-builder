import { Component, OnInit } from "@angular/core";
import { IAppState } from "src/app/store/state/app.state";
import { Store, select } from "@ngrx/store";
import { ActivatedRoute, Router } from "@angular/router";
import { userProjects } from "../../store/selectors/project.selector";
import {
	GetProfileFromRoute,
} from "../../store/actions/project.actions";
import { IProject } from "src/app/models/project.interface";
import { NavigateToRoute } from "src/app/store/actions/config.actions";

@Component({
	templateUrl: "./project.component.html",
	styleUrls: ["./project.component.css"]
})
export class ProjectComponent implements OnInit {
	userProjects$ = this._store.pipe(select(userProjects));

	constructor(
		private _store: Store<IAppState>,
		private _route: ActivatedRoute,
		private _router: Router
	) {}

	ngOnInit() {
		this._route.params.subscribe(params =>
			this._store.dispatch(new GetProfileFromRoute(params.id))
		);
	}

	navigateToProject = (project: IProject) => {
		this._store.dispatch(
			new NavigateToRoute([project.profile, "projects", project.title])
		);
	};
}
