import { Component, OnInit } from "@angular/core";
import { listStagger } from "../../animations/list-stagger.animation";

import { NewProject } from "../../store/actions/project.actions";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { selectContainers } from "../../store/selectors/config.selector";
import { IProject, Project } from "src/models/project.interface";
import { NavigateToRoute } from "src/store/actions/config.actions";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-new-project",
	templateUrl: "./new-project.container.html",
	styleUrls: ["./new-project.container.css"],
	animations: [listStagger]
})
export class NewProjectContainer implements OnInit {
	containers$ = this._store.pipe(select(selectContainers));

	constructor(private _store: Store<IAppState>, private _router: ActivatedRoute) {}

	ngOnInit() {}
	navigateToProject(type: string) {
		// this.dispatchNewProject(type);
		this._store.dispatch(new NavigateToRoute(["home", "new-project", type]));
	}

	dispatchNewProject = (type) => {
		let project = new Project("New Project", "NOT_YET_ASSIGNED", type);
		this._store.dispatch(new NewProject(project));
	};
	
}
