import { Component, OnInit } from "@angular/core";

import {
	NewProject,
	SaveProject,
	GetUserProjects,
	GetSelectedProjectFromRoute
} from "../../store/actions/project.actions";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { ActivatedRoute } from "@angular/router";
import {
	selectNewProject,
	userProjects,
	selectProfile,
	selectedProject
} from "../../store/selectors/project.selector";

import { CheckboxComponent } from "../../custom/ant-design/checkbox/checkbox.component";
import { FormComponent } from "src/app/custom/ant-design/form/form.component";
import { TableComponent } from "src/app/custom/ant-design/table/table.component";

import { IProjectComponent, IProject } from "../../models/project.interface";
import { listStagger } from "../../animations/list-stagger.animation";
import { CalendarComponent } from "../../custom/ant-design/calendar/calendar.component";
import {
	selectLoggedInUserUID,
	selectLoggedInUser
} from "../../store/selectors/auth.selectors";
import { GetUserProfile } from "src/app/store/actions/auth.actions";
import { PostsComponent } from "../../custom/posts/posts.component";
import { map } from "rxjs/operators";

@Component({
	templateUrl: "./edit-project.component.html",
	styleUrls: ["./edit-project.component.css"],
	animations: [listStagger]
})
export class EditProjectComponent implements OnInit {
	isVisible = false;
	isOkLoading = false;
	private userUid: string;
	newProject$ = this._store.pipe(select(selectNewProject));
	currentUser$ = this._store.pipe(select(selectLoggedInUser));
	userProjects$ = this._store.pipe(select(userProjects));
	selectProfile$ = this._store.pipe(select(selectProfile));
	selectLoggedInUser$ = this._store.pipe(select(selectLoggedInUser));
	selectedProject$ = this._store.pipe(select(selectedProject));

	components: IProjectComponent = {
		Checkbox: CheckboxComponent,
		Form: FormComponent,
		Table: TableComponent,
		Calendar: CalendarComponent,
		Posts: PostsComponent
	};

	constructor(
		private _store: Store<IAppState>,
		private _router: ActivatedRoute
	) {}

	ngOnInit() {
		this.currentUser$
			.pipe(
				map(user => {
					this.userUid = user.uid;
					return user;
				}),
				map(user => {
					if (user.profile) {
						this._store.dispatch(
							new GetSelectedProjectFromRoute(this._router.snapshot.params.id)
						);
					}
				})
			)
			.subscribe();
	}

	saveFormData = (formData: IProject) => {
		// Add component type to formData from route id
		formData.type ? '' : formData.type = this._router.snapshot.params.id
		this._store.dispatch(
			new SaveProject({
				...formData,
				user: this.userUid
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
