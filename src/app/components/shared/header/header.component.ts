import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { IConfig } from "../../../models/config.interface";
import { IUser } from "src/app/models/user.interface";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
	@Input()
  configs: IConfig;

	@Input()
  loggedInUser: IUser;

	@Output()
  openDrawer: EventEmitter<any> = new EventEmitter();

	@Output()
  logout: EventEmitter<any> = new EventEmitter();

	@Output()
	googleLogin: EventEmitter<any> = new EventEmitter();

	@Output()
	githubLogin: EventEmitter<any> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	openSideDrawer = () => {
		this.openDrawer.emit();
	};

	googleLoginClick = () => {
		this.googleLogin.emit();
  };
	githubLoginClick = () => {
		this.githubLogin.emit();
  };
  
	logoutClick = () => {
		this.logout.emit();
	};
}
