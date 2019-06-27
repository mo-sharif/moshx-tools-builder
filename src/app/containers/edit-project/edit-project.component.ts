import { Component, OnInit } from "@angular/core";

import { NewProject, SaveProject } from "../../store/actions/project.actions";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { ActivatedRoute } from "@angular/router";
import { selectNewProject } from "../../store/selectors/project.selector";

import { CheckboxComponent } from "../../components/ant-design/checkbox/checkbox.component";
import { FormComponent } from "src/app/components/ant-design/form/form.component";
import { TableComponent } from "src/app/components/ant-design/table/table.component";

import { IProjectComponent } from "../../models/project.interface";
import { listStagger } from "../../animations/list-stagger.animation";
import { CalendarComponent } from "../../components/calendar/calendar.component";
import { selectLoggedInUserUID } from "../../store/selectors/auth.selectors";

@Component({
	templateUrl: "./edit-project.component.html",
	styleUrls: ["./edit-project.component.css"],
	animations: [listStagger]
})
export class EditProjectComponent implements OnInit {
	private currentUserUID;
	newProject$ = this._store.pipe(select(selectNewProject));
	currentUser$ = this._store.pipe(select(selectLoggedInUserUID));

	components: IProjectComponent = {
		Checkbox: CheckboxComponent,
		Form: FormComponent,
		Table: TableComponent,
		Calendar: CalendarComponent
	};

	constructor(
		private _store: Store<IAppState>,
		private _router: ActivatedRoute
	) {}

	ngOnInit() {
		this.currentUser$.subscribe(res => this.currentUserUID = res);
		this._store.dispatch(
			new NewProject({
				title: "NEW PROJECT",
        type: this._router.snapshot.params.id,
        user : "NOT YET ASSIGNED"
			})
		);
	}

	submittedFormData = formData => {
		this._store.dispatch(
			new SaveProject({
				...formData,
				type: this._router.snapshot.params.id,
				user: this.currentUserUID
			})
		);
	};
}
