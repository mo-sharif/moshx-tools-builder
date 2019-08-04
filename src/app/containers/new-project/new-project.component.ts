import { Component, OnInit } from "@angular/core";
import { listStagger } from "../../animations/list-stagger.animation";

import { NewProject } from "../../store/actions/project.actions";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { selectContainers } from "../../store/selectors/config.selector";
import { Router } from "@angular/router";

@Component({
	selector: "app-new-project",
	templateUrl: "./new-project.component.html",
	styleUrls: ["./new-project.component.css"],
	animations: [listStagger]
})
export class NewProjectComponent implements OnInit {
	containers$ = this._store.pipe(select(selectContainers));

	constructor(private _store: Store<IAppState>, private _router: Router) {}

	ngOnInit() {
		// this._store.dispatch(new NewProject({ title: "NEW PROJECT", type: "NOT YET ASSIGNED", user: "NOT YET ASSIGNED" }));
	}
	navigateToProject(id: string) {
		this._store.dispatch(
			new NewProject({
				title: "NEW PROJECT",
				type: id,
				user: "NOT YET ASSIGNED"
			})
		);
		this._router.navigate(["home/new-project", id]);
	}
}
