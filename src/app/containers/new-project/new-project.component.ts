import { Component, OnInit, Type } from "@angular/core";
import { SlideInOutAnimation } from "../../animations/slide-in-out.animation";

import { NewProject } from "../../store/actions/project.actions";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { selectContainers } from "../../store/selectors/project.selector";
import { Router } from "@angular/router";

@Component({
	selector: "app-new-project",
	templateUrl: "./new-project.component.html",
	styleUrls: ["./new-project.component.css"],
	animations: [SlideInOutAnimation]
})
export class NewProjectComponent implements OnInit {
	containers$ = this._store.pipe(select(selectContainers));
	constructor(private _store: Store<IAppState>, private _router: Router) {}

	ngOnInit() {
		this._store.dispatch(new NewProject({ title: "NEW PROJECT", type: "NOT YET ASSIGNED" }));
	}
	navigateToProject(id: string) {
    this._store.dispatch(new NewProject({ title: "NEW PROJECT", type: id}));
		this._router.navigate(["home/playground/new-project", id]);
	}
}
