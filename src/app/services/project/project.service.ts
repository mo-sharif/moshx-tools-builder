import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { environment } from "../../../environments/environment";
import { AngularFirestore } from "@angular/fire/firestore";
import { IProject } from "../../models/project.interface";
import { IUser } from "src/app/models/user.interface";

@Injectable()
export class ProjectService {
	constructor(private _http: HttpClient, private firestore: AngularFirestore) {}

	getProjectList(): Observable<any> {
		return this.firestore.collection("/projects").valueChanges();
	}
	getProject(id): Observable<any> {
		if (!id) {
			return of();
		}
		return this.firestore.collection(`/projects/${id}`).valueChanges();
	}
	getUserProjects(user: IUser): Observable<any> {
		if (!user.profile) {
			return of("No User Was provided");
		}
		return this.firestore
			.collection(`/profiles/`)
			.doc(user.profile)
			.collection(`/projects/`, ref => ref.where("user", "==", user.uid))
			.valueChanges();
	}

	GetSelectedProject([profileName, projectName]): Observable<any> {
		return this.firestore
			.collection(`/profiles/`)
			.doc(profileName)
			.collection(`/projects/`, ref => ref.where("slug", "==", projectName))
			.valueChanges();
	}

	addProject = (project: IProject) => {
		project.id = project.id ? project.id : this.firestore.createId();
		return this.firestore
			.collection("profiles")
			.doc(project.profile)
			.collection<IProject>("projects")
			.doc(project.id)
			.set(project);
	};

	updateProject = (project: IProject) => {
		return this.firestore
			.collection("profiles")
			.doc(project.profile)
			.collection<IProject>("projects")
			.doc(project.id)
			.update(project);
	};

	addAndUpdateProject = (project: IProject) => {
		if (project.id) {
			return this.firestore
				.collection("profiles")
				.doc(project.profile)
				.collection<IProject>("projects")
				.doc(project.id)
				.update(project);
		} else {
			project.id = this.firestore.createId();
			return this.firestore
				.collection("profiles")
				.doc(project.profile)
				.collection<IProject>("projects")
				.doc(project.id)
				.set(project);
		}
	};

	deleteProject = (project: IProject) => {
		this.firestore
			.collection("profiles")
			.doc(project.profile)
			.collection<IProject>("projects")
			.doc(project.id)
			.delete()
			.then(() => project.title)
			.catch(error => error);
	};
}
