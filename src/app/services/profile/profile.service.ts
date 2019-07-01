import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { AngularFirestore } from "@angular/fire/firestore";
import { IProfile } from "../../models/profile.interface";
import { map } from "rxjs/operators";

@Injectable()
export class ProfileService {
	loadProfile(profileName: string): Observable<any> {
		// return this.firestore.collection(`/projects/${profileName}`).doc().valueChanges()
		console.log(profileName);
		return this.firestore
			.collection("projects")
			.doc(profileName).snapshotChanges();
		// return this.firestore.collection(`/projects/`, ref => ref.where("profile", "==", profileName)).get()
	}
	constructor(private _http: HttpClient, private firestore: AngularFirestore) {}
}