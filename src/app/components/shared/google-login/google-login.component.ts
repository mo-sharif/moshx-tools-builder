import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IUser } from "../../../models/user.interface";

@Component({
	selector: "google-login",
	templateUrl: "./google-login.component.html"
})
export class GoogleLoginComponent implements OnInit {
	@Input()
	user: IUser;

	@Output()
	googleLoginEvent: EventEmitter<any> = new EventEmitter();

	@Output()
	logoutEvent: EventEmitter<any> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	googleLogin() {
		this.googleLoginEvent.emit();
	}

	logout() {
		this.logoutEvent.emit();
	}
}
