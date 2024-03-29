import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { User, IUser, ILoginData, IEmailSignUpData } from "../../models/user.interface";
import { UserStorageService } from "../user/user-storage.service";
import * as firebase from "firebase/app";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable, of } from "rxjs";

@Injectable()
export class AuthService {
	authState: User = null;
	user: User;
	constructor(
		private afAuth: AngularFireAuth,
		private db: AngularFireDatabase,
		private firestore: AngularFirestore,
		public userStorageService: UserStorageService,
		private router: Router
	) {
		this.afAuth.authState.subscribe(auth => {
			this.authState = auth;
		});
	}

	getAuthState(): Observable<User> {
		return this.afAuth.authState;
	}

	// Returns true if user is logged in
	get userFromStorage(): User {
		return this.userStorageService.getUserLoggedIn();
	}

	get AuthStateFirebase(): User {
		this.afAuth.authState.subscribe(auth => {
			if (auth) {
				this.authState = auth;
			}
		});
		return this.authState;
	}

	// Returns true if user is logged in
	get authenticated(): boolean {
		return this.authState !== null;
	}

	// Returns current user data
	get currentUser(): IUser {
		return this.authenticated ? this.authState : null;
	}

	// Returns
	get currentUserObservable(): Observable<User> {
		return this.afAuth.authState;
	}

	// Returns current user UID
	get currentUserId(): string {
		return this.authenticated ? this.authState.uid : "";
	}

	// Anonymous User
	get currentUserAnonymous(): boolean {
		return this.authenticated ? this.authState.isAnonymous : false;
	}

	// Returns current user display name or Guest
	get currentUserDisplayName(): string {
		if (!this.authState) {
			return "Guest";
		} else if (this.currentUserAnonymous) {
			return "Anonymous";
		} else {
			return this.authState["displayName"] || "User without a Name";
		}
	}

	//// Social Auth ////

	githubLogin() {
		const provider = new firebase.auth.GithubAuthProvider();
		return this.socialSignIn(provider);
	}

	googleLogin() {
		const provider = new firebase.auth.GoogleAuthProvider();
		return this.socialSignIn(provider);
	}

	facebookLogin() {
		const provider = new firebase.auth.FacebookAuthProvider();
		return this.facebookSignIn(provider);
	}

	twitterLogin() {
		const provider = new firebase.auth.TwitterAuthProvider();
		return this.socialSignIn(provider);
	}

	private socialSignIn(provider) {
		provider.addScope("profile");
		provider.addScope("email");
		return this.afAuth.auth
			.signInWithPopup(provider)
			.then(credential => {
				this.authState = credential.user;
				this.updateUserData();
				this.navigateToPath("home");
				return this.authState;
			})
			.catch(error => error);
	}
	private facebookSignIn(provider) {
		provider.addScope("email");
		return this.afAuth.auth
			.signInWithPopup(provider)
			.then(credential => {
				this.authState = credential.user;
				this.updateFacebookUserData();
				this.navigateToPath("home")
				return this.authState;
			})
			.catch(error => error);
	}

	//// Anonymous Auth ////

	anonymousLogin() {
		return this.afAuth.auth
			.signInAnonymously()
			.then(user => {
				// this.authState = user;
				this.updateUserData();
			})
			.catch(error => error);
	}

	//// Email/Password Auth ////

	emailSignUp(emailSignUpData: IEmailSignUpData) {
		const { email, password } = emailSignUpData
		return this.afAuth.auth
			.createUserWithEmailAndPassword(email, password)
			.then(credential => {
				this.authState = credential.user;
				this.updateUserData();
				this.navigateToPath("home")
				return this.authState;
			})
			.catch(error => error);
	}

	emailLogin(loginData: ILoginData) {
		const { email, password } = loginData;
		 return this.afAuth.auth
			.signInWithEmailAndPassword(email, password)
			.then(credential => {
				this.authState = credential.user;
				this.updateUserData();
				this.navigateToPath("home")
				return this.authState
			})
			.catch(error => { return error});
	}

	// Sends email allowing user to reset password
	resetPassword(email: string) {
		var auth = firebase.auth();

		return auth
			.sendPasswordResetEmail(email)
			.then(() => console.log("email sent"))
			.catch(error => error);
	}

	//// Sign Out ////

	logout(): void {
		this.afAuth.auth.signOut().then(() => {
			// this.navigateToPath("home")
			// This is a temp fix for logging out causing a breaking issue. 
			location.href="/";
		}).catch(error => error);
	}

	//// Helpers ////

	private updateUserData(): void {
		// Writes user name and email to realtime db
		// useful if your app displays information about users or for admin features
		let path = `users/${this.currentUserId}`; // Endpoint on firebase
		let data = {
			email: this.authState.email,
			name: this.authState.displayName
		};

		this.db
			.object(path)
			.update(data)
			.catch(error => error);
	}
	private updateFacebookUserData(): void {
		const generateEmail = `${this.firestore.createId()}@mosh-media.web.app`
		const userEmail = this.authState.email ? this.authState.email : generateEmail
		// Writes user name and email to realtime db
		// useful if your app displays information about users or for admin features
		let path = `users/${this.currentUserId}`; // Endpoint on firebase
		let data = {
			email: userEmail,
			name: this.authState.displayName
		};

		this.db
			.object(path)
			.update(data)
			.catch(error => error);
	}

	navigateToPath(path) {
		this.router.navigate([path]);
	}
	/*   public getItemsList(): Observable<any> {
	 return this.store.collection('/users').snapshotChanges()
		return new Promise<any>((resolve, reject) => {
			this.store.collection('/users').snapshotChanges()
			.subscribe(snapshots => {
				resolve(snapshots)
			})
		})
	} */
}
