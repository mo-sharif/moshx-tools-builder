import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class AuthGuard {
	constructor(private authService: AuthService, private router: Router) {}
	canActivate() {
		return this.authService.currentUserObservable.pipe(
			map(auth => {
				if (auth == null) {
					this.router.navigate(["/home/not-allowed"]);
				}
				return auth != null;
			})
		);
	}
}
