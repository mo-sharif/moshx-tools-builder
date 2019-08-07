import { Component, OnInit } from "@angular/core";

import {
	SaveProject,
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

import { IProject } from "../../models/project.interface";
import { listStagger } from "../../animations/list-stagger.animation";
import { selectLoggedInUser } from "../../store/selectors/auth.selectors";
import { map } from "rxjs/operators";
import { Components } from "../../custom/components-module";

@Component({
	templateUrl: "./edit-project.component.html",
	styleUrls: ["./edit-project.component.css"],
	animations: [listStagger]
})
export class EditProjectComponent implements OnInit {
	public components = Components;
	isVisible = false;
	isOkLoading = false;
	private userUid: string;
	newProject$ = this._store.pipe(select(selectNewProject));
	currentUser$ = this._store.pipe(select(selectLoggedInUser));
	userProjects$ = this._store.pipe(select(userProjects));
	selectProfile$ = this._store.pipe(select(selectProfile));
	selectLoggedInUser$ = this._store.pipe(select(selectLoggedInUser));
	selectedProject$ = this._store.pipe(select(selectedProject));

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
		formData.type ? "" : (formData.type = this._router.snapshot.params.id);
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
