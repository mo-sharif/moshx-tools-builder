import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { AngularFirestore } from "@angular/fire/firestore";
import { IUser, User } from "../../models/user.interface";
import { IProject } from "src/app/models/project.interface";

@Injectable()
export class UserService {
	usersUrl = `${environment.apiUrl}users.json`;

	constructor(private _http: HttpClient, private firestore: AngularFirestore) {}

	getUserList(): Observable<any> {
		return this.firestore.collection("/users").valueChanges();
	}
	getUser(uid): Observable<any> {
		return this.firestore.collection("/users", ref => ref.where("uid", "==", uid)).valueChanges();
	}
	addUser(user: IUser) {
		return this.firestore
			.collection<IUser>(`/users/`)
			.doc(user.uid)
			.set({ ...user });
	}
	updateUser(user: IUser) {
		return this.firestore
			.collection<IUser>(`/users/`)
			.doc(user.uid)
			.update({ ...user });
	}
	updateUserFromProjectName(project: IProject) {
		return this.firestore
			.collection<IUser>(`/users/`)
			.doc(project.userID)
			.update({ profile: project.profile });
	}
}
