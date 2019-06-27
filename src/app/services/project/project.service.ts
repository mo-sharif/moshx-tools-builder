import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { AngularFirestore } from "@angular/fire/firestore";
import { IProject } from "../../models/project.interface";

@Injectable()
export class ProjectService {

	constructor(private _http: HttpClient, private firestore: AngularFirestore) {}

	getProjectList(): Observable<any> {
		return this.firestore.collection("/projects").valueChanges();
	}
	getProject(id): Observable<any> {
		return this.firestore.collection(`/projects/${id}`).valueChanges();
	}
	getUserProjects(uid): Observable<any> {
		return this.firestore.collection(`/projects/`, ref => ref.where('user', '==', uid)).valueChanges()
	}
	addProject(project: IProject) {
		const id = this.firestore.createId();
		return this.firestore.collection<IProject>("projects").doc(id).set(project);
	}
}
