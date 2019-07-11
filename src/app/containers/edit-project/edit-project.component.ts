import { Component, OnInit } from "@angular/core";

import { NewProject, SaveProject } from "../../store/actions/project.actions";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { ActivatedRoute } from "@angular/router";
import { selectNewProject, userProjects, selectProfile } from "../../store/selectors/project.selector";

import { CheckboxComponent } from "../../custom/ant-design/checkbox/checkbox.component";
import { FormComponent } from "src/app/custom/ant-design/form/form.component";
import { TableComponent } from "src/app/custom/ant-design/table/table.component";

import { IProjectComponent } from "../../models/project.interface";
import { listStagger } from "../../animations/list-stagger.animation";
import { CalendarComponent } from "../../custom/ant-design/calendar/calendar.component";
import { selectLoggedInUserUID, selectLoggedInUser } from "../../store/selectors/auth.selectors";
import { GetUserProfile } from "src/app/store/actions/auth.actions";

@Component({
	templateUrl: "./edit-project.component.html",
	styleUrls: ["./edit-project.component.css"],
	animations: [listStagger]
})
export class EditProjectComponent implements OnInit {
	isVisible = false;
	isOkLoading = false;
	private currentUserUID;
	newProject$ = this._store.pipe(select(selectNewProject));
	currentUser$ = this._store.pipe(select(selectLoggedInUserUID));
	userProjects$ = this._store.pipe(select(userProjects));
	selectProfile$ = this._store.pipe(select(selectProfile));
	selectLoggedInUser$ = this._store.pipe(select(selectLoggedInUser));
	
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
		this.currentUser$.subscribe(res => (this.currentUserUID = res));
		this._store.dispatch(
			new NewProject({
				title: "NEW PROJECT",
				type: this._router.snapshot.params.id,
				user: "NOT YET ASSIGNED"
			})
		);
		this._store.dispatch(
			new GetUserProfile()
		)
	}

	saveFormData = formData => {
		console.log(formData)
		this._store.dispatch(
			new SaveProject({
				...formData,
				type: this._router.snapshot.params.id,
				user: this.currentUserUID
			})
		);
	};
	showModal(): void {
		this.isVisible = true;
	  }
	
	  handleOk(): void {
		this.isOkLoading = true;
		setTimeout(() => {
		  this.isVisible = false;
		  this.isOkLoading = false;
		}, 3000);
	  }
	
	  handleCancel(): void {
		this.isVisible = false;
	  }
}
