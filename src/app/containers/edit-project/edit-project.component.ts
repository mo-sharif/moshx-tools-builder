import { Component, OnInit } from "@angular/core";

import { NewProject } from "../../store/actions/project.actions";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { ActivatedRoute } from "@angular/router";
import { selectNewProject } from "../../store/selectors/project.selector";

import { CheckboxComponent } from "../../components/ant-design/checkbox/checkbox.component";
import { FormComponent } from "src/app/components/ant-design/form/form.component";
import { TableComponent } from "src/app/components/ant-design/table/table.component";

import { IProjectComponent } from "../../models/project.interface";
import { listStagger } from "../../animations/list-stagger.animation";

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
    Table: TableComponent
  }

	constructor(
		private _store: Store<IAppState>,
		private _router: ActivatedRoute
	) {}

	ngOnInit() {
		this._store.dispatch(
			new NewProject({ title: "NEW PROJECT", type: this._router.snapshot.params.id })
		);
	}
}
