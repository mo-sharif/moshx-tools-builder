import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IUser } from "src/app/models/user.interface";

@Component({
	selector: "github-login",
	templateUrl: "./github-login.component.html",
})
export class GithubLoginComponent implements OnInit {
	@Input()
  user: IUser;

	@Output()
	githubLoginEvent: EventEmitter<any> = new EventEmitter();

	@Output()
	logoutEvent: EventEmitter<any> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	githubLogin() {
		this.githubLoginEvent.emit();
	}

	logout() {
		this.logoutEvent.emit();
  }

}
