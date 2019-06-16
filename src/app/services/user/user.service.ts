import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { AngularFirestore } from "@angular/fire/firestore";
import { IUser, User } from "../../models/user.interface";

@Injectable()
export class UserService {
	usersUrl = `${environment.apiUrl}users.json`;

	constructor(private _http: HttpClient, private firestore: AngularFirestore) {}

	getUserList(): Observable<any> {
		return this.firestore.collection("/users").valueChanges();
	}
	getUser(id): Observable<any> {
		return this.firestore.collection(`/users/${id}`).valueChanges();
	}
	addUser(user: IUser) {
		return this.firestore.collection<IUser>("users").add(user);
	}
}
