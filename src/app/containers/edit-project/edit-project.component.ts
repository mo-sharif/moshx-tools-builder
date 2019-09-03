import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

import {
	SaveProject,
	DeleteProject,
	GetSelectedProject
} from "../../store/actions/project.actions";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { ActivatedRoute } from "@angular/router";
import {
	userProjects,
	selectProfile,
	selectProject,
	selectUiComponents
} from "../../store/selectors/project.selector";

import { IProject, Project } from "../../models/project.interface";
import { listStagger } from "../../animations/list-stagger.animation";
import { selectLoggedInUser } from "../../store/selectors/auth.selectors";
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
	userProjects$ = this._store.pipe(select(userProjects));
	selectProfile$ = this._store.pipe(select(selectProfile));
	selectLoggedInUser$ = this._store.pipe(select(selectLoggedInUser));
	selectProject$ = this._store.pipe(select(selectProject));
	selectUiComponents$ = this._store.pipe(select(selectUiComponents));
	/* Move me to an effect and make me come from firebase collection */

	componentConfigs = [
		{
			name: "Request Url",
			type: "httpRequestUrl",
			placeholder: "https://mosh-media.com"
		}
	];

	constructor(
		private _store: Store<IAppState>,
		private _router: ActivatedRoute,
		private _location: Location
	) {}

	ngOnInit() {
		this._store.dispatch(new GetSelectedProject());
	}

	saveFormData = (formData: IProject) => {
		// Add component type to formData from route id
		formData.type ? "" : (formData.type = this._router.snapshot.params.id);
		this._store.dispatch(
			new SaveProject({
				...formData
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

	deleteProject = userProject => {
		this._store.dispatch(new DeleteProject(userProject));
	};

	open(): void {
		this.isVisible = true;
	}

	close(): void {
		this.isVisible = false;
	}

	goBack() {
		this._location.back();
	}
}
