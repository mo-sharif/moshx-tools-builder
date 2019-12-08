import { Component, OnInit } from "@angular/core";
import { IAppState } from "src/store/state/app.state";
import { Store, select } from "@ngrx/store";
import { ActivatedRoute, Router } from "@angular/router";
import {
	selectUiComponents
} from "../../store/selectors/project.selector";
import { UpdateProjectSuccess } from "../../store/actions/project.actions";
import { IProject } from "src/models/project.interface";
import { NavigateToRoute } from "src/store/actions/config.actions";
import { GetProfileFromRoute } from "src/store/actions/profile.actions";
import { userProjects } from "src/store/selectors/profile.selector";

@Component({
	templateUrl: "./project.container.html",
	styleUrls: ["./project.container.css"]
})
export class ProjectContainer implements OnInit {
	selectUiComponent$ = this._store.pipe(select(selectUiComponents));
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
		this._store.dispatch(new UpdateProjectSuccess(null));
		this._store.dispatch(
			new NavigateToRoute([project.profile, "projects", project.title])
		);
	};
}
