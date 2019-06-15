import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root"
})
export class AuthGuard {
  constructor(private afauth: AngularFireAuth, private router: Router) {}
  canActivate() {
    // Option 1:
    if (localStorage.getItem("user")) {
      return true;
    } else {
      this.router.navigate(["/"]);
      return false;
    }
    // Option 2:
    // return this.afauth.authState.pipe(
    //   map(auth => {
    //     if (auth == null) {
    //       this.router.navigate(['login']);
    //     }
    //     return auth != null;
    //   })
    // );
  }
}
