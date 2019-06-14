import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { User, IUser } from "../models/user.interface";
import { UserStorageService } from "./user-storage.service";
import * as firebase from "firebase/app";
import { Observable } from "rxjs";
@Injectable()
export class AuthService {
  authState: any = null;
  user: User;
  constructor(
    private afAuth: AngularFireAuth,
    // private db: AngularFireDatabase,
    private ngZone: NgZone,
    public userStorageService: UserStorageService,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(auth => {
      this.authState = auth;
    });
    this.checkLocalStorage();
  }
  /*
   * If localStoge is empty, we call getDataFromFirebase
   * method set user data from firebase on localStorage
   */
  checkLocalStorage() {
    if (!localStorage.getItem("user")) {
      this.getDataFromFirebase();
    } else {
      console.log("localStorage ready!");
    }
  }
  /*
   * Call data from firebase and set data on local storage
   */
  getDataFromFirebase() {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.user = auth; // save data firebase on user
        console.log("Authenticated");
        this.userStorageService.setUserLoggedIn(this.user); // set user data from firebase on local storage
      } else {
        console.log("Not authenticated");
      }
    });
  }
  /*
   * login with google
   */
  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth
      .signInWithPopup(provider)
      .then(data => {
        this.ngZone.run(() => this.router.navigate(["/"])).then();
      })
      .catch(error => {
        console.log(error);
      });
	// setCustomParameters host domain (hd)
	  
        provider.addScope('profile');
        provider.addScope('email');
/*         provider.setCustomParameters({
          'hd':'domain.edu.mx'
        }); */
        this.afAuth.auth.signInWithPopup(provider)
        .then((data)=>{
          this.router.navigate(['/']);
        })
        .catch((error)=>{
          console.log(error)
        });
  }
  /*
   * logout
   */
  logout() {
    this.userStorageService.clearLocalStorage(); // Optional to clear localStorage
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(["login"]);
    });
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
  get currentUserObservable(): Observable<IUser> {
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
    return this.socialSignIn(provider);
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
        return this.authState;
      })
      .catch(error => console.log(error));
  }

  //// Anonymous Auth ////

  anonymousLogin() {
    return this.afAuth.auth
      .signInAnonymously()
      .then(user => {
        this.authState = user;
        this.updateUserData();
      })
      .catch(error => console.log(error));
  }

  //// Email/Password Auth ////

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
        this.updateUserData();
      })
      .catch(error => console.log(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
        this.updateUserData();
      })
      .catch(error => console.log(error));
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    var auth = firebase.auth();

    return auth
      .sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch(error => console.log(error));
  }

  //// Sign Out ////

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(["/"]);
  }

  //// Helpers ////

  private updateUserData(): void {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features
    /*     let path = `users/${this.currentUserId}`; // Endpoint on firebase
    let data = {
                  email: this.authState.email,
                  name: this.authState.displayName
                }

    this.db.object(path).update(data)
    .catch(error => console.log(error)); */
  }
}
/* @Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  public googleLoginPromise() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      this.afAuth.auth.signInWithPopup(provider).then(res => {
        resolve(res);
      });
    });
  }
  public signOut() {
    return this.afAuth.auth.signOut();
  }

  public authState() {
    this.afAuth.authState.subscribe(auth => auth);
  }
}
 */
