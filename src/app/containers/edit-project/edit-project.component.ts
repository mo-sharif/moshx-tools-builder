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
import { ProjectService } from "../../services/project/project.service";
import { CalendarComponent } from "src/app/components/calendar/calendar.component";

@Component({
	templateUrl: "./edit-project.component.html",
	styleUrls: ["./edit-project.component.css"],
	animations: [listStagger]
})
export class EditProjectComponent implements OnInit {
	newProject$ = this._store.pipe(select(selectNewProject));

	components: IProjectComponent = {
		Checkbox: CheckboxComponent,
		Form: FormComponent,
    Table: TableComponent,
    Calendar: CalendarComponent
	};

	constructor(
		private _store: Store<IAppState>,
		private _router: ActivatedRoute,
		private projectService: ProjectService
	) {}

	ngOnInit() {
		this._store.dispatch(
			new NewProject({
				title: "NEW PROJECT",
				type: this._router.snapshot.params.id
			})
		);
	}

	submittedFormData = formData => {
		this._store.dispatch(
			new SaveProject({
				...formData,
				type: this._router.snapshot.params.id
			})
		);
	};
}
