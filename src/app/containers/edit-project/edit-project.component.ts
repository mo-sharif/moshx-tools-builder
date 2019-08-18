import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

import {
	SaveProject,
	GetSelectedProjectFromRoute,
	DeleteProject
} from "../../store/actions/project.actions";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { ActivatedRoute } from "@angular/router";
import {
	selectNewProject,
	userProjects,
	selectProfile,
	selectedProject,
	selectUiComponents
} from "../../store/selectors/project.selector";

import { IProject } from "../../models/project.interface";
import { listStagger } from "../../animations/list-stagger.animation";
import { selectLoggedInUser } from "../../store/selectors/auth.selectors";
import { map, takeWhile, withLatestFrom } from "rxjs/operators";
import { Components } from "../../custom/components-module";
import { iif } from "rxjs";

@Component({
	templateUrl: "./edit-project.component.html",
	styleUrls: ["./edit-project.component.css"],
	animations: [listStagger]
})
export class EditProjectComponent implements OnInit {
	public components = Components;
	isVisible = false;
	visible = false;
	isOkLoading = false;
	newProject$ = this._store.pipe(select(selectNewProject));
	currentUser$ = this._store.pipe(select(selectLoggedInUser));
	userProjects$ = this._store.pipe(select(userProjects));
	selectProfile$ = this._store.pipe(select(selectProfile));
	selectLoggedInUser$ = this._store.pipe(select(selectLoggedInUser));
	selectedProject$ = this._store.pipe(select(selectedProject));
	selectUiComponents$ = this._store.pipe(select(selectUiComponents));

	/* Move me to an effect and make me come from firebase collection */

	settings = [
		{
			placeholder: "Http Request",
			type: "Data in",
			example: "https://mosh-media.com"
		},
		{
			placeholder: "Firebase Collection",
			type: "storage",
			example: "/user/profile"
		}
	];

	constructor(
		private _store: Store<IAppState>,
		private _router: ActivatedRoute,
		private _location: Location
	) {}

	ngOnInit() {
		this.currentUser$
			.pipe(
				withLatestFrom(this._router.pathFromRoot[1].url),
				map(([user, urlSegment]) => {
					let profileName = urlSegment[0].path;
					let projectName = this._router.snapshot.params.id;
					if (user.hasOwnProperty("profile")) {
						this._store.dispatch(
							new GetSelectedProjectFromRoute([profileName, projectName])
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
		this.visible = true;
	}

	close(): void {
		this.visible = false;
	}

	goBack() {
		this._location.back();
	}
}
