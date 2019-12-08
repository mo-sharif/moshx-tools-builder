import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";
import { AngularFirestore } from "@angular/fire/firestore";
import { IUser, User } from "../../models/user.interface";
import { IProject } from "src/models/project.interface";
import { publishReplay, refCount } from "rxjs/operators";

@Injectable()
export class UserService {
	usersUrl = `${environment.apiUrl}users.json`;

	constructor(private _http: HttpClient, private firestore: AngularFirestore) {}

	getUserList(): Observable<any> {
		return this.firestore
			.collection("/users")
			.valueChanges()
			.pipe(
				publishReplay(1),
				refCount()
			);
	}
	getUser(uid): Observable<any> {
		return this.firestore
			.collection("/users", ref => ref.where("uid", "==", uid))
			.valueChanges()
			.pipe(
				publishReplay(1),
				refCount()
			);
	}
	getTeammates(user: IUser): Observable<any> {
		return this.firestore
			.collection("/users", ref => ref.where("profile", "==", user.profile))
			.valueChanges()
			.pipe(
				publishReplay(1),
				refCount()
			);
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
	updateUserProfileFromProject(project: IProject) {
		return this.firestore
			.collection<IUser>(`/users/`)
			.doc(project.uid)
			.update({ profile: project.profile });
	}
}
