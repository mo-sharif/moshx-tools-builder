import { Component, OnInit } from "@angular/core";
import { listStagger } from "../../animations/list-stagger.animation";

import { NewProject } from "../../store/actions/project.actions";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { selectContainers } from "../../store/selectors/config.selector";
import { IProject, Project } from "src/app/models/project.interface";
import { NavigateToRoute } from "src/app/store/actions/config.actions";

@Component({
	selector: "app-new-project",
	templateUrl: "./new-project.component.html",
	styleUrls: ["./new-project.component.css"],
	animations: [listStagger]
})
export class NewProjectComponent implements OnInit {
	containers$ = this._store.pipe(select(selectContainers));

	constructor(private _store: Store<IAppState>) {}

	ngOnInit() {}
	navigateToProject(type: string) {
		let project = new Project("New Project", "NOT_YET_ASSIGNED", type);
		this._store.dispatch(new NewProject(project));
		this._store.dispatch(new NavigateToRoute(["home", "new-project", type]));
	}
}
